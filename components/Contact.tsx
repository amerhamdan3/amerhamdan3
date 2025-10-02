'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'amer.m.hamdan@gmail.com',
      href: 'mailto:amer.m.hamdan@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/amerhamdan3/',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: '@amerhamdan3',
      href: 'https://github.com/amerhamdan3',
      color: 'from-gray-500 to-gray-700',
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      value: '+905533271100',
      href: 'https://wa.me/905533271100',
      color: 'from-green-500 to-green-600',
    },
  ]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Let's Connect! <span className="gradient-text">🤝</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Got a project in mind? Want to collaborate? Or just want to say hi? 
            <br />
            I'm always excited to hear about new opportunities and ideas!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="text-5xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {method.icon}
                  </motion.div>
                  <div>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>
                      {method.label}
                    </p>
                    <p className="text-gray-300 group-hover:text-primary transition-colors">
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 text-center"
          >
            <div className="text-6xl mb-4">☕</div>
            <h3 className="text-2xl font-bold mb-3">Coffee Chat?</h3>
            <p className="text-gray-300 mb-6">
              I'm always up for a good conversation about tech, projects, or anything interesting. 
              Whether you're looking to build something amazing or just want to discuss the latest 
              in web development and AI, feel free to reach out!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="px-4 py-2 bg-gray-700/50 rounded-full text-sm">🌍 Remote-friendly</span>
              <span className="px-4 py-2 bg-gray-700/50 rounded-full text-sm">⏰ Flexible hours</span>
              <span className="px-4 py-2 bg-gray-700/50 rounded-full text-sm">🚀 Fast responder</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400">
              P.S. - If my response is delayed, it's probably because my cat is sitting on my keyboard 🐱⌨️
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

