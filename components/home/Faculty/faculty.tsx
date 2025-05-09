"use client";
import { teachers } from "@/constants/about-data";
import Image from "next/image";
import React, { useState } from "react";

interface Trainer {
  id: number;
  name: string;
  image: string;
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
    <div className="flex justify-center pt-16 bg-[#f1f1f1]">
      <div className="max-w-screen-2xl w-full px-4 md:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377B2] mb-10">
          Meet Our Expert Trainers
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Card */}
          <div className="bg-[#4377B2] p-8 rounded-3xl w-full md:max-w-[300px] flex flex-col justify-between min-h-[400px]">
            <div>
              <h1 className="text-6xl font-bold text-white">920+</h1>
              <p className="text-white mt-2">Learn from the Best in the Industry</p>
            </div>
            <div className="mt-10 flex gap-3 items-center">
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
                className="text-white text-3xl font-light cursor-pointer hover:opacity-80"
              >
                +
              </span>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative bg-white rounded-3xl rounded-br-[50px] w-full md:max-w-[400px] h-[400px] overflow-hidden shadow-md">
            <Image
              src={selectedTrainer.image}
              alt={selectedTrainer.name}
              fill
              className="object-contain"
              priority
            />
            <div className="h-[100px] w-[100px] bg-[#4377B2] border-[15px] border-white rounded-full absolute bottom-0 right-0 z-30"></div>
          </div>

          {/* Right Paragraph */}
          <div className="w-full md:max-w-[400px] text-[#878C91] text-base leading-relaxed">
            <p>
              Our team of highly skilled and experienced trainers brings decades
              of expertise in various yoga styles. Each trainer is dedicated to
              guiding you through your yoga journey with personalized instruction
              and deep knowledge of both traditional and modern practices.
              <br />
              <br />
              Be inspired by their passion, commitment, and wisdom as they help
              you elevate your practice and teaching skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
