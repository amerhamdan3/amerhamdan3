import type { Metadata, Viewport } from 'next'
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

// Google renders roughly 155 characters and WhatsApp far fewer, so the search
// and share description is written to that budget rather than reusing the long
// on-page thesis, which was being truncated mid-sentence.
const description = basics.seoDescription

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F9F7F7' },
    { media: '(prefers-color-scheme: dark)', color: '#112D4E' },
  ],
}

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
  // Search engines have ignored this tag since 2009. A short, honest list beats
  // the 100-term dump that was here — that only made the head heavy and read as
  // keyword stuffing to anyone inspecting the page.
  keywords: [
    'Amer Hamdan',
    'Senior Full-Stack Engineer',
    'Tech Lead',
    'AI Engineer',
    'Go',
    'TypeScript',
    'Next.js',
    'Node.js',
    'Laravel',
    'PostgreSQL',
    'Istanbul',
    'Remote',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
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
    images: [{ url: '/og.jpg', width: 1200, height: 630, type: 'image/jpeg', alt: `${basics.name}, ${basics.label}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${basics.name} — ${basics.label}`,
    description,
    images: ['/og.jpg'],
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
      primaryImageOfPage: `${basics.url}/og.jpg`,
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
