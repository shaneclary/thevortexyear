// Convert binary STL → indexed, simplified, normal-recomputed GLB
// Usage: node scripts/convert-stl-to-glb.mjs <input.stl> <output.glb> [targetTriangles]

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { MeshoptSimplifier } from "meshoptimizer";

const [, , inputArg, outputArg, targetArg] = process.argv;
if (!inputArg || !outputArg) {
  console.error(
    "Usage: node scripts/convert-stl-to-glb.mjs <input.stl> <output.glb> [targetTriangles]"
  );
  process.exit(1);
}

const inputPath = resolve(inputArg);
const outputPath = resolve(outputArg);
const targetTriangles = targetArg ? Number(targetArg) : 60000;

const buf = readFileSync(inputPath);
console.log(`STL size: ${(buf.length / 1024 / 1024).toFixed(2)} MB`);

// --- Parse binary STL ---
// 80 byte header, uint32 LE triangle count, then per-triangle: vec3 normal + 3*vec3 verts + uint16 attr
const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
const triCount = dv.getUint32(80, true);
const expectedSize = 80 + 4 + 50 * triCount;
if (buf.length !== expectedSize) {
  throw new Error(
    `Not a binary STL: file is ${buf.length} bytes, expected ${expectedSize} for ${triCount} triangles.`
  );
}
console.log(`Triangles in STL: ${triCount.toLocaleString()}`);

// --- Build dedup'd indexed mesh ---
// Quantize positions for dedup keys (6 decimals — well below STL's float32 precision noise)
const quant = (n) => Math.round(n * 1e5) / 1e5;
const vertMap = new Map();
const uniquePositions = [];
const indices = new Uint32Array(triCount * 3);

let offset = 84;
for (let i = 0; i < triCount; i += 1) {
  // skip 12 bytes of normal
  offset += 12;
  for (let v = 0; v < 3; v += 1) {
    const x = dv.getFloat32(offset, true);
    const y = dv.getFloat32(offset + 4, true);
    const z = dv.getFloat32(offset + 8, true);
    offset += 12;
    const key = `${quant(x)},${quant(y)},${quant(z)}`;
    let idx = vertMap.get(key);
    if (idx === undefined) {
      idx = uniquePositions.length / 3;
      uniquePositions.push(x, y, z);
      vertMap.set(key, idx);
    }
    indices[i * 3 + v] = idx;
  }
  offset += 2; // attribute byte count
}
const positions = new Float32Array(uniquePositions);
console.log(
  `After dedup: ${(positions.length / 3).toLocaleString()} unique vertices, ${(
    indices.length / 3
  ).toLocaleString()} triangles`
);

// --- Simplify with meshoptimizer ---
await MeshoptSimplifier.ready;
const targetIndexCount = Math.max(targetTriangles, 1) * 3;
const targetError = 0.05; // relative — meshopt scales this internally
const [simplifiedIndices, simplifyError] = MeshoptSimplifier.simplify(
  indices,
  positions,
  3,
  targetIndexCount,
  targetError,
  ["LockBorder"],
);
console.log(
  `Simplified to ${(simplifiedIndices.length / 3).toLocaleString()} triangles (error=${simplifyError.toFixed(4)})`
);

// Compact the mesh — rewrites indices and tells us which old vertices are kept.
// compactMesh returns [remap (oldIndex → newIndex, or 0xFFFFFFFF if unused), uniqueCount]
const remappedIndices = new Uint32Array(simplifiedIndices);
const [vertRemap, usedVertCount] = MeshoptSimplifier.compactMesh(remappedIndices);
const finalPositions = new Float32Array(usedVertCount * 3);
for (let oldIdx = 0; oldIdx < vertRemap.length; oldIdx += 1) {
  const newIdx = vertRemap[oldIdx];
  if (newIdx === 0xffffffff) continue;
  finalPositions[newIdx * 3] = positions[oldIdx * 3];
  finalPositions[newIdx * 3 + 1] = positions[oldIdx * 3 + 1];
  finalPositions[newIdx * 3 + 2] = positions[oldIdx * 3 + 2];
}
console.log(
  `Compacted: ${usedVertCount.toLocaleString()} vertices, ${(
    remappedIndices.length / 3
  ).toLocaleString()} triangles`,
);

// --- Recompute per-vertex normals ---
const finalNormals = new Float32Array(finalPositions.length);
for (let i = 0; i < remappedIndices.length; i += 3) {
  const ia = remappedIndices[i] * 3;
  const ib = remappedIndices[i + 1] * 3;
  const ic = remappedIndices[i + 2] * 3;
  const ax = finalPositions[ia], ay = finalPositions[ia + 1], az = finalPositions[ia + 2];
  const bx = finalPositions[ib], by = finalPositions[ib + 1], bz = finalPositions[ib + 2];
  const cx = finalPositions[ic], cy = finalPositions[ic + 1], cz = finalPositions[ic + 2];
  const e1x = bx - ax, e1y = by - ay, e1z = bz - az;
  const e2x = cx - ax, e2y = cy - ay, e2z = cz - az;
  const nx = e1y * e2z - e1z * e2y;
  const ny = e1z * e2x - e1x * e2z;
  const nz = e1x * e2y - e1y * e2x;
  finalNormals[ia] += nx; finalNormals[ia + 1] += ny; finalNormals[ia + 2] += nz;
  finalNormals[ib] += nx; finalNormals[ib + 1] += ny; finalNormals[ib + 2] += nz;
  finalNormals[ic] += nx; finalNormals[ic + 1] += ny; finalNormals[ic + 2] += nz;
}
for (let i = 0; i < finalNormals.length; i += 3) {
  const x = finalNormals[i], y = finalNormals[i + 1], z = finalNormals[i + 2];
  const len = Math.hypot(x, y, z) || 1;
  finalNormals[i] = x / len;
  finalNormals[i + 1] = y / len;
  finalNormals[i + 2] = z / len;
}

