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

const PAPER = '#FBFAF7'
const INK = '#12191F'
const SIGNAL = '#C8442A'
const SLATE = '#5B6770'

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

await sharp(Buffer.from(card))
  .composite([{ input: portrait, left: 708, top: 0 }])
  .png()
  .toFile(path.join(publicDir, 'og.png'))

const size = (f) => (fs.statSync(path.join(publicDir, f)).size / 1024).toFixed(1) + ' KB'
console.log('Images built:')
for (const f of ['profile.webp', 'profile.jpg', 'og.png']) console.log(`  public/${f.padEnd(14)} ${size(f)}`)
