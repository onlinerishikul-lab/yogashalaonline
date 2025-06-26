"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { TeacherCard } from "./teacher-card";
import { teachers } from "@/constants/about-data";

export default function TeachersSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();
  const [duration, setDuration] = useState(50);

  const marqueeVariants = {
    animate: {
      x: [0, -100 * teachers.length],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      },
    },
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const contentWidth = containerRef.current.scrollWidth;
    setDuration((contentWidth / containerWidth) * 30);
  }, []);

  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start("animate");
    }
  }, [isHovered, controls]);

  return (
    <section className="bg-white py-3 md:py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto py-0">
        <h2 className="text-[#4377B2] text-4xl md:text-5xl font-bold mb-12 text-center">
          Our Teachers
        </h2>

        <div
          ref={containerRef}
          className="flex overflow-x-hidden py-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex"
            variants={marqueeVariants}
            animate="animate"
            style={{ x: 0 }}
          >
            {teachers.map((teacher, index) => (
              <TeacherCard
                key={index}
                name={teacher.name}
                image={teacher.image}
              />
            ))}
            {teachers.map((teacher, index) => (
              <TeacherCard
                key={`duplicate-${index}`}
                name={teacher.name}
                image={teacher.image}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
