'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Key, CheckCircle, AlertCircle, Sparkles } from 'lucide-react'

interface JudgeAuthProps {
  onAuthenticated: (judgeInfo: { name: string; token: string; role: string }) => void
}

const VALID_TOKENS = {
  'JUDGE-001': { name: 'Sarah Chen', role: 'Senior Technical Lead' },
  'JUDGE-002': { name: 'Marcus Rodriguez', role: 'Product Manager' },
  'JUDGE-003': { name: 'Dr. Aisha Patel', role: 'AI Research Director' },
  'JUDGE-004': { name: 'James Wilson', role: 'Engineering Manager' },
  'JUDGE-005': { name: 'Lisa Thompson', role: 'Business Analyst Lead' },
  'ADMIN-001': { name: 'Demo Admin', role: 'System Administrator' }
}

export function JudgeAuth({ onAuthenticated }: JudgeAuthProps) {
  const [token, setToken] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [showHint, setShowHint] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const normalizedToken = token.toUpperCase().trim()
    const judgeInfo = VALID_TOKENS[normalizedToken as keyof typeof VALID_TOKENS]

    if (judgeInfo) {
      onAuthenticated({
        name: judgeInfo.name,
        token: normalizedToken,
        role: judgeInfo.role
      })
    } else {
      setError('Invalid judge token. Please check your credentials.')
      setToken('')
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cardi-ink via-gray-900 to-cardi-ink flex items-center justify-center p-8">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0"
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                                radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
               backgroundSize: '100px 100px'
             }} />
      </div>

      <motion.div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 20 }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-cardi-blue to-cardi-green p-8 text-white text-center">
          <motion.div
            className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <Shield className="w-8 h-8" />
          </motion.div>
          <h1 className="text-2xl font-bold mb-2">Judge Authentication</h1>
          <p className="text-white/90">Enter your secure token to access the rating system</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-cardi-ink mb-3">
                <Key className="w-4 h-4 inline mr-2" />
                Judge Token
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="Enter your judge token"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cardi-blue focus:outline-none transition-colors text-lg font-mono tracking-wider"
                  disabled={isLoading}
                  autoComplete="off"
                />
                {token && (
                  <motion.div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    <CheckCircle className="w-5 h-5 text-cardi-green" />
                  </motion.div>
                )}
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-800"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              disabled={!token.trim() || isLoading}
              className="w-full bg-gradient-to-r from-cardi-blue to-cardi-green text-white py-3 px-6 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <motion.div
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <span>Authenticating...</span>
                </div>
              ) : (
                'Access Rating System'
              )}
            </motion.button>
          </form>

          {/* Hint Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-sm text-cardi-slate hover:text-cardi-ink transition-colors flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Need a demo token?</span>
            </button>

            <AnimatePresence>
              {showHint && (
                <motion.div
                  className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <p className="text-xs text-yellow-800 mb-2">Demo tokens for testing:</p>
                  <div className="space-y-1 text-xs font-mono">
                    <div className="text-yellow-700">ADMIN-001 (Demo Admin)</div>
                    <div className="text-yellow-700">JUDGE-001 (Sarah Chen)</div>
                    <div className="text-yellow-700">JUDGE-002 (Marcus Rodriguez)</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  )
}