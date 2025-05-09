"use client";
import { teachers } from "@/constants/about-data";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface Trainer {
  id: number;
  name: string;
  image: string;
}

const Faculty = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer>(teachers[0]);

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
          {/* Trainer selector section with Swiper */}
          <div className="bg-[#4377B2] p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <h1 className="text-7xl font-bold text-white">920+</h1>
              <p className="text-white w-1/2">
                Learn from the Best in the Industry
              </p>
            </div>

            <div className="mt-24 w-[300px] md:w-[320px]">
              <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                breakpoints={{
                  320: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                }}
              >
                {teachers.map((trainer) => (
                  <SwiperSlide key={trainer.id}>
                    <button
                      onClick={() => setSelectedTrainer(trainer)}
                      className={`relative w-[70px] h-[70px] rounded-full overflow-hidden border-4 transition-all hover:scale-105 ${
                        selectedTrainer.id === trainer.id
                          ? "border-white scale-110 z-10"
                          : "border-transparent"
                      }`}
                    >
                      <Image
                        src={trainer.image}
                        alt={trainer.name}
                        fill
                        className="object-cover"
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Main trainer image section */}
          <div className="relative h-[400px] bg-white rounded-3xl rounded-br-[50px] md:w-3/4 overflow-hidden transition-all duration-500">
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
