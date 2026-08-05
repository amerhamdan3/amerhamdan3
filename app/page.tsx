import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Metrics from '@/components/Metrics'
import Work from '@/components/Work'
import Projects from '@/components/Projects'
import Stack from '@/components/Stack'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { basics } from '@/lib/resume'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Metrics />

        <section aria-label="Profile" className="mx-auto max-w-shell px-6 py-20 md:py-24">
          <div className="reveal grid gap-6 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-x-10">
            <h2 className="label pt-2 text-signal">Profile</h2>
            <p className="max-w-[68ch] text-[1.125rem] leading-[1.7] md:text-[1.25rem]">
              {basics.summary}
            </p>
          </div>
        </section>

        <Work />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
