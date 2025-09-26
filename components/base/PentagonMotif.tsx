'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export function PentagonMotif() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const x = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="fixed top-0 right-0 w-96 h-96 pointer-events-none z-0 opacity-10">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="50,5 95,35 77,85 23,85 5,35"
          fill="currentColor"
          className="text-purple-600 opacity-60"
        />

        <polygon
          points="50,15 80,35 70,70 30,70 20,35"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-purple-400 opacity-40"
        />

        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={50 + 30 * Math.cos((i * 2 * Math.PI) / 5 - Math.PI / 2)}
            y2={50 + 30 * Math.sin((i * 2 * Math.PI) / 5 - Math.PI / 2)}
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-purple-300 opacity-30"
          />
        ))}
      </svg>

      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-3xl" />

      {mounted && (
        <motion.div
          className="absolute inset-0"
          style={{ y, x, rotate }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      )}
    </div>
  )
}