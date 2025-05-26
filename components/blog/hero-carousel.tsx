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
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={posts[currentIndex].imageUrl}
            alt={posts[currentIndex].title}
            fill
            className="object-cover"
            priority
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-0 flex flex-col justify-end bg-black/30 backdrop-blur-sm p-6 sm:p-10"
          >
            <div className="max-w-3xl space-y-3 text-white">
              <div className="text-sm opacity-80">
                <time>{posts[currentIndex].date}</time> &mdash;{' '}
                <span>{posts[currentIndex].category}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                {posts[currentIndex].title}
              </h1>
              <p className="text-white/90 text-sm sm:text-base line-clamp-2">
                {posts[currentIndex].excerpt}
              </p>
              <Link
                href={`/blog/${posts[currentIndex].slug}`}
                className="inline-block text-white text-sm font-medium underline hover:opacity-80"
              >
                Read More →
              </Link>

              <div className="flex space-x-2 mt-4">
                {posts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={cn(
                      'h-[2px]',
                      idx === currentIndex ? 'w-6 bg-white' : 'w-4 bg-white/50 hover:bg-white'
                    )}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
