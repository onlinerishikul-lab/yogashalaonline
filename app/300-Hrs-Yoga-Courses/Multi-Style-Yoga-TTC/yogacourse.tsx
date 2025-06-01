"use client";

import React from "react";

const skills = [
  {
    title: "Advanced Asana Mastery",
    description:
      "Refine your practice with challenging postures and precision. Enhance student safety and effectiveness.",
  },
  {
    title: "Pranayama & Breath Control",
    description:
      "Master complex breathing techniques to boost vitality. Promote mental clarity and calm.",
  },
  {
    title: "Meditation & Mindfulness",
    description:
      "Deepen your inner focus and stress relief practices. Support holistic wellbeing.",
  },
  {
    title: "Advanced Sequencing",
    description:
      "Create dynamic, balanced classes across styles. Adapt to various skill levels.",
  },
  {
    title: "In-Depth Anatomy",
    description:
      "Understand biomechanics to optimize alignment. Prevent injuries and promote healing.",
  },
  {
    title: "Yoga Therapy Basics",
    description:
      "Learn to modify yoga for healing and rehabilitation. Support diverse student needs.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          300-Hour Multi Style Yoga TTC
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Deepen your yoga practice and teaching skills with an advanced 300-hour course covering multiple yoga styles. Expand your expertise in asanas, pranayama, meditation, anatomy, and teaching methodology to become a confident and versatile yoga instructor.
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
