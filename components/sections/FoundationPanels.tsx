'use client'

import { motion } from 'framer-motion'
import { Heart, Compass } from 'lucide-react'
import { getSectionColor, generateSectionCSS } from '@/components/base/ColorRhythm'
import { AnimatedCard } from '@/components/base/AnimatedCard'

interface FoundationData {
  why: {
    title: string
    body: string
  }
  mission: {
    title: string
    body: string
  }
}

interface FoundationPanelsProps {
  data: FoundationData
}

export function FoundationPanels({ data }: FoundationPanelsProps) {
  const sectionColor = getSectionColor('mission')

  return (
    <section id="mission" className="relative min-h-screen flex items-center justify-center px-8 py-16">
      {/* Section background with blue accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cardy-ink mb-6">
            Our Foundation
          </h2>
          <motion.div
            className="w-24 h-1 mx-auto rounded-full"
            style={{
              background: `linear-gradient(to right, ${sectionColor.accent}, #60A5FA)`
            }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* Feature Panels */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Our Why Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <AnimatedCard className="h-full border-t-4 border-cardy-blue bg-white/95 backdrop-blur-xl">
              <div className="space-y-6">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-cardy-blue to-blue-600 rounded-2xl flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", damping: 20 }}
                >
                  <Heart className="w-8 h-8 text-white" fill="currentColor" />
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-cardy-ink mb-4">
                    {data.why.title}
                  </h3>
                  <p className="text-lg text-cardy-slate leading-relaxed">
                    {data.why.body}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </motion.div>

          {/* Animated divider line - desktop only */}
          <motion.div
            className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-cardy-blue/30 to-transparent"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: '8rem', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          {/* Our Mission Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <AnimatedCard className="h-full border-t-4 border-cardy-blue bg-white/95 backdrop-blur-xl">
              <div className="space-y-6">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cardy-blue rounded-2xl flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  transition={{ type: "spring", damping: 20 }}
                >
                  <Compass className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-cardy-ink mb-4">
                    {data.mission.title}
                  </h3>
                  <p className="text-lg text-cardy-slate leading-relaxed">
                    {data.mission.body}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>

        {/* Bottom accent */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-cardy-blue/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}