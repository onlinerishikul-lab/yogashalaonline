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
    // Define the slide functions inside useEffect to avoid missing dependencies warning
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
      // Restart the auto slide on manual click
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % teachers.length);
      }, 3000);
    }
  };

  const selectedTrainer = teachers[selectedIndex];

  return (
    <div className="flex justify-center bg-[#f1f1f1] w-full">
      <div className="container mx-auto px-4 py-3">
        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#4377B2] lg:w-1/2">
            Meet Our Expert Trainers
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-4 mt-10">
          {/* Left Panel */}
          <div className="bg-[#4377B2] p-6 sm:p-8 rounded-3xl lg:w-1/4 flex flex-col justify-between">
            <div>
              <h1 className="text-white text-4xl sm:text-6xl font-bold">Our Trainers</h1>
              <p className="text-white text-sm mt-2">Learn from the Best in the Industry</p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              {teachers.map((trainer, index) => (
                <button
                  key={trainer.id}
                  onClick={() => handleTrainerClick(index)}
                  className={`relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full overflow-hidden border-4 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white ${
                    selectedIndex === index ? "border-white scale-110 z-10" : "border-transparent scale-100"
                  }`}
                  aria-label={`View trainer ${trainer.name}`}
                >
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover object-top"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="lg:w-3/4 flex flex-col xl:flex-row gap-6">
            {/* Description Box */}
            <div className="bg-white rounded-3xl p-6 shadow-lg flex-1 min-h-[300px] sm:min-h-[400px] flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-bold text-[#4377B2] mb-2">{selectedTrainer.name}</h2>
              <h4 className="text-md sm:text-lg font-semibold text-[#4377B2] mb-4">{selectedTrainer.Subtitle}</h4>
              <p className="text-[#555] text-sm sm:text-base">{selectedTrainer.description}</p>
            </div>

            {/* Trainer Image */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[400px] rounded-3xl shadow-lg overflow-hidden border-4 border-[#4377b2]">
              <Image
                src={selectedTrainer.image}
                alt={selectedTrainer.name}
                fill
                className="object-cover object-top transition-opacity duration-300"
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
