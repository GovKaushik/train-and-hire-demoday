'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { GlobalBackground, PentagonMotif } from '@/components/base/GlobalBackground'

interface HeroSectionProps {
  headline: string
  subline: string
  backgroundVideo?: string
  backgroundPoster?: string
}

export function HeroSection({
  headline,
  subline,
  backgroundVideo,
  backgroundPoster
}: HeroSectionProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Global Background */}
      <GlobalBackground variant="hero" showPentagon={true} />

      {/* Background Video - only render on client */}
      {isClient && backgroundVideo && (
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster={backgroundPoster}
            style={{ filter: 'brightness(0.4) contrast(1.2)' }}
          >
            <source src={backgroundVideo} type="video/mp4" />
            <source src={backgroundVideo.replace('.mp4', '.webm')} type="video/webm" />
          </video>

          {/* Video overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-cardy-cloud/10 via-transparent to-cardy-cloud/20" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 text-center space-y-12 max-w-7xl mx-auto px-8">
        {/* Main Headline Plate */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.22, 0.61, 0.36, 1]
          }}
        >
          {/* Headline */}
          <div className="relative">
            {/* Background plate for headline */}
            <motion.div
              className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />

            {/* Headline text */}
            <div className="relative px-12 py-16 md:px-20 md:py-20">
              <motion.h1
                className="font-display text-cardy-ink leading-none tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {headline}
              </motion.h1>

              {/* Pentagon accent */}
              <motion.div
                className="absolute -top-6 -right-6 md:-top-8 md:-right-8"
                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1.2,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <PentagonMotif
                  size="md"
                  color="cardy-red"
                  opacity={15}
                  animate={false}
                />
              </motion.div>
            </div>
          </div>

          {/* Animated color rule */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="w-48 h-1.5 rounded-full overflow-hidden bg-cardy-border/50 shadow-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-cardy-red via-cardy-yellow to-cardy-green"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2.5,
                  delay: 1.4,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Subline */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="relative">
            {/* Subline background */}
            <motion.div
              className="absolute inset-0 bg-cardy-ink/5 backdrop-blur-sm rounded-2xl border border-cardy-border/20"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.9 }}
            />

            {/* Subline text */}
            <div className="relative px-8 py-6 md:px-12 md:py-8">
              <h2 className="font-h2 text-cardy-ink/90 leading-tight">
                {subline}
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-2"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-8 h-12 border-2 border-cardy-ink/30 rounded-full flex justify-center">
              <motion.div
                className="w-1.5 h-3 bg-cardy-ink/40 rounded-full mt-2"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <span className="text-sm text-cardy-ink/50 font-medium">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <PentagonMotif
            size="sm"
            color="cardy-blue"
            opacity={8}
            animate={true}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-20 right-20 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <PentagonMotif
            size="sm"
            color="cardy-green"
            opacity={8}
            animate={true}
          />
        </motion.div>
      </div>
    </section>
  )
}