'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { GeometricAvatar } from './GeometricAvatar'
import { cn } from '@/lib/utils'

interface OrbitingPhotoProps {
  person: { name: string; track: string; story: string }
  index: number
  totalCount: number
  isPaused: boolean
  onHover: (index: number | null) => void
  onClick: (person: { name: string; track: string; story: string }) => void
}

// SOLID: Single Responsibility - Component only handles individual photo orbit
function OrbitingPhoto({
  person,
  index,
  totalCount,
  isPaused,
  onHover,
  onClick
}: OrbitingPhotoProps) {
  const angleOffset = (360 / totalCount) * index
  const borderColor = index % 2 === 0 ? '#F59E0B' : '#EC4899'

  return (
    <motion.div
      className="absolute"
      style={{
        transform: `rotate(${angleOffset}deg) translateY(-150px)`
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(person)}
    >
      <motion.div
        className="relative cursor-pointer"
        style={{
          transform: `rotate(-${angleOffset}deg)`
        }}
        whileHover={{ scale: 1.15, zIndex: 10 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div
          className="rounded-full p-1 shadow-lg"
          style={{ backgroundColor: borderColor }}
        >
          <GeometricAvatar
            name={person.name}
            size="lg"
            className="w-20 h-20"
          />
        </div>
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-md opacity-0 pointer-events-none"
          whileHover={{ opacity: 1 }}
        >
          <span className="text-xs font-semibold text-gray-800 whitespace-nowrap">
            {person.name}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

interface CircularOrbitAnimationProps {
  people: Array<{ name: string; track: string; story: string }>
  onPersonClick?: (person: { name: string; track: string; story: string }) => void
  className?: string
}

export function CircularOrbitAnimation({
  people,
  onPersonClick,
  className
}: CircularOrbitAnimationProps) {
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  // DRY: Extract animation configuration
  const ORBIT_DURATION = 20
  const ROTATION_DEGREES = 360

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      controls.stop()
      return
    }

    // Continuous orbital rotation
    controls.start({
      rotate: ROTATION_DEGREES,
      transition: {
        duration: ORBIT_DURATION,
        ease: "linear",
        repeat: Infinity
      }
    })
  }, [controls, isPaused, prefersReducedMotion])

  const handleHover = (index: number | null) => {
    setHoveredIndex(index)
    setIsPaused(index !== null)
  }

  const handlePersonClick = (person: { name: string; track: string; story: string }) => {
    if (onPersonClick) {
      onPersonClick(person)
    }
  }

  // SOLID: Open/Closed - Easy to extend without modifying core logic
  const visiblePeople = people.slice(0, 6) // Show max 6 for optimal layout

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div
        ref={containerRef}
        className="relative w-[400px] h-[400px] flex items-center justify-center"
      >
        {/* Center decoration */}
        <div className="absolute w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />

        {/* Orbital container */}
        <motion.div
          className="relative w-full h-full"
          animate={controls}
          initial={{ rotate: 0 }}
        >
          {visiblePeople.map((person, index) => (
            <OrbitingPhoto
              key={person.name}
              person={person}
              index={index}
              totalCount={visiblePeople.length}
              isPaused={isPaused}
              onHover={handleHover}
              onClick={handlePersonClick}
            />
          ))}
        </motion.div>

        {/* Orbit path indicator (subtle) */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 rounded-full border border-dashed border-gray-200/20 pointer-events-none" />
        )}
      </div>

      {/* Accessibility hint */}
      {prefersReducedMotion && (
        <div className="absolute -bottom-12 text-xs text-gray-500 text-center">
          Click on a profile to view their story
        </div>
      )}
    </div>
  )
}