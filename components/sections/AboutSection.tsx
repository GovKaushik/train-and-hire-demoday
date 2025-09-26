'use client'

import { motion } from 'framer-motion'
import { Target, Users, Briefcase, TrendingUp } from 'lucide-react'

interface Feature {
  icon: string
  title: string
  description: string
}

interface AboutSectionProps {
  title: string
  subtitle: string
  mission: string
  approach: string
  features: Feature[]
}

const iconComponents = {
  target: Target,
  users: Users,
  briefcase: Briefcase,
  'trending-up': TrendingUp
}

export function AboutSection({
  title,
  subtitle,
  mission,
  approach,
  features
}: AboutSectionProps) {
  return (
    <section id="about" className="relative min-h-screen py-20">
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
              className="font-h1 text-cardi-ink"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-cardi-blue to-cardi-indigo mx-auto rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
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
          </div>
        </motion.div>

        {/* Mission & Approach Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="card-surface p-8 h-full">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cardi-blue to-cardi-indigo rounded-2xl flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-h3 text-cardi-ink">Our Mission</h3>
                </div>
                <p className="font-body text-cardi-ink/80 leading-relaxed">
                  {mission}
                </p>
              </div>

              {/* Pentagon accent */}
              <div className="absolute -top-3 -right-3">
                <div className="w-8 h-8 bg-cardi-blue/20 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Approach Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="card-surface p-8 h-full">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cardi-green to-cardi-yellow rounded-2xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-h3 text-cardi-ink">Our Approach</h3>
                </div>
                <p className="font-body text-cardi-ink/80 leading-relaxed">
                  {approach}
                </p>
              </div>

              {/* Pentagon accent */}
              <div className="absolute -top-3 -right-3">
                <div className="w-8 h-8 bg-cardi-green/20 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Panels Grid */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="font-h2 text-cardi-ink mb-4">How We Deliver</h3>
            <p className="font-body text-cardi-ink/60">
              Four pillars of our workforce development approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = iconComponents[feature.icon as keyof typeof iconComponents] || Target
              const gradientColors = [
                'from-cardi-red to-cardi-orange',
                'from-cardi-yellow to-cardi-green',
                'from-cardi-green to-cardi-blue',
                'from-cardi-blue to-cardi-indigo'
              ]

              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.9 + (index * 0.1)
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="pill-surface bg-white/80 p-6 h-full relative overflow-hidden"
                    whileHover={{
                      scale: 1.02,
                      y: -4
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                    <div className="relative z-10 space-y-4 text-center">
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${gradientColors[index]} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h4 className="font-h3 text-cardi-ink group-hover:text-cardi-ink transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="font-caption text-cardi-ink/70 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Shimmer effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      style={{ clipPath: 'polygon(0 0, 100px 0, 130px 100%, 30px 100%)' }}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cardi-blue/10 to-cardi-indigo/10 backdrop-blur-sm rounded-2xl border border-cardi-blue/20 shadow-lg">
            <div className="w-3 h-3 bg-gradient-to-r from-cardi-blue to-cardi-indigo rounded-full animate-pulse" />
            <span className="font-body text-cardi-ink font-medium">
              Building careers, one cohort at a time
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}