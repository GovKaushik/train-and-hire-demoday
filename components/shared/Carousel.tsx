'use client'

import { ReactNode, useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CarouselItem {
  id: string
  title: string
  author: string
  type: 'image' | 'gif'
  asset: string
  caption: string
}

interface CarouselProps {
  items: CarouselItem[]
  className?: string
}

export function Carousel({ items, className }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    dragFree: false
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          setLightboxIndex(null)
          break
        case 'ArrowLeft':
          e.preventDefault()
          setLightboxIndex(prev =>
            prev === null ? null : (prev - 1 + items.length) % items.length
          )
          break
        case 'ArrowRight':
          e.preventDefault()
          setLightboxIndex(prev =>
            prev === null ? null : (prev + 1) % items.length
          )
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, items.length])

  return (
    <>
      <div className={cn('relative', className)}>
        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {items.map((item, index) => (
              <div key={item.id} className="flex-[0_0_100%] min-w-0 pl-6">
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 mx-2 hover:scale-105 hover:shadow-3xl transition-all duration-500">
                  <div
                    className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-6 cursor-pointer hover:opacity-90 transition-all duration-300 flex items-center justify-center overflow-hidden group shadow-inner"
                    onClick={() => setLightboxIndex(index)}
                  >
                    {item.asset === 'PLACEHOLDER' ? (
                      <div className="text-center text-gray-400 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-6xl mb-3 opacity-80">
                          {item.type === 'gif' ? '🎬' : '🖼️'}
                        </div>
                        <p className="text-sm font-medium opacity-70">{item.type.toUpperCase()}</p>
                        <p className="text-xs mt-1 opacity-50">Click to expand</p>
                      </div>
                    ) : (
                      <img
                        src={item.asset}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl text-cardy-ink">{item.title}</h3>
                    <p className="text-sm text-cardy-slate font-medium">by {item.author}</p>
                    <p className="text-sm text-cardy-slate/80 leading-relaxed">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 backdrop-blur-xl rounded-full shadow-2xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 z-10 border border-white/20"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-6 h-6 text-cardy-ink" />
        </button>
        <button
          className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 backdrop-blur-xl rounded-full shadow-2xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 z-10 border border-white/20"
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6 text-cardy-ink" />
        </button>

        {/* Enhanced Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn(
                'rounded-full transition-all duration-300',
                index === selectedIndex
                  ? 'w-8 h-3 bg-cardy-ink shadow-lg'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125'
              )}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
              onClick={() => setLightboxIndex(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <div className="bg-white rounded-2xl p-6">
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                {items[lightboxIndex].asset === 'PLACEHOLDER' ? (
                  <div className="text-center text-gray-400">
                    <div className="text-8xl mb-4">
                      {items[lightboxIndex].type === 'gif' ? '🎬' : '🖼️'}
                    </div>
                    <p className="text-lg">{items[lightboxIndex].type.toUpperCase()} PLACEHOLDER</p>
                  </div>
                ) : (
                  <img
                    src={items[lightboxIndex].asset}
                    alt={items[lightboxIndex].title}
                    className="w-full h-full object-contain rounded-lg"
                  />
                )}
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{items[lightboxIndex].title}</h3>
                <p className="text-cardy-slate mb-2">by {items[lightboxIndex].author}</p>
                <p className="text-cardy-slate">{items[lightboxIndex].caption}</p>
              </div>
            </div>

            {/* Lightbox Navigation */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur rounded-full shadow-md flex items-center justify-center hover:bg-white transition"
              onClick={() => setLightboxIndex(prev =>
                prev === null ? null : (prev - 1 + items.length) % items.length
              )}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur rounded-full shadow-md flex items-center justify-center hover:bg-white transition"
              onClick={() => setLightboxIndex(prev =>
                prev === null ? null : (prev + 1) % items.length
              )}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}