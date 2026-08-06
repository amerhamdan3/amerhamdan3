import type { Metadata } from 'next'
import { CV_FILE, CV_TXT_FILE, basics, formatPeriod, languages, projects, skills, work } from '@/lib/resume'

export const metadata: Metadata = {
  title: 'Curriculum vitae',
  description: basics.cvSeoDescription,
  alternates: { canonical: '/cv' },
  // Declaring openGraph here replaces the root block outright rather than
  // merging into it, so the image has to be repeated — without it this page
  // shares with no thumbnail at all.
  openGraph: {
    type: 'profile',
    title: `Curriculum vitae — ${basics.name}`,
    description: basics.cvSeoDescription,
    url: `${basics.url}/cv`,
    siteName: basics.name,
    locale: 'en_US',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: `${basics.name}, ${basics.label}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Curriculum vitae — ${basics.name}`,
    description: basics.cvSeoDescription,
    images: ['/og.jpg'],
  },
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 break-inside-avoid">
      <h2 className="label border-b border-rule pb-2 text-signal">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}

export default function CVPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <p className="no-print">
        <a href="/" className="label hover:text-ink">
          ← Back to site
        </a>
      </p>

      <header className="mt-8 border-b-2 border-signal pb-5">
        <h1 className="font-display text-[clamp(2.25rem,7vw,3.5rem)] font-bold leading-none tracking-[-0.03em]">
          {basics.name}
        </h1>
        <p className="mt-3 font-display text-lg font-medium text-signal">{basics.headline}</p>

        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-xs text-slate">
          <li>
            <a href={`mailto:${basics.email}`} className="hover:text-ink">
              {basics.email}
            </a>
          </li>
          <li>
            <a href={`tel:${basics.phoneRaw}`} className="hover:text-ink">
              {basics.phone}
            </a>
          </li>
          <li>
            {basics.location.city}, {basics.location.country}
          </li>
          {basics.profiles.map((profile) => (
            <li key={profile.network}>
              <a href={profile.url} className="hover:text-ink">
                {profile.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm italic text-slate">{basics.availability}</p>

        <p className="no-print mt-6">
          <a href={CV_FILE} download className="btn btn-primary">
            Download as PDF
            <span aria-hidden>↓</span>
          </a>
        </p>
      </header>

      <Section title="Summary">
        <p className="leading-relaxed">{basics.summary}</p>
      </Section>

      <Section title="Experience">
        <ol className="space-y-7">
          {work.map((role) => (
            <li key={role.id} className="break-inside-avoid">
              <h3 className="font-display text-lg font-semibold">{role.position}</h3>
              <p className="mt-1 font-mono text-xs text-slate">
                {role.name} · {role.location} · {formatPeriod(role)}
              </p>
              <ul className="mt-3 space-y-1.5">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                    <span aria-hidden className="mt-[0.7em] h-px w-2.5 shrink-0 bg-signal" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Selected projects">
        <ol className="space-y-5">
          {projects.map((project) => (
            <li key={project.id} className="break-inside-avoid">
              <h3 className="font-display text-base font-semibold">
                {project.name}
                <span className="ml-2 font-mono text-xs font-normal text-signal">
                  {project.outcome}
                </span>
              </h3>
              <p className="mt-1 font-mono text-xs text-slate">
                {project.org === project.name ? project.period : `${project.org} · ${project.period}`}
              </p>
              <p className="mt-2 text-[0.9375rem] leading-relaxed">{project.description}</p>
              <p className="mt-1.5 font-mono text-xs text-slate">
                Stack: {project.keywords.join(', ')}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Skills">
        <dl className="space-y-3">
          {skills.map((group) => (
            <div key={group.name} className="text-[0.9375rem] leading-relaxed">
              <dt className="inline font-semibold">{group.name}: </dt>
              <dd className="inline text-slate">{group.keywords.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Languages">
        <p className="text-[0.9375rem]">
          {languages.map((language) => `${language.language} (${language.fluency})`).join(' · ')}
        </p>
      </Section>

      <footer className="mt-12 border-t border-rule pt-5 font-mono text-xs text-slate">
        <p>
          Machine-readable versions:{' '}
          <a href="/cv.json" className="underline underline-offset-4 hover:text-ink">
            cv.json
          </a>{' '}
          ·{' '}
          <a href={CV_TXT_FILE} className="underline underline-offset-4 hover:text-ink">
            {CV_TXT_FILE.slice(1)}
          </a>{' '}
          ·{' '}
          <a href="/llms.txt" className="underline underline-offset-4 hover:text-ink">
            llms.txt
          </a>
        </p>
      </footer>
    </main>
  )
}
