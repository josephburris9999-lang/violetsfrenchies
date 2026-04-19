/**
 * Builds public/logo-mark.png from public/logo.png:
 * upscale → tight left scan for Frenchie pixels only → square + margin → 128px PNG.
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const srcPath = join(root, "public", "logo.png");
const outPath = join(root, "public", "logo-mark.png");

const UPSCALE_W = 1200;
/** Foreground scan stops here so serif “V” is excluded (tune if asset changes) */
const TIGHT_X_FRAC = 0.198;
const BG_THRESH = 28;
const OUT_SIZE = 128;
const MARGIN_FRAC = 0.12;

async function main() {
  const buf = await sharp(srcPath)
    .resize(UPSCALE_W, null, { kernel: sharp.kernel.cubic })
    .png()
    .toBuffer();

  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({
    resolveWithObject: true,
  });
  const w = info.width;
  const h = info.height;
  const ch = info.channels;
  const idx = (x, y) => (y * w + x) * ch;

  let br = 0,
    bg = 0,
    bb = 0,
    cnt = 0;
  const sample = (x, y) => {
    const i = idx(x, y);
    br += data[i];
    bg += data[i + 1];
    bb += data[i + 2];
    cnt++;
  };
  for (let x = 0; x < w; x++) {
    sample(x, 0);
    sample(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    sample(0, y);
    sample(w - 1, y);
  }
  br /= cnt;
  bg /= cnt;
  bb /= cnt;

  const dist = (x, y) => {
    const i = idx(x, y);
    return (
      Math.abs(data[i] - br) +
      Math.abs(data[i + 1] - bg) +
      Math.abs(data[i + 2] - bb)
    );
  };

  const fg = (x, y) => {
    const i = idx(x, y);
    return dist(x, y) > BG_THRESH || data[i] < 115;
  };

  const tightMaxX = Math.min(w - 1, Math.floor(w * TIGHT_X_FRAC));

  let minX = w,
    minY = h,
    maxX = 0,
    maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x <= tightMaxX; x++) {
      if (!fg(x, y)) continue;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }

  if (minX > maxX) {
    throw new Error("Could not detect Frenchie; check public/logo.png.");
  }

  const bw = maxX - minX + 1;
  const bh = maxY - minY + 1;
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const margin = Math.max(8, Math.round(MARGIN_FRAC * Math.max(bw, bh)));
  let side = Math.max(bw, bh) + 2 * margin;
  side = Math.min(side, w, h);

  let sx = Math.round(cx - side / 2);
  let sy = Math.round(cy - side / 2);
  /** Keep crop rectangle inside image and fully left of any wordmark pixels */
  const maxRight = Math.min(w, tightMaxX + margin + 2);
  if (sx + side > maxRight) sx = maxRight - side;
  sx = Math.max(0, sx);
  sy = Math.max(0, Math.min(sy, h - side));

  await sharp(buf)
    .extract({ left: sx, top: sy, width: side, height: side })
    .resize(OUT_SIZE, OUT_SIZE, { fit: "fill" })
    .png({
      palette: true,
      colors: 256,
      quality: 95,
      compressionLevel: 9,
    })
    .toFile(outPath);

  console.log("Wrote", outPath, {
    upscale: `${w}x${h}`,
    tightMaxX,
    dogBox: { minX, minY, maxX, maxY },
    crop: { sx, sy, side },
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
