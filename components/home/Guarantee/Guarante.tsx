"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

const GuaranteeSection = () => {
  const router = useRouter();

  return (
    <section className="bg-[#4377B2] bg-cover w-full py-5 sm:py-3">
      <div className="max-w-5xl mx-auto text-white text-center px-4 sm:px-6">
        <h2 className="mb-6 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          What is Rishikul Online Yoga Teacher Training?
        </h2>
        <p className="mb-10 text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
          A certified online program with live classes, expert instructors,
          <br className="hidden sm:block" />
          and flexible learning from home.
        </p>
        <div className="flex justify-center">
          <Button
            aria-label="Join Yoga Training Course"
            onClick={() => router.push("/courses")}
            className="bg-white text-[#4377B2] hover:text-white hover:bg-[#365e92] hover:border-white border border-transparent font-semibold w-full sm:w-[240px] py-4 rounded-full transition-all duration-300"
          >
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
