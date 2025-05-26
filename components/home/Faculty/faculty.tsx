"use client";
import { teachers } from "@/constants/about-data";
import Image from "next/image";
import React, { useState } from "react";

interface Trainer {
  id: number;
  name: string;
  image: string;
  description: string;
  Subtitle?: string;
}

const Faculty = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer>(teachers[0]);

  return (
    <div className="flex justify-center bg-[#f1f1f1] w-full">
      <div className="container mx-auto px-4 py-10">
        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#4377B2] lg:w-1/2">
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
              <h1 className="text-white text-3xl sm:text-5xl font-bold">
                920+
              </h1>
              <p className="text-white text-sm mt-2">
                Learn from the Best in the Industry
              </p>
            </div>

            <div className="mt-8 grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
              {teachers.map((trainer) => (
                <button
                  key={trainer.id}
                  onClick={() => setSelectedTrainer(trainer)}
                  aria-label={`Select trainer ${trainer.name}`}
                  className={`relative w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full overflow-hidden border-4 transition-all hover:scale-105 ${
                    selectedTrainer.id === trainer.id
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
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="lg:w-3/4 flex flex-col xl:flex-row gap-6">
            {/* Description Box */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-lg flex-1 min-h-[280px] sm:min-h-[380px] flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-bold text-[#4377B2] mb-1">
                {selectedTrainer.name}
              </h2>
              {selectedTrainer.Subtitle && (
                <h4 className="text-md sm:text-lg font-semibold text-[#4377B2] mb-3">
                  {selectedTrainer.Subtitle}
                </h4>
              )}
              <p className="text-[#555] text-sm sm:text-base leading-relaxed">
                {selectedTrainer.description}
              </p>
            </div>

            {/* Trainer Image */}
            <div className="relative flex-1 min-h-[280px] sm:min-h-[380px] rounded-3xl shadow-lg overflow-hidden border-4 border-[#4377b2]">
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
