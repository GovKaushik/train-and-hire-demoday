'use client'

import { ReactNode, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  scale?: boolean
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
  duration = 0.6,
  scale = true
}: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: scale ? 0.95 : 1,
        y: 30
      }}
      animate={isVisible ? {
        opacity: 1,
        scale: 1,
        y: 0
      } : {}}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={cn(
        'bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20',
        'hover:shadow-2xl hover:scale-[1.02] transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  )
}