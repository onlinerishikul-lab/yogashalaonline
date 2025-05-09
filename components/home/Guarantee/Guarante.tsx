"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

const Guarante = () => {
  const router = useRouter();
  return (
    <div className="bg-[#4377B2] bg-cover flex justify-center px-6">
      <div className="container mx-auto px-4 py-12 md:py-16 md:w-3/5 text-white text-center">
        <h2 className="mb-8 text-3xl md:text-4xl font-bold leading-snug">
          Ready to begin your Online yoga teacher training journey from the
          comfort of your home?
        </h2>
        <p className="mb-8 text-base md:text-lg leading-relaxed">
          Rishikul Online Yoga Teacher Training program offers a transformative
          experience with live interactive sessions, and an internationally
          certified curriculum. Learn at your own pace, connect with experienced
          instructors, and receive personalized guidance every step of the way.
          Begin your journey to becoming a certified yoga teacher today!
        </p>
        <Button
          className="bg-white text-[#4377B2] hover:text-white hover:border-white border hover:bg-[#4377B2] font-semibold w-[252px] py-5 rounded-full"
          onClick={() => router.push("/courses")}
        >
          JOIN TODAY!
        </Button>
      </div>
    </div>
  );
};

export default Guarante;
