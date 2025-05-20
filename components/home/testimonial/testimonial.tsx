"use client";

import React from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./testimonial.module.css";
import { TESTIMONIALS } from "@/config/constants";

const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

export default function TestimonialView({
  title = "What Our Students Say",
  tilt = true,
}: {
  title: string;
  tilt?: boolean;
}) {
  return (
    <section className="overflow-x-hidden py-5">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#4377B2] capitalize py-8">
        {title}
      </h2>

      <div className={`${styles.marquee}`}>
        <motion.div
          className={styles.marquee__content}
          initial={{ x: 0 }}
          animate={{ x: `-${10 * TESTIMONIALS.length}%` }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <ul className={`flex gap-6 sm:gap-10 ${styles.marquee__list}`}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <li
                key={index}
                className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[400px] mx-auto my-4"
              >
                <div
                  className={`bg-[#F5F2ED] rounded-2xl p-6 sm:p-8 relative ${
                    tilt ? "rotate-[1deg] sm:rotate-[5deg] md:rotate-[10deg]" : ""
                  }`}
                >
                  <div className="text-[#4377B2] mb-4">
                    <Image
                      src="/assets/quote.png"
                      alt="Quote"
                      width={40}
                      height={40}
                    />
                  </div>
                  <blockquote className="text-gray-800 text-base sm:text-xl font-medium leading-relaxed mb-6 line-clamp-5 text-left">
                    {testimonial.quote}
                  </blockquote>
                  <div className="text-gray-600 text-sm text-left">
                    <p className="font-medium">
                      {testimonial.name}, {testimonial.location}
                    </p>
                    <p className="text-gray-500">{testimonial.context}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
