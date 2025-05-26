'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { BlogPost } from '@/types/blog'

interface HeroCarouselProps {
  posts: BlogPost[]
}

export function HeroCarousel({ posts }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length)
  }, [posts.length])

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const currentPost = posts[currentIndex]

  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-gray-200">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={currentPost.imageUrl}
            alt={currentPost.title}
            fill
            priority={currentIndex === 0} // Only first is priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-6 sm:p-10 text-white">
            <div className="max-w-3xl space-y-3">
              <div className="text-sm opacity-80">
                <time>{currentPost.date}</time> &mdash;{' '}
                <span>{currentPost.category}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                {currentPost.title}
              </h1>
              <p className="text-white/90 text-sm sm:text-base line-clamp-2">
                {currentPost.excerpt}
              </p>
              <Link
                href={`/blog/${currentPost.slug}`}
                className="inline-block text-white text-sm font-medium underline hover:opacity-80"
              >
                Read More →
              </Link>
              <div className="flex space-x-2 mt-4">
                {posts.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setCurrentIndex(idx)}
                    className={cn(
                      'h-[2px]',
                      idx === currentIndex ? 'w-6 bg-white' : 'w-4 bg-white/50 hover:bg-white'
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
