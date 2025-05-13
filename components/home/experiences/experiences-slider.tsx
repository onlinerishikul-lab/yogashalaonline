"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./experience.module.css";

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
    <div className="bg-[#4377B2] w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center px-4 py-12">
        <div
          className="bg-[#333333] text-white text-[10px] md:text-xs py-4 px-2 md:px-4 uppercase tracking-wider font-medium absolute left-0"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
          role="complementary"
        >
          STUDENT CORNER
        </div>

        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4 md:px-6 text-center max-w-[80%]">
          Straight from Our Trainees: Experiences That Inspire
        </h2>
        <p className="text-white text-center text-sm md:text-base mb-10 max-w-[80%]">
          Read through our student comments to see why they love learning with us and how we can help you achieve your goals through yoga teaching.
        </p>
      </div>

      <div className="w-full relative px-4 pb-12">
        <Swiper
          effect="coverflow"
          centeredSlides={true}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
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
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 1.5,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="opacity-70">
              <div className="bg-[#2A2A2A] rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-500">
                <div className="text-[#FF6B35] text-4xl md:text-6xl font-serif mb-6 flex justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full"></div>
                    <footer className="text-xs md:text-sm text-white">
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="italic">{testimonial.location}</div>
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
                <blockquote className="text-white text-sm md:text-lg">
                  {testimonial.quote}
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={`${styles.swiperButtonLeft} swiper-button-prev`}>
          <span className="custom-prev-icon">
            <ArrowLeft size={32} color="#fff" />
          </span>
        </div>
        <div className={`${styles.swiperButtonRight} swiper-button-next`}>
          <span className="custom-next-icon">
            <ArrowRight size={32} color="#fff" />
          </span>
        </div>
      </div>
    </div>
  );
}
