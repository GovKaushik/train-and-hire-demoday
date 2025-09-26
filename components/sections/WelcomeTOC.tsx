'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Clock, Target, Users, BarChart3, TrendingUp } from 'lucide-react'

interface TOCSection {
  id: string
  label: string
  duration: string
  anchor: string
}

interface WelcomeTOCProps {
  title: string
  sections: TOCSection[]
  onSectionClick?: (sectionId: string) => void
}

const sectionIcons = {
  about: Target,
  cohort1: Users,
  cohort2: Users,
  timeline: BarChart3,
  impact: TrendingUp
}

const sectionColors = {
  about: 'from-cardy-blue to-cardy-indigo',
  cohort1: 'from-cardy-green to-cardy-blue',
  cohort2: 'from-cardy-yellow to-cardy-orange',
  timeline: 'from-cardy-indigo to-cardy-red',
  impact: 'from-cardy-green to-cardy-yellow'
}

export function WelcomeTOC({ title, sections, onSectionClick }: WelcomeTOCProps) {
  const handleSectionClick = (section: TOCSection) => {
    if (onSectionClick) {
      onSectionClick(section.id)
    } else {
      // Smooth scroll to section
      const element = document.getElementById(section.id)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  return (
    <section id="toc" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="w-full max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-h1 text-cardy-ink"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>

          {/* Decorative line */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cardy-red to-cardy-yellow mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 128, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="font-body text-cardy-ink/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Navigate through our presentation covering the evolution and impact of Train & Hire
          </motion.p>
        </motion.div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const IconComponent = sectionIcons[section.id as keyof typeof sectionIcons] || Target
            const gradientColor = sectionColors[section.id as keyof typeof sectionColors] || 'from-cardy-blue to-cardy-indigo'

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + (index * 0.1)
                }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.button
                  onClick={() => handleSectionClick(section)}
                  className={`
                    w-full p-6 rounded-3xl border border-cardy-border/30 bg-white/80 backdrop-blur-sm
                    hover:shadow-2xl hover:border-cardy-border/50 hover:bg-white/95
                    transition-all duration-300 text-left relative overflow-hidden
                    focus:outline-none focus:ring-2 focus:ring-cardy-blue/50 focus:ring-offset-2
                  `}
                  whileHover={{
                    scale: 1.02,
                    y: -4
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <div className="relative z-10 space-y-4">
                    {/* Section number and icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`
                          w-12 h-12 rounded-2xl bg-gradient-to-br ${gradientColor}
                          flex items-center justify-center text-white shadow-lg
                        `}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-cardy-ink/50 font-medium">
                          <span>Section {index + 1}</span>
                          <div className="w-1 h-1 rounded-full bg-cardy-ink/30" />
                          <Clock className="w-3 h-3" />
                          <span>{section.duration}</span>
                        </div>
                      </div>

                      <motion.div
                        className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                      >
                        <ChevronRight className="w-5 h-5 text-cardy-ink" />
                      </motion.div>
                    </div>

                    {/* Section title */}
                    <div>
                      <h3 className="font-h3 text-cardy-ink group-hover:text-cardy-ink transition-colors duration-300">
                        {section.label}
                      </h3>
                    </div>

                    {/* Progress indicator */}
                    <div className="pt-2">
                      <div className="w-full h-2 bg-cardy-border/30 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${gradientColor} origin-left`}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: 1.2 + (index * 0.1)
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hover shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{ clipPath: 'polygon(0 0, 100px 0, 130px 100%, 30px 100%)' }}
                  />
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* Total presentation time */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-cardy-ink/5 backdrop-blur-sm rounded-2xl border border-cardy-border/20">
            <Clock className="w-5 h-5 text-cardy-ink/60" />
            <span className="font-medium text-cardy-ink/80">
              Total presentation time: {calculateTotalDuration(sections)}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Helper function to calculate total duration
function calculateTotalDuration(sections: TOCSection[]): string {
  const totalSeconds = sections.reduce((total, section) => {
    const duration = section.duration
    const seconds = parseInt(duration.replace('s', ''))
    return total + seconds
  }, 0)

  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  return `${minutes}m ${seconds}s`
}