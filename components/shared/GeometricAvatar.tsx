'use client'

import { cn } from '@/lib/utils'

interface GeometricAvatarProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const colorMap = [
  '#E57373', // muted red
  '#FFD54F', // muted yellow
  '#90CAF9', // muted blue
  '#A5D6A7', // muted green
  '#FFAB91'  // muted orange
]

export function GeometricAvatar({ name, size = 'md', className }: GeometricAvatarProps) {
  const colorIndex = name.length % colorMap.length
  const color = colorMap[colorIndex]

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  // Create a simple geometric pattern based on name
  const pattern = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const shapes = pattern % 3 // 0: pentagon, 1: hexagon, 2: triangle

  return (
    <div
      className={cn(
        'relative rounded-full flex items-center justify-center overflow-hidden flex-shrink-0',
        sizeClasses[size],
        className
      )}
      style={{ backgroundColor: color }}
    >
      {/* Pentagon pattern inspired by logo */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full opacity-20"
        fill="none"
      >
        {shapes === 0 && (
          // Pentagon (5 sides) - like logo
          <polygon
            points="50,10 80,35 70,70 30,70 20,35"
            fill="rgba(255,255,255,0.4)"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
          />
        )}
        {shapes === 1 && (
          // Hexagon (6 sides)
          <polygon
            points="50,10 75,30 75,60 50,80 25,60 25,30"
            fill="rgba(255,255,255,0.4)"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
          />
        )}
        {shapes === 2 && (
          // Triangle (3 sides)
          <polygon
            points="50,15 80,70 20,70"
            fill="rgba(255,255,255,0.4)"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
          />
        )}
      </svg>

      {/* Initials */}
      <div className="relative z-10 flex items-center justify-center">
        <span className={cn(
          'text-white font-semibold',
          size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'
        )}>
          {name.split(' ').map(word => word[0]).join('').toUpperCase()}
        </span>
      </div>
    </div>
  )
}