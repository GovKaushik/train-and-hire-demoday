'use client'

import { motion } from 'framer-motion'
import { Users, TrendingUp, Award, Briefcase } from 'lucide-react'
import { getSectionColor } from '@/components/base/ColorRhythm'
import { AnimatedCard } from '@/components/base/AnimatedCard'
import { GeometricAvatar } from '@/components/shared/GeometricAvatar'

interface CohortData {
  title: string
  size: number
  notes: string
  successStories: Array<{
    name: string
    status: string
    photo: string
    blurb: string
  }>
}

interface CohortMiniInfographicProps {
  data: CohortData
  sectionId: string
}

export function CohortMiniInfographic({ data, sectionId }: CohortMiniInfographicProps) {
  const sectionColor = getSectionColor(sectionId)

  return (
    <section id={sectionId} className="relative min-h-screen flex items-center justify-center px-8 py-16">
      {/* Section background with themed gradient */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `linear-gradient(135deg, ${sectionColor.accent}22, transparent 50%)`
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Hero Stats Bar */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cardi-ink mb-6">
            {data.title}
          </h2>

          {/* Quick Stats Row */}
          <div className="flex justify-center items-center space-x-8 mb-6">
            <motion.div
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Users className="w-5 h-5" style={{ color: sectionColor.accent }} />
              <span className="font-semibold text-cardi-ink">{data.size} members</span>
            </motion.div>

            <motion.div
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <TrendingUp className="w-5 h-5" style={{ color: sectionColor.accent }} />
              <span className="font-semibold text-cardi-ink">80% retention</span>
            </motion.div>

            <motion.div
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Award className="w-5 h-5" style={{ color: sectionColor.accent }} />
              <span className="font-semibold text-cardi-ink">4 completed</span>
            </motion.div>
          </div>

          <p className="text-lg text-cardi-slate max-w-2xl mx-auto">
            {data.notes}
          </p>
        </motion.div>

        {/* Success Stories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.successStories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
            >
              <AnimatedCard className="p-6 h-full border-l-4 hover:shadow-xl transition-all duration-300 border-l-cardi-green">
                <div className="flex items-start space-x-4">
                  {/* Avatar with status indicator */}
                  <div className="relative flex-shrink-0">
                    <GeometricAvatar name={story.name} size="lg" />
                    <motion.div
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white shadow-lg"
                      style={{ backgroundColor: sectionColor.accent }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (index * 0.1), type: "spring" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-cardi-ink">{story.name}</h3>
                      <motion.div
                        className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium text-white shadow-sm"
                        style={{ backgroundColor: sectionColor.accent }}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + (index * 0.1) }}
                      >
                        <Briefcase className="w-3 h-3" />
                        <span>Hired</span>
                      </motion.div>
                    </div>

                    <p className="text-sm font-semibold text-cardi-slate mb-3">
                      {story.status}
                    </p>

                    <p className="text-sm text-cardi-slate leading-relaxed">
                      {story.blurb}
                    </p>
                  </div>
                </div>

                {/* Success metrics bar */}
                <motion.div
                  className="mt-4 pt-4 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + (index * 0.1) }}
                >
                  <div className="flex justify-between text-xs text-cardi-slate">
                    <span>Impact Score</span>
                    <span className="font-semibold">High</span>
                  </div>
                  <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                    <motion.div
                      className="h-1.5 rounded-full"
                      style={{ backgroundColor: sectionColor.accent }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + (index * 0.1), duration: 1 }}
                    />
                  </div>
                </motion.div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom insight */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: sectionColor.accent }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-cardi-ink">
              Humble beginnings, extraordinary outcomes
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}