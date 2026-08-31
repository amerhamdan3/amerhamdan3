import SectionHeader from '@/components/SectionHeader'
import { projects } from '@/lib/resume'

function ExternalLinkIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor">
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"
      />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.73.8 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.26 5.68.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="border-y border-rule bg-wash">
      <div className="mx-auto max-w-shell px-6 py-20 md:py-28">
        <SectionHeader label="Projects" title="Selected projects" note="Built, shipped, measured" />

        <ul className="mt-12 grid gap-px bg-rule md:mt-16 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.id} className="reveal flex flex-col bg-wash p-7 md:p-9">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-signal">
                {project.outcome}
              </p>

              <h3 className="mt-4 flex items-center gap-2.5 font-display text-2xl font-semibold tracking-[-0.02em]">
                {project.name}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name}`}
                    title="Visit live site"
                    className="text-slate transition-colors hover:text-signal"
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} on GitHub`}
                    title="View source on GitHub"
                    className="text-slate transition-colors hover:text-signal"
                  >
                    <GithubIcon />
                  </a>
                )}
              </h3>

              <p className="mt-1.5 font-mono text-xs text-slate">
                {project.org === project.name ? project.period : `${project.org} · ${project.period}`}
              </p>

              <p className="mt-4 text-[0.9375rem] leading-relaxed text-slate">{project.description}</p>

              <ul className="mt-5 space-y-2">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3.5 text-[0.9375rem] leading-relaxed">
                    <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-signal" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-auto flex flex-wrap gap-1.5 pt-7">
                {project.keywords.map((keyword) => (
                  <li key={keyword} className="chip">
                    {keyword}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
