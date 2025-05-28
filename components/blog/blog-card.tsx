import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { BlogCardProps } from '@/types/blog'
import { cn } from '@/lib/utils'

interface ExtendedBlogCardProps extends BlogCardProps {
  className?: string
  isFirst?: boolean // New prop to prioritize LCP image
}

export function BlogCard({ post, className, isFirst = false }: ExtendedBlogCardProps) {
  return (
    <div className={cn('block h-full', className)}>
      <Card className="h-full overflow-hidden flex flex-col transition-shadow hover:shadow-md">
        <div className="relative w-full aspect-[16/9] bg-gray-100">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            quality={60}
            loading={isFirst ? 'eager' : 'lazy'}
            priority={isFirst}
            placeholder="blur"
            blurDataURL="/placeholder.jpg" // Add a small base64 or low-res placeholder
          />
        </div>
        <div className="p-4 flex flex-col justify-between flex-1">
          <div>
            <time className="text-xs text-muted-foreground mb-2">{post.date}</time>
            <h3 className="text-lg font-semibold mb-2 line-clamp-2 hover:text-[#4377B2] transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="mt-3 text-sm text-[#4377B2] font-medium hover:underline self-start"
          >
            Read More →
          </Link>
        </div>
      </Card>
    </div>
  )
}
