import { metrics } from '@/lib/resume'

export default function Metrics() {
  return (
    <section aria-label="Results at a glance" className="border-b border-rule bg-wash">
      <dl className="mx-auto grid max-w-shell grid-cols-2 gap-px bg-rule lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="reveal bg-wash px-6 py-8 lg:px-8 lg:py-10">
            <dt className="sr-only">{metric.label}</dt>
            <dd>
              <span className="block font-display text-[clamp(2rem,5vw,2.875rem)] font-bold leading-none tracking-[-0.03em] text-signal">
                {metric.figure}
              </span>
              <span className="mt-3 block font-display text-sm font-medium leading-snug">
                {metric.label}
              </span>
              <span className="mt-1 block font-mono text-[0.6875rem] leading-snug text-slate">
                {metric.note}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