// --- Compute bounds ---
let minX = Infinity, minY = Infinity, minZ = Infinity;
let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
for (let i = 0; i < finalPositions.length; i += 3) {
  const x = finalPositions[i], y = finalPositions[i + 1], z = finalPositions[i + 2];
  if (x < minX) minX = x; if (y < minY) minY = y; if (z < minZ) minZ = z;
  if (x > maxX) maxX = x; if (y > maxY) maxY = y; if (z > maxZ) maxZ = z;
}

// --- Pack indices as Uint16 if possible ---
let indexBuffer, indexComponentType;
if (usedVertCount < 65536) {
  indexBuffer = new Uint16Array(remappedIndices);
  indexComponentType = 5123; // UNSIGNED_SHORT
} else {
  indexBuffer = remappedIndices; // Uint32
  indexComponentType = 5125; // UNSIGNED_INT
}

// --- Pad helper ---
const align = (n, a = 4) => (n + (a - 1)) & ~(a - 1);

// --- Build BIN chunk ---
const posBytes = new Uint8Array(finalPositions.buffer, finalPositions.byteOffset, finalPositions.byteLength);
const normBytes = new Uint8Array(finalNormals.buffer, finalNormals.byteOffset, finalNormals.byteLength);
const idxBytes = new Uint8Array(indexBuffer.buffer, indexBuffer.byteOffset, indexBuffer.byteLength);

const posOffset = 0;
const normOffset = align(posOffset + posBytes.length);
const idxOffset = align(normOffset + normBytes.length);
const binLen = align(idxOffset + idxBytes.length);
const bin = new Uint8Array(binLen);
bin.set(posBytes, posOffset);
bin.set(normBytes, normOffset);
bin.set(idxBytes, idxOffset);

// --- Build glTF JSON ---
const gltf = {
  asset: { version: "2.0", generator: "convert-stl-to-glb.mjs" },
  scene: 0,
  scenes: [{ nodes: [0] }],
  nodes: [{ mesh: 0 }],
  meshes: [
    {
      primitives: [
        {
          attributes: { POSITION: 0, NORMAL: 1 },
          indices: 2,
        },
      ],
    },
  ],
  buffers: [{ byteLength: bin.length }],
  bufferViews: [
    { buffer: 0, byteOffset: posOffset, byteLength: posBytes.length, target: 34962 },
    { buffer: 0, byteOffset: normOffset, byteLength: normBytes.length, target: 34962 },
    { buffer: 0, byteOffset: idxOffset, byteLength: idxBytes.length, target: 34963 },
  ],
  accessors: [
    {
      bufferView: 0,
      componentType: 5126,
      count: finalPositions.length / 3,
      type: "VEC3",
      min: [minX, minY, minZ],
      max: [maxX, maxY, maxZ],
    },
    {
      bufferView: 1,
      componentType: 5126,
      count: finalNormals.length / 3,
      type: "VEC3",
    },
    {
      bufferView: 2,
      componentType: indexComponentType,
      count: indexBuffer.length,
      type: "SCALAR",
    },
  ],
};

const jsonBytes = new TextEncoder().encode(JSON.stringify(gltf));
const jsonPad = align(jsonBytes.length) - jsonBytes.length;
const paddedJsonLen = jsonBytes.length + jsonPad;
const paddedJson = new Uint8Array(paddedJsonLen);
paddedJson.set(jsonBytes);
paddedJson.fill(0x20, jsonBytes.length); // pad JSON with spaces

const totalLen = 12 /* header */ + 8 /* json chunk header */ + paddedJsonLen + 8 /* bin chunk header */ + bin.length;
const out = new Uint8Array(totalLen);
const outDv = new DataView(out.buffer);
let p = 0;
// glTF header: magic, version, length
outDv.setUint32(p, 0x46546c67, true); p += 4; // "glTF"
outDv.setUint32(p, 2, true); p += 4;
outDv.setUint32(p, totalLen, true); p += 4;
// JSON chunk
outDv.setUint32(p, paddedJsonLen, true); p += 4;
outDv.setUint32(p, 0x4e4f534a, true); p += 4; // "JSON"
out.set(paddedJson, p); p += paddedJsonLen;
// BIN chunk
outDv.setUint32(p, bin.length, true); p += 4;
outDv.setUint32(p, 0x004e4942, true); p += 4; // "BIN\0"
out.set(bin, p);

writeFileSync(outputPath, Buffer.from(out));
console.log(`Wrote ${outputPath} — ${(out.length / 1024).toFixed(1)} KB`);
console.log(`Bounds: x[${minX.toFixed(2)}..${maxX.toFixed(2)}] y[${minY.toFixed(2)}..${maxY.toFixed(2)}] z[${minZ.toFixed(2)}..${maxZ.toFixed(2)}]`);
