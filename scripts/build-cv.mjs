/**
 * Builds every downloadable form of the CV from data/resume.json:
 *
 *   public/Amer-Hamdan-CV.pdf   single column, real text layer, ATS-safe
 *   public/Amer-Hamdan-CV.txt   unstyled plain text
 *   public/cv.json              JSON Resume schema v1.0.0
 *   public/llms.txt             short brief for AI agents reading the site
 *
 * Run with `npm run cv`. Edit data/resume.json, never these outputs.
 *
 * Note on naming: `next build` with output:'export' writes an RSC payload to
 * out/<route>.txt for every route, which silently overwrites a same-named file
 * from public/. That is why the plain-text CV is not called cv.txt — the /cv
 * route would clobber it. assertNoRouteCollision() below keeps that honest.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import PDFDocument from 'pdfkit'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = path.join(root, 'public')
const resume = JSON.parse(fs.readFileSync(path.join(root, 'data', 'resume.json'), 'utf8'))

const { basics, work, projects, skills, languages } = resume
const featured = work.filter((w) => w.featured)
const earlier = work.filter((w) => !w.featured)

/* ── design tokens, matched to the site ─────────────────────────────────── */
const INK = '#112D4E'
const SLATE = '#52667D'
const RULE = '#BDC7D7'
const SIGNAL = '#36649C'

const PDF_FILE = 'Amer-Hamdan-CV.pdf'
const TXT_FILE = 'Amer-Hamdan-CV.txt'

// The PDF is held to two pages: a third page carrying only a few lines reads
// worse than a full second one. The site and the text version carry everything.
const PROJECTS_IN_PDF = 4
const EARLIER_BULLETS_IN_PDF = 1

const PAGE = { size: 'A4', margin: 46 }
const WIDTH = 595.28 - PAGE.margin * 2
const BOTTOM = 841.89 - PAGE.margin - 22 // leave room for the footer line

const period = (w) => `${w.startYear} — ${w.endDate ? w.endYear : 'Present'}`

/* ── PDF ────────────────────────────────────────────────────────────────── */

