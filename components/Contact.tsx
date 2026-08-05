import { CV_FILE, CV_FORMATS, basics } from '@/lib/resume'

// WhatsApp is the same number as the phone line, so it rides along with it
// instead of taking a column of its own.
const channels = [
  { field: 'Email', value: basics.email, href: `mailto:${basics.email}` },
  { field: 'Phone / WhatsApp', value: basics.phone, href: `https://wa.me/${basics.phoneRaw.replace('+', '')}` },
  ...basics.profiles
    .filter((profile) => profile.network !== 'WhatsApp')
    .map((profile) => ({
      field: profile.network,
      value: profile.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
      href: profile.url,
    })),
]

export default function Contact() {
  return (
    <section id="contact" className="border-t border-rule bg-ink text-paper">
      <div className="mx-auto max-w-shell px-6 py-20 md:py-28">
        <div className="flex items-baseline gap-4">
          <span className="label whitespace-nowrap text-flare">Contact</span>
          <span aria-hidden className="h-px flex-1 bg-paper/20" />
        </div>

        <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <h2 className="font-display text-[clamp(1.875rem,4.5vw,3rem)] font-semibold leading-tight tracking-[-0.025em]">
              Take the CV with you
            </h2>
            <p className="mt-5 max-w-measure text-[1.0625rem] leading-[1.65] text-paper/70">
              {basics.availability} The fastest way to reach me is email — I answer within a day.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={CV_FILE}
              download
              className="btn border-flare bg-flare text-ink transition-colors hover:border-paper hover:bg-paper"
            >
              Download CV
              <span aria-hidden>↓</span>
            </a>
            <a
              href={`mailto:${basics.email}`}
              className="btn border-paper/30 text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              Email me
            </a>
          </div>
        </div>

        {/* The same record in three formats. Recruiters take the PDF; parsers and
            agents get something they do not have to guess at. */}
        <ul className="mt-16 grid gap-px bg-paper/15 md:grid-cols-3">
          {CV_FORMATS.map((format) => (
            <li key={format.label} className="bg-ink">
              <a
                href={format.href}
                {...(format.label === 'PDF' ? { download: true } : {})}
                className="group flex h-full flex-col p-7 transition-colors hover:bg-paper/[0.06]"
              >
                <span className="label text-flare">{format.label}</span>
                <span className="mt-3 font-display text-lg font-medium">
                  {format.href.replace('/', '')}
                </span>
                <span className="mt-1.5 text-sm leading-relaxed text-paper/60">{format.note}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-5 max-w-[70ch] font-mono text-xs leading-relaxed text-paper/50">
          The JSON follows the JSON Resume schema, so an applicant tracking system or an AI agent can
          read the whole record without parsing a document. There is a{' '}
          <a href="/llms.txt" className="text-paper/80 underline underline-offset-4 hover:text-flare">
            /llms.txt
          </a>{' '}
          too, and the CV is also{' '}
          <a href="/cv" className="text-paper/80 underline underline-offset-4 hover:text-flare">
            a plain web page
          </a>
          .
        </p>

        <dl className="mt-16 grid gap-px border-t border-paper/15 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <div key={channel.field} className="py-6 sm:pr-8">
              <dt className="label">{channel.field}</dt>
              <dd className="mt-2">
                <a
                  href={channel.href}
                  {...(channel.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="break-words font-display text-[0.9375rem] font-medium underline decoration-paper/25 underline-offset-4 transition-colors hover:decoration-flare"
                >
                  {channel.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
