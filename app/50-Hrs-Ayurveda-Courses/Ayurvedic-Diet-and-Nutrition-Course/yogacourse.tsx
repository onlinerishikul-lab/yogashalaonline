"use client";

import React from "react";

const skills = [
  {
    title: "Dosha-Specific Diets",
    description:
      "Learn to eat in harmony with your unique constitution (Vata, Pitta, or Kapha) for long-term balance and wellness.",
  },
  {
    title: "Mastering Agni (Digestive Fire)",
    description:
      "Support digestion, vitality, and immunity with meals that strengthen your metabolic fire (Agni).",
  },
  {
    title: "Food Combining Rules",
    description:
      "Understand how improper food combinations can create toxins (ama) and how to make better choices for optimal digestion.",
  },
  {
    title: "Seasonal & Cyclical Eating",
    description:
      "Adapt your diet through the seasons and life cycles to stay energized, nourished, and dosha-balanced.",
  },
  {
    title: "6 Tastes of Ayurveda",
    description:
      "Explore the six rasas (tastes) and how they influence digestion, emotions, and dosha balance in every meal.",
  },
  {
    title: "Daily Food Rituals",
    description:
      "Build mindful eating practices that enhance digestion, satisfaction, and your relationship with food.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          50-Hour YAyurvedic Diet and Nutrition Course
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Explore the ancient wisdom of Ayurvedic nutrition to create a balanced, healing relationship with food. Learn how to eat for your unique constitution and support digestion, immunity, and overall well-being naturally.
        </p>
      </section>

      {/* Key Skills */}
      <section className="max-w-6xl mx-auto px-2">
        <h2 className="text-2xl font-bold text-[#4377b2] text-center mb-8">
          Key Skills You’ll Learn
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-5 border border-[#e0e7f8] hover:shadow-lg transition"
            >
              <h3 className="text-[#4377b2] font-semibold mb-2 text-lg">
                {skill.title}
              </h3>
              <p className="text-gray-700 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default YogaCoursePage;
