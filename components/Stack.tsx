import SectionHeader from '@/components/SectionHeader'
import { languages, skills } from '@/lib/resume'

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-shell px-6 py-20 md:py-28">
      <SectionHeader label="Stack" title="What I build with" note="Daily working tools" />

      <dl className="mt-12 md:mt-16">
        {skills.map((group) => (
          <div
            key={group.name}
            className="reveal grid gap-y-3 border-t border-rule py-6 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-x-10"
          >
            <dt className="label pt-1 text-ink">{group.name}</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {group.keywords.map((keyword) => (
                  <li key={keyword} className="chip">
                    {keyword}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}

        <div className="reveal grid gap-y-3 border-y border-rule py-6 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-x-10">
          <dt className="label pt-1 text-ink">Languages</dt>
          <dd className="flex flex-wrap gap-x-8 gap-y-2">
            {languages.map((language) => (
              <span key={language.language} className="text-[0.9375rem]">
                {language.language}
                <span className="ml-2 font-mono text-xs text-slate">{language.fluency}</span>
              </span>
            ))}
          </dd>
        </div>
      </dl>
    </section>
  )
}
