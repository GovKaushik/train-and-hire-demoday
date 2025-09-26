'use client'

import { motion } from 'framer-motion'
import { Users, Code, BarChart3, Zap, CheckCircle, Clock } from 'lucide-react'
import { PentagonMotif } from '@/components/base/GlobalBackground'

interface Track {
  name: string
  participants: number
  focus: string
  projects: string[]
}

interface Participant {
  name: string
  track: string
  photo: string
  background: string
  progress: string
}

interface Cohort2Data {
  title: string
  subtitle: string
  stats: {
    started: number
    active: number
    retention: string
    completion: string
  }
  description: string
  improvements: string[]
  tracks: {
    ba: Track
    wai: Track
  }
  participants: Participant[]
}

interface Cohort2SectionProps {
  data: Cohort2Data
}

export function Cohort2Section({ data }: Cohort2SectionProps) {
  const { title, subtitle, stats, description, improvements, tracks, participants } = data

  return (
    <section id="cohort2" className="relative min-h-screen py-20">
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
              className="font-h1 text-cardi-ink"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>

            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-cardi-yellow to-cardi-orange mx-auto rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 128, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />

            <motion.h3
              className="font-h3 text-cardi-ink/80"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {subtitle}
            </motion.h3>

            <motion.p
              className="font-body text-cardi-ink/70 max-w-3xl mx-auto"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Started', value: stats.started, icon: Users, color: 'from-cardi-yellow to-cardi-orange' },
            { label: 'Active', value: stats.active, icon: CheckCircle, color: 'from-cardi-orange to-cardi-red' },
            { label: 'Retention', value: stats.retention, icon: BarChart3, color: 'from-cardi-green to-cardi-yellow' },
            { label: 'Progress', value: stats.completion, icon: Clock, color: 'from-cardi-blue to-cardi-green' }
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
                  <div className="font-h2 text-cardi-ink">{stat.value}</div>
                  <div className="font-caption text-cardi-ink/60 uppercase tracking-wide">{stat.label}</div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Improvements */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="font-h2 text-cardi-ink text-center mb-8">Program Improvements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {improvements.map((improvement, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-cardi-yellow/10 to-cardi-orange/10 backdrop-blur-sm rounded-full border border-cardi-yellow/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.9 + (index * 0.1)
                }}
                viewport={{ once: true }}
              >
                <span className="font-body text-cardi-ink font-medium">
                  {improvement}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dual Track Showcase */}
        <motion.div
          className="space-y-12 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-4">
            <h3 className="font-h2 text-cardi-ink">Dual-Track Learning</h3>
            <p className="font-body text-cardi-ink/60">
              Specialized tracks tailored for different career paths
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* BA Track */}
            <motion.div
              className="card-surface p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              viewport={{ once: true }}
            >
              {/* Background gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cardi-blue/5 to-cardi-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cardi-blue to-cardi-indigo rounded-2xl flex items-center justify-center shadow-lg">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-h3 text-cardi-ink">{tracks.ba.name}</h4>
                      <span className="font-caption text-cardi-ink/60">
                        {tracks.ba.participants} participants
                      </span>
                    </div>
                  </div>
                  <PentagonMotif size="sm" color="cardi-blue" opacity={8} animate={false} />
                </div>

                <p className="font-body text-cardi-ink/80">
                  {tracks.ba.focus}
                </p>

                <div className="space-y-3">
                  <h5 className="font-body font-semibold text-cardi-ink">Key Projects:</h5>
                  <div className="space-y-2">
                    {tracks.ba.projects.map((project, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cardi-blue rounded-full" />
                        <span className="font-caption text-cardi-ink/70">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* WAI Track */}
            <motion.div
              className="card-surface p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              viewport={{ once: true }}
            >
              {/* Background gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cardi-green/5 to-cardi-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cardi-green to-cardi-yellow rounded-2xl flex items-center justify-center shadow-lg">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-h3 text-cardi-ink">{tracks.wai.name}</h4>
                      <span className="font-caption text-cardi-ink/60">
                        {tracks.wai.participants} participants
                      </span>
                    </div>
                  </div>
                  <PentagonMotif size="sm" color="cardi-green" opacity={8} animate={false} />
                </div>

                <p className="font-body text-cardi-ink/80">
                  {tracks.wai.focus}
                </p>

                <div className="space-y-3">
                  <h5 className="font-body font-semibold text-cardi-ink">Key Projects:</h5>
                  <div className="space-y-2">
                    {tracks.wai.projects.map((project, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cardi-green rounded-full" />
                        <span className="font-caption text-cardi-ink/70">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Participant Showcase */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-4">
            <h3 className="font-h2 text-cardi-ink">Current Participants</h3>
            <p className="font-body text-cardi-ink/60">
              Meet our Cohort 2 participants and their progress
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {participants.map((participant, index) => {
              const trackColor = participant.track === 'BA'
                ? 'from-cardi-blue to-cardi-indigo'
                : 'from-cardi-green to-cardi-yellow'

              return (
                <motion.div
                  key={participant.name}
                  className="card-surface p-6 group hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.7 + (index * 0.1)
                  }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-4">
                    {/* Avatar and name */}
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${trackColor} rounded-full flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-bold">
                          {participant.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-body font-semibold text-cardi-ink">
                          {participant.name}
                        </h4>
                        <div className="inline-flex items-center px-2 py-1 bg-cardi-ink/5 rounded-full">
                          <span className="text-xs font-medium text-cardi-ink/70">
                            {participant.track} Track
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Background */}
                    <div className="space-y-1">
                      <h5 className="font-caption font-semibold text-cardi-ink/80 uppercase tracking-wide">
                        Background
                      </h5>
                      <p className="font-caption text-cardi-ink/70">
                        {participant.background}
                      </p>
                    </div>

                    {/* Progress */}
                    <div className="space-y-1">
                      <h5 className="font-caption font-semibold text-cardi-ink/80 uppercase tracking-wide">
                        Current Progress
                      </h5>
                      <p className="font-caption text-cardi-ink/70">
                        {participant.progress}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cardi-yellow/10 to-cardi-orange/10 backdrop-blur-sm rounded-2xl border border-cardi-yellow/20 shadow-lg">
            <div className="w-3 h-3 bg-gradient-to-r from-cardi-yellow to-cardi-orange rounded-full animate-pulse" />
            <span className="font-body text-cardi-ink font-medium">
              Curriculum enriched • Multi-track complexity • Group collaboration in action
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}