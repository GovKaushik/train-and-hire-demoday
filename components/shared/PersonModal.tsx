'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { GeometricAvatar } from './GeometricAvatar'

interface PersonModalProps {
  person: { name: string; track: string; story: string } | null
  isOpen: boolean
  onClose: () => void
}

export function PersonModal({ person, isOpen, onClose }: PersonModalProps) {
  if (!person) return null

  const trackColor = person.track === 'BA' ? '#3B82F6' : '#10B981'
  const trackBgColor = person.track === 'BA' ? 'bg-blue-50' : 'bg-green-50'

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header with gradient */}
              <div
                className="relative h-32 bg-gradient-to-br from-purple-500 to-blue-500"
                style={{
                  background: `linear-gradient(135deg, ${trackColor}CC, ${trackColor}66)`
                }}
              >
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Avatar overlapping header */}
              <div className="relative -mt-16 flex justify-center">
                <div
                  className="rounded-full p-2 bg-white shadow-xl"
                  style={{ boxShadow: `0 0 0 4px ${trackColor}40` }}
                >
                  <GeometricAvatar name={person.name} size="lg" className="w-28 h-28" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{person.name}</h2>

                <div
                  className={`inline-flex items-center px-4 py-2 rounded-full ${trackBgColor} mb-6`}
                >
                  <div
                    className="w-2 h-2 rounded-full mr-2"
                    style={{ backgroundColor: trackColor }}
                  />
                  <span
                    className="text-sm font-semibold"
                    style={{ color: trackColor }}
                  >
                    {person.track} Track
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed">{person.story}</p>

                {/* Journey status */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Journey Progress</span>
                    <span className="font-semibold text-gray-700">In Progress</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: trackColor }}
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ delay: 0.3, duration: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}