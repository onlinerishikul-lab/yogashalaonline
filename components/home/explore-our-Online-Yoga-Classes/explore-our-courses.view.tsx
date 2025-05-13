"use client";


import React from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./explore-our-courses.module.css";
import { Course } from "@/types/course";

interface ExploreOurCoursesViewProps {
  courses: Course[];
}

export default function ExploreOurCoursesView({
  courses,
}: ExploreOurCoursesViewProps) {
  const router = useRouter();

  const handleCourseClick = (courseId: string) => {
    router.push(`/courses/${courseId}`);
  };

  // Filter courses with subHeading containing "online yoga training"
  const filteredCourses = courses.filter((course) =>
    course.headerSection?.subHeading
      ?.toLowerCase()
      .includes("online yoga training")
  );

  return (
    <section className="overflow-x-hidden bg-[#FBF6F3]">
      <div className="space-y-">
        <h2 className="text-4xl font-bold text-center text-[#4377B2]">
          Explore Our Online Yoga  Courses
        </h2>

        <div className={`py-2 bg-[#FBF6F3] ${styles.explore_our_courses}`}>
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
                  <div className="bg-[#4377B2] absolute top-[10%] text-sm px-2 py-1 text-white">
                    {course.yogaCoursesForBeginners.courseLanguage}
                  </div>
                  <div className="absolute bottom-[20%] w-full px-2 py-1 flex space-x-2 items-end justify-between">
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
        </div>

        <div className="text-center">
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
