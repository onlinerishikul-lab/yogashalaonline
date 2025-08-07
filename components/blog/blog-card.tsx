'use client'

import { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import MainWrapper from '@/components/wrappers/main-wrapper'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'

const BlogCard = dynamic(() => import('@/components/custom/blog-card'), {
  loading: () => <Skeleton className="h-[280px] w-full rounded-xl" />,
  ssr: false,
})

const TagList = dynamic(() => import('@/components/custom/tag-list'), {
  loading: () => <Skeleton className="h-8 w-24 rounded-full" />,
  ssr: false,
})

type Blog = {
  id: string
  title: string
  summary: string
  tag: string
  image: string
}

const sampleBlogs: Blog[] = [
  {
    id: '1',
    title: 'Understanding React Server Components',
    summary: 'Explore the future of React with Server Components...',
    tag: 'React',
    image: '/images/blog1.jpg',
  },
  {
    id: '2',
    title: 'Next.js 14: What’s New?',
    summary: 'Get updated on the new features and improvements...',
    tag: 'Next.js',
    image: '/images/blog2.jpg',
  },
  {
    id: '3',
    title: 'TypeScript Tips for Beginners',
    summary: 'Level up your TypeScript skills with these tips...',
    tag: 'TypeScript',
    image: '/images/blog3.jpg',
  },
  {
    id: '4',
    title: 'The Power of Tailwind CSS',
    summary: 'A modern way to style your applications with utility classes...',
    tag: 'Tailwind',
    image: '/images/blog4.jpg',
  },
]

const page = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All')

  const filteredBlogs = useMemo(() => {
    if (selectedTag === 'All') return sampleBlogs
    return sampleBlogs.filter(blog => blog.tag === selectedTag)
  }, [selectedTag])

  const tags = useMemo(() => {
    const allTags = ['All', ...new Set(sampleBlogs.map(blog => blog.tag))]
    return allTags
  }, [])

  return (
    <MainWrapper>
      <div className="space-y-8 py-8 md:py-12">
        <div className="flex justify-center">
          <div className="max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              Blog & Resources
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Insights, tutorials, and stories from our journey in building the
              future.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <TagList
            tags={tags}
            selectedTag={selectedTag}
            onSelectTag={setSelectedTag}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center text-muted-foreground py-12">
            <p>No blogs found for selected tag.</p>
            <Button variant="outline" className="mt-4" onClick={() => setSelectedTag('All')}>
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </MainWrapper>
  )
}

export default page
