// Regenerate responsive case-study media from the retained original assets.
// Run from the repository root: node tools/optimize-case-media.mjs
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import sharp from 'sharp';

const studies = ['beautech', 'dreamers'];
const manifest = { images: {}, videos: {} };
const run = (command, args) => {
  const result = spawnSync(command, args, { encoding: 'utf8' });
  if (result.status !== 0) throw new Error(result.stderr || `${command} failed`);
  return result.stdout;
};
for (const study of studies) {
  // The original URLs are retained in the HTML as data-original attributes.
  const html = await fs.readFile(`public/${study}.html`, 'utf8');
  const sources = [...new Set([...html.matchAll(/(?:src|poster|data-original|data-original-poster)="([^"#]+\.(?:png|jpg|mp4))"|url\("([^"#]+\.png)"\)/g)].map(match => match[1] || match[2]))].filter(source => !source.startsWith('/case-media/'));
  if (study === 'beautech' && !sources.includes('beautech/website-video-background.png')) sources.push('beautech/website-video-background.png');
  const directory = `public/case-media/${study}`;
  await fs.mkdir(directory, { recursive: true });
  for (const source of sources) {
    const input = `public/${source}`;
    const stem = path.parse(source).name;
    if (!source.endsWith('.mp4')) {
      const { width } = await sharp(input).metadata();
      const widths = [...new Set([640, 1280, 1920, 2560, width].filter(value => value <= width))].sort((a, b) => a - b);
      manifest.images[source] = [];
      for (const width of widths) {
        const output = `${directory}/${stem}-${width}.webp`;
        const result = await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 88, alphaQuality: 100, effort: 5 }).toFile(output);
        manifest.images[source].push({ width, src: '/' + output.slice(7), bytes: result.size });
      }
      continue;
    }
    const probe = JSON.parse(run('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'json', input]));
    const originalWidth = probe.streams[0].width;
    manifest.videos[source] = {};
    for (const variant of ['desktop', 'mobile']) {
      const width = variant === 'mobile' ? Math.min(960, originalWidth) : originalWidth;
      const output = `${directory}/${stem}-${variant}.mp4`;
      run('ffmpeg', ['-y', '-v', 'error', '-i', input, '-map', '0:v:0', '-an', '-vf', `scale=${width}:-2`, '-c:v', 'libx264', '-preset', 'slow', '-crf', '20', '-pix_fmt', 'yuv420p', '-g', '60', '-movflags', '+faststart', '-threads', '2', output]);
      // Keep the original encoding if recompression cannot improve its size.
      if ((await fs.stat(output)).size >= (await fs.stat(input)).size && width === originalWidth) {
        run('ffmpeg', ['-y', '-v', 'error', '-i', input, '-map', '0:v:0', '-an', '-c:v', 'copy', '-movflags', '+faststart', output]);
      }
      manifest.videos[source][variant] = { src: '/' + output.slice(7), bytes: (await fs.stat(output)).size, width };
    }
    console.log(source, manifest.videos[source]);
  }
}
await fs.mkdir('.tmp/case-performance', { recursive: true });
await fs.writeFile('.tmp/case-performance/media-manifest.json', JSON.stringify(manifest, null, 2));
console.log('Responsive media generated. Manifest: .tmp/case-performance/media-manifest.json');
