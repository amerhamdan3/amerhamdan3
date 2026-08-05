import type { Metadata } from 'next'
import { Familjen_Grotesk, Public_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { CV_TXT_FILE, basics, skills, work } from '@/lib/resume'

const display = Familjen_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const body = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const description = `${basics.headline}. ${basics.thesis}`

export const metadata: Metadata = {
  metadataBase: new URL(basics.url),
  title: {
    default: `${basics.name} — ${basics.label}`,
    template: `%s — ${basics.name}`,
  },
  description,
  applicationName: `${basics.name} — CV`,
  authors: [{ name: basics.name, url: basics.url }],
  creator: basics.name,
  keywords: [
    basics.label,
    'Senior Full-Stack Engineer',
    'Tech Lead',
    'AI Engineer',
    'Solutions Architect',
    ...work.map((w) => w.position),
    ...skills.flatMap((s) => s.keywords),
    'Istanbul',
    'Remote',
  ],
  alternates: {
    canonical: '/',
    types: {
      'application/json': [{ url: '/cv.json', title: 'CV as JSON Resume' }],
      'text/plain': [{ url: CV_TXT_FILE, title: 'CV as plain text' }],
    },
  },
  openGraph: {
    type: 'profile',
    firstName: basics.firstName,
    lastName: basics.lastName,
    username: 'amerhamdan3',
    title: `${basics.name} — ${basics.label}`,
    description,
    url: basics.url,
    siteName: basics.name,
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${basics.name}, ${basics.label}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${basics.name} — ${basics.label}`,
    description,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

/**
 * Structured data. Search engines and AI agents read this rather than the
 * markup, so it carries the same facts as the CV, not a marketing summary.
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${basics.url}/#person`,
      name: basics.name,
      givenName: basics.firstName,
      familyName: basics.lastName,
      jobTitle: basics.label,
      description: basics.summary,
      url: basics.url,
      image: `${basics.url}/profile.jpg`,
      email: `mailto:${basics.email}`,
      telephone: basics.phoneRaw,
      address: {
        '@type': 'PostalAddress',
        addressLocality: basics.location.city,
        addressCountry: basics.location.countryCode,
      },
      knowsLanguage: ['ar', 'en', 'tr'],
      knowsAbout: skills.flatMap((s) => s.keywords),
      sameAs: basics.profiles.map((p) => p.url),
      worksFor: {
        '@type': 'Organization',
        name: work[0].name,
        address: work[0].location,
      },
      hasOccupation: work.map((w) => ({
        '@type': 'Occupation',
        name: w.position,
        occupationLocation: { '@type': 'Place', name: w.location },
        skills: w.keywords.join(', '),
      })),
      seeks: { '@type': 'Demand', name: basics.availability },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${basics.url}/#profilepage`,
      url: basics.url,
      name: `${basics.name} — ${basics.label}`,
      about: { '@id': `${basics.url}/#person` },
      primaryImageOfPage: `${basics.url}/og.png`,
      inLanguage: 'en',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
