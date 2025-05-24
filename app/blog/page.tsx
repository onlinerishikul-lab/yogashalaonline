// app/(main)/blog/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useBlogs } from '@/hooks/useBlogs';
import { Blog } from '@/types/blog';
import { BlogCard } from '@/components/shared/blog-card';
import { BlogTopics } from '@/components/shared/blog-topics';
import { HeroCarousel } from '@/components/shared/hero-carousel';
import { MainWrapper } from '@/components/shared/main-wrapper';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export default function BlogPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [displayedBlogs, setDisplayedBlogs] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const {
    blogs,
    isLoading,
    isFetching,
    error,
    fetchNextPage,
    refetch,
  } = useBlogs(selectedCategory, currentPage);

  useEffect(() => {
    setDisplayedBlogs([]);
    setCurrentPage(1);
    setHasMore(true);
    refetch();
  }, [selectedCategory]);

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      if (currentPage === 1) {
        setDisplayedBlogs(blogs);
      } else {
        setDisplayedBlogs(prev => [...prev, ...blogs]);
      }
    } else {
      setHasMore(false);
    }
  }, [blogs]);

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
    fetchNextPage();
  };

  return (
    <MainWrapper>
      <main className="flex flex-col space-y-8">
        {/* Hero Section */}
        <section className="w-full">
          <HeroCarousel category={selectedCategory} />
        </section>

        {/* Topic Filter Tabs */}
        <section className="w-full">
          <BlogTopics
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </section>

        {/* Blog Grid */}
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading && (
            <>
              {Array.from({ length: 6 }).map((_, idx) => (
                <Skeleton key={idx} className="h-[300px] w-full rounded-xl" />
              ))}
            </>
          )}

          {!isLoading && displayedBlogs.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground">
              No blogs found for this category.
            </p>
          )}

          {!isLoading &&
            displayedBlogs.map((blog: Blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
        </section>

        {/* Load More */}
        {hasMore && (
          <div className="w-full flex justify-center pt-4">
            <Button
              onClick={handleLoadMore}
              disabled={isFetching}
              className="px-6"
            >
              {isFetching ? 'Loading...' : 'Load More'}
            </Button>
          </div>
        )}
      </main>
    </MainWrapper>
  );
}
