'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-800">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-400"
        >
          Made with ❤️ and ☕ by Amer Hamdan {new Date().getFullYear()}
        </motion.p>
        <p className="text-sm text-gray-500 mt-2">
          P.S. My cat helped debug some of this... she gets paid in cold tap water 🐱💧
        </p>
      </footer>
    </main>
  )
}

