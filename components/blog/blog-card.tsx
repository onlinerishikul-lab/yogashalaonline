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
    <div className={cn("block h-full", className)}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-6 flex flex-col justify-between flex-1">
          <div>
            <time className="text-sm text-muted-foreground mb-3">
              {post.date}
            </time>
            <h3 className="text-xl font-semibold mb-3 line-clamp-2 hover:text-[#4377B2] transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
          </div>

          {/* Read More link */}
          <Link
            href="https://rishikulyogshalaonline.com/yoga-blogs/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sm text-[#4377B2] font-medium hover:underline self-start"
          >
            Read More →
          </Link>
        </div>
      </Card>
    </div>
  );
}
