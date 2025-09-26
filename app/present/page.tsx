'use client'

import { DeckLayout, DeckSection } from '@/components/layout/DeckLayout'
import contentData from '@/data/content.json'
import { useState } from 'react'

export default function PresentPage() {
  const [selectedWeek, setSelectedWeek] = useState(null)

  return (
    <DeckLayout sections={contentData.presentation.toc.sections}>
      <DeckSection id="hero">
        <div className="min-h-screen bg-cardi-cloud text-cardi-ink flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 text-cardi-ink">
              {contentData.presentation.hero.headline}
            </h1>
            <p className="text-xl text-cardi-ink/70">
              {contentData.presentation.hero.subline}
            </p>
          </div>
        </div>
      </DeckSection>

      <DeckSection id="toc">
        <div className="min-h-screen bg-cardi-cloud text-cardi-ink py-20">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-5xl font-bold text-cardi-ink">
                {contentData.presentation.toc.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cardi-blue to-cardi-indigo mx-auto rounded-full" />
              <p className="text-xl text-cardi-ink/70">
                5-7 minutes • {contentData.presentation.toc.sections.length} sections
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentData.presentation.toc.sections.map((section, index) => {
                const gradientColors = [
                  'from-cardi-red to-cardi-orange',
                  'from-cardi-orange to-cardi-yellow',
                  'from-cardi-yellow to-cardi-green',
                  'from-cardi-green to-cardi-blue',
                  'from-cardi-blue to-cardi-indigo'
                ]

                return (
                  <div
                    key={section.id}
                    className="bg-white/80 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 backdrop-blur-sm cursor-pointer group"
                    onClick={() => {
                      const element = document.getElementById(section.id)
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${gradientColors[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white text-2xl font-bold">
                        {index + 1}
                      </span>
                    </div>

                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold text-cardi-ink group-hover:text-cardi-blue transition-colors duration-300">
                        {section.label}
                      </h3>
                      <p className="text-cardi-ink/60 text-sm">
                        Duration: {section.duration}
                      </p>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-cardi-blue to-cardi-indigo mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cardi-blue/10 to-cardi-indigo/10 backdrop-blur-sm rounded-2xl border border-cardi-blue/20 shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-cardi-blue to-cardi-indigo rounded-full animate-pulse" />
                <span className="text-cardi-ink font-medium">
                  Click any section to jump directly there
                </span>
              </div>
            </div>
          </div>
        </div>
      </DeckSection>

      <DeckSection id="about">
        <div className="min-h-screen bg-cardi-cloud text-cardi-ink py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-5xl font-bold text-cardi-ink">
                {contentData.presentation.about.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cardi-blue to-cardi-indigo mx-auto rounded-full" />
              <h3 className="text-2xl text-cardi-ink/80">
                {contentData.presentation.about.subtitle}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cardi-blue to-cardi-indigo rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-cardi-ink">Our Mission</h3>
                </div>
                <p className="text-cardi-ink/80 leading-relaxed">
                  {contentData.presentation.about.mission}
                </p>
              </div>

              <div className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cardi-green to-cardi-yellow rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">📈</span>
                  </div>
                  <h3 className="text-2xl font-bold text-cardi-ink">Our Approach</h3>
                </div>
                <p className="text-cardi-ink/80 leading-relaxed">
                  {contentData.presentation.about.approach}
                </p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-cardi-ink mb-4">How We Deliver</h3>
              <p className="text-cardi-ink/60 mb-12">
                Four pillars of our workforce development approach
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contentData.presentation.about.features.map((feature, index) => {
                  const gradientColors = [
                    'from-cardi-red to-cardi-orange',
                    'from-cardi-yellow to-cardi-green',
                    'from-cardi-green to-cardi-blue',
                    'from-cardi-blue to-cardi-indigo'
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
                        <h4 className="text-xl font-bold text-cardi-ink">
                          {feature.title}
                        </h4>
                        <p className="text-cardi-ink/70 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cardi-blue/10 to-cardi-indigo/10 backdrop-blur-sm rounded-2xl border border-cardi-blue/20 shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-cardi-blue to-cardi-indigo rounded-full animate-pulse" />
                <span className="text-cardi-ink font-medium">
                  Building careers, one cohort at a time
                </span>
              </div>
            </div>
          </div>
        </div>
      </DeckSection>

      <DeckSection id="cohort1">
        <div className="min-h-screen bg-cardi-cloud text-cardi-ink py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-5xl font-bold text-cardi-ink">
                {contentData.presentation.cohort1.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cardi-blue to-cardi-indigo mx-auto rounded-full" />
              <h3 className="text-2xl text-cardi-ink/80">
                {contentData.presentation.cohort1.subtitle}
              </h3>
              <p className="text-xl text-cardi-ink/70 max-w-4xl mx-auto leading-relaxed">
                {contentData.presentation.cohort1.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cardi-blue to-cardi-indigo rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {contentData.presentation.cohort1.stats.started}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardi-ink mb-2">Started</h4>
                <p className="text-cardi-ink/70">Initial participants</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cardi-green to-cardi-yellow rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {contentData.presentation.cohort1.stats.completed}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardi-ink mb-2">Completed</h4>
                <p className="text-cardi-ink/70">Finished full program</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cardi-orange to-cardi-red rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-xl font-bold">
                    {contentData.presentation.cohort1.stats.retention}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardi-ink mb-2">Retention</h4>
                <p className="text-cardi-ink/70">Completion rate</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cardi-red to-cardi-orange rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-xl font-bold">
                    {contentData.presentation.cohort1.stats.placement}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardi-ink mb-2">Placement</h4>
                <p className="text-cardi-ink/70">Job success rate</p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-cardi-ink text-center mb-12">Success Stories</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {contentData.presentation.cohort1.graduates.map((graduate, index) => {
                  const gradientColors = [
                    'from-cardi-blue to-cardi-indigo',
                    'from-cardi-green to-cardi-yellow',
                    'from-cardi-orange to-cardi-red',
                    'from-cardi-red to-cardi-orange'
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
                          <h4 className="text-2xl font-bold text-cardi-ink mb-2">
                            {graduate.name}
                          </h4>
                          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cardi-blue/10 to-cardi-indigo/10 backdrop-blur-sm rounded-full border border-cardi-blue/20 mb-3">
                            <span className="text-sm font-medium text-cardi-ink">
                              {graduate.track} Track
                            </span>
                          </div>
                          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cardi-green/20 to-cardi-yellow/20 backdrop-blur-sm rounded-2xl border border-cardi-green/30 shadow-lg">
                            <span className="text-lg font-bold text-cardi-ink">
                              {graduate.outcome}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-cardi-ink/80 leading-relaxed mb-6">
                        {graduate.story}
                      </p>

                      <div className="space-y-3">
                        <h5 className="text-lg font-bold text-cardi-ink">Key Deliverables</h5>
                        <div className="flex flex-wrap gap-2">
                          {graduate.artifacts.map((artifact, artifactIndex) => (
                            <span
                              key={artifactIndex}
                              className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cardi-blue/10 to-cardi-indigo/10 backdrop-blur-sm rounded-full border border-cardi-blue/20 text-sm font-medium text-cardi-ink"
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
              <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cardi-green/10 to-cardi-yellow/10 backdrop-blur-sm rounded-2xl border border-cardi-green/20 shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-cardi-green to-cardi-yellow rounded-full animate-pulse" />
                <span className="text-cardi-ink font-medium">
                  100% placement rate - proving the model works
                </span>
              </div>
            </div>
          </div>
        </div>
      </DeckSection>

      <DeckSection id="cohort2">
        <div className="min-h-screen bg-cardi-cloud text-cardi-ink py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-5xl font-bold text-cardi-ink">
                {contentData.presentation.cohort2.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cardi-blue to-cardi-indigo mx-auto rounded-full" />
              <h3 className="text-2xl text-cardi-ink/80">
                {contentData.presentation.cohort2.subtitle}
              </h3>
              <p className="text-xl text-cardi-ink/70 max-w-4xl mx-auto leading-relaxed">
                {contentData.presentation.cohort2.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cardi-blue to-cardi-indigo rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {contentData.presentation.cohort2.stats.started}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardi-ink mb-2">Started</h4>
                <p className="text-cardi-ink/70">Initial participants</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cardi-green to-cardi-yellow rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {contentData.presentation.cohort2.stats.active}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardi-ink mb-2">Active</h4>
                <p className="text-cardi-ink/70">Currently enrolled</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cardi-orange to-cardi-red rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-xl font-bold">
                    {contentData.presentation.cohort2.stats.retention}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardi-ink mb-2">Retention</h4>
                <p className="text-cardi-ink/70">Perfect retention</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cardi-red to-cardi-orange rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-sm font-bold px-1">
                    {contentData.presentation.cohort2.stats.completion}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardi-ink mb-2">Status</h4>
                <p className="text-cardi-ink/70">Ongoing program</p>
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-cardi-ink text-center mb-12">Dual-Track Innovation</h3>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cardi-blue to-cardi-indigo rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl">📊</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-cardi-ink">{contentData.presentation.cohort2.tracks.ba.name}</h3>
                      <p className="text-cardi-ink/60">{contentData.presentation.cohort2.tracks.ba.participants} participants</p>
                    </div>
                  </div>
                  <p className="text-cardi-ink/80 leading-relaxed mb-6">
                    {contentData.presentation.cohort2.tracks.ba.focus}
                  </p>
                  <div className="space-y-3">
                    <h5 className="text-lg font-bold text-cardi-ink">Current Projects</h5>
                    <div className="space-y-2">
                      {contentData.presentation.cohort2.tracks.ba.projects.map((project, index) => (
                        <div key={index} className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-cardi-blue/10 to-cardi-indigo/10 backdrop-blur-sm rounded-2xl border border-cardi-blue/20">
                          <div className="w-2 h-2 bg-gradient-to-r from-cardi-blue to-cardi-indigo rounded-full" />
                          <span className="text-cardi-ink font-medium">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cardi-green to-cardi-yellow rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl">🤖</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-cardi-ink">{contentData.presentation.cohort2.tracks.wai.name}</h3>
                      <p className="text-cardi-ink/60">{contentData.presentation.cohort2.tracks.wai.participants} participants</p>
                    </div>
                  </div>
                  <p className="text-cardi-ink/80 leading-relaxed mb-6">
                    {contentData.presentation.cohort2.tracks.wai.focus}
                  </p>
                  <div className="space-y-3">
                    <h5 className="text-lg font-bold text-cardi-ink">Current Projects</h5>
                    <div className="space-y-2">
                      {contentData.presentation.cohort2.tracks.wai.projects.map((project, index) => (
                        <div key={index} className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-cardi-green/10 to-cardi-yellow/10 backdrop-blur-sm rounded-2xl border border-cardi-green/20">
                          <div className="w-2 h-2 bg-gradient-to-r from-cardi-green to-cardi-yellow rounded-full" />
                          <span className="text-cardi-ink font-medium">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-cardi-ink text-center mb-12">Current Participants</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {contentData.presentation.cohort2.participants.map((participant, index) => {
                    const gradientColors = [
                      'from-cardi-blue to-cardi-indigo',
                      'from-cardi-green to-cardi-yellow',
                      'from-cardi-orange to-cardi-red',
                      'from-cardi-red to-cardi-orange',
                      'from-cardi-indigo to-cardi-blue',
                      'from-cardi-yellow to-cardi-green'
                    ]

                    return (
                      <div key={participant.name} className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300 group">
                        <div className="text-center mb-6">
                          <div className={`w-20 h-20 bg-gradient-to-br ${gradientColors[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-white text-2xl font-bold">
                              {participant.name.charAt(0)}
                            </span>
                          </div>
                          <h4 className="text-xl font-bold text-cardi-ink mb-2">
                            {participant.name}
                          </h4>
                          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cardi-blue/10 to-cardi-indigo/10 backdrop-blur-sm rounded-full border border-cardi-blue/20">
                            <span className="text-sm font-medium text-cardi-ink">
                              {participant.track} Track
                            </span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h5 className="text-sm font-bold text-cardi-ink/60 uppercase tracking-wide mb-2">Background</h5>
                            <p className="text-cardi-ink/80 text-sm leading-relaxed">
                              {participant.background}
                            </p>
                          </div>

                          <div>
                            <h5 className="text-sm font-bold text-cardi-ink/60 uppercase tracking-wide mb-2">Current Progress</h5>
                            <p className="text-cardi-ink font-medium leading-relaxed">
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
                <h3 className="text-3xl font-bold text-cardi-ink text-center mb-8">Program Improvements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {contentData.presentation.cohort2.improvements.map((improvement, index) => {
                    const iconMap: { [key: number]: string } = {
                      0: '📚',
                      1: '🤝',
                      2: '🎯',
                      3: '⚙️'
                    }

                    const gradientColors = [
                      'from-cardi-blue to-cardi-indigo',
                      'from-cardi-green to-cardi-yellow',
                      'from-cardi-orange to-cardi-red',
                      'from-cardi-red to-cardi-orange'
                    ]

                    return (
                      <div key={index} className="flex items-center space-x-4 bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
                        <div className={`w-14 h-14 bg-gradient-to-br ${gradientColors[index]} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <span className="text-white text-xl">
                            {iconMap[index]}
                          </span>
                        </div>
                        <p className="text-cardi-ink font-medium leading-relaxed">
                          {improvement}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cardi-blue/10 to-cardi-indigo/10 backdrop-blur-sm rounded-2xl border border-cardi-blue/20 shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-cardi-blue to-cardi-indigo rounded-full animate-pulse" />
                <span className="text-cardi-ink font-medium">
                  Expanding our impact with dual tracks and group projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </DeckSection>

      <DeckSection id="timeline">
        <div className="min-h-screen bg-cardi-cloud text-cardi-ink py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-5xl font-bold text-cardi-ink">
                {contentData.presentation.timeline.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cardi-blue to-cardi-indigo mx-auto rounded-full" />
              <h3 className="text-2xl text-cardi-ink/80">
                {contentData.presentation.timeline.subtitle}
              </h3>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-cardi-blue to-cardi-indigo rounded-full" />

              <div className="space-y-16">
                {contentData.presentation.timeline.weeks.map((week, index) => {
                  const isLeft = index % 2 === 0
                  const weekThemeColors = [
                    'from-cardi-blue to-cardi-indigo',
                    'from-cardi-green to-cardi-yellow',
                    'from-cardi-orange to-cardi-red',
                    'from-cardi-red to-cardi-orange',
                    'from-cardi-indigo to-cardi-blue',
                    'from-cardi-yellow to-cardi-green',
                    'from-cardi-red to-cardi-orange',
                    'from-cardi-orange to-cardi-yellow'
                  ]

                  return (
                    <div key={week.week} className={`flex items-center ${isLeft ? '' : 'flex-row-reverse'}`}>
                      <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <div className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                          <div className="flex items-center space-x-4 mb-6">
                            <div className={`w-16 h-16 bg-gradient-to-br ${weekThemeColors[index]} rounded-2xl flex items-center justify-center shadow-lg`}>
                              <span className="text-white text-xl font-bold">
                                {week.week}
                              </span>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-cardi-ink">{week.theme}</h3>
                              <p className="text-cardi-ink/60">Week {week.week}</p>
                            </div>
                          </div>

                          {week.ba && (
                            <div className="space-y-4 mb-6">
                              <div className="bg-gradient-to-r from-cardi-blue/10 to-cardi-indigo/10 backdrop-blur-sm rounded-2xl p-6 border border-cardi-blue/20">
                                <h4 className="text-xl font-bold text-cardi-ink mb-3 flex items-center">
                                  <span className="w-3 h-3 bg-gradient-to-r from-cardi-blue to-cardi-indigo rounded-full mr-3" />
                                  BA Track: {week.ba.title}
                                </h4>
                                <div className="space-y-2 mb-4">
                                  {week.ba.topics.map((topic, topicIndex) => (
                                    <div key={topicIndex} className="flex items-center space-x-2 text-cardi-ink/80">
                                      <div className="w-1 h-1 bg-cardi-blue rounded-full" />
                                      <span>{topic}</span>
                                    </div>
                                  ))}
                                </div>
                                <div className="text-sm">
                                  <strong className="text-cardi-ink">Deliverable:</strong> <span className="text-cardi-ink/80">{week.ba.deliverable}</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {week.wai && (
                            <div className="space-y-4 mb-6">
                              <div className="bg-gradient-to-r from-cardi-green/10 to-cardi-yellow/10 backdrop-blur-sm rounded-2xl p-6 border border-cardi-green/20">
                                <h4 className="text-xl font-bold text-cardi-ink mb-3 flex items-center">
                                  <span className="w-3 h-3 bg-gradient-to-r from-cardi-green to-cardi-yellow rounded-full mr-3" />
                                  WAI Track: {week.wai.title}
                                </h4>
                                <div className="space-y-2 mb-4">
                                  {week.wai.topics.map((topic, topicIndex) => (
                                    <div key={topicIndex} className="flex items-center space-x-2 text-cardi-ink/80">
                                      <div className="w-1 h-1 bg-cardi-green rounded-full" />
                                      <span>{topic}</span>
                                    </div>
                                  ))}
                                </div>
                                <div className="text-sm">
                                  <strong className="text-cardi-ink">Deliverable:</strong> <span className="text-cardi-ink/80">{week.wai.deliverable}</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {week.shared && (
                            <div className="space-y-4">
                              <div className="bg-gradient-to-r from-cardi-orange/10 to-cardi-red/10 backdrop-blur-sm rounded-2xl p-6 border border-cardi-orange/20">
                                <h4 className="text-xl font-bold text-cardi-ink mb-3 flex items-center">
                                  <span className="w-3 h-3 bg-gradient-to-r from-cardi-orange to-cardi-red rounded-full mr-3" />
                                  Shared: {week.shared.title}
                                </h4>
                                <div className="space-y-2 mb-4">
                                  {week.shared.topics.map((topic, topicIndex) => (
                                    <div key={topicIndex} className="flex items-center space-x-2 text-cardi-ink/80">
                                      <div className="w-1 h-1 bg-cardi-orange rounded-full" />
                                      <span>{topic}</span>
                                    </div>
                                  ))}
                                </div>
                                <div className="text-sm">
                                  <strong className="text-cardi-ink">Deliverable:</strong> <span className="text-cardi-ink/80">{week.shared.deliverable}</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="absolute left-1/2 transform -translate-x-1/2">
                        <div className={`w-8 h-8 bg-gradient-to-br ${weekThemeColors[index]} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
                          <span className="text-white text-sm font-bold">{week.week}</span>
                        </div>
                      </div>

                      <div className="w-1/2" />
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cardi-orange/10 to-cardi-red/10 backdrop-blur-sm rounded-2xl border border-cardi-orange/20 shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-cardi-orange to-cardi-red rounded-full animate-pulse" />
                <span className="text-cardi-ink font-medium">
                  8 weeks from potential to placement
                </span>
              </div>
            </div>
          </div>
        </div>
      </DeckSection>

      <DeckSection id="impact">
        <div className="min-h-screen bg-cardi-cloud text-cardi-ink py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-5xl font-bold text-cardi-ink">
                {contentData.presentation.impact.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cardi-blue to-cardi-indigo mx-auto rounded-full" />
              <h3 className="text-2xl text-cardi-ink/80">
                {contentData.presentation.impact.subtitle}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cardi-blue to-cardi-indigo rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {contentData.presentation.impact.metrics.totalGraduates}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardi-ink mb-2">Total Graduates</h4>
                <p className="text-cardi-ink/70">Across both cohorts</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cardi-green to-cardi-yellow rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-xl font-bold">
                    {contentData.presentation.impact.metrics.placementRate}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardi-ink mb-2">Placement Rate</h4>
                <p className="text-cardi-ink/70">Job success rate</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cardi-orange to-cardi-red rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-xl font-bold">
                    {contentData.presentation.impact.metrics.retentionRate}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardi-ink mb-2">Retention Rate</h4>
                <p className="text-cardi-ink/70">Program completion</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cardi-red to-cardi-orange rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-xl font-bold">
                    {contentData.presentation.impact.metrics.programGrowth}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardi-ink mb-2">Program Growth</h4>
                <p className="text-cardi-ink/70">Year over year</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cardi-indigo to-cardi-blue rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-lg font-bold">
                    {contentData.presentation.impact.metrics.mentorHours}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardi-ink mb-2">Mentor Hours</h4>
                <p className="text-cardi-ink/70">Direct support</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cardi-yellow to-cardi-green rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {contentData.presentation.impact.metrics.projectsCompleted}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-cardi-ink mb-2">Projects Completed</h4>
                <p className="text-cardi-ink/70">Real deliverables</p>
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-cardi-ink text-center mb-12">Impact Stories</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {contentData.presentation.impact.testimonials.map((testimonial, index) => {
                  const gradientColors = [
                    'from-cardi-blue to-cardi-indigo',
                    'from-cardi-green to-cardi-yellow'
                  ]

                  return (
                    <div key={index} className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                      <div className={`w-2 h-16 bg-gradient-to-b ${gradientColors[index]} rounded-full mb-6`} />
                      <blockquote className="text-xl text-cardi-ink/80 leading-relaxed mb-6 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="border-t border-cardi-ink/10 pt-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${gradientColors[index]} rounded-full flex items-center justify-center shadow-lg`}>
                            <span className="text-white text-lg font-bold">
                              {testimonial.author.split(',')[0].charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-bold text-cardi-ink">
                              {testimonial.author}
                            </p>
                            <p className="text-cardi-ink/70 text-sm">
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
                <h3 className="text-3xl font-bold text-cardi-ink text-center mb-8">Future Vision</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-cardi-blue to-cardi-indigo rounded-full" />
                      <span className="text-cardi-ink font-medium">{contentData.presentation.impact.future.cohort3}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-cardi-green to-cardi-yellow rounded-full" />
                      <span className="text-cardi-ink font-medium">{contentData.presentation.impact.future.expansion}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-cardi-orange to-cardi-red rounded-full" />
                      <span className="text-cardi-ink font-medium">{contentData.presentation.impact.future.tracks}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-cardi-red to-cardi-orange rounded-full" />
                      <span className="text-cardi-ink font-medium">{contentData.presentation.impact.future.scale}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cardi-green/10 to-cardi-yellow/10 backdrop-blur-sm rounded-2xl border border-cardi-green/20 shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-cardi-green to-cardi-yellow rounded-full animate-pulse" />
                <span className="text-cardi-ink font-medium">
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