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
    <section className="overflow-x-hidden">
      <h2 className="text-4xl font-bold text-center text-[#4377B2] capitalize py-8">
        {title}
      </h2>

      <div className={`${styles.marquee}`}>
        <motion.div
          className={styles.marquee__content}
          initial={{ x: 0 }}
          animate={{ x: `-${10 * TESTIMONIALS.length}%` }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          <ul
            className={`flex gap-10 ${styles.marquee__list} ${styles.marquee}`}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div className="max-w-md mx-auto my-4" key={index}>
                <div
                  className={`bg-[#F5F2ED] rounded-2xl ${
                    tilt ? "rotate-[10deg]" : ""
                  } p-8 w-[400px] relative`}
                >
                  <div className="text-[#4377B2] text-8xl font-serif leading-none mb-4">
                    <Image
                      src={`/assets/quote.png`}
                      alt="Quote"
                      width={50}
                      height={50}
                    />
                  </div>
                  <blockquote className="text-gray-800 text-2xl text-left font-medium leading-relaxed mb-6 line-clamp-5">
                    {testimonial.quote}
                  </blockquote>
                  <div className="text-gray-600 text-sm text-left">
                    <p className="font-medium">
                      {testimonial.name}, {testimonial.location}
                    </p>
                    <p className="text-gray-500">{testimonial.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
