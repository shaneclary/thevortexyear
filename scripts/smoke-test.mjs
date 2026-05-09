import puppeteer from "puppeteer";

const url = process.argv[2] || "http://localhost:4173/";
const browser = await puppeteer.launch({
  headless: true,
  args: [
    "--enable-webgl",
    "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader",
    "--ignore-gpu-blocklist",
    "--no-sandbox",
  ],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

const consoleEntries = [];
page.on("console", (msg) => consoleEntries.push(`${msg.type()}: ${msg.text()}`));
page.on("pageerror", (err) => consoleEntries.push(`pageerror: ${err.message}`));
page.on("requestfailed", (req) => consoleEntries.push(`requestfailed: ${req.url()} -- ${req.failure()?.errorText}`));

const start = Date.now();
await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

// Wait up to 12 s for hero state to become "ready" or an error state.
const finalState = await page
  .waitForFunction(
    () => {
      const hero = document.querySelector(".hero");
      const s = hero?.getAttribute("data-hero-state");
      return ["ready", "loadError", "noMesh", "error", "nowebgl"].includes(s) ? s : null;
    },
    { timeout: 12000 },
  )
  .then((h) => h.jsonValue())
  .catch(() => "timeout");

const sceneStats = await page.evaluate(() => {
  const canvas = document.getElementById("vortex-canvas");
  return {
    canvasWidth: canvas?.width,
    canvasHeight: canvas?.height,
    canvasClientW: canvas?.clientWidth,
    canvasClientH: canvas?.clientHeight,
    heroState: document.querySelector(".hero")?.getAttribute("data-hero-state"),
  };
});

// Sample a few pixels from the canvas to confirm something painted there.
const canvasPixels = await page.evaluate(() => {
  const canvas = document.getElementById("vortex-canvas");
  if (!canvas) return null;
  // Render canvas to 2D snapshot via offscreen
  const tmp = document.createElement("canvas");
  tmp.width = canvas.width;
  tmp.height = canvas.height;
  const ctx = tmp.getContext("2d");
  try {
    ctx.drawImage(canvas, 0, 0);
    const data = ctx.getImageData(0, 0, tmp.width, tmp.height).data;
    let nonZero = 0;
    let total = 0;
    let sumR = 0, sumG = 0, sumB = 0, sumA = 0;
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
      if (r !== 0 || g !== 0 || b !== 0 || a !== 0) nonZero += 1;
      sumR += r; sumG += g; sumB += b; sumA += a;
      total += 1;
    }
    return {
      nonZeroPixels: nonZero,
      totalPixels: total,
      avgR: sumR / total | 0,
      avgG: sumG / total | 0,
      avgB: sumB / total | 0,
      avgA: sumA / total | 0,
    };
  } catch (e) {
    return { error: e.message };
  }
});

// Settle a couple of frames before screenshotting so animated bits have time to paint.
await new Promise((r) => setTimeout(r, 1500));
await page.screenshot({ path: "scripts/smoke.png", fullPage: false });
console.log("URL:", url);
console.log("Took:", Date.now() - start, "ms");
console.log("Final state:", finalState);
console.log("Stats:", sceneStats);
console.log("Canvas pixels:", canvasPixels);
console.log("Console:");
for (const line of consoleEntries) console.log(" ", line);

await browser.close();
