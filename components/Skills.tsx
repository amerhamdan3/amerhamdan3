'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend Mastery',
      icon: '⚙️',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'PHP & Laravel', level: '💜 Expert', emoji: '🐘' },
        { name: 'Node.js & Express', level: 'Advanced', emoji: '🟢' },
        { name: 'TypeScript', level: 'Advanced', emoji: '📘' },
        { name: 'RESTful APIs', level: 'Expert', emoji: '🔌' },
        { name: 'Database Design', level: 'Advanced', emoji: '🗄️' },
      ]
    },
    {
      title: 'Frontend Magic',
      icon: '✨',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Next.js & React', level: 'Advanced', emoji: '⚛️' },
        { name: 'TypeScript', level: 'Advanced', emoji: '📘' },
        { name: 'Tailwind CSS', level: 'Advanced', emoji: '🎨' },
        { name: 'Responsive Design', level: 'Expert', emoji: '📱' },
        { name: 'Modern UI/UX', level: 'Advanced', emoji: '🎭' },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Git & GitHub', level: 'Advanced', emoji: '🔀' },
        { name: 'Docker', level: 'Intermediate', emoji: '🐳' },
        { name: 'Linux/Unix', level: 'Advanced', emoji: '🐧' },
        { name: 'CI/CD', level: 'Intermediate', emoji: '🔄' },
        { name: 'Performance Optimization', level: 'Advanced', emoji: '⚡' },
      ]
    },
    {
      title: 'Special Powers',
      icon: '🦸',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'SEO Strategy', level: 'Expert', emoji: '📈' },
        { name: 'AI Integration', level: 'Intermediate', emoji: '🤖' },
        { name: 'Team Leadership', level: 'Advanced', emoji: '👥' },
        { name: 'System Architecture', level: 'Advanced', emoji: '🏗️' },
        { name: 'Coffee Consumption', level: 'Master', emoji: '☕' },
      ]
    },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Skills & Expertise <span className="gradient-text">🎯</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            My toolbox of technologies and capabilities
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-primary/50 card-hover"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.emoji}</span>
                        <span className="text-gray-200">{skill.name}</span>
                      </div>
                      <span className="text-sm text-primary font-semibold">
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-lg">
              💡 Always learning, always growing. The tech world never sleeps, and neither does my curiosity!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

