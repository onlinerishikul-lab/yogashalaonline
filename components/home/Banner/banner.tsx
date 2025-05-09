"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import RysBadgeSection from "@/components/resgistered-badge-section";
import { useRouter } from "next/navigation";

export function Banner() {
  const router = useRouter();
  return (
    <div className="relative h-screen min-h-[600px] w-full">
      <Image
        src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2000&auto=format&fit=crop"
        alt="Yoga pose silhouette at sunset"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 h-full container mx-auto flex flex-col justify-center items-center text-center">
        {/* Centered heading and button */}
        <div>
          <h1 className="mb-2 text-4xl md:text-5xl lg:text-6xl">
            <span className="font-bold text-[#4377B2]">
              Online Yoga Teacher Training:
            </span>
            <br />
            <span className="text-white">Become a Certified Yoga Teacher</span>
          </h1>
          <Button
            className="mt-2 bg-[#4377B2] px-6 py-5 text-base hover:bg-[#285384] rounded-full"
            onClick={() => router.push("/courses")}
          >
            Start Your Journey Today
          </Button>
        </div>
      </div>

      {/* Bottom section with badge and image */}
      <div className="absolute bottom-0 w-full py-4 container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
          <RysBadgeSection />
          <Image
            src="/yoga-alliance.png"
            alt="Yoga Alliance"
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
}
