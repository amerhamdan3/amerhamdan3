import SectionHeader from '@/components/SectionHeader'
import { CAREER_START, work, type Work as Role } from '@/lib/resume'

const featured = work.filter((role) => role.featured)
const earlier = work.filter((role) => !role.featured)

/** Left column of the rail: the interval this role covers, read as a scale. */
function Interval({ role }: { role: Role }) {
  return (
    <div className="mb-4 md:mb-0">
      <span className="block font-mono text-[0.9375rem] font-medium text-ink">{role.startYear}</span>
      <span className="label mt-0.5 block">→ {role.endDate ? role.endYear : 'now'}</span>
    </div>
  )
}

/** The tick that marks this role's position on the rail. */
function Tick() {
  return (
    <span
      aria-hidden
      className="absolute -left-[3.5px] top-[0.6rem] hidden h-[7px] w-[7px] bg-signal md:block"
    />
  )
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-shell px-6 py-20 md:py-28">
      <SectionHeader
        label="Work"
        title="Work history"
        note={`${CAREER_START} — present · ${work.length} roles`}
      />

      <ol className="mt-12 md:mt-16">
        {featured.map((role) => (
          <li
            key={role.id}
            className="reveal grid border-t border-rule py-9 md:grid-cols-[6.5rem_minmax(0,1fr)] md:gap-x-10"
          >
            <Interval role={role} />

            <div className="relative md:border-l md:border-rule md:pl-10">
              <Tick />

              <h3 className="font-display text-xl font-semibold tracking-[-0.015em] md:text-2xl">
                {role.position}
              </h3>
              <p className="mt-2 font-mono text-xs text-slate">
                {role.url ? (
                  <a href={role.url} className="text-ink underline decoration-rule underline-offset-4 hover:decoration-signal">
                    {role.name}
                  </a>
                ) : (
                  <span className="text-ink">{role.name}</span>
                )}
                {' · '}
                {role.location}
              </p>

              <p className="mt-4 max-w-[62ch] text-[0.9375rem] leading-relaxed text-slate">
                {role.summary}
              </p>

              <ul className="mt-5 space-y-2.5">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3.5 text-[0.9375rem] leading-relaxed">
                    <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-signal" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-1.5">
                {role.keywords.map((keyword) => (
                  <li key={keyword} className="chip">
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="label mt-14 text-signal">Also, over the same years</h3>

      <ol className="mt-6">
        {earlier.map((role) => (
          <li
            key={role.id}
            className="reveal grid border-t border-rule py-6 md:grid-cols-[6.5rem_minmax(0,1fr)] md:gap-x-10"
          >
            <Interval role={role} />

            <div className="relative md:border-l md:border-rule md:pl-10">
              <Tick />
              <h4 className="font-display text-base font-semibold">
                {role.position}
                <span className="font-body font-normal text-slate"> — {role.name}</span>
              </h4>
              <p className="mt-1.5 font-mono text-xs text-slate">{role.location}</p>
              <p className="mt-3 max-w-[62ch] text-[0.9375rem] leading-relaxed text-slate">
                {role.highlights[0]}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
