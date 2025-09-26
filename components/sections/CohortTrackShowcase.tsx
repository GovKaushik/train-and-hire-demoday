'use client'

import { motion } from 'framer-motion'
import { Brain, Cog, Users, ArrowRight, Code, FileText } from 'lucide-react'
import { getSectionColor } from '@/components/base/ColorRhythm'
import { AnimatedCard } from '@/components/base/AnimatedCard'

interface CohortData {
  title: string
  size: number
  notes: string
  improvements: string[]
}

interface CohortTrackShowcaseProps {
  data: CohortData
  sectionId: string
}

export function CohortTrackShowcase({ data, sectionId }: CohortTrackShowcaseProps) {
  const sectionColor = getSectionColor(sectionId)

  const tracks = [
    {
      id: 'ba',
      name: 'Business Analysis',
      description: 'Requirements gathering, stakeholder management, and business process optimization',
      icon: FileText,
      color: '#3B82F6',
      features: ['Stakeholder Interviews', 'Requirements Documentation', 'BPD Creation', 'User Story Writing'],
      outcomes: '3 trainees → 85% job-ready'
    },
    {
      id: 'wai',
      name: 'Workplace AI',
      description: 'AI automation, workflow optimization, and intelligent process enhancement',
      icon: Brain,
      color: '#10B981',
      features: ['n8n Workflows', 'Chrome Extensions', 'AI Integration', 'Process Automation'],
      outcomes: '3 trainees → 90% project completion'
    },
    {
      id: 'hybrid',
      name: 'Cross-Training',
      description: 'Blended skills combining business analysis with AI-powered solutions',
      icon: Cog,
      color: '#F59E0B',
      features: ['BA + AI Skills', 'Tool Integration', 'Process Innovation', 'Future-Ready Skills'],
      outcomes: 'All trainees → enhanced capability'
    }
  ]

  return (
    <section id={sectionId} className="relative min-h-screen flex items-center justify-center px-8 py-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0"
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, ${sectionColor.accent} 2px, transparent 2px),
                                radial-gradient(circle at 75% 75%, ${sectionColor.accent} 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cardi-ink mb-6">
            {data.title}
          </h2>

          <div className="flex justify-center items-center space-x-8 mb-6">
            <motion.div
              className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Users className="w-5 h-5" style={{ color: sectionColor.accent }} />
              <span className="font-semibold text-cardi-ink">{data.size} trainees</span>
            </motion.div>

            <motion.div
              className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Code className="w-5 h-5" style={{ color: sectionColor.accent }} />
              <span className="font-semibold text-cardi-ink">2 tracks</span>
            </motion.div>
          </div>

          <p className="text-lg text-cardi-slate max-w-3xl mx-auto">
            {data.notes}
          </p>
        </motion.div>

        {/* Three-Column Track Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <AnimatedCard className="h-full p-6 group hover:shadow-2xl transition-all duration-500 border-t-4 border-t-cardi-blue">
                {/* Track Header */}
                <div className="text-center mb-6">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: track.color }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", damping: 15 }}
                  >
                    <track.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-cardi-ink mb-2">
                    {track.name}
                  </h3>
                  <p className="text-sm text-cardi-slate leading-relaxed">
                    {track.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {track.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50/50 group-hover:bg-gray-50 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (index * 0.1) + (featureIndex * 0.05) }}
                    >
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: track.color }}
                      />
                      <span className="text-sm font-medium text-cardi-slate">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Outcome Badge */}
                <motion.div
                  className="text-center p-3 rounded-lg border border-gray-200 bg-white/50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                >
                  <div className="text-xs font-medium text-cardi-slate mb-1">
                    OUTCOME
                  </div>
                  <div className="text-sm font-bold text-cardi-ink">
                    {track.outcomes}
                  </div>
                </motion.div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>

        {/* Improvements Banner */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-cardi-ink mb-6">
            Program Enhancements
          </h3>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {data.improvements.map((improvement, index) => (
              <motion.div
                key={improvement}
                className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm group hover:shadow-md transition-all"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.8 + (index * 0.1),
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{ scale: 1.05 }}
              >
                <ArrowRight className="w-4 h-4" style={{ color: sectionColor.accent }} />
                <span className="text-sm font-medium text-cardi-ink group-hover:text-cardi-ink/80">
                  {improvement}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}