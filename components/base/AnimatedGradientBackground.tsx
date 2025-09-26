'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function AnimatedGradientBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {mounted && (
        <>
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'linear-gradient(45deg, #E11D48 0%, #F59E0B 25%, #10B981 50%, #3B82F6 75%, #E11D48 100%)',
                'linear-gradient(90deg, #F59E0B 0%, #10B981 25%, #3B82F6 50%, #E11D48 75%, #F59E0B 100%)',
                'linear-gradient(135deg, #10B981 0%, #3B82F6 25%, #E11D48 50%, #F59E0B 75%, #10B981 100%)',
                'linear-gradient(180deg, #3B82F6 0%, #E11D48 25%, #F59E0B 50%, #10B981 75%, #3B82F6 100%)',
                'linear-gradient(45deg, #E11D48 0%, #F59E0B 25%, #10B981 50%, #3B82F6 75%, #E11D48 100%)',
              ]
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'radial-gradient(circle at 20% 20%, #E11D48 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, #F59E0B 0%, transparent 50%)',
                'radial-gradient(circle at 80% 80%, #10B981 0%, transparent 50%)',
                'radial-gradient(circle at 20% 80%, #3B82F6 0%, transparent 50%)',
                'radial-gradient(circle at 20% 20%, #E11D48 0%, transparent 50%)',
              ]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </>
      )}

      <div
        className="absolute inset-0 opacity-20 mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
    </div>
  )
}