'use client';

import { motion } from 'framer-motion';
import { TimelineNode } from './TimelineNode';
import { railReveal, revealParent } from './motion';

interface TimelineRailProps {
  blocks: any[];
  activeWeek?: string;
}

export function TimelineRail({ blocks, activeWeek }: TimelineRailProps) {
  const railWidth = 800;
  const spacing = railWidth / (blocks.length - 1);

  return (
    <motion.svg
      width="100%"
      height="120"
      viewBox={`0 0 ${railWidth + 120} 120`}
      className="timeline-rail"
      variants={revealParent}
      initial="hidden"
      animate="show"
      role="presentation"
      aria-hidden="true"
    >
      {/* Background rail */}
      <motion.line
        x1="60"
        y1="50"
        x2={railWidth + 60}
        y2="50"
        stroke="url(#cardy-brand-sweep)"
        strokeWidth="3"
        opacity="0.8"
        variants={railReveal}
      />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="cardy-brand-sweep" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--cardy-red)" />
          <stop offset="25%" stopColor="var(--cardy-yellow)" />
          <stop offset="50%" stopColor="var(--cardy-green)" />
          <stop offset="100%" stopColor="var(--cardy-blue)" />
        </linearGradient>
      </defs>

      {/* Week nodes */}
      {blocks.map((block, index) => (
        <TimelineNode
          key={block.id}
          id={block.id}
          label={block.label}
          index={index}
          isActive={activeWeek === block.id}
          x={60 + index * spacing}
        />
      ))}
    </motion.svg>
  );
}