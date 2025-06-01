"use client";

import React from "react";

const skills = [
  {
    title: "Foundational Asanas",
    description:
      "Master classic Hatha poses with proper alignment. Build strength and flexibility safely.",
  },
  {
    title: "Pranayama Basics",
    description:
      "Learn essential breathing techniques to energize and calm. Support your physical and mental wellbeing.",
  },
  {
    title: "Meditation & Relaxation",
    description:
      "Practice techniques to enhance focus and reduce stress. Promote overall balance and peace.",
  },
  {
    title: "Class Sequencing",
    description:
      "Design balanced, mindful Hatha yoga sessions. Keep students engaged and safe.",
  },
  {
    title: "Teaching Skills",
    description:
      "Develop clear instructions and hands-on adjustments. Build confidence leading classes.",
  },
  {
    title: "Yoga Philosophy",
    description:
      "Explore the roots and ethics of Hatha yoga practice. Deepen your yogic understanding.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          100-Hour Hatha Yoga TTC
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Explore the timeless practice of Hatha Yoga in this comprehensive training. Learn foundational postures, breathing techniques, and philosophy to build a strong, balanced yoga practice and teaching skills.
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
