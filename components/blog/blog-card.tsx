import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { BlogCardProps } from "@/types/blog";
import { cn } from "@/lib/utils";

interface ExtendedBlogCardProps extends BlogCardProps {
  className?: string;
}

export function BlogCard({ post, className }: ExtendedBlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className={cn("block h-full", className)}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-6 flex flex-col h-[calc(100%-56.25%)]">
          {" "}
          {/* 56.25% is aspect ratio 16:9 */}
          <time className="text-sm text-muted-foreground mb-3">
            {post.date}
          </time>
          <h3 className="text-xl font-semibold mb-3 line-clamp-2 hover:text-[#4377B2] transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </div>
      </Card>
    </Link>
  );
}
