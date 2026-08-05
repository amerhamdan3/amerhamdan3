import { CV_FILE, basics } from '@/lib/resume'

const links = [
  { name: 'Work', href: '#work' },
  { name: 'Projects', href: '#projects' },
  { name: 'Stack', href: '#stack' },
  { name: 'Contact', href: '#contact' },
]

export default function Nav() {
  return (
    <header className="no-print sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-shell items-center justify-between gap-4 px-6 py-3.5"
      >
        <a href="#top" className="flex items-center gap-2.5 font-mono text-label uppercase text-ink">
          <span aria-hidden className="block h-2 w-2 bg-signal" />
          {basics.name}
        </a>

        <div className="flex items-center gap-1 sm:gap-6">
          <ul className="hidden items-center gap-6 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="label transition-colors hover:text-ink">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href={CV_FILE} download className="btn btn-primary px-4 py-2.5">
            Download CV
          </a>
        </div>
      </nav>
    </header>
  )
}
