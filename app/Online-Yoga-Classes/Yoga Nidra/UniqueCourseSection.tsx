'use client';

import React from "react";
import { GraduationCap, Users, Sun, BarChart3 } from "lucide-react";

const UniqueCourseSection = () => {
  const items = [
    {
      title: "Experienced Hatha Yoga Instructors",
      icon: <Users className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Focus on Breath & Posture Alignment",
      icon: <Sun className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Traditional & Modern Techniques",
      icon: <GraduationCap className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Personalized Guidance for All Levels",
      icon: <BarChart3 className="w-6 h-6 text-sky-600" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-600">
          What Makes Our “Hatha Yoga” Course Unique?
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Experience the perfect balance of strength and flexibility with our Hatha Yoga course.  
          Learn foundational asanas, pranayama, and meditation techniques designed to enhance your physical and mental well-being.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3"
          >
            <div className="bg-sky-100 p-4 rounded-full shadow-sm flex items-center justify-center">
              {item.icon}
            </div>
            <p className="text-lg font-semibold text-gray-800">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniqueCourseSection;
