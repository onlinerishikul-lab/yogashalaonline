"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Banner() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="/onlinebg.webp"
        alt="Yoga pose on a serene beach background"
        fill
        priority
        placeholder="blur"
        blurDataURL="/blur/onlinebg-blur.jpg"
        className="absolute top-0 left-0 z-0 object-cover brightness-75"
        sizes="100vw"
        decoding="async"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-36 min-h-screen">
        <header>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug max-w-4xl drop-shadow-lg">
            Online Yoga Teacher Training:
            <span className="text-white font-normal block mt-2 text-base sm:text-lg md:text-xl lg:text-2xl">
              Become a Certified Yoga Teacher
            </span>
          </h1>
        </header>

        <Button
          className="mt-6 bg-[#4377B2] hover:bg-[#2e5b91] transition-colors duration-300 text-white py-2.5 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-lg font-semibold shadow-lg"
          onClick={() => router.push("/courses")}
        >
          Start Your Journey Today
        </Button>
      </div>

      {/* Bottom Left Badges */}
      <div className="absolute bottom-4 left-4 z-20 flex flex-wrap justify-start items-center gap-2 sm:gap-3">
        {["rpys3", "rpys2", "rpys1", "rpys6"].map((src, idx) => (
          <Image
            key={idx}
            src={`/${src}.png`}
            alt={`${src} Badge`}
            width={70}
            height={70}
            loading="lazy"
          />
        ))}
      </div>

      {/* Bottom Right Yoga Alliance Logo */}
      <div className="absolute bottom-4 right-4 z-20">
        <Image
          src="/alliance.png"
          alt="Yoga Alliance Official Logo"
          width={50}
          height={50}
          loading="lazy"
        />
      </div>
    </section>
  );
}
