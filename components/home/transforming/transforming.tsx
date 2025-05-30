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
                src="/community1.jpg" // Replace with actual path
                alt="Life-Changing Yoga"
                width={500}
                height={200}
                className="rounded-lg w-full max-w-[450px] h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-[40%] mt-10">
            <p className="text-[#878C91]">
              Rishikul Yogshala is India&rsquo;s premier online yoga school, known for its authentic teachings and highly experienced instructors. We offer a peaceful sanctuary for the mind, body, and spirit—right from the comfort of your home. Join us to experience the true magic of yoga through our transformative retreats and internationally certified teacher training programs. With some of the most trusted and recommended yoga teachers, our interactive classes follow a holistic approach that nurtures personal growth and well-being. Whether you&rsquo;re a beginner or a seasoned practitioner, we warmly welcome you to begin a journey of self-discovery and inner harmony with Rishikul Yogshala.
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
