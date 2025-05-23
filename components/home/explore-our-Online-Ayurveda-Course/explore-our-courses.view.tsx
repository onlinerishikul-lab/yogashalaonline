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
                onClick={() => handleCourseClick(course.id)}
                style={{
                  backgroundImage: `url(${course.headerSection.image})`,
                  cursor: "pointer",
                }}
                className="overflow-hidden shadow-lg relative rounded-none h-[320px] bg-cover bg-center hover:opacity-90 transition-opacity"
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

                {/* Course Language Tag */}
                <div className="bg-[#4377B2] absolute top-[10%] text-sm px-2 py-1 text-white z-10">
                  {course.yogaCoursesForBeginners.courseLanguage}
                </div>

                {/* Course Title & Price */}
                <div className="absolute bottom-[20%] w-full px-2 py-1 flex space-x-2 items-end justify-between z-10">
                  <div className="text-sm text-white w-2/3">
                    {course.headerSection.title}
                  </div>
                  <div className="text-sm text-white font-bold text-right">
                    ${course.pricing.fullPayment.amount}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button */}
        <div className="text-center mt-6 z-10 relative">
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
