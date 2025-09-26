'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, Users, Target, Zap, CheckCircle } from 'lucide-react'
import { useState } from 'react'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'BA' | 'WAI'
}

export function DemoModal({ isOpen, onClose, type }: DemoModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const baContent = {
    title: 'BA Team Demo',
    subtitle: 'Business Analysis Mastery',
    description: 'Watch our BA team demonstrate their mastery of requirements gathering, stakeholder management, and business process documentation.',
    highlights: [
      'End-to-end intake scenario',
      'Real-time requirements gathering',
      'Professional BPD creation',
      'Stakeholder presentation'
    ],
    watchFor: [
      'Clear requirements gathering methodology',
      'Structured documentation approach',
      'Professional presentation skills',
      'Attention to stakeholder needs'
    ],
    color: '#3B82F6',
    icon: Users
  }

  const waiContent = {
    title: 'WAI Team Demo',
    subtitle: 'Workplace AI Innovation',
    description: 'Experience cutting-edge AI automation solutions designed to revolutionize BA workflows and enhance productivity.',
    highlights: [
      'n8n workflow automation',
      'FAL.ai integration showcase',
      'Chrome extension demo',
      'AI-powered process optimization'
    ],
    watchFor: [
      'Innovative AI integration techniques',
      'Practical workflow automation',
      'Chrome extension development',
      'Real workplace problem solving'
    ],
    color: '#10B981',
    icon: Zap
  }

  const content = type === 'BA' ? baContent : waiContent
  const IconComponent = content.icon

  const slides = [
    {
      title: 'Demo Overview',
      component: (
        <div className="space-y-6">
          <div className="flex items-center space-x-4 mb-8">
            <motion.div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl"
              style={{ backgroundColor: content.color }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <IconComponent className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-cardy-ink">{content.title}</h3>
              <p className="text-lg" style={{ color: content.color }}>{content.subtitle}</p>
            </div>
          </div>

          <p className="text-cardy-slate leading-relaxed text-lg">
            {content.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-cardy-ink mb-3 flex items-center">
                <Play className="w-4 h-4 mr-2" style={{ color: content.color }} />
                Demo Highlights
              </h4>
              <ul className="space-y-2">
                {content.highlights.map((highlight, index) => (
                  <motion.li
                    key={highlight}
                    className="flex items-center space-x-2 text-sm text-cardy-slate"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: content.color }}
                    />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-cardy-ink mb-3 flex items-center">
                <Target className="w-4 h-4 mr-2" style={{ color: content.color }} />
                What to Watch For
              </h4>
              <ul className="space-y-2">
                {content.watchFor.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-center space-x-2 text-sm text-cardy-slate"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    <CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: content.color }} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="relative px-8 py-6 text-white overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${content.color}, ${content.color}dd)` }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0"
                     style={{
                       backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                                        radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
                       backgroundSize: '50px 50px'
                     }} />
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold">{content.title}</h2>
                  <p className="text-white/90 text-lg">{content.subtitle}</p>
                </div>

                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {slides[currentSlide].component}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-cardy-slate">
                  Ready to see innovation in action
                </div>

                <motion.button
                  onClick={onClose}
                  className="px-6 py-2 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: content.color }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let's Go! 🚀
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}