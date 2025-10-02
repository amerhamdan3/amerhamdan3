import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amer Hamdan | Full Stack Developer',
  description: 'Full Stack Web Developer specializing in Laravel, Next.js, Node.js, and building awesome digital experiences.',
  keywords: 'Full Stack Developer, Laravel, Next.js, Node.js, PHP, TypeScript, React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

