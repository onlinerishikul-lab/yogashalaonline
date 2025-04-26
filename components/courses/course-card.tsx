import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
  title: string;
  subtitle?: string;
  price: number;
  imageUrl: string;
  slug: string;
}

export function CourseCard({
  title,
  subtitle = "Master your practice",
  imageUrl = "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=1600&auto=format&fit=crop",
  slug,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${slug}`} className="block group">
      <Card className="relative overflow-hidden w-full max-w-[380px] rounded-[24px] transition-all duration-300 border-0 bg-transparent hover:shadow-xl">
        <div className="relative aspect-[4/5] w-full rounded-[24px] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority
          />
          {/* Gradient overlay with improved visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

          {/* Content container with precise spacing */}
          <div className="absolute bottom-0 left-0 p-7 w-full">
            <h3 className="text-[26px] leading-tight font-bold text-white mb-2 tracking-tight">
              {title}
            </h3>
            <p className="text-white/80 text-[15px] leading-snug font-medium mb-8">
              {subtitle}
            </p>

            {/* Circular button with refined hover effect */}
            <div className="inline-flex items-center">
              <div className="bg-white hover:bg-[#4377B2] hover:text-white rounded-full p-3.5 shadow-lg transform transition-all duration-300 group-hover:translate-x-2 group-hover:shadow-2xl">
                <ArrowRight className="w-[22px] h-[22px] " strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
