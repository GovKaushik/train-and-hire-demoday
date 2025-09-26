'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Award, MessageCircle, Zap, CheckCircle2, ArrowRight } from 'lucide-react'
import { StarRating } from '@/components/shared/StarRating'
import { AnimatedCard } from '@/components/base/AnimatedCard'
import { JudgeAuth } from '@/components/shared/JudgeAuth'
import { cn } from '@/lib/utils'

interface FormData {
  judgeName: string
  track: 'BA' | 'WAI' | ''
  technical: number
  communication: number
  delivery: number
}

interface JudgeInfo {
  name: string
  token: string
  role: string
}

export default function RatePage() {
  const [judgeInfo, setJudgeInfo] = useState<JudgeInfo | null>(null)
  const [formData, setFormData] = useState<FormData>({
    judgeName: '',
    track: '',
    technical: 3,
    communication: 3,
    delivery: 3
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleAuthenticated = (info: JudgeInfo) => {
    setJudgeInfo(info)
    setFormData({ ...formData, judgeName: info.name })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.track || !formData.judgeName.trim()) return

    setIsSubmitting(true)

    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 1500))

    const ratings = JSON.parse(localStorage.getItem('ratings') || '[]')
    ratings.push({
      ...formData,
      judgeToken: judgeInfo?.token,
      judgeRole: judgeInfo?.role,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    })
    localStorage.setItem('ratings', JSON.stringify(ratings))

    setIsSubmitting(false)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        judgeName: judgeInfo?.name || '',
        track: '',
        technical: 3,
        communication: 3,
        delivery: 3
      })
    }, 3000)
  }

  // Show authentication screen if not authenticated
  if (!judgeInfo) {
    return <JudgeAuth onAuthenticated={handleAuthenticated} />
  }

  const isValid = formData.judgeName.trim() && formData.track

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cardy-cloud via-white to-green-50 flex items-center justify-center p-8">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ delay: 0.2, type: "spring", damping: 10 }}
            className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl"
          >
            <CheckCircle2 className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-cardy-ink mb-2"
          >
            Thank you for your rating!
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-cardy-slate"
          >
            Your feedback has been recorded successfully.
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cardy-cloud via-white to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        <AnimatedCard className="bg-white/95 backdrop-blur-xl">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15, delay: 0.2 }}
              className="w-16 h-16 bg-gradient-to-br from-cardy-blue to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-xl"
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl font-bold text-cardy-ink mb-2">
              Judge Rating System
            </h1>
            <p className="text-lg text-cardy-slate mb-4">
              Rate the demo teams on their performance
            </p>

            {/* Judge Info Display */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full text-green-800"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium">
                Authenticated as {judgeInfo.name} ({judgeInfo.role})
              </span>
            </motion.div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Judge Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-semibold text-cardy-ink mb-3 flex items-center">
                <User className="w-4 h-4 mr-2" />
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.judgeName}
                onChange={(e) => setFormData({ ...formData, judgeName: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-cardy-blue focus:ring-4 focus:ring-cardy-blue/20 transition-all duration-300 text-lg font-medium bg-white/50 backdrop-blur-sm"
              />
            </motion.div>

            {/* Track Selection */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-semibold text-cardy-ink mb-4">
                Select Track to Rate
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    value: 'BA',
                    title: 'Business Analyst',
                    subtitle: 'BA Track',
                    icon: MessageCircle,
                    gradient: 'from-blue-500 to-blue-600'
                  },
                  {
                    value: 'WAI',
                    title: 'Workplace AI',
                    subtitle: 'WAI Track',
                    icon: Zap,
                    gradient: 'from-purple-500 to-purple-600'
                  }
                ].map((track) => {
                  const Icon = track.icon
                  const isSelected = formData.track === track.value
                  return (
                    <motion.button
                      key={track.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, track: track.value as 'BA' | 'WAI' })}
                      className={cn(
                        'p-6 rounded-2xl border-2 transition-all duration-300 text-left relative overflow-hidden',
                        isSelected
                          ? 'border-cardy-blue bg-cardy-blue/10 shadow-lg scale-105'
                          : 'border-gray-200 bg-white/50 hover:border-gray-300 hover:scale-105 hover:shadow-md'
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={cn(
                          'w-12 h-12 rounded-xl flex items-center justify-center shadow-lg',
                          `bg-gradient-to-br ${track.gradient}`
                        )}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-cardy-ink">
                            {track.title}
                          </h3>
                          <p className="text-sm text-cardy-slate">
                            {track.subtitle}
                          </p>
                        </div>
                      </div>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-4 right-4 w-6 h-6 bg-cardy-blue rounded-full flex items-center justify-center"
                        >
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>

            {/* Rating Categories */}
            {formData.track && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-cardy-ink mb-2">
                    Rate the {formData.track} Team
                  </h3>
                  <p className="text-cardy-slate">
                    Click the stars to rate each category
                  </p>
                </div>

                <div className="grid gap-8">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
                    <StarRating
                      value={formData.technical}
                      onChange={(value) => setFormData({ ...formData, technical: value })}
                      label="Technical Skills & Execution"
                      size="lg"
                    />
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
                    <StarRating
                      value={formData.communication}
                      onChange={(value) => setFormData({ ...formData, communication: value })}
                      label="Communication & Presentation"
                      size="lg"
                    />
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6">
                    <StarRating
                      value={formData.delivery}
                      onChange={(value) => setFormData({ ...formData, delivery: value })}
                      label="Delivery Readiness"
                      size="lg"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className={cn(
                  'w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2',
                  isValid && !isSubmitting
                    ? 'bg-gradient-to-r from-cardy-ink to-gray-800 text-white hover:shadow-2xl hover:scale-105 shadow-xl'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                )}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Submitting Rating...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Rating</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </motion.div>
          </form>
        </AnimatedCard>
      </motion.div>
    </div>
  )
}