function buildPdf() {
  const doc = new PDFDocument({
    size: PAGE.size,
    margin: PAGE.margin,
    bufferPages: true,
    pdfVersion: '1.7',
    lang: 'en',
    displayTitle: true,
    info: {
      Title: `${basics.name} — ${basics.label}`,
      Author: basics.name,
      Subject: basics.headline,
      Keywords: [
        ...skills.flatMap((s) => s.keywords),
        ...work.map((w) => w.position),
      ].join(', '),
      Creator: basics.url,
      Producer: basics.url,
    },
  })

  const out = fs.createWriteStream(path.join(publicDir, PDF_FILE))
  doc.pipe(out)

  const left = PAGE.margin

  /** Start a new page when the next block would not fit. */
  const room = (needed) => {
    if (doc.y + needed > BOTTOM) {
      doc.addPage()
      doc.y = PAGE.margin
    }
  }

  const rule = (color = RULE, y = doc.y) => {
    doc.moveTo(left, y).lineTo(left + WIDTH, y).lineWidth(0.6).strokeColor(color).stroke()
  }

  // Keep characterSpacing tiny. Anything much above ~5% of the font size makes
  // text extractors insert spaces between letters, and an ATS then fails to
  // match the section name. "S U M M A R Y" is not a heading it recognises.
  const heading = (text) => {
    room(46)
    doc.moveDown(0.85)
    doc
      .font('Helvetica-Bold')
      .fontSize(8.5)
      .fillColor(SIGNAL)
      .text(text.toUpperCase(), left, doc.y, { width: WIDTH, characterSpacing: 0.35 })
    doc.moveDown(0.35)
    rule()
    doc.moveDown(0.55)
  }

  const para = (text, opts = {}) => {
    const { font = 'Helvetica', size = 9.5, color = INK, gap = 1.6, width = WIDTH, x = left } = opts
    doc.font(font).fontSize(size).fillColor(color)
    const h = doc.heightOfString(text, { width, lineGap: gap })
    room(h)
    doc.text(text, x, doc.y, { width, lineGap: gap, ...(opts.link ? { link: opts.link } : {}) })
  }

  const bullet = (text) => {
    const indent = 11
    doc.font('Helvetica').fontSize(9.5).fillColor(INK)
    const h = doc.heightOfString(text, { width: WIDTH - indent, lineGap: 1.6 })
    room(h + 2)
    const y = doc.y
    doc.font('Helvetica').fontSize(9.5).fillColor(SIGNAL).text('•', left, y, { width: indent })
    doc
      .font('Helvetica')
      .fontSize(9.5)
      .fillColor(INK)
      .text(text, left + indent, y, { width: WIDTH - indent, lineGap: 1.6 })
    doc.y = y + h + 1.5
  }

  /* header ---------------------------------------------------------------- */
  doc.y = PAGE.margin
  doc
    .font('Helvetica-Bold')
    .fontSize(25)
    .fillColor(INK)
    .text(basics.name.toUpperCase(), left, doc.y, { width: WIDTH, characterSpacing: 0.6 })

  doc.moveDown(0.28)
  doc
    .font('Helvetica-Bold')
    .fontSize(9.5)
    .fillColor(SIGNAL)
    .text(basics.headline, left, doc.y, { width: WIDTH, characterSpacing: 0.5 })

  doc.moveDown(0.6)

  // Contact details on two deliberate lines — how to reach him, then where to
  // read more. All six on one line only fits by shrinking the type below 7pt,
  // which is too small to be worth it; two lines at a legible size is better.
  const SEP = '   ·   '
  const contactLines = [
    [
      { text: basics.email, link: `mailto:${basics.email}` },
      { text: basics.phone, link: `tel:${basics.phoneRaw}` },
      { text: `${basics.location.city}, ${basics.location.country}`, link: null },
    ],
    [
      { text: 'amerhamdan.com', link: basics.url },
      { text: 'github.com/amerhamdan3', link: 'https://github.com/amerhamdan3' },
      { text: 'linkedin.com/in/amerhamdan3', link: 'https://www.linkedin.com/in/amerhamdan3/' },
    ],
  ]

  // A `continued` run does not reliably leave doc.y past the line it drew, so
  // each line is placed at an explicit y and the cursor advanced by hand.
  contactLines.forEach((line) => {
    doc.font('Helvetica').fontSize(8.6).fillColor(SLATE)
    const y = doc.y
    line.forEach((seg, i) => {
      const opts = { continued: true, ...(seg.link ? { link: seg.link } : { link: null }) }
      // Only the first segment positions itself; the rest ride the continued
      // flow, or each one resets x and they stack on top of each other.
      if (i === 0) doc.text(seg.text, left, y, { ...opts, width: WIDTH })
      else doc.text(seg.text, opts)
      if (i < line.length - 1) {
        doc.fillColor(RULE).text(SEP, { continued: true, link: null }).fillColor(SLATE)
      } else {
        doc.text('', { link: null })
      }
    })
    doc.y = y + doc.currentLineHeight() + 1.5
  })

  doc.moveDown(0.55)
  doc
    .font('Helvetica-Oblique')
    .fontSize(8.6)
    .fillColor(INK)
    .text(basics.availability, left, doc.y, { width: WIDTH })

  doc.moveDown(0.7)
  rule(SIGNAL)

  /* summary --------------------------------------------------------------- */
  heading('Summary')
  para(basics.summary, { size: 9.5, gap: 2 })

  /* experience ------------------------------------------------------------ */
  heading('Experience')
  featured.forEach((w, i) => {
    room(64)
    if (i > 0) doc.moveDown(0.7)
    doc
      .font('Helvetica-Bold')
      .fontSize(11)
      .fillColor(INK)
      .text(w.position, left, doc.y, { width: WIDTH })
    doc.moveDown(0.12)
    doc
      .font('Helvetica')
      .fontSize(9)
      .fillColor(SLATE)
      .text(`${w.name}  ·  ${w.location}  ·  ${period(w)}`, left, doc.y, { width: WIDTH })
    doc.moveDown(0.4)
    w.highlights.forEach(bullet)
  })

  /* earlier experience ---------------------------------------------------- */
  heading('Earlier experience')
  earlier.forEach((w, i) => {
    room(34)
    if (i > 0) doc.moveDown(0.45)
    doc
      .font('Helvetica-Bold')
      .fontSize(9.5)
      .fillColor(INK)
      .text(`${w.position}, ${w.name}`, left, doc.y, { width: WIDTH, continued: true })
    doc
      .font('Helvetica')
      .fontSize(9)
      .fillColor(SLATE)
      .text(`  ·  ${w.location}  ·  ${period(w)}`)
    doc.moveDown(0.2)
    w.highlights.slice(0, EARLIER_BULLETS_IN_PDF).forEach(bullet)
  })

  /* selected projects ----------------------------------------------------- */
  heading('Selected projects')
  projects.slice(0, PROJECTS_IN_PDF).forEach((p, i) => {
    room(40)
    if (i > 0) doc.moveDown(0.45)
    doc
      .font('Helvetica-Bold')
      .fontSize(9.5)
      .fillColor(INK)
      .text(p.name, left, doc.y, { width: WIDTH, continued: true, ...(p.url ? { link: p.url } : {}) })
    const meta = [p.org === p.name ? null : p.org, p.period, p.outcome].filter(Boolean)
    doc
      .font('Helvetica')
      .fontSize(9)
      .fillColor(SLATE)
      .text(`  ·  ${meta.join('  ·  ')}`, { link: null })
    doc.moveDown(0.18)
    para(`${p.description} Stack: ${p.keywords.join(', ')}.`, { size: 9, color: INK })
  })

  /* skills ---------------------------------------------------------------- */
  heading('Skills')
  // One flowing paragraph per group, so wrapped lines return to the left margin
  // instead of hanging under the label.
  skills.forEach((group, i) => {
    room(26)
    if (i > 0) doc.moveDown(0.32)
    doc
      .font('Helvetica-Bold')
      .fontSize(9.5)
      .fillColor(INK)
      .text(`${group.name}:  `, left, doc.y, { width: WIDTH, continued: true, lineGap: 1.6 })
    doc.font('Helvetica').fontSize(9.5).fillColor(INK).text(group.keywords.join(', '), { lineGap: 1.6 })
  })

  /* languages ------------------------------------------------------------- */
  // Spoken languages ride along as a final Skills row instead of taking their
  // own heading. That heading and its rule were the whole reason the CV spilled
  // onto a third page.
  room(26)
  doc.moveDown(0.32)
  doc
    .font('Helvetica-Bold')
    .fontSize(9.5)
    .fillColor(INK)
    .text('Spoken languages:  ', left, doc.y, { width: WIDTH, continued: true, lineGap: 1.6 })
  doc
    .font('Helvetica')
    .fontSize(9.5)
    .fillColor(INK)
    .text(languages.map((l) => `${l.language} (${l.fluency})`).join(', '), { lineGap: 1.6 })

  /* footers --------------------------------------------------------------- */
  const range = doc.bufferedPageRange()
  for (let i = 0; i < range.count; i++) {
    doc.switchToPage(range.start + i)
    // Drawing below the bottom margin would make pdfkit append a fresh page,
    // so drop the margin for the duration of the footer.
    doc.page.margins.bottom = 0
    const y = 841.89 - PAGE.margin + 4
    doc.moveTo(left, y - 8).lineTo(left + WIDTH, y - 8).lineWidth(0.6).strokeColor(RULE).stroke()
    doc.font('Helvetica').fontSize(7.5).fillColor(SLATE)
    doc.text(`${basics.name}  ·  ${basics.email}  ·  ${basics.url}`, left, y, {
      width: WIDTH / 2,
      lineBreak: false,
    })
    doc.text(`Page ${i + 1} of ${range.count}`, left + WIDTH / 2, y, {
      width: WIDTH / 2,
      align: 'right',
      lineBreak: false,
    })
  }

  doc.flushPages()
  doc.end()
  return new Promise((resolve, reject) => {
    out.on('finish', resolve)
    out.on('error', reject)
  })
}

