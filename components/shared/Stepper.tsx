'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StepperItem {
  id: string
  title: string
  description?: string
  status: 'completed' | 'current' | 'upcoming'
}

interface StepperProps {
  items: StepperItem[]
  className?: string
}

export function Stepper({ items, className }: StepperProps) {
  return (
    <div className={cn('flex items-center justify-center space-x-12 py-8', className)}>
      {items.map((item, index) => (
        <div key={item.id} className="flex items-center">
          {/* Step */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              damping: 20,
              stiffness: 300
            }}
            className="flex flex-col items-center space-y-4 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className={cn(
                'w-20 h-20 rounded-full border-3 flex items-center justify-center transition-all duration-500 backdrop-blur-sm shadow-2xl relative overflow-hidden',
                item.status === 'completed'
                  ? 'bg-gradient-to-br from-cardi-green to-green-600 border-cardi-green text-white shadow-cardi-green/30'
                  : item.status === 'current'
                  ? 'bg-gradient-to-br from-cardi-blue to-blue-600 border-cardi-blue text-white shadow-cardi-blue/30 animate-pulse'
                  : 'bg-white/90 border-gray-200 text-gray-400 shadow-black/10'
              )}
              whileHover={{
                scale: 1.1,
                rotate: item.status === 'completed' ? 360 : 0,
              }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              {item.status === 'completed' ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                >
                  <CheckCircle2 className="w-10 h-10 drop-shadow-lg" />
                </motion.div>
              ) : (
                <motion.div
                  className="w-10 h-10 rounded-full bg-current opacity-80"
                  animate={item.status === 'current' ? {
                    scale: [1, 1.2, 1],
                  } : {}}
                  transition={item.status === 'current' ? {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  } : {}}
                />
              )}

              {/* Shimmer effect for active step */}
              {item.status === 'current' && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              )}
            </motion.div>

            <div className="text-center max-w-[140px]">
              <motion.h3
                className={cn(
                  'font-semibold text-base mb-2',
                  item.status === 'completed' || item.status === 'current'
                    ? 'text-cardi-ink'
                    : 'text-gray-400'
                )}
                animate={{
                  scale: item.status === 'current' ? [1, 1.05, 1] : 1
                }}
                transition={item.status === 'current' ? {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                } : {}}
              >
                {item.title}
              </motion.h3>
              {item.description && (
                <motion.p
                  className="text-sm text-cardi-slate leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                >
                  {item.description}
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* Enhanced Arrow */}
          {index < items.length - 1 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
              className="mx-8 relative"
            >
              <motion.div
                animate={{
                  x: [0, 5, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className={cn(
                  "w-8 h-8 transition-colors duration-500",
                  items[index].status === 'completed'
                    ? 'text-cardi-green'
                    : 'text-gray-300'
                )} />
              </motion.div>

              {/* Progress line */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 -z-10">
                {items[index].status === 'completed' && (
                  <motion.div
                    className="h-full bg-gradient-to-r from-cardi-green to-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                  />
                )}
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}