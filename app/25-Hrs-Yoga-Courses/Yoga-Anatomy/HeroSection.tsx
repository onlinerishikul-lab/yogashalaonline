"use client";

import React from "react";
import Image from "next/image";
import { Header } from "@/components/common/header"; // Adjust if needed

const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/25.hrs.png")' }}
    >
      {/* Header Menu */}
      <Header />

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-36">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-snug drop-shadow-lg max-w-4xl">
          Yoga Anotomy For Safety
          <br />
          Anatomy meets awareness.
        </h1>

        <button className="mt-6 bg-[#4377b2] hover:bg-[#365e8f] transition-colors duration-300 text-white py-2.5 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg font-semibold shadow-lg">
          Enroll Now
        </button>

        {/* Logos at the Bottom */}
        <div className="absolute bottom-6 flex flex-wrap justify-center items-center gap-4 px-4">
          <Image src="/rpys3.png" alt="RYS 200" width={64} height={64} />
          <Image src="/rpys2.png" alt="RYS 300" width={64} height={64} />
          <Image src="/rpys1.png" alt="RPYS" width={64} height={64} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