/* ── JSON Resume (schema v1.0.0) ────────────────────────────────────────── */

function buildJson() {
  const jsonResume = {
    $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
    basics: {
      name: basics.name,
      label: basics.headline,
      image: basics.image,
      email: basics.email,
      phone: basics.phone,
      url: basics.url,
      summary: basics.summary,
      location: {
        city: basics.location.city,
        region: basics.location.region,
        countryCode: basics.location.countryCode,
      },
      profiles: basics.profiles.map((p) => ({
        network: p.network,
        username: p.username,
        url: p.url,
      })),
    },
    work: work.map((w) => ({
      name: w.name,
      position: w.position,
      location: w.location,
      url: w.url,
      startDate: w.startDate,
      ...(w.endDate ? { endDate: w.endDate } : {}),
      summary: w.summary,
      highlights: w.highlights,
    })),
    projects: projects.map((p) => ({
      name: p.name,
      description: p.description,
      highlights: [p.outcome, ...p.highlights],
      keywords: p.keywords,
      url: p.url,
      entity: p.org,
      type: 'application',
    })),
    skills: skills.map((s) => ({ name: s.name, keywords: s.keywords })),
    languages,
    meta: {
      canonical: `${basics.url}/cv.json`,
      version: 'v1.0.0',
      lastModified: new Date().toISOString().slice(0, 10),
    },
  }
  fs.writeFileSync(path.join(publicDir, 'cv.json'), JSON.stringify(jsonResume, null, 2) + '\n')
}

