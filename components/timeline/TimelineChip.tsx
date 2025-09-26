'use client';

import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { fadeUpSm } from './motion';

interface TimelineChipProps {
  track: 'wai' | 'ba';
  blockId: string;
  label: string;
  hover: string;
  position: { x: number; y: number };
  nodeX: number;
  onOpenModal: (track: 'wai' | 'ba', blockId: string) => void;
}

export function TimelineChip({
  track,
  blockId,
  label,
  hover,
  position,
  nodeX,
  onOpenModal,
}: TimelineChipProps) {
  const isWAI = track === 'wai';
  const trackColors = {
    wai: 'from-track-waiStart to-track-waiEnd',
    ba: 'from-track-baStart to-track-baEnd',
  };

  return (
    <div className="relative">
      {/* Connector line with diamond nub */}
      <svg
        className="absolute pointer-events-none"
        style={{
          left: nodeX - position.x,
          top: isWAI ? position.y + 40 : -10,
          width: 2,
          height: Math.abs(position.y - 50) - 40,
        }}
      >
        <line
          x1="1"
          y1={isWAI ? 0 : Math.abs(position.y - 50) - 40}
          x2="1"
          y2={isWAI ? Math.abs(position.y - 50) - 40 : 0}
          stroke={`var(--cardy-${track}-start)`}
          strokeWidth="2"
          opacity="0.6"
        />
        {/* Diamond nub */}
        <rect
          x="-2"
          y={isWAI ? Math.abs(position.y - 50) - 45 : -3}
          width="6"
          height="6"
          fill={`var(--cardy-${track}-start)`}
          transform="rotate(45 1 1)"
        />
      </svg>

      {/* Chip */}
      <motion.button
        variants={fadeUpSm}
        className={`
          group relative bg-white/70 backdrop-blur-sm border border-cardy-border
          rounded-plate px-4 py-2 shadow-frosted
          hover:scale-105 hover:shadow-xl
          transition-all duration-cardySm
          focus:outline-none focus:ring-2 focus:ring-cardy-blue focus:ring-offset-2
        `}
        style={{ position: 'absolute', left: position.x, top: position.y }}
        onClick={() => onOpenModal(track, blockId)}
        aria-label={`${blockId} — ${track.toUpperCase()}: ${label}`}
        aria-describedby={`tooltip-${track}-${blockId}`}
      >
        {/* Gradient hairline */}
        <div
          className={`absolute left-0 top-0 w-1 h-full rounded-l-plate bg-gradient-to-b ${trackColors[track]}`}
        />

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-cardy-ink">{label}</span>
          <Info className="w-4 h-4 text-cardy-slate opacity-70" />
        </div>

        {/* Tooltip */}
        <div
          id={`tooltip-${track}-${blockId}`}
          className={`
            absolute z-10 px-3 py-2 text-xs font-medium text-white
            bg-cardy-ink rounded-lg shadow-lg pointer-events-none
            opacity-0 group-hover:opacity-100 group-focus:opacity-100
            transition-opacity duration-150
            ${isWAI ? 'top-full mt-2' : 'bottom-full mb-2'}
            left-1/2 transform -translate-x-1/2
            whitespace-nowrap
          `}
          role="tooltip"
        >
          {hover}
          {/* Arrow */}
          <div
            className={`
              absolute left-1/2 transform -translate-x-1/2 w-0 h-0
              border-l-4 border-r-4 border-transparent
              ${
                isWAI
                  ? 'top-0 -mt-1 border-b-4 border-b-cardy-ink'
                  : 'bottom-0 -mb-1 border-t-4 border-t-cardy-ink'
              }
            `}
          />
        </div>
      </motion.button>
    </div>
  );
}