"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./explore-our-courses.module.css";
import { Course } from "@/types/course";
import Image from "next/image";
import "swiper/css";

interface ExploreOurCoursesViewProps {
  courses: Course[];
}

export default function ExploreOurClassesView({
  courses,
}: ExploreOurCoursesViewProps) {
  const router = useRouter();

  const handleExploreMoreClick = () => {
    router.push("/Online-ayurveda");
  };

  const filteredCourses = courses.filter((course) =>
    course?.headerSection?.subHeading
      ?.toLowerCase()
      .includes("online ayurveda courses")
  );

  return (
    <section className="overflow-x-hidden bg-[#FBF6F3] py-3">
      <div className={`py-7 ${styles.explore_our_courses}`}>
        <h2 className="text-4xl font-bold text-center text-[#4377B2] mb-6 z-10 relative">
          Explore Our Online Ayurveda Courses
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full custom-swiper"
        >
          {filteredCourses.map((course, index) => (
            <SwiperSlide key={course.id + index}>
              <div
                onClick={handleExploreMoreClick}
                className="relative overflow-hidden shadow-lg rounded-md h-[320px] cursor-pointer group"
              >
                <Image
                  src={course?.headerSection?.image || "/fallback.jpg"}
                  alt={course?.headerSection?.title || "Ayurveda Course"}
                  layout="fill"
                  quality={75}
                  loading="lazy"
                  className="transition-opacity duration-300 group-hover:opacity-90"
                />
                <div className="absolute bottom-4 right-4 bg-[#4377B2] text-white text-sm px-3 py-1 rounded z-20 shadow-md">
                  Online
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-6 z-10 relative">
       <Button
              className="mt-8 bg-transparent text-[#4377B2] hover:bg-[#4377B2] hover:text-white font-semibold w-[220px] rounded-full border-2 border-[#4377B2] py-5 duration-300"
              onClick={handleExploreMoreClick}
        >

            EXPLORE MORE
          </button>
        </div>
      </div>
    </section>
  );
}