/* ── plain text ─────────────────────────────────────────────────────────── */

function buildTxt() {
  const L = []
  const section = (t) => {
    L.push('', t.toUpperCase(), '='.repeat(t.length))
  }

  L.push(basics.name.toUpperCase())
  L.push(basics.headline)
  L.push(
    [
      basics.email,
      basics.phone,
      `${basics.location.city}, ${basics.location.country}`,
      basics.url,
      'github.com/amerhamdan3',
      'linkedin.com/in/amerhamdan3',
    ].join(' | ')
  )

  section('Summary')
  L.push(basics.summary)

  section('Experience')
  work.forEach((w) => {
    L.push('')
    L.push(`${w.position}`)
    L.push(`${w.name} | ${w.location} | ${period(w)}`)
    w.highlights.forEach((h) => L.push(`- ${h}`))
  })

  section('Selected projects')
  projects.forEach((p) => {
    L.push('')
    L.push(`${p.name} (${p.org}, ${p.period}) — ${p.outcome}`)
    L.push(p.description)
    L.push(`Stack: ${p.keywords.join(', ')}`)
  })

  section('Skills')
  skills.forEach((s) => L.push(`${s.name}: ${s.keywords.join(', ')}`))

  section('Languages')
  languages.forEach((l) => L.push(`${l.language}: ${l.fluency}`))

  fs.writeFileSync(path.join(publicDir, TXT_FILE), L.join('\n') + '\n')
}

/**
 * A file in public/ named <route>.txt is destroyed by the static export without
 * any warning. Fail the build instead of shipping React internals in place of
 * the CV.
 */
function assertNoRouteCollision() {
  const appDir = path.join(root, 'app')
  const routes = fs
    .readdirSync(appDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith('_'))
    .map((entry) => entry.name)

  for (const file of ['index', ...routes].map((route) => `${route}.txt`)) {
    if (fs.existsSync(path.join(publicDir, file))) {
      throw new Error(
        `public/${file} collides with the RSC payload the static export writes for that route. ` +
          `Rename it — the export would overwrite it and nobody would notice.`
      )
    }
  }
}

/* ── llms.txt ───────────────────────────────────────────────────────────── */

function buildLlmsTxt() {
  const current = work.filter((w) => !w.endDate)
  const out = `# ${basics.name}

> ${basics.headline}. Based in ${basics.location.city}, ${basics.location.country}. ${basics.availability}

${basics.summary}

## Contact
- Email: ${basics.email}
- Phone: ${basics.phone}
- Website: ${basics.url}
${basics.profiles.map((p) => `- ${p.network}: ${p.url}`).join('\n')}

## Currently
${current.map((w) => `- ${w.position}, ${w.name} (${period(w)}) — ${w.summary}`).join('\n')}

## Full CV
- [PDF](${basics.url}/${PDF_FILE}): formatted CV for humans and applicant tracking systems
- [JSON](${basics.url}/cv.json): JSON Resume schema v1.0.0, the structured source of record
- [Plain text](${basics.url}/${TXT_FILE}): unstyled text of the whole CV
- [HTML](${basics.url}/cv): the same CV as a web page

## Core skills
${skills.map((s) => `- ${s.name}: ${s.keywords.join(', ')}`).join('\n')}

## Languages
${languages.map((l) => `- ${l.language}: ${l.fluency}`).join('\n')}
`
  fs.writeFileSync(path.join(publicDir, 'llms.txt'), out)
}

/* ── run ────────────────────────────────────────────────────────────────── */

fs.mkdirSync(publicDir, { recursive: true })
assertNoRouteCollision()
buildJson()
buildTxt()
buildLlmsTxt()
await buildPdf()

const size = (f) => (fs.statSync(path.join(publicDir, f)).size / 1024).toFixed(1) + ' KB'
console.log('CV built from data/resume.json:')
for (const f of [PDF_FILE, TXT_FILE, 'cv.json', 'llms.txt']) {
  console.log(`  public/${f.padEnd(22)} ${size(f)}`)
}
