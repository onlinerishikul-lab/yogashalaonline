"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

import "./transforming.css";

const Transforming = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-2xl p-2 md:p-16 w-full bg-[#f1f1f1]">
        <div className="flex justify-between flex-col md:flex-row">
          {/* Left Section */}
          <div className="md:w-[50%]">
            <h1 className="text-2xl mb-4 md:text-4xl font-bold text-[#4377B2]">
              Life-Changing Online Yoga Courses
            </h1>

            <div className="mt-6">
  <Image
    src="/images/yoga-main.jpg" // Replace with actual path
    alt="Life-Changing Yoga"
    width={500}
    height={300}
    className="rounded-lg w-full max-w-[450px] h-auto object-cover"
  />
</div>
          </div>

          {/* Right Section */}
          <div className="md:w-[40%] mt-10 md:mt-0">
            <p className="text-[#878C91]">
              Rishikul online yoga courses are crafted to help you transform your mind, body, and spirit, all from the comfort of your home. Whether you’re a beginner or an advanced practitioner, we offer courses that cater to all levels. Each course is led by experienced instructors who provide personalized guidance to enhance your practice. Our comprehensive modules cover everything from physical postures to breathwork and meditation. You can practice yoga at your own pace, anytime and anywhere. Join our global community and experience the powerful transformation that yoga brings into your life.
            </p>
            <Button
              className="mt-10 bg-transparent text-[#4377B2] hover:bg-[#4377B2] hover:text-white font-semibold w-[252px] rounded-full border-2 border-[#4377B2] py-7 duration-300"
              onClick={() => router.push("/courses")}
            >
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transforming;
