'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getSectionColor } from '@/components/base/ColorRhythm'

interface WelcomeHeroProps {
  title: string
  subtitle: string
  cohort: string
  heroVideo?: string
  heroPoster?: string
}

export function WelcomeHero({
  title,
  subtitle,
  cohort,
  heroVideo,
  heroPoster
}: WelcomeHeroProps) {
  const [isClient, setIsClient] = useState(false)
  const sectionColor = getSectionColor('welcome')

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section id="welcome" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Always show gradient background first to avoid hydration mismatch */}
      <div className="absolute inset-0 bg-gradient-to-br from-cardy-cloud via-white to-blue-50 z-0" />

      {/* Background Video - only render on client */}
      {isClient && heroVideo && (
        <div className="absolute inset-0 z-10">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster={heroPoster}
            style={{ filter: 'brightness(0.65) contrast(1.1)' }}
          >
            <source src={heroVideo} type="video/mp4" />
            <source src={heroVideo.replace('.mp4', '.webm')} type="video/webm" />
          </video>

          {/* White gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-transparent to-white/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
        </div>
      )}

      {/* Pentagon watermark */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full transform rotate-12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="50,5 95,35 77,85 23,85 5,35"
            fill="currentColor"
            className="text-cardy-ink"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center space-y-8 max-w-6xl mx-auto px-8">
        {/* Main Title */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-cardy-ink leading-tight tracking-tight">
            {title} {/* Updated title from content.json */}
          </h1>

          {/* Animated color rule */}
          <motion.div
            className="w-32 h-1 mx-auto rounded-full overflow-hidden bg-gray-200"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-cardy-red to-cardy-yellow"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 2,
                delay: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-cardy-slate"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {subtitle}
        </motion.h2>

        {/* Cohort meta */}
        <motion.p
          className="text-lg md:text-xl text-cardy-slate/80 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          {cohort}
        </motion.p>

        {/* Subtle scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-cardy-slate/40 rounded-full flex justify-center"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-cardy-slate/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}