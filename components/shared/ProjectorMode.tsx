'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, Eye } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ProjectorMode() {
  const [isProjectorMode, setIsProjectorMode] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const saved = localStorage.getItem('projectorMode')
    if (saved === 'true') {
      setIsProjectorMode(true)
    }
  }, [])

  useEffect(() => {
    if (!isClient) return

    if (isProjectorMode) {
      document.documentElement.classList.add('projector-mode')
      localStorage.setItem('projectorMode', 'true')
    } else {
      document.documentElement.classList.remove('projector-mode')
      localStorage.setItem('projectorMode', 'false')
    }
  }, [isProjectorMode, isClient])

  const toggleProjectorMode = () => {
    setIsProjectorMode(!isProjectorMode)
  }

  return (
    <>
      {isClient && (
        <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        onClick={toggleProjectorMode}
        className={cn(
          'fixed top-6 right-6 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 z-50 border border-white/20',
          isProjectorMode
            ? 'bg-cardy-ink text-white'
            : 'bg-white/90 backdrop-blur-xl text-cardy-ink hover:bg-white hover:scale-110'
        )}
        whileHover={!isProjectorMode ? { scale: 1.1 } : { scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isProjectorMode ? (
            <motion.div
              key="monitor"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Monitor className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="eye"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Eye className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      )}

      {isClient && (
      <AnimatePresence>
        {isProjectorMode && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-6 bg-cardy-ink text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-50"
          >
            Projector Mode Active
          </motion.div>
        )}
      </AnimatePresence>
      )}
    </>
  )
}