'use client'

import { useState, useMemo, memo } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { BlogCard } from './blog-card'
import type { BlogCategory, BlogPost } from '@/types/blog'

interface BlogTopicsProps {
  posts: BlogPost[]
}

export const BlogTopics = memo(function BlogTopics({ posts }: BlogTopicsProps) {
  const categories: BlogCategory[] = useMemo(
    () => ['All', ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  )

  const [activeCategory, setActiveCategory] = useState<BlogCategory>('All')

  const filteredPosts = useMemo(
    () =>
      activeCategory === 'All'
        ? posts
        : posts.filter((post) => post.category === activeCategory),
    [posts, activeCategory]
  )

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-[#4377B2]">Popular Topics</h2>
        <Link
          href="/blog"
          className="text-sm font-medium text-muted-foreground hover:text-[#4377B2]"
        >
          View All
        </Link>
      </div>

      {/* Category Tabs */}
      <nav
        role="tablist"
        aria-label="Blog category tabs"
        className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-thin scrollbar-thumb-[#4377B2]/60 scrollbar-track-transparent"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            role="tab"
            aria-selected={activeCategory === category}
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
      </nav>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              isFirst={index === 0}
            />
          ))
        ) : (
          <p className="text-muted-foreground col-span-full">
            No posts available in this category.
          </p>
        )}
      </div>
    </section>
  )
})
