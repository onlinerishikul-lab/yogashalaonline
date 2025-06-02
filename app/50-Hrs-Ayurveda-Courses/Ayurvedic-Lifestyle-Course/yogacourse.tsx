"use client";

import React from "react";

const skills = [
  {
    title: "Creating Daily Routines",
    description:
      "Design a lifestyle that promotes vitality by following consistent, natural rhythms aligned with Ayurvedic principles.",
  },
  {
    title: "Seasonal Lifestyle Adjustments",
    description:
      "Align your habits, routines, and self-care with the changing seasons for sustained health and dosha balance.",
  },
  {
    title: "Self-Care & Cleansing",
    description:
      "Learn Ayurvedic self-care rituals like oil pulling, abhyanga (self-massage), tongue scraping, and gentle detox techniques.",
  },
  {
    title: "Stress & Sleep Support",
    description:
      "Use Ayurvedic herbs, evening rituals, and calming practices to improve sleep quality and manage stress naturally.",
  },
  {
    title: "Mindful Eating Habits",
    description:
      "Incorporate mindful eating, optimal meal timing, and digestion-friendly habits to support health and energy.",
  },
  {
    title: "Yoga & Breath for Balance",
    description:
      "Pair dosha-specific yoga and breathwork practices to restore inner harmony and boost overall well-being.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          50-Hour Ayurvedic Lifestyle Course
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Discover how to live in sync with nature using ancient Ayurvedic wisdom. This course helps you build a daily routine (Dinacharya), seasonal habits (Ritucharya), and balanced practices that support lifelong well-being and harmony of mind, body, and spirit.
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
