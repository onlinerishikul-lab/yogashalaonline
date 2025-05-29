"use client";

import { teachers } from "@/constants/about-data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const Faculty = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % teachers.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const selectedTrainer = teachers[selectedIndex];

  return (
    <div className="flex justify-center bg-[#f1f1f1] w-full">
      <div className="container mx-auto px-4 py-3">
        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#4377B2] lg:w-1/2">
            Meet Our Expert Trainers
          </h1>
          <p className="text-[#878C91] text-base lg:text-lg lg:w-1/2">
            Our team of highly skilled and experienced trainers brings decades
            of expertise in various yoga styles. Each trainer is dedicated to
            guiding you through your yoga journey with personalized instruction
            and deep knowledge of both traditional and modern practices.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 mt-10">
          {/* Left Panel */}
          <div className="bg-[#4377B2] p-6 sm:p-8 rounded-3xl lg:w-1/4 flex flex-col justify-between">
            <div>
              <h1 className="text-white text-4xl sm:text-6xl font-bold">Our Experts</h1>
              <p className="text-white text-sm mt-2">
                Learn from the Best in the Industry
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              {teachers.map((trainer, index) => (
                <div
                  key={trainer.id}
                  className={`relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full overflow-hidden border-4 transition-all ${
                    selectedIndex === index
                      ? "border-white scale-110 z-10"
                      : "border-transparent scale-100"
                  }`}
                >
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="lg:w-3/4 flex flex-col xl:flex-row gap-6">
            {/* Description Box */}
            <div className="bg-white rounded-3xl p-6 shadow-lg flex-1 min-h-[300px] sm:min-h-[400px] flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-bold text-[#4377B2] mb-2">
                {selectedTrainer.name}
              </h2>
              <h4 className="text-md sm:text-lg font-semibold text-[#4377B2] mb-4">
                {selectedTrainer.Subtitle}
              </h4>
              <p className="text-[#555] text-sm sm:text-base">
                {selectedTrainer.description}
              </p>
            </div>

            {/* Trainer Image */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[400px] rounded-3xl shadow-lg overflow-hidden border-4 border-[#4377b2]">
              <Image
                src={selectedTrainer.image}
                alt={selectedTrainer.name}
                fill
                className="object-cover object-top transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
