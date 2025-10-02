'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About Me <span className="gradient-text">🧑‍💻</span>
          </h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-primary/50 transition-all">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a <span className="text-primary font-semibold">Full Stack Web Developer</span> with 
                a passion for building scalable, fast, and modern web applications. I love turning 
                ideas into functional, high-performance digital experiences that people actually enjoy using! 
                🎯
              </p>
              
              <p>
                My tech stack is pretty diverse – I work extensively with{' '}
                <span className="text-secondary font-semibold">Node.js</span>,{' '}
                <span className="text-secondary font-semibold">Express</span>,{' '}
                <span className="text-secondary font-semibold">TypeScript</span>,{' '}
                <span className="text-secondary font-semibold">PHP</span>, and{' '}
                <span className="text-secondary font-semibold">Next.js</span>. 
                My work usually combines backend logic with frontend precision, creating products 
                that are both efficient and delightful to use. ✨
              </p>
              
              <p>
                I'm an <span className="text-primary font-semibold">expert in PHP and Laravel</span> 💜, 
                having created and managed many large-scale projects over the years. I focus on writing 
                clean, maintainable code and building systems that balance performance, security, and flexibility. 
                Laravel remains one of my strongest frameworks – I've used it to power everything from advanced 
                APIs to complete business platforms with admin dashboards and content systems.
              </p>
              
              <p>
                I've also had the chance to experiment with{' '}
                <span className="text-primary font-semibold">AI-driven systems</span> 🤖, 
                adding intelligent features to improve automation and user interaction. 
                The intersection of traditional development and AI is fascinating!
              </p>
              
              <p className="pt-4 border-t border-gray-700">
                When I'm not coding, I'm usually spending time with my cat 🐱 – 
                who has very specific requirements about her water (it must be cold and from the faucet, 
                obviously). She's also my unofficial code reviewer, though her feedback is mostly 
                "meow" and occasional keyboard walks. 😸
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

