/**
 * Derives the web-ready images from assets/profile.png. The original is a 4.9 MB
 * PNG and deliberately lives outside public/ so it is never served to a visitor.
 * Run with `npm run images`.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = path.join(root, 'public')
const source = path.join(root, 'assets', 'profile.png')

const resume = JSON.parse(fs.readFileSync(path.join(root, 'data', 'resume.json'), 'utf8'))
const { basics } = resume

const PAPER = '#F9F7F7'
const INK = '#112D4E'
const SIGNAL = '#36649C'
const SLATE = '#52667D'

await sharp(source).resize({ width: 760 }).webp({ quality: 82 }).toFile(path.join(publicDir, 'profile.webp'))
await sharp(source).resize({ width: 760 }).jpeg({ quality: 84, mozjpeg: true }).toFile(path.join(publicDir, 'profile.jpg'))

/* Social card: portrait on the right, type on the left, same palette as the site. */
const portrait = await sharp(source)
  .resize({ width: 420, height: 630, fit: 'cover', position: 'top' })
  .toBuffer()

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const card = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect x="0" y="0" width="1200" height="8" fill="${SIGNAL}"/>
  <text x="72" y="150" font-family="DejaVu Sans, Helvetica, Arial, sans-serif" font-size="26" font-weight="600"
        letter-spacing="3" fill="${SIGNAL}">${escape(basics.eyebrow.toUpperCase())}</text>
  <text x="72" y="272" font-family="DejaVu Sans, Helvetica, Arial, sans-serif" font-size="98" font-weight="700"
        letter-spacing="-2" fill="${INK}">Amer</text>
  <text x="72" y="372" font-family="DejaVu Sans, Helvetica, Arial, sans-serif" font-size="98" font-weight="700"
        letter-spacing="-2" fill="${INK}">Hamdan</text>
  <text x="72" y="450" font-family="DejaVu Sans, Helvetica, Arial, sans-serif" font-size="27" fill="${SLATE}">Ten years rebuilding production web systems.</text>
  <text x="72" y="492" font-family="DejaVu Sans, Helvetica, Arial, sans-serif" font-size="27" fill="${SLATE}">News platforms, hiring marketplaces, SaaS.</text>
  <text x="72" y="576" font-family="DejaVu Sans, Helvetica, Arial, sans-serif" font-size="24" letter-spacing="2"
        fill="${INK}">amerhamdan.com</text>
</svg>`

// JPEG, not PNG. WhatsApp silently drops a link thumbnail when the image is
// much over ~300 KB, and the PNG of this card was 407 KB — which is exactly why
// no preview image appeared. The same artwork as JPEG lands around 100 KB.
await sharp(Buffer.from(card))
  .composite([{ input: portrait, left: 708, top: 0 }])
  .jpeg({ quality: 86, mozjpeg: true, chromaSubsampling: '4:4:4' })
  .toFile(path.join(publicDir, 'og.jpg'))

/* Favicons ---------------------------------------------------------------- */

const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512">
  <rect width="64" height="64" fill="${INK}"/>
  <text x="32" y="43.5" font-family="DejaVu Sans, Helvetica, Arial, sans-serif" font-size="30"
        font-weight="700" letter-spacing="-1.2" fill="${PAPER}" text-anchor="middle">AH</text>
</svg>`

const markPng = (px) => sharp(Buffer.from(mark)).resize(px, px).png({ compressionLevel: 9 }).toBuffer()

/**
 * Minimal ICO writer — sharp has no .ico encoder. An ICO is a 6-byte header, a
 * 16-byte directory entry per image, then the payloads; PNG payloads are valid
 * and understood everywhere that matters.
 */
function buildIco(images) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(images.length, 4)

  let offset = 6 + 16 * images.length
  const entries = images.map(({ px, buf }) => {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(px >= 256 ? 0 : px, 0)
    entry.writeUInt8(px >= 256 ? 0 : px, 1)
    entry.writeUInt16LE(1, 4)
    entry.writeUInt16LE(32, 6)
    entry.writeUInt32LE(buf.length, 8)
    entry.writeUInt32LE(offset, 12)
    offset += buf.length
    return entry
  })

  return Buffer.concat([header, ...entries, ...images.map((i) => i.buf)])
}

const icoSizes = [16, 32, 48]
const icoImages = await Promise.all(icoSizes.map(async (px) => ({ px, buf: await markPng(px) })))
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), buildIco(icoImages))

fs.writeFileSync(
  path.join(publicDir, 'icon.svg'),
  mark.replace(' width="512" height="512"', '').replace('DejaVu Sans, ', '')
)
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), await markPng(180))
fs.writeFileSync(path.join(publicDir, 'icon-192.png'), await markPng(192))
fs.writeFileSync(path.join(publicDir, 'icon-512.png'), await markPng(512))

const size = (f) => (fs.statSync(path.join(publicDir, f)).size / 1024).toFixed(1) + ' KB'
console.log('Images built:')
for (const f of [
  'profile.webp',
  'profile.jpg',
  'og.jpg',
  'favicon.ico',
  'icon.svg',
  'apple-touch-icon.png',
  'icon-192.png',
  'icon-512.png',
]) {
  console.log(`  public/${f.padEnd(22)} ${size(f)}`)
}
