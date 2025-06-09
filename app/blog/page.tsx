// File: app/blog/page.tsx
'use client'

import { useState, useMemo, useCallback } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import MainWrapper from '@/components/wrappers/main-wrapper'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { useBlogs } from '@/hooks/use-blogs'

const HeroCarousel = dynamic(
  () => import('@/components/blog/hero-carousel').then((m) => m.HeroCarousel),
  {
    ssr: false,
    loading: () => <Skeleton className="w-full h-[400px]" />,
  }
)

const BlogTopics = dynamic(
  () => import('@/components/blog/blog-topics').then((m) => m.BlogTopics),
  {
    ssr: false,
    loading: () => (
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        aria-busy="true"
      >
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-[300px] w-full" />
        ))}
      </div>
    ),
  }
)

export default function BlogPage() {
  const [page, setPage] = useState(1)
  const [selectedCategory] = useState('All')

  const {
    allBlogs,
    paginatedBlogs,
    totalPages,
    isFetching,
  } = useBlogs({
    page,
    limit: 6,
    category: selectedCategory,
  })

  const heroPosts = useMemo(() => allBlogs?.slice(0, 3) || [], [allBlogs])
  const remainingPosts = useMemo(() => paginatedBlogs || [], [paginatedBlogs])

  const loadMore = useCallback(() => setPage((prev) => prev + 1), [])

  const preloadImage = heroPosts[0]?.imageUrl

  return (
    <MainWrapper>
      <Head>
        {preloadImage && (
          <link
            rel="preload"
            as="image"
            href={preloadImage}
          />
        )}
      </Head>

      <main className="space-y-16">
        <HeroCarousel posts={heroPosts} key={heroPosts.map((p) => p.id).join('-')} />

        <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
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
        </section>
      </main>
    </MainWrapper>
  )
}
