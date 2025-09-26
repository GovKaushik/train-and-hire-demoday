'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TimelineModal } from './TimelineModal';
import { revealParent, chipReveal, chipHover, weekOvalHover, labelFloat, progressReveal } from './motion';
import timelineData from '@/data/timeline.json';

// Track Label Component
function TrackLabel({ text, color, muted }: { text: string; color?: string; muted?: boolean }) {
  if (muted) {
    return <div className="text-sm font-medium text-cardy-slate select-none">{text}</div>;
  }
  return (
    <motion.div
      className="inline-flex items-center gap-2 select-none"
      variants={labelFloat}
      whileHover="hover"
      initial="rest"
    >
      <span className={`h-3 w-3 rounded-full bg-gradient-to-r ${color}`} />
      <span className="text-sm font-semibold text-cardy-ink">{text}</span>
    </motion.div>
  );
}

// Progress Rail Component
function ProgressRail({ totalBlocks }: { totalBlocks: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Background rail */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-cardy-border/30 transform -translate-y-1/2" />

      {/* Progress indicator */}
      <motion.div
        className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-track-waiStart via-cardy-green to-track-baEnd transform -translate-y-1/2 rounded-full"
        style={{ width: '100%' }}
        variants={progressReveal}
        initial="hidden"
        animate="show"
      />

      {/* Animated dots along progress */}
      {Array.from({ length: totalBlocks }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 w-2 h-2 bg-cardy-ink rounded-full transform -translate-y-1/2 -translate-x-1/2"
          style={{ left: `${(i / (totalBlocks - 1)) * 100}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 1 + i * 0.1,
            duration: 0.3,
            ease: 'backOut'
          }}
        />
      ))}
    </div>
  );
}

// Week Oval Component
function WeekOval({ label }: { label: string }) {
  return (
    <motion.div
      className="mx-auto w-full max-w-[220px] sm:max-w-[180px] md:max-w-[200px] rounded-full border border-cardy-border/70 bg-white/70 backdrop-blur px-4 sm:px-6 py-2 sm:py-3 text-center text-sm sm:text-base font-semibold text-cardy-ink shadow-sm cursor-default will-change-transform"
      variants={weekOvalHover}
      initial="rest"
      whileHover="hover"
    >
      {label}
    </motion.div>
  );
}

// Timeline Chip Component
function TimelineChip({
  block,
  track,
  onOpenModal
}: {
  block: any;
  track: 'wai' | 'ba';
  onOpenModal: (track: 'wai' | 'ba', blockId: string) => void;
}) {
  const item = track === 'wai' ? block.wai : block.ba;

  return (
    <motion.button
      type="button"
      onClick={() => onOpenModal(track, block.id)}
      className={`
        group mx-auto w-full max-w-[260px] sm:max-w-[200px] md:max-w-[240px]
        rounded-full bg-white/85 backdrop-blur
        px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-medium text-cardy-ink shadow
        will-change-transform cursor-pointer
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        flex items-center justify-center gap-2
        ${
          track === 'wai'
            ? 'border-gradient-wai focus-visible:ring-track-waiStart'
            : 'border-gradient-ba focus-visible:ring-track-baStart'
        }
      `}
      variants={chipHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      aria-haspopup="dialog"
      aria-controls={`modal-${block.id}-${track}`}
      aria-label={`${block.label}: ${item?.title ?? 'No item'}`}
    >
      <span className="truncate flex-1 text-center">{item?.chip ?? '—'}</span>
      <motion.span
        className="flex-shrink-0 text-cardy-slate group-hover:text-cardy-ink text-xs sm:text-sm"
        variants={labelFloat}
      >
        ⓘ
      </motion.span>
    </motion.button>
  );
}

export function WeeklyTimeline2Up() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    track: 'wai' | 'ba' | null;
    blockId: string | null;
  }>({
    isOpen: false,
    track: null,
    blockId: null,
  });

  // Sort blocks by their position to ensure correct left-to-right ordering
  const sortedBlocks = [...timelineData.blocks].sort((a, b) => {
    const aNum = parseInt(a.id.split('-')[1]);
    const bNum = parseInt(b.id.split('-')[1]);
    return aNum - bNum;
  });

  const handleOpenModal = (track: 'wai' | 'ba', blockId: string) => {
    setModalState({
      isOpen: true,
      track,
      blockId,
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      track: null,
      blockId: null,
    });
  };

  const handleNavigate = (track: 'wai' | 'ba', blockId: string) => {
    setModalState({
      isOpen: true,
      track,
      blockId,
    });
  };

  const currentBlock = modalState.blockId
    ? sortedBlocks.find(b => b.id === modalState.blockId) || null
    : null;

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-h2 text-cardy-ink mb-3 sm:mb-4">10-Week Journey</h2>
        <p className="text-base sm:text-lg text-cardy-slate max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0">
          Dual-track intensive combining Business Analysis fundamentals with
          Workplace AI implementation across five bi-weekly milestones.
        </p>
      </div>

      {/* Timeline Container */}
      <motion.section
        id="weekly-view"
        className="relative mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 md:py-16"
        variants={revealParent}
        initial="hidden"
        animate="show"
      >
        {/* Desktop: Grid Layout with Labels Column + Timeline Grid */}
        <div className="hidden md:grid grid-cols-[auto_1fr] gap-x-6 lg:gap-x-10">
          {/* LEFT: Track Labels (3 rows) - Desktop only */}
          <div className="flex flex-col justify-between py-6 md:py-8">
            <div className="h-12 md:h-16 flex items-center">
              <TrackLabel
                color="from-track-waiStart to-track-waiEnd"
                text="WAI Track"
              />
            </div>
            <div className="h-12 md:h-16 flex items-center">
              <TrackLabel muted text="Weeks" />
            </div>
            <div className="h-12 md:h-16 flex items-center">
              <TrackLabel
                color="from-track-baStart to-track-baEnd"
                text="BA Track"
              />
            </div>
          </div>

          {/* RIGHT: 3-row Timeline Grid - Desktop */}
          <div className="grid grid-rows-[auto_auto_auto] gap-y-6 md:gap-y-8 lg:gap-y-10">
            {/* Row A: WAI chips */}
            <motion.div
              className="grid auto-cols-fr grid-flow-col gap-x-4 md:gap-x-6 lg:gap-x-8"
              variants={revealParent}
              initial="hidden"
              animate="show"
            >
              {sortedBlocks.map((block, index) => (
                <motion.div
                  key={`wai-${block.id}`}
                  variants={chipReveal}
                  transition={{ delay: index * 0.1 }}
                >
                  <TimelineChip
                    block={block}
                    track="wai"
                    onOpenModal={handleOpenModal}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Row B: Week ovals with progress rail */}
            <motion.div
              className="grid auto-cols-fr grid-flow-col gap-x-4 md:gap-x-6 lg:gap-x-8 items-center relative"
              variants={revealParent}
              initial="hidden"
              animate="show"
            >
              <ProgressRail totalBlocks={sortedBlocks.length} />
              {sortedBlocks.map((block, index) => (
                <motion.div
                  key={`wk-${block.id}`}
                  variants={chipReveal}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="relative z-10"
                >
                  <WeekOval label={block.label} />
                </motion.div>
              ))}
            </motion.div>

            {/* Row C: BA chips */}
            <motion.div
              className="grid auto-cols-fr grid-flow-col gap-x-4 md:gap-x-6 lg:gap-x-8"
              variants={revealParent}
              initial="hidden"
              animate="show"
            >
              {sortedBlocks.map((block, index) => (
                <motion.div
                  key={`ba-${block.id}`}
                  variants={chipReveal}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <TimelineChip
                    block={block}
                    track="ba"
                    onOpenModal={handleOpenModal}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline Layout */}
        <div className="md:hidden space-y-8">
          {sortedBlocks.map((block, index) => (
            <motion.div
              key={`mobile-${block.id}`}
              className="bg-white/40 backdrop-blur rounded-2xl border border-cardy-border/50 p-6 shadow-lg"
              variants={chipReveal}
              initial="hidden"
              animate="show"
              transition={{ delay: index * 0.1 }}
            >
              {/* Week label */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/70 backdrop-blur rounded-full border border-cardy-border/70 shadow-sm">
                  <span className="text-sm font-semibold text-cardy-ink">{block.label}</span>
                </div>
              </div>

              {/* WAI Track */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrackLabel
                    color="from-track-waiStart to-track-waiEnd"
                    text="WAI Track"
                  />
                </div>
                <TimelineChip
                  block={block}
                  track="wai"
                  onOpenModal={handleOpenModal}
                />
              </div>

              {/* BA Track */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrackLabel
                    color="from-track-baStart to-track-baEnd"
                    text="BA Track"
                  />
                </div>
                <TimelineChip
                  block={block}
                  track="ba"
                  onOpenModal={handleOpenModal}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Keyboard shortcuts hint */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm text-cardy-slate px-4">
            <span className="hidden sm:inline">Click any chip to explore • Arrow keys navigate • T toggles tracks • ESC closes</span>
            <span className="sm:hidden">Tap any chip to explore details</span>
          </p>
        </div>
      </motion.section>

      {/* Modal */}
      <TimelineModal
        isOpen={modalState.isOpen}
        track={modalState.track!}
        block={currentBlock}
        blocks={sortedBlocks}
        onClose={handleCloseModal}
        onNavigate={handleNavigate}
      />
    </div>
  );
}