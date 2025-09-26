'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ToggleLeft } from 'lucide-react';
import { useEffect } from 'react';
import { modalIn } from './motion';

interface Block {
  id: string;
  label: string;
  wai: {
    title: string;
    subtitle: string;
    body: string[];
    highlights: string[];
  };
  ba: {
    title: string;
    subtitle: string;
    body: string[];
    highlights: string[];
  };
}

interface TimelineModalProps {
  isOpen: boolean;
  track: 'wai' | 'ba';
  block: Block | null;
  blocks: Block[];
  onClose: () => void;
  onNavigate: (track: 'wai' | 'ba', blockId: string) => void;
}

export function TimelineModal({
  isOpen,
  track,
  block,
  blocks,
  onClose,
  onNavigate,
}: TimelineModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 't' || e.key === 'T') {
        handleToggleTrack();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, track, block]);

  const handlePrevious = () => {
    if (!block) return;
    const currentIndex = blocks.findIndex(b => b.id === block.id);
    const prevBlock = blocks[currentIndex - 1];
    if (prevBlock) {
      onNavigate(track, prevBlock.id);
    }
  };

  const handleNext = () => {
    if (!block) return;
    const currentIndex = blocks.findIndex(b => b.id === block.id);
    const nextBlock = blocks[currentIndex + 1];
    if (nextBlock) {
      onNavigate(track, nextBlock.id);
    }
  };

  const handleToggleTrack = () => {
    if (!block) return;
    const newTrack = track === 'wai' ? 'ba' : 'wai';
    onNavigate(newTrack, block.id);
  };

  if (!block) return null;

  const content = block[track];
  const currentIndex = blocks.findIndex(b => b.id === block.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < blocks.length - 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={modalIn}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <div
              className="bg-white rounded-plate shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-cardy-border">
                <div className="flex-1">
                  <h2 id="modal-title" className="text-xl font-bold text-cardy-ink">
                    {content.title}
                  </h2>
                  <p className="text-sm text-cardy-slate mt-1">{content.subtitle}</p>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 hover:bg-cardy-cloud rounded-lg transition-colors duration-cardySm"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {/* Body paragraphs */}
                <div className="space-y-4 mb-6">
                  {content.body.map((paragraph, index) => (
                    <p key={index} className="text-cardy-ink leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Highlights */}
                <div>
                  <h3 className="font-semibold text-cardy-ink mb-3">Key Deliverables</h3>
                  <ul className="space-y-2">
                    {content.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-cardy-green mt-2 flex-shrink-0" />
                        <span className="text-cardy-ink">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-6 border-t border-cardy-border bg-cardy-cloud/50">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevious}
                    disabled={!hasPrev}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-cardy-ink bg-white rounded-lg border border-cardy-border hover:bg-cardy-cloud disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-cardySm"
                    aria-label="Previous week in same track"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={!hasNext}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-cardy-ink bg-white rounded-lg border border-cardy-border hover:bg-cardy-cloud disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-cardySm"
                    aria-label="Next week in same track"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleToggleTrack}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition-colors duration-cardySm ${
                    track === 'wai'
                      ? 'text-track-waiStart border-track-waiStart hover:bg-track-waiStart/10'
                      : 'text-track-baStart border-track-baStart hover:bg-track-baStart/10'
                  }`}
                  aria-label={`Switch to ${track === 'wai' ? 'BA' : 'WAI'} track`}
                >
                  <ToggleLeft className="w-4 h-4" />
                  {track === 'wai' ? 'View BA Track' : 'View WAI Track'}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}