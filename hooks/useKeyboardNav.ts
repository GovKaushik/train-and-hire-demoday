'use client'

import { useEffect } from 'react'

interface KeyboardNavOptions {
  onArrowDown?: () => void
  onArrowUp?: () => void
  onArrowLeft?: () => void
  onArrowRight?: () => void
  onPageDown?: () => void
  onPageUp?: () => void
  onKeyB?: () => void
  onKeyW?: () => void
  onKeyR?: () => void
  onShiftR?: () => void
  onKeyS?: () => void
  onKeyK?: () => void
  onKeyM?: () => void
  onPeriod?: () => void
  onQuestionMark?: () => void
}

export function useKeyboardNav(options: KeyboardNavOptions) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      switch(e.key) {
        case 'ArrowDown':
          e.preventDefault()
          options.onArrowDown?.()
          break
        case 'ArrowUp':
          e.preventDefault()
          options.onArrowUp?.()
          break
        case 'ArrowLeft':
          e.preventDefault()
          options.onArrowLeft?.()
          break
        case 'ArrowRight':
          e.preventDefault()
          options.onArrowRight?.()
          break
        case 'PageDown':
          e.preventDefault()
          options.onPageDown?.()
          break
        case 'PageUp':
          e.preventDefault()
          options.onPageUp?.()
          break
        case 'b':
        case 'B':
          e.preventDefault()
          options.onKeyB?.()
          break
        case 'w':
        case 'W':
          e.preventDefault()
          options.onKeyW?.()
          break
        case 'r':
        case 'R':
          e.preventDefault()
          if (e.shiftKey) {
            options.onShiftR?.()
          } else {
            options.onKeyR?.()
          }
          break
        case 's':
        case 'S':
          e.preventDefault()
          options.onKeyS?.()
          break
        case 'k':
        case 'K':
          e.preventDefault()
          options.onKeyK?.()
          break
        case 'm':
        case 'M':
          e.preventDefault()
          options.onKeyM?.()
          break
        case '.':
          e.preventDefault()
          options.onPeriod?.()
          break
        case '?':
          e.preventDefault()
          options.onQuestionMark?.()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [options])
}