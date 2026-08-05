import { basics } from '@/lib/resume'

export default function Footer() {
  return (
    <footer className="border-t border-paper/15 bg-ink text-paper">
      <div className="mx-auto flex max-w-shell flex-col gap-3 px-6 py-7 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-paper/50 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {basics.name}
        </p>
        <p>
          Built with Next.js ·{' '}
          <a
            href="https://github.com/amerhamdan3/amerhamdan3"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-flare"
          >
            Source on GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}
