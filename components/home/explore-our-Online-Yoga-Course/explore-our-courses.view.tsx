"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./explore-our-courses.module.css";
import { Course } from "@/types/course";
import "swiper/css";

interface ExploreOurCoursesViewProps {
  courses: Course[];
}

export default function ExploreOurClassesView({
  courses,
}: ExploreOurCoursesViewProps) {
  const router = useRouter();

  const handleCourseClick = (courseId: string) => {
    router.push(`/courses/${courseId}`);
  };

  const filteredCourses = courses.filter((course) =>
    course.headerSection?.subHeading
      ?.toLowerCase()
      .includes("online yoga training")
  );

  return (
    <section className="overflow-x-hidden bg-[#FBF6F3] py-10">
      <div className={`py-10 ${styles.explore_our_courses}`}>
        <h2 className="text-5xl font-extrabold text-center text-[#4377B2] mb-10 z-10 relative tracking-wide">
          Explore Our Online Yoga Courses
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
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
                onClick={() => handleCourseClick(course.id)}
                style={{
                  backgroundImage: `url(${course.headerSection.image})`,
                  cursor: "pointer",
                }}
                className="relative overflow-hidden shadow-xl rounded-xl h-[360px] bg-cover bg-center group"
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 z-0 transition-opacity duration-300 group-hover:bg-black/60" />

                {/* Language Badge */}
                <div className="bg-[#4377B2] absolute top-4 left-4 text-lg px-3 py-1 text-white z-10 font-bold rounded-full shadow-md">
                  Online
                </div>

                {/* Title & Price Bar */}
                <div className="absolute bottom-0 w-full bg-black/80 text-white px-6 py-4 flex justify-between items-center z-10">
                  <div className="text-lg font-semibold max-w-[70%] leading-tight">
                    {course.headerSection.title}
                  </div>
                  <div className="text-xl font-bold text-[#FFD700]">
                    ${course.pricing.fullPayment.amount}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Explore More Button */}
        <div className="text-center mt-10 z-10 relative">
          <button
            className="bg-[#4377B2] text-white text-lg px-10 py-4 rounded-full font-bold hover:bg-[#2c5a92] transition duration-300 shadow-lg uppercase tracking-wider"
            onClick={() => router.push("/courses")}
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
