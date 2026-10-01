/**
 * Converts every raster in public/images to WebP (capped resolution) and
 * re-encodes the oversized rasters embedded inside SVGs.
 * Originals are removed once converted - run `npm run optimize:images`
 * after dropping new artwork into public/images.
 */
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const IMG = path.join(process.cwd(), 'public/images');

// max width by role
const WIDE = [
  'hero.jpg', 'hero.png',
  'about/image-one.png', 'about/image-two.jpg', 'about/image-three.jpg',
  'footer/image-gride-frame.png',
  'events/events-hero.jpg',
];
const maxWidthFor = (rel) => (WIDE.includes(rel) ? 2400 : 1200);

async function walk(dir) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const report = { raster: [], svg: [], skipped: [] };

const files = await walk(IMG);

// ---- 1. rasters -> webp ----
for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
  const rel = path.relative(IMG, file);
  const before = (await fs.stat(file)).size;
  const out = file.slice(0, -ext.length) + '.webp';
  const img = sharp(file, { failOn: 'none' });
  const meta = await img.metadata();
  const max = maxWidthFor(rel);
  try {
    await img
      .rotate()
      .resize({ width: Math.min(meta.width ?? max, max), withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 })
      .toFile(out);
    const after = (await fs.stat(out)).size;
    report.raster.push({ rel, out: path.relative(IMG, out), before, after });
    await fs.unlink(file);
  } catch (err) {
    report.skipped.push({ rel, err: String(err) });
  }
}

// ---- 2. SVGs with embedded base64 rasters ----
const B64 = /data:image\/(png|jpe?g);base64,([A-Za-z0-9+/=\s]+)/g;
for (const file of files) {
  if (path.extname(file).toLowerCase() !== '.svg') continue;
  const before = (await fs.stat(file)).size;
  if (before < 50_000) continue;
  let svg = await fs.readFile(file, 'utf8');
  const matches = [...svg.matchAll(B64)];
  if (!matches.length) continue;
  // intrinsic size of the svg, to cap embedded raster resolution (2x for retina)
  const w = Number(/\swidth="(\d+(?:\.\d+)?)"/.exec(svg)?.[1] ?? 0);
  const cap = Math.max(2 * (w || 600), 256);
  for (const m of matches) {
    const buf = Buffer.from(m[2].replace(/\s/g, ''), 'base64');
    try {
      const meta = await sharp(buf).metadata();
      const re = await sharp(buf)
        .resize({ width: Math.min(meta.width ?? cap, cap), withoutEnlargement: true })
        .webp({ quality: 80, effort: 5 })
        .toBuffer();
      svg = svg.replace(m[0], `data:image/webp;base64,${re.toString('base64')}`);
    } catch { /* leave as-is */ }
  }
  await fs.writeFile(file, svg);
  const after = (await fs.stat(file)).size;
  report.svg.push({ rel: path.relative(IMG, file), before, after });
}

const kb = (n) => (n / 1024).toFixed(0) + 'K';
console.log('--- rasters -> webp ---');
for (const r of report.raster.sort((a, b) => b.before - a.before))
  console.log(`${r.rel.padEnd(45)} ${kb(r.before).padStart(8)} -> ${kb(r.after).padStart(8)}`);
console.log('--- svg (embedded rasters re-encoded) ---');
for (const r of report.svg) console.log(`${r.rel.padEnd(45)} ${kb(r.before).padStart(8)} -> ${kb(r.after).padStart(8)}`);
if (report.skipped.length) console.log('--- skipped ---', report.skipped);
