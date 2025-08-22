"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Banner() {
  const router = useRouter();

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <Image
        src="/Online-image.jpg"
        alt="Yoga pose on beach"
        fill
        className="object-cover brightness-75"
        priority
        sizes="100vw"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 pt-24 sm:pt-28 md:pt-32 lg:pt-36 min-h-screen max-w-7xl mx-auto">
        <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl font-bold leading-snug drop-shadow-lg">
          <span className="block text-[#4377B2] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Online Yoga Teacher Training
          </span>
          <span className="block mt-2 text-white font-normal text-base sm:text-lg md:text-xl lg:text-2xl">
            Become a Certified Yoga Teacher
          </span>
        </h1>

        <Button
          className="mt-6 bg-[#4377B2] hover:bg-[#2e5b91] transition-colors duration-300 text-white py-2.5 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-lg font-semibold shadow-lg"
          onClick={() => router.push("/courses")}
        >
          Start Your Journey Today
        </Button>
      </div>

      {/* Bottom Left Badges */}
      <div className="absolute bottom-4 left-4 z-20 flex flex-wrap justify-start items-center gap-2 sm:gap-3">
        <Image src="/rpys3.png" alt="RYS 300 Yoga Alliance" width={56} height={56} />
        <Image src="/rpys2.png" alt="RYS 200 Yoga Alliance" width={56} height={56} />
        <Image src="/rpys1.png" alt="RPYS Yoga Alliance" width={56} height={56} />
        <Image src="/rpys6.png" alt="RYS 300 Yoga Alliance" width={56} height={56} />
      </div>

      {/* Bottom Right Yoga Alliance Logo */}
      <div className="absolute bottom-4 right-4 z-20">
        <Image src="/alliance.png" alt="Yoga Alliance Logo" width={48} height={48} />
      </div>
    </div>
  );
}
