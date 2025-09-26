'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Target, Calendar, MapPin, Plus } from 'lucide-react'
import { PentagonMotif } from '@/components/base/GlobalBackground'

interface Metrics {
  totalGraduates: number
  placementRate: string
  retentionRate: string
  programGrowth: string
  mentorHours: number
  projectsCompleted: number
}

interface Testimonial {
  quote: string
  author: string
  role: string
}

interface Future {
  cohort3: string
  expansion: string
  tracks: string
  scale: string
}

interface ImpactData {
  title: string
  subtitle: string
  metrics: Metrics
  testimonials: Testimonial[]
  future: Future
}

interface ImpactSectionProps {
  data: ImpactData
}

export function ImpactSection({ data }: ImpactSectionProps) {
  const { title, subtitle, metrics, testimonials, future } = data

  const metricCards = [
    { label: 'Total Graduates', value: metrics.totalGraduates, icon: Users, color: 'from-cardy-green to-cardy-blue' },
    { label: 'Placement Rate', value: metrics.placementRate, icon: Award, color: 'from-cardy-blue to-cardy-indigo' },
    { label: 'Retention Rate', value: metrics.retentionRate, icon: TrendingUp, color: 'from-cardy-indigo to-cardy-red' },
    { label: 'Program Growth', value: metrics.programGrowth, icon: Target, color: 'from-cardy-red to-cardy-orange' },
    { label: 'Mentor Hours', value: metrics.mentorHours, icon: Calendar, color: 'from-cardy-orange to-cardy-yellow' },
    { label: 'Projects Completed', value: metrics.projectsCompleted, icon: Plus, color: 'from-cardy-yellow to-cardy-green' }
  ]

  return (
    <section id="impact" className="relative min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-8 mb-20"
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
              className="w-40 h-1 bg-gradient-to-r from-cardy-green via-cardy-blue to-cardy-indigo mx-auto rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 160, opacity: 1 }}
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
          </div>
        </motion.div>

        {/* Metrics Dashboard */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {metricCards.map((metric, index) => {
            const IconComponent = metric.icon

            return (
              <motion.div
                key={metric.label}
                className="card-surface p-6 text-center group hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + (index * 0.1)
                }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <motion.div
                    className="font-h2 text-cardy-ink"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.7 + (index * 0.1)
                    }}
                    viewport={{ once: true }}
                  >
                    {typeof metric.value === 'number' ? (
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0.9 + (index * 0.1)
                        }}
                        viewport={{ once: true }}
                      >
                        {metric.value}
                      </motion.span>
                    ) : (
                      metric.value
                    )}
                  </motion.div>
                  <div className="font-caption text-cardy-ink/60 uppercase tracking-wide text-xs">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Growth Visualization */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="font-h2 text-cardy-ink mb-4">Program Evolution</h3>
            <p className="font-body text-cardy-ink/60">
              From proof of concept to scalable workforce development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <motion.div
                className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-cardy-green via-cardy-blue to-cardy-indigo rounded-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, delay: 1.7 }}
                viewport={{ once: true }}
                style={{ transformOrigin: 'top' }}
              />

              <div className="space-y-8">
                {[
                  {
                    title: 'Cohort 1',
                    subtitle: 'Proof of Concept',
                    description: '5 started • 4 completed • 80% retention • 100% placement',
                    color: 'from-cardy-green to-cardy-blue'
                  },
                  {
                    title: 'Cohort 2',
                    subtitle: 'Scaling & Expansion',
                    description: '6 active participants • Dual-track curriculum • Group projects',
                    color: 'from-cardy-yellow to-cardy-orange'
                  },
                  {
                    title: 'Future Vision',
                    subtitle: 'Sustainable Growth',
                    description: 'Q2 2025 launch • University partnerships • 12-15 participants',
                    color: 'from-cardy-blue to-cardy-indigo'
                  }
                ].map((phase, index) => (
                  <motion.div
                    key={phase.title}
                    className="flex items-center space-x-8"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.9 + (index * 0.3)
                    }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center shadow-lg relative z-10`}>
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="card-surface p-6">
                        <h4 className="font-h3 text-cardy-ink mb-2">
                          {phase.title} • {phase.subtitle}
                        </h4>
                        <p className="font-body text-cardy-ink/70">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="font-h2 text-cardy-ink mb-4">Graduate Voices</h3>
            <p className="font-body text-cardy-ink/60">
              Hear from our successful graduates
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="card-surface p-8 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 2.7 + (index * 0.2)
                }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  {/* Quote */}
                  <blockquote className="font-body text-cardy-ink/80 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Attribution */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cardy-green to-cardy-blue rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold">
                        {testimonial.author.split(',')[0].charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-body font-semibold text-cardy-ink">
                        {testimonial.author}
                      </div>
                      <div className="font-caption text-cardy-ink/60">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>

                <PentagonMotif
                  size="sm"
                  color="cardy-green"
                  opacity={6}
                  animate={false}
                  className="absolute top-4 right-4"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-4">
            <h3 className="font-h2 text-cardy-ink">The Path Forward</h3>
            <p className="font-body text-cardy-ink/60">
              Building the future of workforce development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Cohort 3', value: future.cohort3, icon: Calendar, color: 'from-cardy-blue to-cardy-indigo' },
              { label: 'Partnerships', value: future.expansion, icon: MapPin, color: 'from-cardy-green to-cardy-yellow' },
              { label: 'New Tracks', value: future.tracks, icon: Plus, color: 'from-cardy-red to-cardy-orange' },
              { label: 'Scale Target', value: future.scale, icon: TrendingUp, color: 'from-cardy-yellow to-cardy-green' }
            ].map((item, index) => {
              const IconComponent = item.icon

              return (
                <motion.div
                  key={item.label}
                  className="card-surface p-6 group hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 3.4 + (index * 0.1)
                  }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-body font-semibold text-cardy-ink">
                        {item.label}
                      </h4>
                      <p className="font-caption text-cardy-ink/70 leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cardy-green/10 via-cardy-blue/10 to-cardy-indigo/10 backdrop-blur-sm rounded-2xl border border-cardy-green/20 shadow-lg">
            <div className="w-3 h-3 bg-gradient-to-r from-cardy-green via-cardy-blue to-cardy-indigo rounded-full animate-pulse" />
            <span className="font-body text-cardy-ink font-medium">
              Join the workforce development revolution
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}