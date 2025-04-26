import Image from "next/image";
import { Button } from "@/components/ui/button";
import RysBadgeSection from "../resgistered-badge-section";

interface CourseHeroProps {
  title: string;
  imageUrl: string;
}

export function CourseHero({ title, imageUrl }: CourseHeroProps) {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src={imageUrl}
        alt="Yoga course background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />{" "}
      {/* Overlay for better text visibility */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-4xl">
          Get Certified in {title}
        </h1>
        <Button
          size="lg"
          className="bg-[#4377B2] hover:bg-[#c94d24] text-white px-8 py-6 text-xl rounded-full"
        >
          Enroll Now
        </Button>
      </div>
      {/* Certification logos */}
      <RysBadgeSection className="absolute bottom-5 right-3" />
    </section>
  );
}
