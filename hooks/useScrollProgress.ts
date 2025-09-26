'use client'

import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = (scrollTop / documentHeight) * 100
      setProgress(scrollProgress)

      const sectionHeight = window.innerHeight
      const currentSectionIndex = Math.floor(scrollTop / sectionHeight)
      setCurrentSection(currentSectionIndex)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { progress, currentSection }
}