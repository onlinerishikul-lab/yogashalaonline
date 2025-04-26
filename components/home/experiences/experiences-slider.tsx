"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./experience.module.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Practicing with Yogshala has been an incredible experience. They truly listened to our needs and provided insightful guidance that exceeded our expectations. We couldn't be happier with the progress we've made through their yoga teaching!",
    author: "Peter",
    location: "Belgium",
    context: "on what he learned when sitting with himself",
  },
  {
    quote:
      "Practicing with Yogshala has been an incredible experience. They truly listened to our needs and provided insightful guidance that exceeded our expectations. We couldn't be happier with the progress we've made through their yoga teaching!",
    author: "Keri",
    location: "UK",
    context: "on finding her happy place",
  },
  {
    quote:
      "Practicing with Yogshala has been an incredible experience. They truly listened to our needs and provided insightful guidance that exceeded our expectations. We couldn't be happier with the progress we've made through their yoga teaching!",
    author: "Davide",
    location: "London",
    context: "on using meditation to turn his life around",
  },
  {
    quote:
      "Practicing with Yogshala has been an incredible experience. They truly listened to our needs and provided insightful guidance that exceeded our expectations. We couldn't be happier with the progress we've made through their yoga teaching!",
    author: "Jaime",
    location: "Spain",
    context: "on the benefits of his employees embracing meditation",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="relative py-6 md:py-10">
      <div className="absolute top-0 left-0 right-0 h-16 md:h-24 bg-white transform -skew-y-3 z-10" />
      <div className="min-h-[800px] md:min-h-[950px] pb-10 md:pb-20 bg-[#4377B2] flex flex-col items-center justify-center relative">
        <Image
          alt="star"
          src="/assets/icons/star.png"
          width={40}
          height={40}
          className="absolute top-[5%] right-[5%] md:right-[10%] w-6 h-6 md:w-10 md:h-10"
        />
        <Image
          alt="star"
          src="/assets/icons/star.png"
          width={40}
          height={40}
          className="absolute top-[15%] md:top-[25%] left-[5%] md:left-[10%] w-6 h-6 md:w-10 md:h-10"
        />
        <div className="w-full flex flex-col items-center justify-center relative px-4 md:px-0">
          <div
            className={`bg-[#333333] text-white text-[10px] md:text-xs py-4 md:py-6 px-2 md:px-4 writing-mode-vertical uppercase tracking-wider font-medium absolute top-0 left-0`}
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
            }}
            role="complementary"
          >
            STUDENT CORNER
          </div>

          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4 md:px-6 text-center md:w-[70%]">
            Straight from Our Trainees: Experiences That Inspire
          </h2>
          <p className="mb-8 md:mb-16 text-white text-center text-sm md:text-base md:w-[70%] px-4">
            Read through our student comments to see why they love learning with
            us and how we can help you achieve your goals through yoga teaching.
          </p>
        </div>
        <div className="w-full relative mt-6 md:mt-10">
          <Swiper
            effect={"coverflow"}
            // grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.5}
            spaceBetween={50}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-prev", // Custom previous button
              nextEl: ".swiper-button-next", // Custom next button
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1, // For mobile screens
              },
              768: {
                slidesPerView: 1.5, // For tablets
              },
              1024: {
                slidesPerView: 1.5, // For desktops
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay, Navigation]}
            className="testimonial-swiper "
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className=" opacity-70">
                <div className="slide-content">
                  <div className="bg-[#2A2A2A] rounded-2xl p-4 md:p-8 shadow-lg transform transition-all duration-500">
                    <div
                      className="text-[#FF6B35] text-4xl md:text-6xl font-serif mb-4 md:mb-8 flex justify-between"
                      aria-hidden="true"
                    >
                      <div className="flex items-center gap-3 md:gap-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full"></div>
                        <footer className="text-xs md:text-sm text-white">
                          <div className="font-medium">
                            {testimonial.author}
                          </div>
                          <div className="mt-0.5 md:mt-1 italic text-white">
                            {testimonial.location}
                          </div>
                        </footer>
                      </div>
                      <Image
                        src="/assets/icons/quoteup.png"
                        alt="quote"
                        height={50}
                        width={50}
                        className="h-8 w-8 md:h-12 md:w-12"
                      />
                    </div>
                    <blockquote className="text-white text-sm md:text-lg mb-4 md:mb-6">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={`${styles.swiperButtonLeft} swiper-button-prev`}>
            <span className="custom-prev-icon">
              {/* <Image
                src="/assets/icons/arrow-left.png"
                alt="arrow"
                width={40}
                height={40}
                className="h-[40px] w-[40px] object-contain"
              /> */}
              <ArrowLeft />
            </span>
          </div>
          <div className={`${styles.swiperButtonRight} swiper-button-next`}>
            <span className="custom-next-icon">
              {/* <Image
                src="/assets/icons/arrow-right.png"
                alt="arrow"
                width={40}
                height={40}
                className="h-[40px] w-[40px] object-contain"
              /> */}
              <ArrowRight />
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-white transform -skew-y-3 translate-y-24" />
    </div>
  );
}
