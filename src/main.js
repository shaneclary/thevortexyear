import "../styles.css";
import {
  ACESFilmicToneMapping,
  AdditiveBlending,
  AmbientLight,
  Box3,
  DirectionalLight,
  DoubleSide,
  FogExp2,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import coilUrl from "/rodin-coil.glb?url";

const canvas = document.getElementById("vortex-canvas");
const hero = document.querySelector(".hero");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let renderer;
let scene;
let camera;
let coil;
let frameId;

function setStatus(state) {
  hero?.setAttribute("data-hero-state", state);
}

function hasWebGL() {
  try {
    const test = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (test.getContext("webgl2") || test.getContext("webgl"))
    );
  } catch {
    return false;
  }
}

if (!canvas) {
  setStatus("nocanvas");
} else if (!hasWebGL()) {
  setStatus("nowebgl");
} else {
  try {
    initHero();
  } catch (err) {
    console.error("Hero init failed:", err);
    setStatus("error");
  }
}

wirePaymentButtons();

function initHero() {
  renderer = new WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.8;

  scene = new Scene();
  scene.fog = new FogExp2(0x091013, 0.012);

  camera = new PerspectiveCamera(38, 1, 0.1, 1200);
  camera.position.set(0, 36, 285);

  addLights();
  addFallbackRing();
  loadCoil();

  setStatus("starting");

  const ro = new ResizeObserver(resizeRenderer);
  ro.observe(canvas);
  window.addEventListener("resize", resizeRenderer);
  resizeRenderer();
  animate();
}

function addLights() {
  scene.add(new AmbientLight(0xf4f1e9, 1.18));

  const key = new DirectionalLight(0xffd59a, 5.2);
  key.position.set(-90, 150, 220);
  scene.add(key);

  const rim = new DirectionalLight(0x90fff0, 3.4);
  rim.position.set(160, -30, -120);
  scene.add(rim);

  const core = new PointLight(0xffd189, 7.2, 760);
  core.position.set(82, 18, 112);
  scene.add(core);
}

function addFallbackRing() {
  // Plain ring of small spheres, visible while the coil GLB streams in,
  // and serves as a graceful visual if the GLB never arrives.
  const group = new Group();
  const material = new MeshStandardMaterial({
    color: 0xe29b5b,
    metalness: 0.34,
    roughness: 0.32,
    emissive: 0x6b351f,
    emissiveIntensity: 0.42,
  });
  const sphere = new SphereGeometry(2.2, 16, 12);
  const ringRadius = 70;
  const count = 64;
  for (let i = 0; i < count; i += 1) {
    const t = (i / count) * Math.PI * 2;
    const s = new Mesh(sphere, material);
    s.position.set(Math.cos(t) * ringRadius, 0, Math.sin(t) * ringRadius);
    group.add(s);
  }
  group.rotation.x = -0.94;
  group.position.set(82, 0, 0);
  group.userData.isFallback = true;
  coil = group;
  scene.add(coil);
}

function loadCoil() {
  const loader = new GLTFLoader();
  loader.load(
    coilUrl,
    (gltf) => {
      const mesh = gltf.scene.getObjectByProperty("isMesh", true);
      if (!mesh) {
        console.warn("Coil GLB had no mesh");
        setStatus("noMesh");
        return;
      }

      const geometry = mesh.geometry;
      geometry.computeVertexNormals();
      geometry.center();

      const box = new Box3().setFromBufferAttribute(geometry.attributes.position);
      const size = new Vector3();
      box.getSize(size);
      const largest = Math.max(size.x, size.y, size.z) || 1;
      const scale = 74 / largest;
      geometry.scale(scale, scale, scale);

      const material = new MeshBasicMaterial({
        color: 0xffc785,
        transparent: true,
        opacity: 0.14,
        side: DoubleSide,
        depthWrite: false,
      });
      const wireMaterial = new MeshBasicMaterial({
        color: 0xffdc9a,
        transparent: true,
        opacity: 0.68,
        wireframe: true,
        depthWrite: false,
        blending: AdditiveBlending,
      });

      if (coil) {
        scene.remove(coil);
        coil.traverse((obj) => {
          if (obj.geometry && obj.geometry !== geometry) obj.geometry.dispose?.();
          if (obj.material && obj.material !== material) {
            const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
            mats.forEach((m) => m.dispose?.());
          }
        });
      }

      const solid = new Mesh(geometry, material);
      const wire = new Mesh(geometry, wireMaterial);

      coil = new Group();
      coil.add(solid, wire);
      coil.rotation.x = -0.94;
      coil.rotation.z = 0.2;
      coil.position.set(82, 2, 0);
      scene.add(coil);
      resizeRenderer();
      setStatus("ready");
    },
    undefined,
    (error) => {
      console.error("Coil GLB failed to load", error);
      setStatus("loadError");
    },
  );
}

function resizeRenderer() {
  if (!renderer || !camera) return;
  const width = canvas.clientWidth || canvas.parentElement?.clientWidth || window.innerWidth;
  const height = canvas.clientHeight || canvas.parentElement?.clientHeight || window.innerHeight;
  if (width === 0 || height === 0) return;
  renderer.setSize(width, height, false);
  camera.aspect = width / Math.max(height, 1);
  camera.updateProjectionMatrix();

  const mobile = window.matchMedia("(max-width: 760px)").matches;
  if (mobile) {
    camera.position.set(0, 12, 210);
    if (coil) coil.position.set(0, 0, 0);
  } else {
    camera.position.set(0, 14, 250);
    if (coil) coil.position.set(82, 2, 0);
  }
}

function animate(time = 0) {
  const t = reducedMotion ? 0 : time * 0.001;

  if (coil) {
    coil.rotation.z = 0.2 + t * 0.06;
    coil.rotation.y = Math.sin(t * 0.18) * 0.07;
  }

  renderer.render(scene, camera);
  frameId = requestAnimationFrame(animate);
}

function wirePaymentButtons() {
  document.querySelectorAll("[data-payment-url]").forEach((button) => {
    const paymentUrl = button.dataset.paymentUrl?.trim();
    if (paymentUrl) {
      button.href = paymentUrl;
    }
  });
}

window.addEventListener("beforeunload", () => {
  if (frameId) cancelAnimationFrame(frameId);
});
