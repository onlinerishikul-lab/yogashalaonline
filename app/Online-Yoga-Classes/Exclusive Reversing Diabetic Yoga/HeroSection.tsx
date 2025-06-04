"use client";

import React from "react";
import Image from "next/image";
import { Header } from "@/components/common/header";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url("/DiabeticYoga.jpg")` }}
    >
      {/* Header Menu */}
      <Header />

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center leading-snug drop-shadow-lg">
          Exclusive Reversing Diabetic Yoga
          <br />
          Strengthen the Body, Steady the Mind.
        </h1>
        <button className="mt-6 bg-[#4377b2] hover:bg-[#365e8f] transition-colors duration-300 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg">
          Enroll Now
        </button>
      </div>

      {/* Logos at the Bottom */}
      <div className="absolute bottom-6 flex space-x-6 left-1/2 transform -translate-x-1/2">
        <Image src="/rpys3.png" alt="RYS 200" width={64} height={64} />
        <Image src="/rpys2.png" alt="RYS 300" width={64} height={64} />
        <Image src="/rpys1.png" alt="RPYS" width={64} height={64} />
        <Image src="/rpys6.png" alt="RPYS" width={64} height={64} />
      </div>
    </div>
  );
};

export default HeroSection;
