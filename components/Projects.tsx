import SectionHeader from '@/components/SectionHeader'
import { projects } from '@/lib/resume'

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

              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em]">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-rule underline-offset-[6px] transition-colors hover:decoration-signal"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
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
