import data from '@/data/resume.json'

export type Profile = {
  network: string
  username: string
  url: string
}

export type Basics = {
  name: string
  firstName: string
  lastName: string
  label: string
  headline: string
  eyebrow: string
  email: string
  phone: string
  phoneRaw: string
  url: string
  image: string
  location: { city: string; region: string; country: string; countryCode: string }
  availability: string
  thesis: string
  summary: string
  profiles: Profile[]
}

export type Metric = { figure: string; label: string; note: string }

export type Work = {
  id: string
  position: string
  name: string
  location: string
  startDate: string
  endDate: string | null
  startYear: number
  endYear: number
  featured: boolean
  url?: string
  summary: string
  highlights: string[]
  keywords: string[]
}

export type Project = {
  id: string
  name: string
  org: string
  period: string
  url?: string
  description: string
  outcome: string
  highlights: string[]
  keywords: string[]
}

export type SkillGroup = { name: string; keywords: string[] }
export type Language = { language: string; fluency: string }

export type Resume = {
  basics: Basics
  metrics: Metric[]
  work: Work[]
  projects: Project[]
  skills: SkillGroup[]
  languages: Language[]
}

export const resume = data as Resume

export const { basics, metrics, work, projects, skills, languages } = resume

/** Where the downloadable CV lives. Regenerate with `npm run cv`. */
export const CV_FILE = '/Amer-Hamdan-CV.pdf'

/**
 * Machine-readable versions of the same record, for parsers and agents.
 * The text file is not called cv.txt: the static export writes an RSC payload
 * to out/cv.txt for the /cv route and would overwrite it.
 */
export const CV_TXT_FILE = '/Amer-Hamdan-CV.txt'

export const CV_FORMATS = [
  { label: 'PDF', href: CV_FILE, note: 'For humans and applicant tracking systems' },
  { label: 'JSON', href: '/cv.json', note: 'JSON Resume schema' },
  { label: 'Plain text', href: CV_TXT_FILE, note: 'Unstyled, for any parser' },
] as const

/** Career span, used by the timeline rail. */
export const CAREER_START = Math.min(...work.map((w) => w.startYear))
export const CAREER_END = Math.max(...work.map((w) => w.endYear))

export function formatPeriod(w: Work): string {
  const end = w.endDate ? String(w.endYear) : 'Present'
  return `${w.startYear} — ${end}`
}

export const profileByNetwork = (network: string) =>
  basics.profiles.find((p) => p.network.toLowerCase() === network.toLowerCase())
