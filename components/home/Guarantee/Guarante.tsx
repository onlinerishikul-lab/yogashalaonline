"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

const Guarante = () => {
  const router = useRouter();

  return (
    <div className="bg-[#4377B2] bg-cover flex justify-center px-4 sm:px-6">
      <div className="container mx-auto text-white text-center py-12 md:py-20 lg:py-24 max-w-3xl">
        <h2 className="mb-6 text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Ready to begin your Online Yoga Teacher Training journey from the
          comfort of your home?
        </h2>
        <p className="mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
          Rishikul Online Yoga Teacher Training program offers a transformative
          experience with live interactive sessions and an internationally
          certified curriculum. Learn at your own pace, connect with experienced
          instructors, and receive personalized guidance every step of the way.
          Begin your journey to becoming a certified yoga teacher today!
        </p>
        <Button
          className="bg-white text-[#4377B2] hover:text-white hover:border-white border hover:bg-[#4377B2] font-semibold w-full sm:w-[252px] py-4 rounded-full transition-all duration-300"
          onClick={() => router.push("/courses")}
        >
          JOIN TODAY!
        </Button>
      </div>
    </div>
  );
};

export default Guarante;
