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
    <div className="flex justify-center py-20 px-2">
      <div className="max-w-screen-2xl p-2 md:p-16 w-full bg-[#f1f1f1]">
        <div className="flex justify-between flex-col md:flex-row gap-8">
          <h1 className="md:w-[50%] text-2xl mb-4 md:text-4xl font-bold text-[#4377B2]">
            Life-Changing Online Yoga Courses
          </h1>
          <div className="md:w-[50%]">
            <p className="text-[#878C91] leading-relaxed">
              Rishikul online yoga courses are crafted to help you transform your mind, body, and spirit, all from the comfort of your home. Whether you&rsquo;re a beginner or an advanced practitioner, we offer courses that cater to all levels. Each course is led by experienced instructors who provide personalized guidance to enhance your practice. Our comprehensive modules cover everything from physical postures to breathwork and meditation. You can practice yoga at your own pace, anytime and anywhere. Join our global community and experience the powerful transformation that yoga brings into your life.
            </p>
            <Button
              className="mt-10 bg-transparent text-[#4377B2] hover:bg-[#4377B2] hover:text-white font-semibold w-[252px] rounded-full border-2 border-[#4377B2] py-7 duration-300"
              onClick={() => router.push("/courses")}
            >
              Explore More
            </Button>
          </div>
        </div>

        <div className="mt-20">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className="mySwiper"
          >
            {courses.map((course) => {
              const availSeats = course.availableSeats - course.reserveSeats;
              return (
                <SwiperSlide key={course.id} className="h-full">
                  <div className="bg-white p-8 rounded-xl flex flex-col h-full shadow-md justify-between transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
                    <div className="flex flex-col flex-1">
                      <div className="flex justify-between items-center mb-6">
                        <div
                          className={cn(
                            `rounded-full h-3 w-3`,
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
                      <h1 className="text-[#4377B2] text-2xl font-semibold mb-6">
                        {course.headerSection.title}
                      </h1>
                      <p className="text-[#878C91] leading-6 mb-8 line-clamp-4 flex-1">
                        {course.yogaCoursesForBeginners.body}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Button
                        className="bg-transparent text-[#4377B2] flex items-center gap-2 font-semibold rounded-full border-2 border-[#4377B2] py-6 px-8 duration-300 group hover:bg-[#4377B2] hover:text-white"
                        onClick={() => router.push(`/courses/${course.id}`)}
                      >
                        Explore <ArrowRight className="group-hover:text-white transition-colors" />
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
