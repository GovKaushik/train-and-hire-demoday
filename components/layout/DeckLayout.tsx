'use client'

import { useState, useEffect, useRef } from 'react'

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
    <div className="relative w-full h-screen overflow-hidden bg-cardi-cloud">
      {/* Progress Rail */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-cardi-border">
        {/* Progress Bar */}
        <div className="h-1 bg-gradient-to-r from-cardi-red via-cardi-yellow to-cardi-green origin-left" />

        {/* Section Navigation */}
        <div className="flex items-center justify-between px-8 py-4">
          <div className="font-h3 text-cardi-ink">
            Cardi Demo Day Finale
          </div>

          <div className="flex items-center space-x-6">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-cardi-cloud hover:scale-105 ${
                  activeSection === section.id
                    ? 'bg-cardi-ink text-white shadow-lg'
                    : 'text-cardi-ink/70 hover:text-cardi-ink'
                }`}
              >
                <span className="hidden md:inline">{section.label}</span>
                <span className="md:hidden">{index + 1}</span>
              </button>
            ))}
          </div>

          <div className="text-sm text-cardi-ink/60 font-medium">
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
                  ? 'bg-cardi-ink scale-125'
                  : 'bg-cardi-ink/30 hover:bg-cardi-ink/60'
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