'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TimelineItem {
  week: number
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn('relative py-8', className)}>
      <div className="flex items-center justify-between max-w-5xl mx-auto px-4">
        {items.map((item, index) => (
          <motion.div
            key={item.week}
            className="relative flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Dot */}
            <motion.div
              className={cn(
                'w-6 h-6 rounded-full border-3 transition-all duration-500 backdrop-blur-sm shadow-lg',
                hoveredIndex === index
                  ? 'bg-cardi-red border-cardi-red scale-125 shadow-cardi-red/25'
                  : 'bg-white/90 border-cardi-slate/30 shadow-black/10'
              )}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
            />

            {/* Week label */}
            <motion.div
              className="mt-3 text-sm font-medium text-cardi-slate"
              animate={{
                scale: hoveredIndex === index ? 1.05 : 1,
                color: hoveredIndex === index ? '#374151' : '#64748b'
              }}
            >
              Week {item.week}
            </motion.div>

            {/* Tooltip */}
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.9 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="absolute top-full mt-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6 min-w-[280px] z-30"
              >
                <h4 className="font-semibold text-lg text-cardi-ink mb-2">{item.title}</h4>
                <p className="text-sm text-cardi-slate leading-relaxed">{item.description}</p>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/95 backdrop-blur-xl border-l border-t border-white/20 rotate-45"></div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Connecting line with gradient */}
      <div className="absolute top-11 left-8 right-8 h-1 bg-gradient-to-r from-cardi-blue/20 via-cardi-green/20 to-cardi-yellow/20 rounded-full -z-10">
        <div className="h-full bg-gradient-to-r from-cardi-blue via-cardi-green to-cardi-yellow rounded-full opacity-60"></div>
      </div>
    </div>
  )
}