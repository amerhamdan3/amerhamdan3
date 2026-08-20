<div align="center">

# Amer Hamdan

### Senior Full-Stack Engineer · Tech Lead · AI-Product Development

📍 Istanbul, Türkiye · 🌍 Remote-friendly

[![Website](https://img.shields.io/badge/amerhamdan.com-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://amerhamdan.com)
[![Download CV](https://img.shields.io/badge/Download_CV-EC1C24?style=for-the-badge&logo=adobeacrobatreader&logoColor=white)](https://amerhamdan.com/Amer-Hamdan-CV.pdf)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amerhamdan3/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:amer.m.hamdan@gmail.com)

</div>

---

## 👋 About me

Ten years of shipping and re-shipping production web systems: news platforms, global hiring
marketplaces, a restaurant SaaS with 1,000+ active users. Most of the work is migration — taking
something slow and legacy and rebuilding it without ever turning it off.

**Open to senior full-stack, tech lead, and AI-product roles — remote or Istanbul.**

---

## 🛠️ What I work with

**Backend**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)
![Strapi](https://img.shields.io/badge/Strapi-4945FF?style=flat-square&logo=strapi&logoColor=white)

**Frontend**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

**Data**

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)

**Cloud & practice**

![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)
![Technical SEO](https://img.shields.io/badge/Technical_SEO-4B5563?style=flat-square)
![Core Web Vitals](https://img.shields.io/badge/Core_Web_Vitals-4B5563?style=flat-square)

---

## 💼 Recent work

**🏢 Senior Full-Stack Developer / Team Lead — ID8 Media** · Istanbul · 2023 – present<br>
Raised project success rate 25% leading teams through five concurrent client builds. Improved
software efficiency 15% for news agencies. Built large-scale global hiring platforms.

**🤝 Web Lead — Multifaith Alliance** · New York (remote) · 2021 – present<br>
Improved site performance 70% by rebuilding the platform with Next.js and Tailwind, migrating off
WordPress with no loss of content or search ranking.

**🍽️ Founder — Amenu** · 2020 – present<br>
Menu-management SaaS for restaurants, built solo end to end. Three shipped versions, 1,000+ active
users, no sales team.

**📰 Head of Developers Team — Orient News** · Dubai · 2021 – 2023<br>
Increased engagement 30% and platform performance 30% by migrating a major news agency from native
PHP to Laravel. Built and led the engineering team from scratch.

**[Full history →](https://amerhamdan.com/cv)**

---

## 📊 GitHub

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats.vercel.app/api?username=amerhamdan3&show_icons=true&hide_border=true&theme=tokyonight">
  <img src="https://github-readme-stats.vercel.app/api?username=amerhamdan3&show_icons=true&hide_border=true" alt="GitHub stats">
</picture>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats.vercel.app/api/top-langs/?username=amerhamdan3&layout=compact&hide_border=true&theme=tokyonight">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=amerhamdan3&layout=compact&hide_border=true" alt="Top languages">
</picture>

</div>

---

## 📂 About this repository

This is the source of **[amerhamdan.com](https://amerhamdan.com)** — a Next.js static export deployed
on Vercel.

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

<details>
<summary><b>Layout</b></summary>

```
data/resume.json          the single source of truth
lib/resume.ts             typed access to it
scripts/build-cv.mjs      emits the PDF and the machine-readable formats
scripts/build-images.mjs  emits profile.webp, profile.jpg, og.jpg, favicons
app/                      the site (/) and the HTML CV (/cv)
components/               page sections
```

</details>

<details>
<summary><b>Built to be read by machines as well as people</b></summary>

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

</details>

<details>
<summary><b>Performance</b></summary>

The site ships no JavaScript of its own. Scroll reveals use CSS `animation-timeline: view()`, wrapped
in `@supports` so a browser without it simply renders the finished state — nothing is ever hidden
behind a script that might not run. Reduced-motion preferences are respected.

</details>

---

<div align="center">

**Got a project in mind?** [amer.m.hamdan@gmail.com](mailto:amer.m.hamdan@gmail.com) · [LinkedIn](https://www.linkedin.com/in/amerhamdan3/) · [amerhamdan.com](https://amerhamdan.com)

</div>
