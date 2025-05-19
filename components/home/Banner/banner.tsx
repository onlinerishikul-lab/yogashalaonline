"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

// Lazy load badge section
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
        alt="Yoga pose silhouette at beach"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-12 min-h-screen">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
          <span className="text-[#4377B2] block">Online Yoga Teacher Training:</span>
          <span className="text-white block font-normal mt-2">
            Become a Certified Yoga Teacher
          </span>
        </h1>

        <Button
          className="mt-6 bg-[#4377B2] text-white text-lg px-6 py-3 rounded-full hover:bg-[#285384] transition"
          onClick={() => router.push("/courses")}
        >
          Start Your Journey Today
        </Button>
      </div>

      {/* Bottom Row */}
      <div className="absolute bottom-0 w-full flex justify-between items-end px-6 py-4">
        {/* Left badges */}
        <div className="flex gap-4">
          <Image
            src="/rys-300.png"
            alt="RYS 300"
            width={70}
            height={70}
            className="w-16 sm:w-20"
          />
          <Image
            src="/rys-200.png"
            alt="RYS 200"
            width={70}
            height={70}
            className="w-16 sm:w-20"
          />
          <Image
            src="/rpys.png"
            alt="RPYS"
            width={70}
            height={70}
            className="w-16 sm:w-20"
          />
        </div>

        {/* Right logo */}
        <div>
          <Image
            src="/yoga-alliance.png"
            alt="Yoga Alliance Logo"
            width={70}
            height={70}
            className="w-16 sm:w-20"
          />
        </div>
      </div>
    </div>
  );
}
