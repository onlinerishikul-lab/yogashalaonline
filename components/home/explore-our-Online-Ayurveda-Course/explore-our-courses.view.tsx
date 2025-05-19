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

  // Filter courses with subHeading containing "online ayurveda courses"
  const filteredCourses = courses.filter((course) =>
    course.headerSection?.subHeading
      ?.toLowerCase()
      .includes("online ayurveda courses")
  );

  return (
    <section className="overflow-x-hidden bg-[#FBF6F3] py-6">
      <div className={`py-7 relative ${styles.explore_our_courses} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#4377B2] mb-8 z-10 relative">
          Explore Our Online Ayurveda Courses
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          loop={true}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2.5, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 40 },
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
                className="overflow-hidden shadow-lg relative rounded-none h-[320px] bg-cover bg-center hover:opacity-90 transition-opacity"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleCourseClick(course.id);
                  }
                }}
                aria-label={`View details for course: ${course.headerSection.title}`}
              >
                <div className="bg-[#4377B2] absolute top-[10%] left-2 text-xs sm:text-sm px-2 py-1 text-white rounded">
                  {course.yogaCoursesForBeginners.courseLanguage}
                </div>
                <div className="absolute bottom-[20%] w-full px-3 py-1 flex space-x-2 items-end justify-between">
                  <div className="text-sm sm:text-base text-white w-2/3 truncate">
                    {course.headerSection.title}
                  </div>
                  <div className="text-sm sm:text-base text-white font-bold text-right">
                    ${course.pricing.fullPayment.amount}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button directly below slider with no gap */}
        <div className="text-center mt-8 z-10 relative">
          <button
            className="bg-[#4377B2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#285384] transition-colors"
            onClick={() => router.push("/courses")}
          >
            EXPLORE MORE
          </button>
        </div>
      </div>
    </section>
  );
}
