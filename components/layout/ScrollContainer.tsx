'use client'

import { ReactNode, useCallback, useRef } from 'react'
import { useKeyboardNav } from '@/hooks/useKeyboardNav'

interface ScrollContainerProps {
  children: ReactNode
  onModalB?: () => void
  onModalW?: () => void
  onNavigateResults?: () => void
}

export function ScrollContainer({
  children,
  onModalB,
  onModalW,
  onNavigateResults
}: ScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToSection = useCallback((direction: 'up' | 'down') => {
    const currentScroll = window.scrollY
    const sectionHeight = window.innerHeight
    const currentSection = Math.round(currentScroll / sectionHeight)

    const targetSection = direction === 'down'
      ? currentSection + 1
      : Math.max(0, currentSection - 1)

    window.scrollTo({
      top: targetSection * sectionHeight,
      behavior: 'smooth'
    })
  }, [])

  useKeyboardNav({
    onArrowDown: () => scrollToSection('down'),
    onArrowUp: () => scrollToSection('up'),
    onArrowRight: () => scrollToSection('down'),
    onArrowLeft: () => scrollToSection('up'),
    onKeyB: onModalB,
    onKeyW: onModalW,
    onKeyR: () => {
      if (onNavigateResults && window.confirm('Navigate to results page?')) {
        onNavigateResults()
      }
    }
  })

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  )
}