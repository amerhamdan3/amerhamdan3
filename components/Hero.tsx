import { CV_FILE, CAREER_START, basics } from '@/lib/resume'

const spec = [
  { field: 'Based', value: `${basics.location.city}, ${basics.location.country}`, sub: 'Remote-friendly' },
  { field: 'Open to', value: 'Senior full-stack · Tech lead', sub: 'AI-product · Architecture' },
  { field: 'Core stack', value: 'TypeScript · Next.js · Node', sub: 'Laravel · PostgreSQL · GCP' },
  { field: 'Span', value: `${CAREER_START} — present`, sub: 'Ten years in production' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-rule">
      <div aria-hidden className="grid-paper grid-paper-fade absolute inset-0" />

      <div className="relative mx-auto max-w-shell px-6 pb-14 pt-20 md:pt-28">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-16">
          <div>
            <p className="rise label text-signal">{basics.eyebrow}</p>

            <h1
              className="rise mt-6 font-display text-[clamp(3.5rem,12vw,9rem)] font-bold leading-[0.85] tracking-[-0.035em]"
              style={{ animationDelay: '60ms' }}
            >
              {/* The space between the two blocks is invisible but keeps the
                  heading's text content "Amer Hamdan" rather than "AmerHamdan"
                  for crawlers and screen readers. */}
              <span className="block">Amer</span>{' '}
              <span className="block">Hamdan</span>
            </h1>

            <p
              className="rise mt-8 max-w-measure text-[1.0625rem] leading-[1.65] text-slate"
              style={{ animationDelay: '120ms' }}
            >
              {basics.thesis}
            </p>

            <div
              className="rise mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: '180ms' }}
            >
              <a href={CV_FILE} download className="btn btn-primary">
                Download CV
                <span aria-hidden>↓</span>
              </a>
              <a href={`mailto:${basics.email}`} className="btn btn-ghost">
                Email me
              </a>
              <a
                href={`https://wa.me/${basics.phoneRaw.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Talk on WhatsApp
              </a>
            </div>
          </div>

          <figure className="rise order-first md:order-none" style={{ animationDelay: '90ms' }}>
            <div className="w-44 border border-rule bg-wash sm:w-52 md:w-64">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.webp"
                alt={`${basics.name}, ${basics.label}`}
                width={760}
                height={1140}
                fetchPriority="high"
                decoding="async"
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="label mt-3">
              {basics.location.city}, {basics.location.countryCode}
            </figcaption>
          </figure>
        </div>

        {/* Spec sheet: the four things a hiring manager checks before reading further. */}
        <dl className="mt-16 grid border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
          {spec.map((item, i) => (
            <div
              key={item.field}
              className="rise border-b border-rule py-5 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              style={{ animationDelay: `${240 + i * 60}ms` }}
            >
              <dt className="label">{item.field}</dt>
              <dd className="mt-2 font-display text-[0.9375rem] font-medium leading-snug">
                {item.value}
              </dd>
              <dd className="mt-1 font-mono text-[0.6875rem] leading-snug text-slate">{item.sub}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
