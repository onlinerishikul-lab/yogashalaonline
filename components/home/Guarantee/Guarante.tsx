"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

const Guarante = () => {
  const router = useRouter();
  return (
    <div className="bg-[#4377B2] bg-cover flex justify-center px-6 ">
      <div className="container mx-auto p-2 md:w-3/5 py-14 text-white text-center">
        <h2 className="mb-10 text-4xl font-bold">
          Ready to begin your Online yoga teacher training journey from the
          comfort of your home?
        </h2>
        <p className="mb-10">
          Rishikul Online Yoga Teacher Training program offers a transformative
          experience with a live interactive sessions, and an internationally
          certified curriculum. Learn at your own pace, connect with experienced
          instructors, and receive personalized guidance every step of the way.
          Begin your journey to becoming a certified yoga teacher today!{" "}
        </p>
        <Button
          className="bg-white text-[#4377B2] hover:text-white hover:border-white border hover:bg-[#4377B2] font-semibold w-[252px] py-7 rounded-full"
          onClick={() => router.push("/courses")}
        >
          JOIN TODAY!
        </Button>
      </div>
    </div>
  );
};

export default Guarante;
