'use client';

import { motion } from 'framer-motion';
import { fadeUpSm } from './motion';

interface TimelineNodeProps {
  id: string;
  label: string;
  index: number;
  isActive?: boolean;
  x: number;
}

export function TimelineNode({ id, label, index, isActive, x }: TimelineNodeProps) {
  return (
    <motion.g
      variants={fadeUpSm}
      custom={index}
      className="timeline-node"
      role="button"
      tabIndex={0}
      aria-label={`${label} timeline milestone`}
    >
      {/* Week oval */}
      <ellipse
        cx={x}
        cy="50"
        rx="60"
        ry="32"
        fill="rgba(255, 255, 255, 0.65)"
        stroke="var(--cardy-border)"
        strokeWidth="1"
        className={`transition-all duration-cardySm ease-cardy ${
          isActive ? 'drop-shadow-lg' : 'drop-shadow-sm'
        }`}
      />

      {/* Week label */}
      <text
        x={x}
        y="56"
        textAnchor="middle"
        className="text-sm font-semibold fill-cardy-ink select-none"
        style={{ fontSize: '14px' }}
      >
        {label}
      </text>
    </motion.g>
  );
}