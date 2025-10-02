'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: 'Work with ID8 Media',
      period: 'Recent Years',
      icon: '🚀',
      description: 'Built and launched multiple projects across different industries, combining modern tech stacks with creative solutions.',
      highlights: [
        'Multiple successful project launches',
        'Cross-industry experience',
        'Full-stack development',
      ]
    },
    {
      title: 'Head of Developers Team & SEO',
      company: 'Orient News',
      location: 'Turkey 🇹🇷',
      period: '2021 - 2023',
      icon: '📰',
      description: 'Led the complete digital transformation of one of the region\'s largest news agencies.',
      highlights: [
        'Migrated from native PHP to modern Laravel architecture',
        'Built and led a development team from scratch',
        'Transitioned to Next.js (React + Node.js) for improved performance',
        'Managed complete SEO strategy - significantly increased organic traffic',
        'Restructured content architecture and optimized Core Web Vitals',
      ]
    },
    {
      title: 'International Collaborations',
      location: 'U.S. & MENA Regions 🌍',
      period: 'Current',
      icon: '🤝',
      description: 'Working with clients across different regions on impactful projects.',
      highlights: [
        'multifaithalliance.org and other meaningful projects',
        'Cross-cultural collaboration',
        'Modern tech implementations',
      ]
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Experience <span className="gradient-text">💼</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-primary/50 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl animate-float">{exp.icon}</div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                      {exp.company && (
                        <span className="text-lg text-gray-400">@ {exp.company}</span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-4">
                      <span className="bg-gray-700/50 px-3 py-1 rounded-full">{exp.period}</span>
                      {exp.location && (
                        <span className="bg-gray-700/50 px-3 py-1 rounded-full">{exp.location}</span>
                      )}
                    </div>
                    
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400">
                          <span className="text-secondary mt-1">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20"
          >
            <p className="text-xl text-gray-300">
              🎯 <span className="font-semibold">Currently</span>: Exploring AI integrations, 
              improving UX/performance, and always learning new technologies!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

