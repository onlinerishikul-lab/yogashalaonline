"use client";

import React from "react";

const skills = [
  {
    title: "Multi-Style Asanas",
    description:
      "Learn foundational poses from various yoga traditions. Build a flexible and diverse practice.",
  },
  {
    title: "Breath Awareness",
    description:
      "Practice pranayama techniques for energy and calm. Enhance mind-body connection.",
  },
  {
    title: "Meditation & Mindfulness",
    description:
      "Explore techniques to improve focus and relaxation. Support mental clarity.",
  },
  {
    title: "Class Sequencing",
    description:
      "Design balanced sessions across different styles. Keep classes engaging and safe.",
  },
  {
    title: "Teaching Techniques",
    description:
      "Communicate instructions clearly and effectively. Manage diverse student needs.",
  },
  {
    title: "Anatomy & Alignment",
    description:
      "Understand body mechanics for safe practice. Prevent injuries.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          200-Hour Multi Style Yoga TTC
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Experience a diverse and comprehensive yoga training blending multiple yoga styles. Build a solid foundation in asanas, pranayama, meditation, and teaching techniques to confidently lead versatile yoga classes.
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
