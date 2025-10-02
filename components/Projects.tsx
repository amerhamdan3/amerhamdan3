'use client'

import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: 'Orient News Platform',
      icon: '📰',
      description: 'Complete digital transformation of a major news agency. Migrated from legacy PHP to modern Laravel, then enhanced with Next.js frontend.',
      impact: 'Significant increase in organic traffic and site performance',
      tech: ['Laravel', 'Next.js', 'React', 'Node.js', 'SEO'],
      highlights: [
        'Led team of developers',
        'Complete architecture redesign',
        'Advanced SEO implementation',
        'Core Web Vitals optimization',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'ID8 Media Projects',
      icon: '🚀',
      description: 'Multiple successful projects across various industries, each with unique challenges and modern tech solutions.',
      impact: 'Diverse portfolio of launched applications',
      tech: ['Node.js', 'TypeScript', 'Express', 'Next.js', 'AI Integration'],
      highlights: [
        'Cross-industry experience',
        'AI-driven features',
        'Scalable architectures',
        'Modern tech stacks',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Multi Faith Alliance',
      icon: '🤝',
      description: 'Collaborative project promoting interfaith dialogue and understanding through modern web technologies.',
      impact: 'Connecting communities across different faiths',
      tech: ['Next.js', 'TypeScript', 'Modern UI/UX'],
      highlights: [
        'International collaboration',
        'U.S. & MENA regions',
        'Community-focused design',
        'Accessible interface',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Enterprise Laravel Systems',
      icon: '💼',
      description: 'Multiple large-scale Laravel applications including APIs, admin dashboards, and complete business platforms.',
      impact: 'Powering business operations with robust solutions',
      tech: ['Laravel', 'PHP', 'MySQL', 'Redis', 'APIs'],
      highlights: [
        'Clean, maintainable code',
        'Advanced API development',
        'Admin dashboards',
        'Content management systems',
      ],
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured Projects <span className="gradient-text">🎨</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Some highlights from my journey (there are many more where these came from!)
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-primary/50 card-hover group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="text-5xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring" }}
                  >
                    {project.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-primary font-semibold">
                    💡 Impact: {project.impact}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Key Highlights:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-secondary">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 group-hover:bg-gray-700 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20"
          >
            <p className="text-xl text-gray-300 mb-4">
              Want to see more? Let's connect and I'll share more details about my work! 🚀
            </p>
            <p className="text-sm text-gray-400">
              (Some projects are under NDA, but I love talking about the tech challenges and solutions!)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

