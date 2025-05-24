'use client'

import { useState } from 'react'
import { HeroCarousel } from '@/components/blog/hero-carousel'
import { BlogTopics } from '@/components/blog/blog-topics'
import MainWrapper from '@/components/wrappers/main-wrapper'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { useBlogs } from '@/hooks/use-blogs'
import type { BlogCategory } from '@/types/blogs'; // update path as needed


export default function BlogPage() {
  const [page, setPage] = useState(1)
const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All')


  const {
    allBlogs,
    paginatedBlogs,
    totalPages,
    isLoading,
    error,
    isFetching
  } = useBlogs({
    page,
    limit: 6,
    category: selectedCategory
  })

  const loadMore = () => {
    setPage(prev => prev + 1)
  }

  // Show loading state
  if (isLoading) {
    return (
      <MainWrapper>
        <main className="space-y-16">
          <div className="w-full h-[400px]">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="container mx-auto px-4 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-[300px] w-full" />
              ))}
            </div>
          </div>
        </main>
      </MainWrapper>
    )
  }

  // Show error state
  if (error) {
    return (
      <MainWrapper>
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Something went wrong</h2>
            <p className="text-gray-600 mt-2">{error.message}</p>
          </div>
        </main>
      </MainWrapper>
    )
  }

  // Split blogs for hero section and remaining posts
  const heroPosts = allBlogs.slice(0, 3)
  const remainingPosts = paginatedBlogs

  return (
    <MainWrapper>
      <main className="space-y-16">
        <HeroCarousel posts={heroPosts} />
        <div className="container mx-auto px-4 pb-16">

          <BlogTopics
  posts={remainingPosts}
  activeCategory={selectedCategory}
  onCategoryChange={setSelectedCategory}
/>

          
          {/* Load More Button */}
          {page < totalPages && (
            <div className="mt-8 text-center">
              <Button
                onClick={loadMore}
                variant="outline"
                size="lg"
                className="mx-auto"
                disabled={isFetching}
              >
                {isFetching ? 'Loading...' : 'Load More Posts'}
              </Button>
            </div>
          )}
        </div>
      </main>
    </MainWrapper>
  )
}

