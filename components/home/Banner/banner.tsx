"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Banner() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      {/* Priority text content first for faster paint */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-36 min-h-[90vh]">
        <header>
          <h1 className="text-[#4377B2] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Online Yoga Teacher Training:
          </h1>
          <p className="text-white font-normal mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
            Become a Certified Yoga Teacher
          </p>
        </header>

        <Button
          className="mt-6 bg-[#4377B2] hover:bg-[#2e5b91] transition-colors duration-300 text-white py-2.5 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-lg font-semibold shadow-md"
          onClick={() => router.push("/courses")}
        >
          Start Your Journey Today
        </Button>
      </div>

      {/* Background Image moved later in DOM for faster text paint */}
      <Image
        src="/onlinebg.jpg"
        alt="Yoga pose on a serene beach background"
        fill
        className="absolute top-0 left-0 z-0 object-cover brightness-75 transition-opacity duration-500"
        priority
      />

      {/* Bottom Left Badges */}
      <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2 sm:gap-3">
        {["rpys3", "rpys2", "rpys1", "rpys6"].map((src) => (
          <Image
            key={src}
            src={`/${src}.png`}
            alt={`${src} Certified Badge`}
            width={60}
            height={60}
            loading="lazy"
          />
        ))}
      </div>

      {/* Bottom Right Logo */}
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
