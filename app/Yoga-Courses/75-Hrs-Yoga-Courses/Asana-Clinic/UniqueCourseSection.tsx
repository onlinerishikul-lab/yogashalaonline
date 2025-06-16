'use client';

import React from "react";
import { GraduationCap, Users, Sun, BarChart3 } from "lucide-react";

const UniqueCourseSection = () => {
  const items = [
    {
      title: "Expert Guidance on Asanas",
      icon: <Users className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Focused 75-Hour Practical Clinic",
      icon: <Sun className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Certification in Asana Mastery",
      icon: <GraduationCap className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Personalized Posture & Alignment Tips",
      icon: <BarChart3 className="w-6 h-6 text-sky-600" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-600">
          What Makes Our “75-Hrs Yoga Courses / Asana Clinic” Unique?
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Enhance your asana practice with our focused 75-hour Asana Clinic.  
          This course provides detailed instruction on posture, alignment, and safe movement to deepen your yoga experience.
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
