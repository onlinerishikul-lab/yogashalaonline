"use client";

import React from "react";

const skills = [
  {
    title: "Dosha Understanding",
    description:
      "Identify your unique body-mind constitution and learn to keep it balanced through lifestyle and awareness.",
  },
  {
    title: "Agni & Digestion",
    description:
      "Understand your digestive fire (Agni) and how it influences your health, immunity, and energy levels.",
  },
  {
    title: "Daily Routine (Dinacharya)",
    description:
      "Design a daily routine that supports cleansing, vitality, and mental clarity in alignment with Ayurvedic wisdom.",
  },
  {
    title: "Seasonal Living (Ritucharya)",
    description:
      "Adjust your food, habits, and self-care practices with the changing seasons for sustained well-being.",
  },
  {
    title: "Ayurvedic Nutrition",
    description:
      "Learn how food choices affect your doshas, digestion, and energy, and how to eat in harmony with your constitution.",
  },
  {
    title: "Mind-Body Connection",
    description:
      "Discover how emotions and mental patterns influence your physical health, and how to restore balance holistically.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          50-Hour Ayurvedic Foundational Course
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Start your journey into the world of Ayurveda with a simple and practical foundational course. Learn how to balance your body, mind, and lifestyle with timeless Ayurvedic principles and natural healing techniques.
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
