# Amer Hamdan

**Senior Full-Stack Engineer · Tech Lead · AI-Product Development** — Istanbul, Türkiye

Ten years of shipping and re-shipping production web systems: news platforms, global hiring
marketplaces, a restaurant SaaS with 1,000+ active users. Most of the work is migration — taking
something slow and legacy and rebuilding it without ever turning it off.

**[amerhamdan.com](https://amerhamdan.com)** · [Download CV (PDF)](https://amerhamdan.com/Amer-Hamdan-CV.pdf) ·
[cv.json](https://amerhamdan.com/cv.json) · [amer.m.hamdan@gmail.com](mailto:amer.m.hamdan@gmail.com) ·
[LinkedIn](https://www.linkedin.com/in/amerhamdan3/)

Open to senior full-stack, tech lead, and AI-product roles — remote or Istanbul.

---

## What I do

| | |
| --- | --- |
| **Backend** | Node.js, Express, Laravel (PHP), Strapi, REST API design, auth and permission systems, caching |
| **Frontend** | TypeScript, React, Next.js, Tailwind CSS, shadcn/ui, responsive and accessible layouts |
| **Data** | PostgreSQL, MySQL, MongoDB, Prisma, schema design |
| **Cloud** | Google Cloud Run, Cloud Build, Docker, Nginx, Linux servers, CI/CD |
| **Practice** | Technical SEO, Core Web Vitals, team leadership, Agile/Scrum |

## Recent work

**Senior Full-Stack Developer / Team Lead — ID8 Media** · Istanbul · 2023 – present
Raised project success rate 25% leading teams through five concurrent client builds. Improved
software efficiency 15% for news agencies. Built large-scale global hiring platforms.

**Web Lead — Multifaith Alliance** · New York (remote) · 2021 – present
Improved site performance 70% by rebuilding the platform with Next.js and Tailwind, migrating off
WordPress with no loss of content or search ranking.

**Founder — Amenu** · 2020 – present
Menu-management SaaS for restaurants, built solo end to end. Three shipped versions, 1,000+ active
users, no sales team.

**Head of Developers Team — Orient News** · Dubai · 2021 – 2023
Increased engagement 30% and platform performance 30% by migrating a major news agency from native
PHP to Laravel. Built and led the engineering team from scratch.

[Full history →](https://amerhamdan.com/cv)

---

## About this repository

This is the source of [amerhamdan.com](https://amerhamdan.com) — a Next.js static export deployed on
Vercel.

Everything on the site and in every version of the CV comes from one file, `data/resume.json`.
Editing that file and running the build regenerates the pages, the PDF, and the machine-readable
formats together, so they can never drift apart.

```bash
npm install
npm run dev      # local development
npm run cv       # regenerate the PDF, the plain text, cv.json, and llms.txt
npm run images   # regenerate the portrait and social card from assets/profile.png
npm run build    # runs `npm run cv`, then builds the static site into out/
```

### Layout

```
data/resume.json          the single source of truth
lib/resume.ts             typed access to it
scripts/build-cv.mjs      emits the PDF and the machine-readable formats
scripts/build-images.mjs  emits profile.webp, profile.jpg, og.jpg, favicons
app/                      the site (/) and the HTML CV (/cv)
components/               page sections
```

### Built to be read by machines as well as people

Applications in 2026 get screened by applicant tracking systems and AI agents before a person sees
them, so the same record is published in four forms:

- **[/Amer-Hamdan-CV.pdf](https://amerhamdan.com/Amer-Hamdan-CV.pdf)** — single column, real text
  layer, standard fonts, no tables or text boxes. Section headings are set with almost no letter
  spacing on purpose: extra tracking makes text extractors read `SUMMARY` as `S U M M A R Y`, and an
  ATS then fails to find the section.
- **[/cv.json](https://amerhamdan.com/cv.json)** — [JSON Resume](https://jsonresume.org) schema
  v1.0.0, for anything that would rather parse structured data than a document.
- **[/Amer-Hamdan-CV.txt](https://amerhamdan.com/Amer-Hamdan-CV.txt)** — unstyled plain text. Not
  named cv.txt: the static export writes an RSC payload to that path for the /cv route.
- **[/cv](https://amerhamdan.com/cv)** — the CV as a semantic HTML page.

Plus `schema.org` `Person` and `ProfilePage` JSON-LD on every page, an
[`/llms.txt`](https://amerhamdan.com/llms.txt) brief for AI agents, and a `robots.txt` that welcomes
search and AI crawlers explicitly rather than leaving them to a wildcard.

### Performance

The site ships no JavaScript of its own. Scroll reveals use CSS `animation-timeline: view()`, wrapped
in `@supports` so a browser without it simply renders the finished state — nothing is ever hidden
behind a script that might not run. Reduced-motion preferences are respected.
