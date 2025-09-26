'use client'

import { ReactNode, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface BaseSlideProps {
  children: ReactNode
  className?: string
  id?: string
  animate?: boolean
}

export function BaseSlide({ children, className, id, animate = true }: BaseSlideProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!animate) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const element = document.getElementById(id || '')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [id, animate])

  return (
    <section
      id={id}
      className={cn(
        'relative min-h-screen flex items-center justify-center px-8 py-16',
        'transition-all duration-1000 ease-out',
        animate && !isVisible && 'opacity-0 translate-y-10',
        animate && isVisible && 'opacity-100 translate-y-0',
        !animate && 'opacity-100',
        className
      )}
    >
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}