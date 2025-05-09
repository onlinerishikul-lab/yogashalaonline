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
    <div className="flex justify-center pt-16 relative">
      <div className="container mx-auto p-2 py-8 md:p-16 w-full bg-[#f1f1f1]">
        <div className="flex justify-between flex-col md:flex-row">
          <h1 className="md:w-[50%] text-2xl mb-4 md:text-4xl font-bold text-[#4377B2]">
            Meet Our Expert Trainers
          </h1>
          <div className="md:w-[40%]">
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

        <div className="flex gap-4 mt-16 flex-col md:flex-row">
          {/* Left block */}
          <div className="bg-[#4377B2] p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <h1 className="text-7xl font-bold text-white">920+</h1>
              <p className="text-white w-1/2">
                Learn from the Best in the Industry
              </p>
            </div>
            <div className="mt-24 flex gap-4 items-center justify-center">
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

          {/* Right image block */}
          <div className="relative md:w-3/4 flex justify-center items-center bg-white rounded-3xl rounded-br-[50px] overflow-hidden p-4">
            <div className="relative w-full h-[500px] max-w-[400px] mx-auto">
              <Image
                src={selectedTrainer.image}
                alt={selectedTrainer.name}
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
              />
            </div>
            <div className="h-[100px] w-[100px] bg-[#4377B2] border-[15px] border-white rounded-full absolute bottom-0 right-0 z-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
