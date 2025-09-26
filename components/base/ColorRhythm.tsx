'use client'

// Color rhythm system for section-based accent mapping
export const sectionColorMap = {
  welcome: {
    accent: '#E11D48', // cardi-red
    rgb: '225, 29, 72',
    name: 'red'
  },
  mission: {
    accent: '#3B82F6', // cardi-blue
    rgb: '59, 130, 246',
    name: 'blue'
  },
  cohort1: {
    accent: '#10B981', // cardi-green
    rgb: '16, 185, 129',
    name: 'green'
  },
  cohort2: {
    accent: '#F59E0B', // cardi-yellow
    rgb: '245, 158, 11',
    name: 'yellow'
  },
  cadence: {
    accent: '#3B82F6', // cardi-blue
    rgb: '59, 130, 246',
    name: 'blue'
  },
  groupproject: {
    accent: '#E11D48', // cardi-red
    rgb: '225, 29, 72',
    name: 'red'
  },
  artifacts: {
    accent: '#10B981', // cardi-green
    rgb: '16, 185, 129',
    name: 'green'
  },
  diversity: {
    accent: '#F59E0B', // cardi-yellow
    rgb: '245, 158, 11',
    name: 'yellow'
  },
  pathway: {
    accent: '#E11D48', // cardi-red
    rgb: '225, 29, 72',
    name: 'red'
  },
  handoff: {
    accent: '#3B82F6', // cardi-blue
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
    accent: `text-cardi-${color.name}`,
    accentBg: `bg-cardi-${color.name}`,
    accentBorder: `border-cardi-${color.name}`,
    accentRing: `ring-cardi-${color.name}`,
    accentFrom: `from-cardi-${color.name}`,
    accentTo: `to-cardi-${color.name}`,
    accentVia: `via-cardi-${color.name}`,
    shadow: `shadow-cardi-${color.name}/25`
  }
}