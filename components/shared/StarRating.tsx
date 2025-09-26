'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StarRatingProps {
  value: number
  onChange: (value: number) => void
  size?: 'sm' | 'md' | 'lg'
  label?: string
  disabled?: boolean
  animated?: boolean
}

export function StarRating({
  value,
  onChange,
  size = 'md',
  label,
  disabled = false,
  animated = true
}: StarRatingProps) {
  const [hoverValue, setHoverValue] = useState(0)

  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-10 h-10'
  }

  const containerClasses = {
    sm: 'space-x-1',
    md: 'space-x-2',
    lg: 'space-x-3'
  }

  return (
    <div className="space-y-3">
      {label && (
        <label className="block text-sm font-semibold text-cardy-ink">
          {label}
          <span className="ml-2 text-cardy-blue font-bold">
            {hoverValue || value}/5
          </span>
        </label>
      )}

      <div className={cn('flex items-center', containerClasses[size])}>
        {[1, 2, 3, 4, 5].map((star) => {
          const isActive = star <= (hoverValue || value)
          const isHovered = star <= hoverValue

          return (
            <motion.button
              key={star}
              type="button"
              disabled={disabled}
              onMouseEnter={() => !disabled && setHoverValue(star)}
              onMouseLeave={() => !disabled && setHoverValue(0)}
              onClick={() => !disabled && onChange(star)}
              className={cn(
                'relative transition-all duration-200 focus:outline-none',
                !disabled && 'cursor-pointer hover:scale-125',
                disabled && 'cursor-default'
              )}
              whileHover={!disabled && animated ? { scale: 1.2, rotate: 15 } : {}}
              whileTap={!disabled && animated ? { scale: 0.95 } : {}}
              initial={animated ? { scale: 0, rotate: -180 } : {}}
              animate={animated ? { scale: 1, rotate: 0 } : {}}
              transition={animated ? {
                delay: star * 0.1,
                type: "spring",
                damping: 15,
                stiffness: 300
              } : {}}
            >
              <Star
                className={cn(
                  sizeClasses[size],
                  'transition-all duration-300',
                  isActive
                    ? isHovered
                      ? 'fill-yellow-400 text-yellow-400 drop-shadow-lg'
                      : 'fill-cardy-yellow text-cardy-yellow'
                    : 'fill-gray-200 text-gray-300 hover:fill-gray-300 hover:text-gray-400'
                )}
              />

              {/* Sparkle effect on hover */}
              {isHovered && animated && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                      style={{
                        top: `${20 + i * 20}%`,
                        left: `${30 + i * 15}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        y: [-10, -20, -30],
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}