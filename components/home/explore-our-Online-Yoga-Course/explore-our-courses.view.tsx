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

  const handleExploreMoreClick = () => {
    router.push("/courses");
  };

  const filteredCourses = courses.filter((course) =>
    course?.headerSection?.subHeading
      ?.toLowerCase()
      .includes("online yoga training")
  );

  return (
    <section className="overflow-x-hidden bg-[#FBF6F3] py-3">
      <div className={`py-7 ${styles.explore_our_courses}`}>
        <h2 className="text-4xl font-bold text-center text-[#4377B2] mb-6 z-10 relative">
          Explore Our Online Yoga Courses
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
          className="w-full"
        >
          {filteredCourses.map((course, index) => (
            <SwiperSlide key={course.id + index}>
              <div
                onClick={handleExploreMoreClick}
                className="relative overflow-hidden shadow-lg rounded-md h-[320px] bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${course?.headerSection?.image || "/fallback.jpg"})`,
                }}
              >
                {/* Accessible image fallback (for screen readers) */}
                <span className="sr-only">
                  {course?.headerSection?.title || "Yoga Course Image"}
                </span>

                {/* Online badge */}
                <div className="absolute bottom-4 right-4 bg-[#4377B2] text-white text-sm px-3 py-1 rounded z-20 shadow-md">
                  Online
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-6 z-10 relative">
          <button
            onClick={handleExploreMoreClick}
            className="bg-[#4377B2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#285384] transition-colors duration-300"
            aria-label="Explore more yoga courses"
          >
            EXPLORE MORE
          </button>
        </div>
      </div>
    </section>
  );
}
