"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Banner() {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2000&auto=format&fit=crop"
        alt="Yoga pose on beach"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 min-h-screen">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug text-white">
          <span className="text-[#4377B2] block">Online Yoga Teacher Training:</span>
          <span className="text-white font-normal block mt-2">
            Become a Certified Yoga Teacher
          </span>
        </h1>

        <Button
          className="mt-6 bg-[#4377B2] px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg hover:bg-[#2e5b91] rounded-full transition"
          onClick={() => router.push("/courses")}
        >
          Start Your Journey Today
        </Button>
      </div>

      {/* Bottom Badges (RYS) - stack on mobile */}
      <div className="absolute bottom-4 left-4 z-20 flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 max-w-[90vw] sm:max-w-none">
        <Image
          src="/rpys3.png"
          alt="RYS 300 Yoga Alliance"
          width={60}
          height={60}
          className="w-12 sm:w-[70px] h-auto"
        />
        <Image
          src="/rpys2.png"
          alt="RYS 200 Yoga Alliance"
          width={60}
          height={60}
          className="w-12 sm:w-[70px] h-auto"
        />
        <Image
          src="/rpys1.png"
          alt="RPYS Yoga Alliance"
          width={60}
          height={60}
          className="w-12 sm:w-[70px] h-auto"
        />
        <Image
          src="/rpys6.png"
          alt="RYS 300 Yoga Alliance"
          width={60}
          height={60}
          className="w-12 sm:w-[70px] h-auto"
        />
      </div>

      {/* Bottom Right Yoga Alliance Logo */}
      <div className="absolute bottom-4 right-4 z-20">
        <Image
          src="/alliance.png"
          alt="Yoga Alliance Logo"
          width={60}
          height={60}
          className="w-12 sm:w-[70px] h-auto"
        />
      </div>
    </div>
  );
}
