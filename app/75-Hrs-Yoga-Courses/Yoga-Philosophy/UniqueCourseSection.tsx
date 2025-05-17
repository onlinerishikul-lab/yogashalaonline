'use client';

import React from "react";
import { GraduationCap, Users, Sun, BarChart3 } from "lucide-react";

const UniqueCourseSection = () => {
  const items = [
    {
      title: "In-Depth Philosophical Teachings",
      icon: <Users className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Comprehensive 75-Hour Curriculum",
      icon: <Sun className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Certification in Yoga Philosophy",
      icon: <GraduationCap className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Integration of Theory & Practice",
      icon: <BarChart3 className="w-6 h-6 text-sky-600" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-600">
          What Makes Our “75-Hrs Yoga Courses / Yoga Philosophy” Unique?
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Delve into the timeless wisdom of yoga with our 75-hour Yoga Philosophy course.  
          Understand the roots, ethics, and spiritual teachings that shape the practice of yoga on and off the mat.
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
