"use client";

import React from "react";

const skills = [
  {
    title: "Ojas & Immune Vitality",
    description:
      "Understand the Ayurvedic concept of Ojas—the vital essence that supports immunity, vitality, and overall well-being.",
  },
  {
    title: "Dosha-Specific Immunity",
    description:
      "Learn how Vata, Pitta, and Kapha influence immune strength and how to balance each type for optimal health.",
  },
  {
    title: "Herbal Immunity Boosters",
    description:
      "Explore Ayurvedic herbs like Ashwagandha, Guduchi, and Tulsi to naturally support your immune system.",
  },
  {
    title: "Detox & Nourishment Routines",
    description:
      "Implement daily and seasonal rituals that gently cleanse and nourish the body to maintain strong immunity.",
  },
  {
    title: "Mind-Body Practices",
    description:
      "Use yoga, breathwork, and meditation to build emotional resilience and boost your immune response.",
  },
  {
    title: "Seasonal Wellness Tips",
    description:
      "Adjust your lifestyle and diet with Ayurvedic seasonal guidance to stay balanced and well all year long.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          25-Hour Ayurveda Immunity Course
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          The Ayurveda Immunity Course offers timeless strategies to build strong, resilient health through dosha balance, herbal wisdom, and mindful living. Learn how to naturally boost your immune system and prevent disease the Ayurvedic way.
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
