'use client';

import React from "react";
import { GraduationCap, Users, Sun, BarChart3 } from "lucide-react";

const UniqueCourseSection = () => {
  const items = [
    {
      title: "Expert Yoga Anatomy Instructors",
      icon: <Users className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Balance Study with Life",
      icon: <Sun className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Globally Recognized Certification",
      icon: <GraduationCap className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Personalized Progress Feedback",
      icon: <BarChart3 className="w-6 h-6 text-sky-600" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto text-center mb-10 px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-600 leading-tight">
          What Makes Our “25-hrs Yoga Anatomy for a Safe Journey” Course Unique?
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Dive deep into the foundations of safe movement and mindful practice.
          This course offers insights into the human body through the lens of yoga,
          equipping you with essential anatomical knowledge for safer, more effective teaching and practice.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4 px-2 sm:px-6 md:px-2"
          >
            <div className="bg-sky-100 p-5 rounded-full shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-110">
              {item.icon}
            </div>
            <p className="text-base sm:text-lg font-semibold text-gray-800">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniqueCourseSection;
