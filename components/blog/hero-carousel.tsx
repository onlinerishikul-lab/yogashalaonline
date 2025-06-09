'use client'

import { useState, useEffect, useCallback, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { BlogPost } from '@/types/blog'

interface HeroCarouselProps {
  posts: BlogPost[]
}

export const HeroCarousel = memo(function HeroCarousel({ posts }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % posts.length)
  }, [posts.length])

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const currentPost = posts[currentIndex]

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Hero blog carousel"
      className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-[300px] sm:h-[400px] overflow-hidden"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentPost.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <Image
            src={currentPost.imageUrl}
            alt={currentPost.title || 'Blog post cover'}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            priority={true}
            loading="eager"
            fetchPriority="high"
            quality={50}
            placeholder={currentPost.blurDataURL ? 'blur' : 'empty'}
            blurDataURL={currentPost.blurDataURL}
            decoding="async"
            className="object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 sm:p-6 text-white backdrop-blur-sm">
            <div className="max-w-2xl space-y-2" aria-live="polite">
              <div className="text-xs sm:text-sm opacity-80">
                <time>{currentPost.date}</time> &mdash;{' '}
                <span>{currentPost.category}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold">{currentPost.title}</h1>
              <p className="text-white/90 text-xs sm:text-base line-clamp-2">
                {currentPost.excerpt}
              </p>
              <Link
                href={`/blog/${currentPost.slug}`}
                className="inline-block text-sm underline hover:opacity-80"
              >
                Read More →
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 z-10">
        {posts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === currentIndex ? 'true' : undefined}
            className={cn(
              'w-2 h-2 rounded-full transition-all',
              idx === currentIndex ? 'bg-white w-3' : 'bg-white/40 hover:bg-white'
            )}
          />
        ))}
      </div>
    </div>
  )
})
