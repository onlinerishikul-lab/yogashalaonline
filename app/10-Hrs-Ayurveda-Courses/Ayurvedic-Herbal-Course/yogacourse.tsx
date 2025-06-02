"use client";

import React from "react";

const skills = [
  {
    title: "Herb Identification",
    description:
      "Learn how to recognize, categorize, and choose Ayurvedic herbs for various needs.",
  },
  {
    title: "Herbal Preparations",
    description:
      "Make teas, decoctions, oils, and pastes using kitchen-friendly ingredients.",
  },
  {
    title: "Healing with Spices",
    description:
      "Use common spices like turmeric, cumin, and ginger to support digestion, immunity, and detoxification.",
  },
  {
    title: "Skin & Beauty Recipes",
    description:
      "Create natural masks, oils, and tonics for glowing skin and healthy hair.",
  },
  {
    title: "Balancing Doshas with Herbs",
    description:
      "Understand which herbs help pacify Vata, Pitta, and Kapha for holistic balance and healing.",
  },
  {
    title: "Women’s Herbal Wellness",
    description:
      "Learn herbal remedies for menstruation, menopause, fertility, and hormone balance.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          10-Hour Ayurvedic Herbal Course
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
         Discover the healing power of Ayurvedic herbs in this practical, beginner-friendly course. Learn to identify, use, and prepare herbs for common health concerns, immunity, digestion, beauty, and daily wellness.
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
