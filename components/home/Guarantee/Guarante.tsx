"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

const Guarante = () => {
  const router = useRouter();

  return (
    <div className="bg-[#4377B2] bg-cover w-full py-12 sm:py-16">
      <div className="max-w-5xl mx-auto text-white text-center px-4 sm:px-6">
        <h2 className="mb-6 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Ready to begin your Online Yoga Teacher Training journey from the comfort of your home?
        </h2>
        <p className="mb-10 text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
          Rishikul Online Yoga Teacher Training program offers a transformative experience with live interactive sessions and an internationally certified curriculum. Learn at your own pace, connect with experienced instructors, and receive personalized guidance every step of the way. Begin your journey to becoming a certified yoga teacher today!
        </p>
        <div className="flex justify-center">
          <Button
            aria-label="Join Yoga Training Course"
            onClick={() => router.push("/courses")}
            className="bg-white text-[#4377B2] hover:text-white hover:bg-[#365e92] hover:border-white border border-transparent font-semibold w-full sm:w-[240px] py-4 rounded-full transition-all duration-300"
          >
            JOIN TODAY!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Guarante;
