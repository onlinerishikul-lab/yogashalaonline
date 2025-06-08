'use client'

import { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import MainWrapper from '@/components/wrappers/main-wrapper'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { useBlogs } from '@/hooks/use-blogs'

// Dynamically import heavy components for better perf
const HeroCarousel = dynamic(() => import('@/components/blog/hero-carousel').then(m => m.HeroCarousel), {
  ssr: false,
  loading: () => <Skeleton className="w-full h-[400px]" />
})
const BlogTopics = dynamic(() => import('@/components/blog/blog-topics').then(m => m.BlogTopics), {
  loading: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} className="h-[300px] w-full" />
      ))}
    </div>
  )
})

export default function BlogPage() {
  const [page, setPage] = useState(1)
  const [selectedCategory] = useState('All')

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

  // Always call hooks at the top level, unconditionally
  const heroPosts = useMemo(() => allBlogs ? allBlogs.slice(0, 3) : [], [allBlogs])
  const remainingPosts = useMemo(() => paginatedBlogs || [], [paginatedBlogs])

  const loadMore = () => {
    setPage(prev => prev + 1)
  }

  if (isLoading) {
    return (
      <MainWrapper>
        <main className="space-y-16">
          <div className="w-full h-[400px]" aria-busy="true">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="container mx-auto px-4 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-[300px] w-full" />
              ))}
            </div>
          </div>
        </main>
      </MainWrapper>
    )
  }

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

  return (
    <MainWrapper>
      <main className="space-y-16">
        <HeroCarousel posts={heroPosts} key={heroPosts.map(p => p.id).join('-')} />
        <div className="container mx-auto px-4 pb-16">
          <BlogTopics posts={remainingPosts} />

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
