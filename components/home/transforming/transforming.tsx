"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Course } from "@/types/course";
import "./transforming.css";
import { cn } from "@/lib/utils";

interface TransformingProps {
  courses: Course[];
}

const Transforming = ({ courses }: TransformingProps) => {
  const router = useRouter();

  return (
    <div className="flex justify-center px-4 py-16">
      <div className="w-full max-w-7xl bg-[#f1f1f1] px-4 md:px-10 lg:px-16 py-12 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <h1 className="md:w-1/2 text-3xl md:text-4xl font-bold text-[#4377B2]">
            Life-Changing Online Yoga Courses
          </h1>
          <div className="md:w-1/2 text-[#878C91]">
            <p className="leading-relaxed">
              Rishikul online yoga courses are crafted to help you transform your mind, body, and spirit, all from the comfort of your home...
            </p>
            <Button
              className="mt-8 border-2 border-[#4377B2] text-[#4377B2] hover:bg-[#4377B2] hover:text-white rounded-full font-semibold py-6 px-10"
              onClick={() => router.push("/courses")}
            >
              Explore More
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {courses.map((course) => {
              const availSeats = course.availableSeats - course.reserveSeats;
              return (
                <SwiperSlide key={course.id} className="h-full">
                  <div className="flex flex-col justify-between h-full bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300">
                    <div className="flex flex-col flex-grow">
                      <div className="flex justify-between items-center mb-4">
                        <div
                          className={cn(
                            "rounded-full h-3 w-3",
                            availSeats > course.availableSeats / 2 && "bg-green-500",
                            availSeats < course.availableSeats / 2 &&
                              availSeats > course.availableSeats / 5 && "bg-yellow-500",
                            availSeats < course.availableSeats / 5 && "bg-red-500"
                          )}
                        ></div>
                        <p className="text-[#4377B2] font-medium">
                          {availSeats} Seats Available
                        </p>
                      </div>
                      <h2 className="text-[#4377B2] text-xl font-semibold mb-4">
                        {course.headerSection.title}
                      </h2>
                      <p className="text-[#878C91] line-clamp-4 flex-1">
                        {course.yogaCoursesForBeginners.body}
                      </p>
                    </div>
                    <div className="mt-6">
                      <Button
                        className="w-full border-2 border-[#4377B2] text-[#4377B2] hover:bg-[#4377B2] hover:text-white rounded-full font-semibold py-4 flex items-center justify-center gap-2 group"
                        onClick={() => router.push(`/courses/${course.id}`)}
                      >
                        Explore <ArrowRight className="group-hover:text-white" />
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Transforming;
