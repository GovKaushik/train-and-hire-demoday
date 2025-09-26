'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Trophy, Users, Sparkles, Award, Eye, EyeOff, Crown, Medal, Target } from 'lucide-react'
import { AnimatedCard } from '@/components/base/AnimatedCard'
import { ExportData } from '@/components/shared/ExportData'
import { cn } from '@/lib/utils'

interface Rating {
  judgeName: string
  track: string
  technical: number
  communication: number
  delivery: number
  judgeToken?: string
  judgeRole?: string
  timestamp: string
  id: string
}

interface TrackResult {
  score: number
  count: number
  breakdown: {
    technical: number
    communication: number
    delivery: number
  }
  ratings: Rating[]
}

export default function ResultsPage() {
  const [baResult, setBaResult] = useState<TrackResult | null>(null)
  const [waiResult, setWaiResult] = useState<TrackResult | null>(null)
  const [animatingBA, setAnimatingBA] = useState(false)
  const [animatingWAI, setAnimatingWAI] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [revealPhase, setRevealPhase] = useState(0) // 0: hidden, 1: scores, 2: winner, 3: details
  const [winnerRevealed, setWinnerRevealed] = useState(false)

  const calculateTrackResult = (track: 'BA' | 'WAI'): TrackResult => {
    const ratings: Rating[] = JSON.parse(localStorage.getItem('ratings') || '[]')
    const trackRatings = ratings.filter(r => r.track === track)

    if (trackRatings.length === 0) {
      return {
        score: 0,
        count: 0,
        breakdown: { technical: 0, communication: 0, delivery: 0 },
        ratings: []
      }
    }

    const totals = trackRatings.reduce((acc, r) => ({
      technical: acc.technical + r.technical,
      communication: acc.communication + r.communication,
      delivery: acc.delivery + r.delivery
    }), { technical: 0, communication: 0, delivery: 0 })

    const count = trackRatings.length
    const breakdown = {
      technical: totals.technical / count,
      communication: totals.communication / count,
      delivery: totals.delivery / count
    }

    return {
      score: (breakdown.technical + breakdown.communication + breakdown.delivery) / 3,
      count,
      breakdown,
      ratings: trackRatings
    }
  }

  const initializeResults = () => {
    setBaResult(calculateTrackResult('BA'))
    setWaiResult(calculateTrackResult('WAI'))
  }

  useEffect(() => {
    initializeResults()
  }, [])

  const getWinner = () => {
    if (!baResult || !waiResult) return null
    if (baResult.count === 0 && waiResult.count === 0) return null
    if (baResult.count === 0) return 'WAI'
    if (waiResult.count === 0) return 'BA'
    return baResult.score > waiResult.score ? 'BA' : 'WAI'
  }

  const winner = getWinner()

  const revealResults = async () => {
    // Phase 1: Show scores
    setRevealPhase(1)
    setAnimatingBA(true)
    setAnimatingWAI(true)

    await new Promise(resolve => setTimeout(resolve, 2000))

    // Phase 2: Reveal winner
    setRevealPhase(2)
    setWinnerRevealed(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    // Phase 3: Show details
    setRevealPhase(3)
  }

  const renderScoreCard = (result: TrackResult | null, trackName: 'BA' | 'WAI', color: string, isAnimating: boolean) => {
    if (!result) return null

    const isWinner = winner === trackName
    const hasRatings = result.count > 0

    return (
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: trackName === 'BA' ? 0.2 : 0.4 }}
      >
        <AnimatedCard className={cn(
          "relative overflow-hidden border-2 transition-all duration-500",
          isWinner && winnerRevealed ? "border-yellow-400 shadow-2xl scale-105" : "border-gray-200",
          !hasRatings && "opacity-50"
        )}>
          {/* Winner Crown */}
          {isWinner && winnerRevealed && (
            <motion.div
              initial={{ opacity: 0, scale: 0, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", damping: 15, delay: 0.5 }}
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
            >
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl">
                <Crown className="w-5 h-5 text-yellow-800" />
              </div>
            </motion.div>
          )}

          {/* Glow effect for winner */}
          {isWinner && winnerRevealed && (
            <motion.div
              className="absolute inset-0 bg-yellow-400/10 rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          )}

          <div className="text-center space-y-6">
            {/* Track Header */}
            <div>
              <motion.div
                className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center shadow-xl mb-4"
                style={{ backgroundColor: color }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", damping: 15 }}
              >
                {trackName === 'BA' ? (
                  <Users className="w-8 h-8 text-white" />
                ) : (
                  <Sparkles className="w-8 h-8 text-white" />
                )}
              </motion.div>
              <h2 className="text-2xl font-bold text-cardi-ink">
                {trackName} Team
              </h2>
              <p className="text-cardi-slate">
                {trackName === 'BA' ? 'Business Analysis' : 'Workplace AI'}
              </p>
            </div>

            {hasRatings ? (
              <>
                {/* Main Score */}
                <div>
                  <motion.div
                    className="text-6xl font-bold mb-2"
                    style={{ color }}
                    initial={{ scale: 0 }}
                    animate={isAnimating ? { scale: 1 } : { scale: 0 }}
                    transition={{ type: "spring", damping: 10, delay: 0.5 }}
                  >
                    {result.score.toFixed(1)}
                  </motion.div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isAnimating ? {
                          opacity: i < Math.floor(result.score) ? 1 : 0.3,
                          scale: 1
                        } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 0.8 + (i * 0.1) }}
                      >
                        <Star
                          className={cn(
                            "w-6 h-6",
                            i < Math.floor(result.score) ? "fill-current" : ""
                          )}
                          style={{ color }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Breakdown Bars */}
                {revealPhase >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="space-y-3"
                  >
                    {Object.entries(result.breakdown).map(([key, value]) => (
                      <div key={key}>
                        <div className="flex justify-between text-sm text-cardi-slate mb-1">
                          <span className="capitalize">{key}</span>
                          <span>{value.toFixed(1)}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="h-2 rounded-full"
                            style={{ backgroundColor: color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${(value / 5) * 100}%` }}
                            transition={{ duration: 1, delay: 1.2 }}
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Judge Count */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-sm text-cardi-slate"
                >
                  Rated by {result.count} judge{result.count !== 1 ? 's' : ''}
                </motion.div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl text-gray-300 mb-2">—</div>
                <p className="text-cardi-slate">No ratings yet</p>
              </div>
            )}
          </div>
        </AnimatedCard>
      </motion.div>
    )
  }

  if (revealPhase === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cardi-ink via-gray-900 to-cardi-ink flex items-center justify-center p-8">
        <div className="text-center">
          <motion.div
            className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <Trophy className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="text-5xl font-bold text-white mb-4">Demo Results</h1>
          <p className="text-xl text-gray-300 mb-8">Ready to reveal the winner?</p>
          <motion.button
            onClick={revealResults}
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎉 Reveal Results
          </motion.button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cardi-cloud via-white to-yellow-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold text-cardi-ink mb-4">
            🏆 Demo Day Results
          </h1>
          <p className="text-xl text-cardi-slate">
            Train & Hire Cohort 2 Final Presentations
          </p>
        </motion.div>

        {/* Winner Announcement */}
        {winnerRevealed && winner && (
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 20, delay: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center space-x-4 px-8 py-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl shadow-2xl"
              animate={{
                boxShadow: [
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  "0 25px 50px -12px rgba(251, 191, 36, 0.4)",
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Trophy className="w-8 h-8 text-white" />
              <div className="text-white">
                <div className="text-sm font-medium">WINNER</div>
                <div className="text-2xl font-bold">{winner} Team Wins! 🎉</div>
              </div>
              <Medal className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        )}

        {/* Score Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {renderScoreCard(baResult, 'BA', '#3B82F6', animatingBA)}
          {renderScoreCard(waiResult, 'WAI', '#10B981', animatingWAI)}
        </div>

        {/* Detailed View Toggle */}
        {revealPhase >= 3 && (
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:shadow-lg transition-all"
            >
              {showDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showDetails ? 'Hide' : 'Show'} Judge Details</span>
            </button>
          </motion.div>
        )}

        {/* Export Controls */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <ExportData />
        </motion.div>

        {/* Judge Details */}
        <AnimatePresence>
          {showDetails && revealPhase >= 3 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 grid md:grid-cols-2 gap-8"
            >
              {[
                { result: baResult, name: 'BA', color: '#3B82F6' },
                { result: waiResult, name: 'WAI', color: '#10B981' }
              ].map(({ result, name, color }) => (
                result && result.count > 0 && (
                  <AnimatedCard key={name} className="p-6">
                    <h3 className="text-xl font-bold mb-4" style={{ color }}>
                      {name} Team - Individual Ratings
                    </h3>
                    <div className="space-y-4">
                      {result.ratings.map((rating) => (
                        <div key={rating.id} className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <div className="font-semibold text-cardi-ink">
                              {rating.judgeName}
                            </div>
                            <div className="text-sm text-cardi-slate">
                              {rating.judgeRole || 'Judge'}
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-cardi-slate">Technical:</span>
                              <div className="flex items-center">
                                <span className="font-semibold">{rating.technical}</span>
                                <Star className="w-3 h-3 ml-1 fill-current text-yellow-500" />
                              </div>
                            </div>
                            <div>
                              <span className="text-cardi-slate">Communication:</span>
                              <div className="flex items-center">
                                <span className="font-semibold">{rating.communication}</span>
                                <Star className="w-3 h-3 ml-1 fill-current text-yellow-500" />
                              </div>
                            </div>
                            <div>
                              <span className="text-cardi-slate">Delivery:</span>
                              <div className="flex items-center">
                                <span className="font-semibold">{rating.delivery}</span>
                                <Star className="w-3 h-3 ml-1 fill-current text-yellow-500" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AnimatedCard>
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}