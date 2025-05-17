'use client';

import React from "react";
import { Leaf, HeartPulse, Globe, Brain } from "lucide-react";

const UniqueCourseSection = () => {
  const items = [
    {
      title: "Foundational Ayurvedic Principles",
      icon: <Leaf className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Mind-Body Balance Techniques",
      icon: <HeartPulse className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Holistic & Natural Lifestyle Insights",
      icon: <Globe className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Guidance from Certified Experts",
      icon: <Brain className="w-6 h-6 text-sky-600" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-600">
          What Makes Our “10-Hrs Ayurvedic Basics Course” Unique?
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Discover the time-tested wisdom of Ayurveda in just 10 hours. This foundational course introduces the core concepts of Ayurvedic science,
          helping you cultivate a harmonious lifestyle through natural healing, daily routines, and holistic awareness.
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
