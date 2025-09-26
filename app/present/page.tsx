'use client'

import { DeckLayout, DeckSection } from '@/components/layout/DeckLayout'
import contentData from '@/data/content.json'
import { WeeklyTimeline2Up } from '@/components/timeline/WeeklyTimeline2Up'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PresentPage() {
  const [selectedWeek, setSelectedWeek] = useState(null)

  return (
    <DeckLayout sections={contentData.presentation.toc.sections}>
      <DeckSection id="hero">
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="text-center px-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.h1
                className="font-display text-cardy-ink mb-8"
                style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                CARDY DEMO DAY FINALE
                <br />
                <span className="bg-gradient-to-r from-cardy-blue via-cardy-indigo to-cardy-purple bg-clip-text text-transparent">
                  COHORT 2, 2025
                </span>
              </motion.h1>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <div className="h-1 w-32 bg-cardy-brand-sweep mx-auto rounded-full" />

                <p className="text-xl md:text-2xl text-cardy-ink/80 font-medium leading-relaxed max-w-4xl mx-auto">
                  Highlighting the growing nature of
                  <span className="bg-gradient-to-r from-cardy-green to-cardy-blue bg-clip-text text-transparent font-semibold">
                    {' '}Train & Hire{' '}
                  </span>
                  as a workforce development asset
                </p>

                <motion.div
                  className="inline-flex items-center space-x-3 px-8 py-4 premium-card mx-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-cardy-green to-cardy-yellow rounded-full animate-pulse" />
                  <span className="text-cardy-ink font-semibold">
                    5-7 minutes • Interactive presentation
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-cardy-red/20 to-cardy-orange/20 rounded-full backdrop-blur-sm"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-br from-cardy-blue/20 to-cardy-indigo/20 rounded-full backdrop-blur-sm"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-1/2 right-8 w-12 h-12 bg-gradient-to-br from-cardy-green/20 to-cardy-yellow/20 rounded-full backdrop-blur-sm"
            animate={{
              y: [0, -10, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </DeckSection>

      <DeckSection id="toc">
        <div className="min-h-screen bg-cardy-cloud text-cardy-ink py-20">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-5xl font-bold text-cardy-ink">
                {contentData.presentation.toc.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cardy-blue to-cardy-indigo mx-auto rounded-full" />
              <p className="text-xl text-cardy-ink/70">
                5-7 minutes • {contentData.presentation.toc.sections.length} sections
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentData.presentation.toc.sections.map((section, index) => {
                const gradientColors = [
                  'from-cardy-red to-cardy-orange',
                  'from-cardy-orange to-cardy-yellow',
                  'from-cardy-yellow to-cardy-green',
                  'from-cardy-green to-cardy-blue',
                  'from-cardy-blue to-cardy-indigo'
                ]

                return (
                  <motion.div
                    key={section.id}
                    className="premium-card p-6 cursor-pointer group"
                    onClick={() => {
                      const element = document.getElementById(section.id)
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${gradientColors[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white text-2xl font-bold">
                        {index + 1}
                      </span>
                    </div>

                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold text-cardy-ink group-hover:text-cardy-blue transition-colors duration-300">
                        {section.label}
                      </h3>
                      <p className="text-cardy-ink/60 text-sm">
                        Duration: {section.duration}
                      </p>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-cardy-blue to-cardy-indigo mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cardy-blue/10 to-cardy-indigo/10 backdrop-blur-sm rounded-2xl border border-cardy-blue/20 shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-cardy-blue to-cardy-indigo rounded-full animate-pulse" />
                <span className="text-cardy-ink font-medium">
                  Click any section to jump directly there
                </span>
              </div>
            </div>
          </div>
        </div>
      </DeckSection>

      <DeckSection id="about">
        <div className="min-h-screen bg-cardy-cloud text-cardy-ink py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-5xl font-bold text-cardy-ink">
                {contentData.presentation.about.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cardy-blue to-cardy-indigo mx-auto rounded-full" />
              <h3 className="text-2xl text-cardy-ink/80">
                {contentData.presentation.about.subtitle}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cardy-blue to-cardy-indigo rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-cardy-ink">Our Mission</h3>
                </div>
                <p className="text-cardy-ink/80 leading-relaxed">
                  {contentData.presentation.about.mission}
                </p>
              </div>

              <div className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cardy-green to-cardy-yellow rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">📈</span>
                  </div>
                  <h3 className="text-2xl font-bold text-cardy-ink">Our Approach</h3>
                </div>
                <p className="text-cardy-ink/80 leading-relaxed">
                  {contentData.presentation.about.approach}
                </p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-cardy-ink mb-4">How We Deliver</h3>
              <p className="text-cardy-ink/60 mb-12">
                Four pillars of our workforce development approach
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contentData.presentation.about.features.map((feature, index) => {
                  const gradientColors = [
                    'from-cardy-red to-cardy-orange',
                    'from-cardy-yellow to-cardy-green',
                    'from-cardy-green to-cardy-blue',
                    'from-cardy-blue to-cardy-indigo'
                  ]

                  return (
                    <div key={index} className="bg-white/80 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
                      <div className={`w-16 h-16 bg-gradient-to-br ${gradientColors[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <span className="text-white text-2xl">
                          {feature.icon === 'target' && '🎯'}
                          {feature.icon === 'users' && '👥'}
                          {feature.icon === 'briefcase' && '💼'}
                          {feature.icon === 'trending-up' && '📈'}
                        </span>
                      </div>

                      <div className="text-center space-y-2">
                        <h4 className="text-xl font-bold text-cardy-ink">
                          {feature.title}
                        </h4>
                        <p className="text-cardy-ink/70 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cardy-blue/10 to-cardy-indigo/10 backdrop-blur-sm rounded-2xl border border-cardy-blue/20 shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-cardy-blue to-cardy-indigo rounded-full animate-pulse" />
                <span className="text-cardy-ink font-medium">
                  Building careers, one cohort at a time
                </span>
              </div>
            </div>
          </div>
        </div>
      </DeckSection>

      <DeckSection id="cohort1">
        <div className="min-h-screen bg-cardy-cloud text-cardy-ink py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-5xl font-bold text-cardy-ink">
                {contentData.presentation.cohort1.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cardy-blue to-cardy-indigo mx-auto rounded-full" />
              <h3 className="text-2xl text-cardy-ink/80">
                {contentData.presentation.cohort1.subtitle}
              </h3>
              <p className="text-xl text-cardy-ink/70 max-w-4xl mx-auto leading-relaxed">
                {contentData.presentation.cohort1.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cardy-blue to-cardy-indigo rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {contentData.presentation.cohort1.stats.started}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardy-ink mb-2">Started</h4>
                <p className="text-cardy-ink/70">Initial participants</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cardy-green to-cardy-yellow rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {contentData.presentation.cohort1.stats.completed}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardy-ink mb-2">Completed</h4>
                <p className="text-cardy-ink/70">Finished full program</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cardy-orange to-cardy-red rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-xl font-bold">
                    {contentData.presentation.cohort1.stats.retention}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardy-ink mb-2">Retention</h4>
                <p className="text-cardy-ink/70">Completion rate</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cardy-red to-cardy-orange rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-xl font-bold">
                    {contentData.presentation.cohort1.stats.placement}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardy-ink mb-2">Placement</h4>
                <p className="text-cardy-ink/70">Job success rate</p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-cardy-ink text-center mb-12">Success Stories</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {contentData.presentation.cohort1.graduates.map((graduate, index) => {
                  const gradientColors = [
                    'from-cardy-blue to-cardy-indigo',
                    'from-cardy-green to-cardy-yellow',
                    'from-cardy-orange to-cardy-red',
                    'from-cardy-red to-cardy-orange'
                  ]

                  return (
                    <div key={graduate.name} className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300 group">
                      <div className="flex items-start space-x-6 mb-6">
                        <div className={`w-20 h-20 bg-gradient-to-br ${gradientColors[index]} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-white text-2xl font-bold">
                            {graduate.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-cardy-ink mb-2">
                            {graduate.name}
                          </h4>
                          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cardy-blue/10 to-cardy-indigo/10 backdrop-blur-sm rounded-full border border-cardy-blue/20 mb-3">
                            <span className="text-sm font-medium text-cardy-ink">
                              {graduate.track} Track
                            </span>
                          </div>
                          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cardy-green/20 to-cardy-yellow/20 backdrop-blur-sm rounded-2xl border border-cardy-green/30 shadow-lg">
                            <span className="text-lg font-bold text-cardy-ink">
                              {graduate.outcome}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-cardy-ink/80 leading-relaxed mb-6">
                        {graduate.story}
                      </p>

                      <div className="space-y-3">
                        <h5 className="text-lg font-bold text-cardy-ink">Key Deliverables</h5>
                        <div className="flex flex-wrap gap-2">
                          {graduate.artifacts.map((artifact, artifactIndex) => (
                            <span
                              key={artifactIndex}
                              className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cardy-blue/10 to-cardy-indigo/10 backdrop-blur-sm rounded-full border border-cardy-blue/20 text-sm font-medium text-cardy-ink"
                            >
                              {artifact}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cardy-green/10 to-cardy-yellow/10 backdrop-blur-sm rounded-2xl border border-cardy-green/20 shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-cardy-green to-cardy-yellow rounded-full animate-pulse" />
                <span className="text-cardy-ink font-medium">
                  100% placement rate - proving the model works
                </span>
              </div>
            </div>
          </div>
        </div>
      </DeckSection>

      <DeckSection id="cohort2">
        <div className="min-h-screen bg-cardy-cloud text-cardy-ink py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-5xl font-bold text-cardy-ink">
                {contentData.presentation.cohort2.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cardy-blue to-cardy-indigo mx-auto rounded-full" />
              <h3 className="text-2xl text-cardy-ink/80">
                {contentData.presentation.cohort2.subtitle}
              </h3>
              <p className="text-xl text-cardy-ink/70 max-w-4xl mx-auto leading-relaxed">
                {contentData.presentation.cohort2.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cardy-blue to-cardy-indigo rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {contentData.presentation.cohort2.stats.started}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardy-ink mb-2">Started</h4>
                <p className="text-cardy-ink/70">Initial participants</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cardy-green to-cardy-yellow rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {contentData.presentation.cohort2.stats.active}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardy-ink mb-2">Active</h4>
                <p className="text-cardy-ink/70">Currently enrolled</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cardy-orange to-cardy-red rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-xl font-bold">
                    {contentData.presentation.cohort2.stats.retention}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardy-ink mb-2">Retention</h4>
                <p className="text-cardy-ink/70">Perfect retention</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cardy-red to-cardy-orange rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-sm font-bold px-1">
                    {contentData.presentation.cohort2.stats.completion}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardy-ink mb-2">Status</h4>
                <p className="text-cardy-ink/70">Ongoing program</p>
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-cardy-ink text-center mb-12">Dual-Track Innovation</h3>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cardy-blue to-cardy-indigo rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl">📊</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-cardy-ink">{contentData.presentation.cohort2.tracks.ba.name}</h3>
                      <p className="text-cardy-ink/60">{contentData.presentation.cohort2.tracks.ba.participants} participants</p>
                    </div>
                  </div>
                  <p className="text-cardy-ink/80 leading-relaxed mb-6">
                    {contentData.presentation.cohort2.tracks.ba.focus}
                  </p>
                  <div className="space-y-3">
                    <h5 className="text-lg font-bold text-cardy-ink">Current Projects</h5>
                    <div className="space-y-2">
                      {contentData.presentation.cohort2.tracks.ba.projects.map((project, index) => (
                        <div key={index} className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-cardy-blue/10 to-cardy-indigo/10 backdrop-blur-sm rounded-2xl border border-cardy-blue/20">
                          <div className="w-2 h-2 bg-gradient-to-r from-cardy-blue to-cardy-indigo rounded-full" />
                          <span className="text-cardy-ink font-medium">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cardy-green to-cardy-yellow rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl">🤖</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-cardy-ink">{contentData.presentation.cohort2.tracks.wai.name}</h3>
                      <p className="text-cardy-ink/60">{contentData.presentation.cohort2.tracks.wai.participants} participants</p>
                    </div>
                  </div>
                  <p className="text-cardy-ink/80 leading-relaxed mb-6">
                    {contentData.presentation.cohort2.tracks.wai.focus}
                  </p>
                  <div className="space-y-3">
                    <h5 className="text-lg font-bold text-cardy-ink">Current Projects</h5>
                    <div className="space-y-2">
                      {contentData.presentation.cohort2.tracks.wai.projects.map((project, index) => (
                        <div key={index} className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-cardy-green/10 to-cardy-yellow/10 backdrop-blur-sm rounded-2xl border border-cardy-green/20">
                          <div className="w-2 h-2 bg-gradient-to-r from-cardy-green to-cardy-yellow rounded-full" />
                          <span className="text-cardy-ink font-medium">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-cardy-ink text-center mb-12">Current Participants</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {contentData.presentation.cohort2.participants.map((participant, index) => {
                    const gradientColors = [
                      'from-cardy-blue to-cardy-indigo',
                      'from-cardy-green to-cardy-yellow',
                      'from-cardy-orange to-cardy-red',
                      'from-cardy-red to-cardy-orange',
                      'from-cardy-indigo to-cardy-blue',
                      'from-cardy-yellow to-cardy-green'
                    ]

                    return (
                      <div key={participant.name} className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300 group">
                        <div className="text-center mb-6">
                          <div className={`w-20 h-20 bg-gradient-to-br ${gradientColors[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-white text-2xl font-bold">
                              {participant.name.charAt(0)}
                            </span>
                          </div>
                          <h4 className="text-xl font-bold text-cardy-ink mb-2">
                            {participant.name}
                          </h4>
                          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cardy-blue/10 to-cardy-indigo/10 backdrop-blur-sm rounded-full border border-cardy-blue/20">
                            <span className="text-sm font-medium text-cardy-ink">
                              {participant.track} Track
                            </span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h5 className="text-sm font-bold text-cardy-ink/60 uppercase tracking-wide mb-2">Background</h5>
                            <p className="text-cardy-ink/80 text-sm leading-relaxed">
                              {participant.background}
                            </p>
                          </div>

                          <div>
                            <h5 className="text-sm font-bold text-cardy-ink/60 uppercase tracking-wide mb-2">Current Progress</h5>
                            <p className="text-cardy-ink font-medium leading-relaxed">
                              {participant.progress}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-cardy-ink text-center mb-8">Program Improvements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {contentData.presentation.cohort2.improvements.map((improvement, index) => {
                    const iconMap: { [key: number]: string } = {
                      0: '📚',
                      1: '🤝',
                      2: '🎯',
                      3: '⚙️'
                    }

                    const gradientColors = [
                      'from-cardy-blue to-cardy-indigo',
                      'from-cardy-green to-cardy-yellow',
                      'from-cardy-orange to-cardy-red',
                      'from-cardy-red to-cardy-orange'
                    ]

                    return (
                      <div key={index} className="flex items-center space-x-4 bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
                        <div className={`w-14 h-14 bg-gradient-to-br ${gradientColors[index]} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <span className="text-white text-xl">
                            {iconMap[index]}
                          </span>
                        </div>
                        <p className="text-cardy-ink font-medium leading-relaxed">
                          {improvement}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cardy-blue/10 to-cardy-indigo/10 backdrop-blur-sm rounded-2xl border border-cardy-blue/20 shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-cardy-blue to-cardy-indigo rounded-full animate-pulse" />
                <span className="text-cardy-ink font-medium">
                  Expanding our impact with dual tracks and group projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </DeckSection>

      <DeckSection id="timeline">
        <div className="min-h-screen bg-cardy-cloud text-cardy-ink">
          <WeeklyTimeline2Up />
        </div>
      </DeckSection>

      <DeckSection id="impact">
        <div className="min-h-screen bg-cardy-cloud text-cardy-ink py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-5xl font-bold text-cardy-ink">
                {contentData.presentation.impact.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cardy-blue to-cardy-indigo mx-auto rounded-full" />
              <h3 className="text-2xl text-cardy-ink/80">
                {contentData.presentation.impact.subtitle}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cardy-blue to-cardy-indigo rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {contentData.presentation.impact.metrics.totalGraduates}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardy-ink mb-2">Total Graduates</h4>
                <p className="text-cardy-ink/70">Across both cohorts</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cardy-green to-cardy-yellow rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-xl font-bold">
                    {contentData.presentation.impact.metrics.placementRate}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardy-ink mb-2">Placement Rate</h4>
                <p className="text-cardy-ink/70">Job success rate</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cardy-orange to-cardy-red rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-xl font-bold">
                    {contentData.presentation.impact.metrics.retentionRate}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardy-ink mb-2">Retention Rate</h4>
                <p className="text-cardy-ink/70">Program completion</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cardy-red to-cardy-orange rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-xl font-bold">
                    {contentData.presentation.impact.metrics.programGrowth}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardy-ink mb-2">Program Growth</h4>
                <p className="text-cardy-ink/70">Year over year</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cardy-indigo to-cardy-blue rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-lg font-bold">
                    {contentData.presentation.impact.metrics.mentorHours}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardy-ink mb-2">Mentor Hours</h4>
                <p className="text-cardy-ink/70">Direct support</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cardy-yellow to-cardy-green rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {contentData.presentation.impact.metrics.projectsCompleted}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardy-ink mb-2">Projects Completed</h4>
                <p className="text-cardy-ink/70">Real deliverables</p>
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-cardy-ink text-center mb-12">Impact Stories</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {contentData.presentation.impact.testimonials.map((testimonial, index) => {
                  const gradientColors = [
                    'from-cardy-blue to-cardy-indigo',
                    'from-cardy-green to-cardy-yellow'
                  ]

                  return (
                    <div key={index} className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                      <div className={`w-2 h-16 bg-gradient-to-b ${gradientColors[index]} rounded-full mb-6`} />
                      <blockquote className="text-xl text-cardy-ink/80 leading-relaxed mb-6 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="border-t border-cardy-ink/10 pt-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${gradientColors[index]} rounded-full flex items-center justify-center shadow-lg`}>
                            <span className="text-white text-lg font-bold">
                              {testimonial.author.split(',')[0].charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-bold text-cardy-ink">
                              {testimonial.author}
                            </p>
                            <p className="text-cardy-ink/70 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                <h3 className="text-3xl font-bold text-cardy-ink text-center mb-8">Future Vision</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-cardy-blue to-cardy-indigo rounded-full" />
                      <span className="text-cardy-ink font-medium">{contentData.presentation.impact.future.cohort3}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-cardy-green to-cardy-yellow rounded-full" />
                      <span className="text-cardy-ink font-medium">{contentData.presentation.impact.future.expansion}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-cardy-orange to-cardy-red rounded-full" />
                      <span className="text-cardy-ink font-medium">{contentData.presentation.impact.future.tracks}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-cardy-red to-cardy-orange rounded-full" />
                      <span className="text-cardy-ink font-medium">{contentData.presentation.impact.future.scale}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cardy-green/10 to-cardy-yellow/10 backdrop-blur-sm rounded-2xl border border-cardy-green/20 shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-cardy-green to-cardy-yellow rounded-full animate-pulse" />
                <span className="text-cardy-ink font-medium">
                  Building careers, one cohort at a time
                </span>
              </div>
            </div>
          </div>
        </div>
      </DeckSection>
    </DeckLayout>
  )
}