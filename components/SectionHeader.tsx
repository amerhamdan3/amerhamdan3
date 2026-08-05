export default function SectionHeader({
  label,
  title,
  note,
}: {
  label: string
  title: string
  note?: string
}) {
  return (
    <header className="reveal">
      <div className="flex items-baseline gap-4">
        <span className="label whitespace-nowrap text-signal">{label}</span>
        <span aria-hidden className="h-px flex-1 bg-rule" />
        {note ? <span className="label hidden whitespace-nowrap sm:block">{note}</span> : null}
      </div>
      <h2 className="mt-5 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight tracking-[-0.02em]">
        {title}
      </h2>
    </header>
  )
}
