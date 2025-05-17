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
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with brightness and priority for faster LCP */}
      <Image
        src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2000&auto=format&fit=crop"
        alt="Yoga pose silhouette at sunset"
        fill
        className="object-cover brightness-75"
        priority
        loading="eager"
      />

      {/* Centered content */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center px-4">
        <h1
          className="mb-4 text-4xl md:text-5xl lg:text-6xl leading-tight"
          style={{ fontWeight: "bold" }}
        >
          <span className="text-[#4377B2]">Online Yoga Teacher Training:</span>
          <br />
          <span className="text-white font-normal">
            Become a Certified Yoga Teacher
          </span>
        </h1>
        <Button
          className="bg-[#4377B2] px-6 py-5 text-base hover:bg-[#285384] rounded-full"
          onClick={() => router.push("/courses")}
        >
          Start Your Journey Today
        </Button>
      </div>

      {/* Bottom badge section (lazy component) */}
      <div className="absolute bottom-0 w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-end justify-between p-4">
          <RysBadgeSection />
          <Image
            src="/alliance.png"
            alt="Yoga Alliance"
            width={120}
            height={120}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
