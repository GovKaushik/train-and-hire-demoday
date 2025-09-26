'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

interface GlobalBackgroundProps {
  variant?: 'hero' | 'content' | 'timeline' | 'impact'
  showPentagon?: boolean
  className?: string
}

export function GlobalBackground({
  variant = 'content',
  showPentagon = true,
  className = ''
}: GlobalBackgroundProps) {
  const [isClient, setIsClient] = useState(false)
  const { scrollYProgress } = useScroll()

  // Transform scroll progress to gradient position
  const gradientY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const pentagonOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.05, 0.15])
  const pentagonRotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Background gradient variants
  const gradientVariants = {
    hero: 'bg-gradient-to-br from-cardy-cloud via-white to-blue-50',
    content: 'bg-gradient-to-b from-cardy-cloud via-white to-cardy-cloud/50',
    timeline: 'bg-gradient-to-tr from-cardy-cloud via-white/90 to-indigo-50/70',
    impact: 'bg-gradient-to-bl from-green-50/50 via-white to-cardy-cloud'
  }

  // Pentagon color variants based on section
  const pentagonColors = {
    hero: 'text-cardy-ink/10',
    content: 'text-cardy-blue/8',
    timeline: 'text-cardy-indigo/12',
    impact: 'text-cardy-green/10'
  }

  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      {/* Base gradient background - always rendered */}
      <div className={`absolute inset-0 ${gradientVariants[variant]}`} />

      {/* Animated gradient overlay - only on client */}
      {isClient && (
        <>
          {/* Subtle animated gradient overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                ${variant === 'hero' ? '45deg' : '180deg'},
                var(--cardy-cloud) 0%,
                transparent 30%,
                transparent 70%,
                var(--cardy-cloud) 100%
              )`,
              y: gradientY
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2 }}
          />

          {/* Floating color accents */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-cardy-blue/5 blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-cardy-green/4 blur-3xl"
              animate={{
                x: [0, -25, 0],
                y: [0, 15, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-cardy-yellow/3 blur-3xl"
              animate={{
                x: [0, 20, 0],
                y: [0, -30, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            />
          </div>

          {/* Pentagon watermarks */}
          {showPentagon && (
            <>
              {/* Main large pentagon */}
              <motion.div
                className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none"
                style={{
                  opacity: pentagonOpacity,
                  rotate: pentagonRotate
                }}
              >
                <svg
                  viewBox="0 0 100 100"
                  className={`w-full h-full ${pentagonColors[variant]}`}
                  fill="currentColor"
                >
                  <polygon
                    points="50,5 95,35 77,85 23,85 5,35"
                    className="animate-pulse"
                    style={{ animationDuration: '8s' }}
                  />
                </svg>
              </motion.div>

              {/* Smaller pentagon accents */}
              <motion.div
                className="absolute bottom-20 left-20 w-32 h-32 pointer-events-none opacity-5"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <svg
                  viewBox="0 0 100 100"
                  className={`w-full h-full ${pentagonColors[variant]}`}
                  fill="currentColor"
                >
                  <polygon points="50,5 95,35 77,85 23,85 5,35" />
                </svg>
              </motion.div>

              <motion.div
                className="absolute top-1/3 left-1/4 w-24 h-24 pointer-events-none opacity-3"
                animate={{
                  rotate: [360, 0],
                  scale: [1, 0.8, 1]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
              >
                <svg
                  viewBox="0 0 100 100"
                  className={`w-full h-full ${pentagonColors[variant]}`}
                  fill="currentColor"
                >
                  <polygon points="50,5 95,35 77,85 23,85 5,35" />
                </svg>
              </motion.div>
            </>
          )}

          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 1px 1px, var(--cardy-ink) 1px, transparent 0)
              `,
              backgroundSize: '32px 32px'
            }}
          />
        </>
      )}
    </div>
  )
}

// Pentagon motif component for individual use
export function PentagonMotif({
  size = 'md',
  color = 'cardy-ink',
  opacity = 10,
  animate = true,
  className = ''
}: {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: string
  opacity?: number
  animate?: boolean
  className?: string
}) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  }

  const MotionDiv = animate ? motion.div : 'div'
  const animationProps = animate && isClient ? {
    animate: {
      rotate: [0, 360],
      scale: [1, 1.05, 1]
    },
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
    }
  } : {}

  return (
    <MotionDiv
      className={`${sizeClasses[size]} pointer-events-none ${className}`}
      style={{ opacity: opacity / 100 }}
      {...(animate && isClient ? animationProps : {})}
    >
      <svg
        viewBox="0 0 100 100"
        className={`w-full h-full text-${color}`}
        fill="currentColor"
      >
        <polygon points="50,5 95,35 77,85 23,85 5,35" />
      </svg>
    </MotionDiv>
  )
}