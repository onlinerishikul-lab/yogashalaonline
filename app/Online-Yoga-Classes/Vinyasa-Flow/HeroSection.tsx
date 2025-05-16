"use client";

import React from "react";
import Image from "next/image";
import { Header } from "@/components/common/header";
 // Adjust the path if it's in a different folder

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/hatha-yoga.jpg")' }}>
      {/* Header Menu */}
      <Header />

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center leading-snug drop-shadow-lg">
          Hatha Yoga Course 
          <br />
          Strengthen the Body, Steady the Mind.
        </h1>
        <button className="mt-6 bg-[#4377b2] hover:bg-[#365e8f] transition-colors duration-300 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg">
          Enroll Now
        </button>

        {/* Logos at the Bottom */}
        <div className="absolute bottom-6 flex space-x-6">
          <Image src="/rys-200.png" alt="RYS 200" width={64} height={64} />
          <Image src="/rys-300.png" alt="RYS 300" width={64} height={64} />
          <Image src="/rpys.png" alt="RPYS" width={64} height={64} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
