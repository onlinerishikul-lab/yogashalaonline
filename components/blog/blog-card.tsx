import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { BlogCardProps } from '@/types/blog'
import { cn } from '@/lib/utils'
import { memo, useMemo } from 'react'

interface ExtendedBlogCardProps extends BlogCardProps {
  className?: string
  isFirst?: boolean
}

export const BlogCard = memo(function BlogCard({
  post,
  className,
  isFirst = false,
}: ExtendedBlogCardProps) {
  const formattedDate = useMemo(() => new Date(post.date).toISOString(), [post.date])

  return (
    <article className={cn('block h-full', className)}>
      <Card className="h-full overflow-hidden flex flex-col transition-shadow hover:shadow-lg">
        {/* Image section without white space */}
        <div className="relative w-full h-64">
          <Image
            src={post.imageUrl}
            alt={post.title || 'Blog post preview'}
            fill
            className="object-cover"
            loading={isFirst ? 'eager' : 'lazy'}
            priority={isFirst}
            fetchPriority={isFirst ? 'high' : 'auto'}
            quality={80}
            placeholder={post.blurDataURL ? 'blur' : 'empty'}
            blurDataURL={post.blurDataURL}
            decoding="async"
          />
        </div>

        {/* Text content */}
        <div className="p-4 flex flex-col justify-between flex-1">
          <div>
            <time
              className="text-xs text-muted-foreground mb-2 block"
              dateTime={formattedDate}
            >
              {post.date}
            </time>
            <h3 className="text-lg font-semibold mb-2 line-clamp-2 hover:text-[#4377B2] transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {post.excerpt}
            </p>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="mt-3 text-sm text-[#4377B2] font-medium hover:underline self-start"
          >
            Read More →
          </Link>
        </div>
      </Card>
    </article>
  )
})
