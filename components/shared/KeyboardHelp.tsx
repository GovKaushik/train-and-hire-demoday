'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Keyboard, X, ArrowUp, ArrowDown, Eye, Star, MousePointer } from 'lucide-react'
import { cn } from '@/lib/utils'

export function KeyboardHelp() {
  const [isOpen, setIsOpen] = useState(false)

  const shortcuts = [
    {
      keys: ['↑', '↓', '←', '→'],
      description: 'Navigate between presentation sections',
      icon: ArrowUp
    },
    {
      keys: ['B'],
      description: 'Launch BA Demo modal',
      icon: MousePointer
    },
    {
      keys: ['W'],
      description: 'Launch WAI Demo modal',
      icon: MousePointer
    },
    {
      keys: ['R'],
      description: 'Navigate to Results page',
      icon: Eye
    },
    {
      keys: ['ESC'],
      description: 'Close modals and overlays',
      icon: X
    },
    {
      keys: ['?'],
      description: 'Toggle this help overlay',
      icon: Keyboard
    }
  ]

  return (
    <>
      {/* Help Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 z-40 border border-white/20"
      >
        <Keyboard className="w-6 h-6 text-cardi-ink" />
      </motion.button>

      {/* Help Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-cardi-ink flex items-center">
                  <Keyboard className="w-6 h-6 mr-3" />
                  Keyboard Shortcuts
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                {shortcuts.map((shortcut, index) => {
                  const Icon = shortcut.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-cardi-blue to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          {shortcut.keys.map((key, keyIndex) => (
                            <kbd
                              key={keyIndex}
                              className="px-2 py-1 bg-gray-200 rounded-lg text-xs font-mono font-semibold text-gray-700"
                            >
                              {key}
                            </kbd>
                          ))}
                        </div>
                        <p className="text-sm text-cardi-slate">{shortcut.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-xs text-cardi-slate/70 text-center">
                  Press <kbd className="px-1 py-0.5 bg-gray-200 rounded text-xs">ESC</kbd> or click outside to close
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}