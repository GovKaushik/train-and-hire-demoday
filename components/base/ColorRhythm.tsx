'use client'

// Color rhythm system for section-based accent mapping
export const sectionColorMap = {
  welcome: {
    accent: '#E11D48', // cardy-red
    rgb: '225, 29, 72',
    name: 'red'
  },
  mission: {
    accent: '#3B82F6', // cardy-blue
    rgb: '59, 130, 246',
    name: 'blue'
  },
  cohort1: {
    accent: '#10B981', // cardy-green
    rgb: '16, 185, 129',
    name: 'green'
  },
  cohort2: {
    accent: '#F59E0B', // cardy-yellow
    rgb: '245, 158, 11',
    name: 'yellow'
  },
  cadence: {
    accent: '#3B82F6', // cardy-blue
    rgb: '59, 130, 246',
    name: 'blue'
  },
  groupproject: {
    accent: '#E11D48', // cardy-red
    rgb: '225, 29, 72',
    name: 'red'
  },
  artifacts: {
    accent: '#10B981', // cardy-green
    rgb: '16, 185, 129',
    name: 'green'
  },
  diversity: {
    accent: '#F59E0B', // cardy-yellow
    rgb: '245, 158, 11',
    name: 'yellow'
  },
  pathway: {
    accent: '#E11D48', // cardy-red
    rgb: '225, 29, 72',
    name: 'red'
  },
  handoff: {
    accent: '#3B82F6', // cardy-blue
    rgb: '59, 130, 246',
    name: 'blue'
  }
} as const

export type SectionName = keyof typeof sectionColorMap

export function getSectionColor(sectionId: string): typeof sectionColorMap[SectionName] {
  const normalizedId = sectionId.toLowerCase() as SectionName
  return sectionColorMap[normalizedId] || sectionColorMap.welcome
}

// CSS custom properties for dynamic section colors
export function generateSectionCSS(sectionId: string) {
  const color = getSectionColor(sectionId)
  return {
    '--section-accent': color.accent,
    '--section-accent-rgb': color.rgb,
    '--section-accent-name': color.name
  } as React.CSSProperties
}

// Tailwind utility classes for section colors
export function getSectionClasses(sectionId: string) {
  const color = getSectionColor(sectionId)

  return {
    accent: `text-cardy-${color.name}`,
    accentBg: `bg-cardy-${color.name}`,
    accentBorder: `border-cardy-${color.name}`,
    accentRing: `ring-cardy-${color.name}`,
    accentFrom: `from-cardy-${color.name}`,
    accentTo: `to-cardy-${color.name}`,
    accentVia: `via-cardy-${color.name}`,
    shadow: `shadow-cardy-${color.name}/25`
  }
}