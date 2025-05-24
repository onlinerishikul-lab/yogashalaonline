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
    <div className="relative w-full h-[600px] overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-0 flex flex-col justify-end p-12 md:p-16 lg:p-20"
          >
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center space-x-2 text-white/90">
                <time className="text-sm font-light">
                  {posts[currentIndex].date}
                </time>
                <span className="text-sm">—</span>
                <span className="text-sm font-light">
                  {posts[currentIndex].category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {posts[currentIndex].title}
              </h1>
              
              <p className="text-white/80 text-base md:text-lg max-w-2xl">
                {posts[currentIndex].excerpt}
              </p>
              
              <div className="space-y-8">
                <Link
                  href={`/blog/${posts[currentIndex].slug}`}
                  className="inline-block text-white hover:text-white/90 transition-colors border-b-2 border-transparent hover:border-white/90 pb-1"
                >
                  Read More →
                </Link>

                <div className="flex items-center space-x-3">
                  {posts.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={cn(
                        "h-[2px] transition-all duration-300 ease-out",
                        idx === currentIndex 
                          ? "w-8 bg-white" 
                          : "w-4 bg-white/50 hover:bg-white/75"
                      )}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
