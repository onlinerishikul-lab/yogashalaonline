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
  const [showSecondSet, setShowSecondSet] = useState(false);

  const displayedTrainers = showSecondSet
    ? teachers.slice(4, 8)
    : teachers.slice(0, 4);

  const handlePlusClick = () => {
    setShowSecondSet(!showSecondSet);
    setSelectedTrainer(showSecondSet ? teachers[0] : teachers[4]);
  };

  return (
    <div className="flex justify-center bg-[#f1f1f1] w-full">
      <div className="container mx-auto px-4 py-5 md:py-5">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4377B2] md:w-1/2">
            Meet Our Expert Trainers
          </h1>
          <p className="text-[#878C91] md:w-1/2">
            Our team of highly skilled and experienced trainers brings decades of expertise in various yoga styles. Each trainer is dedicated to guiding you through your yoga journey with personalized instruction and deep knowledge of both traditional and modern practices.
          </p>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-6 mt-12 items-stretch">
          {/* Left panel */}
          <div className="bg-[#4377B2] p-8 rounded-3xl md:w-1/4 flex flex-col justify-between">
            <div>
              <h1 className="text-white text-6xl font-bold">920+</h1>
              <p className="text-white text-sm mt-2">
                Learn from the Best in the Industry
              </p>
            </div>
            <div className="mt-16 flex gap-4 items-center justify-center flex-wrap">
              {displayedTrainers.map((trainer) => (
                <button
                  key={trainer.id}
                  onClick={() => setSelectedTrainer(trainer)}
                  className={`relative w-[60px] h-[60px] rounded-full overflow-hidden border-4 transition-all hover:scale-105 -ml-3 first:ml-0 ${
                    selectedTrainer.id === trainer.id
                      ? "border-white scale-110 z-10"
                      : "border-transparent scale-100"
                  }`}
                >
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
              <span
                onClick={handlePlusClick}
                className="text-white text-3xl font-light cursor-pointer hover:opacity-80 -ml-2"
              >
                +
              </span>
            </div>
          </div>

          {/* Right panel with yellow + violet sections */}
          <div className="md:w-3/4 flex flex-col md:flex-row gap-6">
            {/* Yellow - Trainer Description */}
            <div className="bg-white rounded-3xl p-6 shadow-lg flex-1 min-h-[400px] flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-[#4377B2] mb-4">{selectedTrainer.name}</h2>
              <h4 className="text-2xl font-bold text-[#4377B2] mb-4">{selectedTrainer.Subtitle}</h4>
              <p className="text-[#555] text-base">{selectedTrainer.description}</p>
            </div>

            {/* Violet - Trainer Image */}
            <div className="relative flex-1 min-h-[400px] rounded-3xl shadow-lg overflow-hidden border-4 border-[#7B3FBC]">
              <Image
                src={selectedTrainer.image}
                alt={selectedTrainer.name}
                fill
                className="object-cover transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
