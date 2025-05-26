'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { BlogCard } from './blog-card'
import type { BlogCategory, BlogPost } from '@/types/blog'

interface BlogTopicsProps {
  posts: BlogPost[]
}

export function BlogTopics({ posts }: BlogTopicsProps) {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(posts.map((post) => post.category)))
    return ['All', ...unique]
  }, [posts])

  const [activeCategory, setActiveCategory] = useState<BlogCategory>('All')

  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === activeCategory)

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-[#4377B2]">Popular Topics</h2>
        <Link
          href="/blog"
          className="text-sm font-medium text-muted-foreground hover:text-[#4377B2]"
        >
          View All
        </Link>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              'whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors',
              activeCategory === category
                ? 'bg-[#4377B2] text-white'
                : 'text-muted-foreground hover:text-[#4377B2]'
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} className="h-full" />
        ))}
      </div>
    </section>
  )
}
