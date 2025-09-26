'use client'

import { motion } from 'framer-motion'
import { Users, Award, TrendingUp, CheckCircle } from 'lucide-react'
import { PentagonMotif } from '@/components/base/GlobalBackground'

interface Graduate {
  name: string
  track: string
  photo: string
  outcome: string
  story: string
  artifacts: string[]
}

interface Cohort1Data {
  title: string
  subtitle: string
  stats: {
    started: number
    completed: number
    retention: string
    placement: string
  }
  description: string
  graduates: Graduate[]
}

interface Cohort1SectionProps {
  data: Cohort1Data
}

export function Cohort1Section({ data }: Cohort1SectionProps) {
  const { title, subtitle, stats, description, graduates } = data

  return (
    <section id="cohort1" className="relative min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <motion.h2
              className="font-h1 text-cardy-ink"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>

            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-cardy-green to-cardy-blue mx-auto rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 128, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />

            <motion.h3
              className="font-h3 text-cardy-ink/80"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {subtitle}
            </motion.h3>

            <motion.p
              className="font-body text-cardy-ink/70 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
          </div>
        </motion.div>

        {/* Stats Dashboard */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Started', value: stats.started, icon: Users, color: 'from-cardy-blue to-cardy-indigo' },
            { label: 'Completed', value: stats.completed, icon: Award, color: 'from-cardy-green to-cardy-blue' },
            { label: 'Retention', value: stats.retention, icon: TrendingUp, color: 'from-cardy-yellow to-cardy-green' },
            { label: 'Placement', value: stats.placement, icon: CheckCircle, color: 'from-cardy-green to-cardy-yellow' }
          ].map((stat, index) => {
            const IconComponent = stat.icon

            return (
              <motion.div
                key={stat.label}
                className="card-surface p-6 text-center group hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + (index * 0.1)
                }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="font-h2 text-cardy-ink">{stat.value}</div>
                  <div className="font-caption text-cardy-ink/60 uppercase tracking-wide">{stat.label}</div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Graduate Showcase */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-4">
            <h3 className="font-h2 text-cardy-ink">Success Stories</h3>
            <p className="font-body text-cardy-ink/60">
              Meet our Cohort 1 graduates and their career journeys
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {graduates.map((graduate, index) => (
              <motion.div
                key={graduate.name}
                className="group relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9 + (index * 0.2)
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="card-surface p-8 h-full relative overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    y: -8
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cardy-green/5 to-cardy-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        {/* Avatar placeholder */}
                        <div className="w-16 h-16 bg-gradient-to-br from-cardy-green to-cardy-blue rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">
                            {graduate.name.charAt(0)}
                          </span>
                        </div>

                        <div>
                          <h4 className="font-h3 text-cardy-ink">{graduate.name}</h4>
                          <div className="inline-flex items-center px-3 py-1 bg-cardy-blue/10 rounded-full">
                            <span className="text-xs font-semibold text-cardy-blue uppercase tracking-wide">
                              {graduate.track} Track
                            </span>
                          </div>
                        </div>
                      </div>

                      <PentagonMotif size="sm" color="cardy-green" opacity={8} animate={false} />
                    </div>

                    {/* Outcome */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-cardy-green" />
                        <span className="font-body font-medium text-cardy-green">
                          {graduate.outcome}
                        </span>
                      </div>
                    </div>

                    {/* Story */}
                    <p className="font-body text-cardy-ink/80 leading-relaxed">
                      {graduate.story}
                    </p>

                    {/* Artifacts */}
                    <div className="space-y-3">
                      <h5 className="font-body font-semibold text-cardy-ink">Key Deliverables:</h5>
                      <div className="flex flex-wrap gap-2">
                        {graduate.artifacts.map((artifact, i) => (
                          <div
                            key={i}
                            className="px-3 py-1 bg-cardy-ink/5 rounded-full border border-cardy-border/20"
                          >
                            <span className="text-xs font-medium text-cardy-ink/70">
                              {artifact}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{ clipPath: 'polygon(0 0, 100px 0, 130px 100%, 30px 100%)' }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cardy-green/10 to-cardy-blue/10 backdrop-blur-sm rounded-2xl border border-cardy-green/20 shadow-lg">
            <div className="w-3 h-3 bg-gradient-to-r from-cardy-green to-cardy-blue rounded-full animate-pulse" />
            <span className="font-body text-cardy-ink font-medium">
              Proof of concept validated • Foundation established • Model proven
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}