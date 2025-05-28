import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { BlogCardProps } from '@/types/blog'
import { cn } from '@/lib/utils'

interface ExtendedBlogCardProps extends BlogCardProps {
  className?: string
}

export function BlogCard({ post, className }: ExtendedBlogCardProps) {
  return (
    <div className={cn('block h-full', className)}>
      <Card className="h-full overflow-hidden flex flex-col transition-shadow hover:shadow-lg">
        <div className="relative w-full aspect-[16/9] bg-gray-200">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            quality={60}
            loading="lazy"
            priority={false}
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
