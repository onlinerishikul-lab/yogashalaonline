"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

// Lazy load RysBadgeSection
const RysBadgeSection = dynamic(
  () => import("@/components/resgistered-badge-section"),
  { ssr: false }
);

export function Banner() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2000&auto=format&fit=crop"
        alt="Yoga pose silhouette at sunset"
        fill
        className="object-cover brightness-75"
        priority
        loading="eager"
      />

      {/* Center Content */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center px-6 sm:px-10 md:px-20 py-12">
        <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight text-white">
          <span className="text-[#4377B2] block">Online Yoga Teacher Training:</span>
          <span className="text-white font-normal block mt-2">
            Become a Certified Yoga Teacher
          </span>
        </h1>

        <Button
          className="bg-[#4377B2] px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg hover:bg-[#285384] rounded-full transition"
          onClick={() => router.push("/courses")}
        >
          Start Your Journey Today
        </Button>
      </div>

      {/* Bottom Badge Section */}
      <div className="absolute bottom-0 w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-4 p-4">
          <RysBadgeSection />
          <Image
            src="/alliance.png"
            alt="Yoga Alliance"
            width={100}
            height={100}
            className="w-20 sm:w-24 md:w-28"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
