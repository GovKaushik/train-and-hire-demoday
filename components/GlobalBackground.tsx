'use client';

import { motion } from 'framer-motion';

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Gradient Layer */}
      <motion.div
        className="absolute inset-0 opacity-6"
        style={{
          background: 'var(--cardy-brand-sweep)',
          backgroundSize: '400% 400%'
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Pentagon Watermark */}
      <motion.div
        className="absolute top-10 right-10 opacity-8"
        animate={{
          x: [0, 8, 0],
          y: [0, 6, 0],
          rotate: [0, 2, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div
          className="w-64 h-64 bg-cardy-blue/10"
          style={{
            clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
          }}
        />
      </motion.div>

      {/* Ribbon Wave Layer */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -inset-x-32 -inset-y-32"
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: `conic-gradient(from 0deg,
                transparent 0deg,
                var(--cardy-blue)/3 45deg,
                transparent 90deg,
                var(--cardy-green)/3 135deg,
                transparent 180deg)`
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}