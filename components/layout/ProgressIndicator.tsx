'use client'

import { useScrollProgress } from '@/hooks/useScrollProgress'
import { cn } from '@/lib/utils'

interface ProgressIndicatorProps {
  sectionCount: number
}

export function ProgressIndicator({ sectionCount }: ProgressIndicatorProps) {
  const { progress, currentSection } = useScrollProgress()

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="relative h-48 w-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-cardi-blue via-cardi-green to-cardi-yellow rounded-full transition-all duration-300"
          style={{ height: `${progress}%` }}
        />
      </div>
      <div className="absolute -left-3 top-0 flex flex-col gap-2 h-full justify-between">
        {Array.from({ length: sectionCount }).map((_, index) => (
          <div
            key={index}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              currentSection === index
                ? 'bg-cardi-ink scale-125'
                : 'bg-gray-300'
            )}
          />
        ))}
      </div>
    </div>
  )
}