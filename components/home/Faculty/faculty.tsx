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
    if (showSecondSet) {
      setSelectedTrainer(teachers[0]);
    } else {
      setSelectedTrainer(teachers[4]);
    }
  };

  return (
    <div className="flex justify-center relative bg-[#f1f1f1]">
      <div className="container mx-auto px-4 py-10 md:py-16 w-full">
        {/* Heading and description */}
        <div className="flex justify-between flex-col md:flex-row gap-8">
          <h1 className="md:w-[50%] text-3xl md:text-4xl font-bold text-[#4377B2] leading-tight">
            Meet Our Expert Trainers
          </h1>
          <div className="md:w-[45%]">
            <p className="text-[#878C91]">
              Our team of highly skilled and experienced trainers brings decades
              of expertise in various yoga styles. Each trainer is dedicated to
              guiding you through your yoga journey with personalized
              instruction and deep knowledge of both traditional and modern
              practices. Be inspired by their passion, commitment, and wisdom as
              they help you elevate your practice and teaching skills.
            </p>
          </div>
        </div>

        {/* Trainer display section */}
        <div className="flex gap-6 mt-12 flex-col md:flex-row">
          {/* Selector */}
          <div className="bg-[#4377B2] p-8 rounded-3xl flex flex-col justify-between md:w-1/4">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-white">920+</h1>
              <p className="text-white mt-2 text-sm">
                Learn from the Best in the Industry
              </p>
            </div>
            <div className="mt-20 flex gap-4 items-center justify-center flex-wrap">
              {displayedTrainers.map((trainer) => (
                <button
                  key={trainer.id}
                  onClick={() => setSelectedTrainer(trainer)}
                  className={`relative w-[70px] h-[70px] rounded-full overflow-hidden border-4 transition-all hover:scale-105 -ml-4 first:ml-0 ${
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

          {/* Trainer Image */}
          <div className="relative h-[400px] bg-white rounded-3xl rounded-br-[50px] md:w-3/4 overflow-hidden shadow-md">
            <Image
              src={selectedTrainer.image}
              alt={selectedTrainer.name}
              fill
              className="object-contain transition-opacity duration-300"
              priority
            />
            <div className="h-[100px] w-[100px] bg-[#4377B2] border-[15px] border-white rounded-full absolute bottom-0 right-0 z-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
