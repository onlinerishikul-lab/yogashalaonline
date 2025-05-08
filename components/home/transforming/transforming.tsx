"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { Course } from "@/types/course";
import { cn } from "@/lib/utils";

import "./transforming.css";

interface TransformingProps {
  courses: Course[];
}

const Transforming = ({ courses }: TransformingProps) => {
  const router = useRouter();

  return (
    <div className="flex justify-center py-20 px-2">
      <div className="max-w-screen-2xl p-2 md:p-16 w-full bg-[#f1f1f1]">
        <div className="flex justify-between flex-col md:flex-row">
          <h1 className="md:w-[50%] text-2xl mb-4 md:text-4xl font-bold text-[#4377B2]">
            Life-Changing Online Yoga Courses
          </h1>
          <div className="md:w-[40%]">
            <p className="text-[#878C91]">
              {"Rishikul online yoga courses are crafted to help you transform your mind, body, and spirit, all from the comfort of your home. Whether you’re a beginner or an advanced practitioner, we offer courses that cater to all levels. Each course is led by experienced instructors who provide personalized guidance to enhance your practice. Our comprehensive modules cover everything from physical postures to breathwork and meditation. You can practice yoga at your own pace, anytime and anywhere. Join our global community and experience the powerful transformation that yoga brings into your life."}
            </p>
            <Button
              className="mt-10 bg-transparent text-[#4377B2] hover:bg-[#4377B2] hover:text-white font-semibold w-[252px] rounded-full border-2 border-[#4377B2] py-7 duration-300"
              onClick={() => router.push("/courses")}
            >
              Explore More
            </Button>
          </div>
        </div>

        <div className="mt-20 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const availSeats = course.availableSeats - course.reserveSeats;
            return (
              <div
                key={course.id}
                className="bg-white p-8 rounded-xl flex flex-col justify-between h-[250px] min-h-[250px]"
              >
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex justify-between items-center mb-4">
                    <div
                      className={cn(
                        `rounded-full h-3 w-3`,
                        availSeats > course.availableSeats / 2 && "bg-green-500",
                        availSeats < course.availableSeats / 2 &&
                          availSeats > course.availableSeats / 5 &&
                          "bg-yellow-500",
                        availSeats < course.availableSeats / 5 && "bg-red-500"
                      )}
                    ></div>
                    <p className="text-[#4377B2] text-sm">
                      {availSeats} Seats Available
                    </p>
                  </div>
                  <h1 className="text-[#4377B2] text-lg font-semibold mb-2 line-clamp-1">
                    {course.headerSection.title}
                  </h1>
                  <p className="text-[#878C91] text-sm mb-4 leading-4 line-clamp-2">
                    {course.yogaCoursesForBeginners.body}
                  </p>
                </div>
                <div className="flex justify-end">
                  <Button
                    className="bg-transparent text-[#4377B2] flex items-center font-semibold rounded-full border-2 border-[#4377B2] py-2 px-6 duration-300 group hover:bg-[#4377B2] hover:text-white"
                    onClick={() => router.push(`/courses/${course.id}`)}
                  >
                    <ArrowRight className="group-hover:text-white" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Transforming;
