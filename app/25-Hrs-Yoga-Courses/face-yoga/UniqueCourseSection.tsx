'use client';

import React from "react";
import { Smile, Users, Sparkles, ThumbsUp } from "lucide-react";

const UniqueCourseSection = () => {
  const items = [
    {
      title: "Certified Face Yoga Experts",
      icon: <Users className="w-6 h-6 text-pink-600" />,
    },
    {
      title: "Glow Naturally with Daily Practice",
      icon: <Sparkles className="w-6 h-6 text-pink-600" />,
    },
    {
      title: "Internationally Recognized Certification",
      icon: <Smile className="w-6 h-6 text-pink-600" />,
    },
    {
      title: "Track Your Facial Transformation",
      icon: <ThumbsUp className="w-6 h-6 text-pink-600" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600">
          What Makes Our “25-Hrs Face Yoga Course” Unique?
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Unlock the secrets to natural beauty and youthful energy. This 25-hour face yoga course blends
          traditional techniques with modern understanding, helping you sculpt, tone, and relax facial muscles
          for a glowing appearance and renewed confidence.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3"
          >
            <div className="bg-pink-100 p-4 rounded-full shadow-sm flex items-center justify-center">
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
