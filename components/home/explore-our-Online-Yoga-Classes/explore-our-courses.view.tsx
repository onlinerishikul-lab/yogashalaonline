"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./explore-our-courses.module.css";
import "swiper/css";

export default function ExploreOurClassesView() {
  const router = useRouter();

  return (
    <section className="overflow-x-hidden bg-[#FBF6F3] py-3">
      <div className={`py-7 ${styles.explore_our_courses}`}>
        <h2 className="text-4xl font-bold text-center text-[#4377B2] mb-6 z-10 relative">
          Explore Our Online Yoga Classes
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
          <SwiperSlide>
            <div
              onClick={() => router.push("/courses/restorative-yoga-ttc")}
              style={{
                backgroundImage: `url(/d6a03382-c5cb-49cf-9b1a-308a0ef4e936.jpg)`,
                cursor: "pointer",
              }}
              className="relative overflow-hidden shadow-lg rounded-none h-[320px] bg-cover bg-center group transition-opacity hover:opacity-90"
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 z-0 transition-opacity duration-300 group-hover:bg-opacity-60" />
              <div className="bg-[#4377B2] absolute top-2 left-2 text-sm px-2 py-1 text-white z-10 font-medium rounded">
                <p>Online</p>
              </div>
              <div className="absolute bottom-0 w-full bg-black/70 text-white px-4 py-3 flex justify-between items-center z-10">
                <div className="text-base font-semibold max-w-[75%] line-clamp-2">
                  Restorative Yoga TTC
                </div>
                <div className="text-base font-bold whitespace-nowrap">
                  $199
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

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
