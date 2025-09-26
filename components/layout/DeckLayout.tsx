'use client'

import { useState, useEffect, useRef } from 'react'
import GlobalBackground from '@/components/GlobalBackground'

interface Section {
  id: string
  label: string
  duration: string
  anchor: string
}

interface DeckLayoutProps {
  children: React.ReactNode
  sections: Section[]
  className?: string
}

export function DeckLayout({ children, sections, className }: DeckLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '')
  const containerRef = useRef<HTMLDivElement>(null)

  // Track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const scrollTop = container.scrollTop
      const windowHeight = container.clientHeight
      const centerPoint = scrollTop + windowHeight / 2

      // Find which section the center point is currently in
      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (centerPoint >= offsetTop && centerPoint < offsetTop + offsetHeight) {
            setActiveSection(section.id)
          }
        }
      })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true })
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [sections])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element && containerRef.current) {
      const container = containerRef.current
      const elementTop = element.offsetTop
      const offset = 80 // Account for progress rail

      container.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-cardy-cloud">
      <GlobalBackground />
      {/* Premium Glass Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 glass-surface border-b border-cardy-border/30">
        {/* Animated Progress Bar */}
        <div className="h-1 bg-cardy-brand-sweep origin-left" />

        {/* Section Navigation */}
        <div className="flex items-center justify-between px-8 py-4">
          <div className="font-h3 text-cardy-ink font-display text-lg tracking-wide">
            CARDY DEMO DAY FINALE
          </div>

          <div className="flex items-center space-x-1">
            {sections.map((section, index) => {
              const isActive = activeSection === section.id
              const gradientColors = [
                'from-cardy-red to-cardy-orange',
                'from-cardy-orange to-cardy-yellow',
                'from-cardy-yellow to-cardy-green',
                'from-cardy-green to-cardy-blue',
                'from-cardy-blue to-cardy-indigo'
              ]

              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="group relative px-4 py-3 text-sm font-semibold transition-all duration-cardySm hover:scale-105"
                >
                  <span className={`${isActive ? 'text-cardy-ink' : 'text-cardy-ink/70 hover:text-cardy-ink'} transition-colors duration-cardySm`}>
                    <span className="hidden md:inline">{section.label}</span>
                    <span className="md:hidden">{index + 1}</span>
                  </span>
                  {/* Gradient Underline */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r ${gradientColors[index]} rounded-full transition-all duration-cardyMd ${
                    isActive ? 'w-8 opacity-100' : 'w-0 opacity-0 group-hover:w-6 group-hover:opacity-70'
                  }`} />
                </button>
              )
            })}
          </div>

          <div className="text-sm text-cardy-ink/60 font-medium">
            {sections.find(s => s.id === activeSection)?.duration || ''}
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div
        ref={containerRef}
        className={`h-full w-full overflow-y-auto overflow-x-hidden scroll-smooth pt-20 ${className || ''}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {children}
      </div>

      {/* Section Dots (Mobile) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 md:hidden z-40">
        <div className="flex flex-col space-y-3">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-cardy-ink scale-125'
                  : 'bg-cardy-ink/30 hover:bg-cardy-ink/60'
              }`}
              aria-label={`Go to ${section.label}`}
            />
          ))}
        </div>
      </div>

      {/* Keyboard Navigation Helper */}
      <div className="sr-only">
        Press Tab to navigate sections, Enter to select
      </div>
    </div>
  )
}

// Section wrapper component for consistent spacing
export function DeckSection({
  id,
  children,
  className = ''
}: {
  id: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={`min-h-screen w-full flex flex-col relative ${className}`}
    >
      {children}
    </section>
  )
}