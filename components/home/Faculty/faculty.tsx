"use client";

import { teachers } from "@/constants/about-data";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const Faculty = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToNextTrainer = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % teachers.length);
  };

  useEffect(() => {
    const startAutoSlide = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(goToNextTrainer, 3000);
    };

    const stopAutoSlide = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handleTrainerClick = (index: number) => {
    if (index !== selectedIndex) {
      setSelectedIndex(index);
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(goToNextTrainer, 3000);
    }
  };

  const selectedTrainer = teachers[selectedIndex];

  return (
    <div className="w-full bg-[#f1f1f1]">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-10">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4377B2] mb-6 text-center lg:text-left">
          Meet Our Expert Trainers
        </h1>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Panel */}
          <div className="bg-[#4377B2] rounded-3xl p-6 flex flex-col justify-between lg:w-1/4">
            <div>
              <h2 className="text-white text-3xl sm:text-4xl font-bold">Our Trainers</h2>
              <p className="text-white mt-2 text-sm sm:text-base">
                Learn from the Best in the Industry
              </p>
            </div>

            <div className="mt-6 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-3 gap-3">
              {teachers.map((trainer, index) => (
                <button
                  key={trainer.id}
                  onClick={() => handleTrainerClick(index)}
                  className={`relative w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full overflow-hidden border-4 transition-all bg-white ${
                    selectedIndex === index
                      ? "border-white scale-110 z-10"
                      : "border-transparent scale-100"
                  }`}
                  aria-label={`View trainer ${trainer.name}`}
                >
                  <div className="absolute inset-0 bg-white">
                    <Image
                      src={trainer.image}
                      alt={trainer.name}
                      fill
                      className="object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex-1 flex flex-col xl:flex-row gap-6">
            {/* Description Box */}
            <div className="bg-white rounded-3xl p-5 shadow-lg flex-1 min-h-[280px] sm:min-h-[320px] flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-bold text-[#4377B2] mb-1">{selectedTrainer.name}</h2>
              <h4 className="text-sm sm:text-base font-semibold text-[#4377B2] mb-3">{selectedTrainer.Subtitle}</h4>
              <p className="text-[#444] text-sm sm:text-base">{selectedTrainer.description}</p>
            </div>

            {/* Trainer Image */}
            {/* Trainer Image */}
<div className="relative flex-1 min-h-[280px] sm:min-h-[320px] rounded-3xl shadow-lg overflow-hidden border-4 border-[#4377b2] bg-white">
  <Image
    src={selectedTrainer.image}
    alt={selectedTrainer.name}
    fill
    className="object-cover"
    loading="eager"
    priority
  />
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
