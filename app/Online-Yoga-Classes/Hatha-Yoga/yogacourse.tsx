"use client";

import React from "react";

const skills = [
  {
    title: "Mastering Classical Asanas",
    description:
      "Learn to perform and teach traditional Hatha postures with stability and grace.",
  },
  {
    title: "Sequencing & Structure",
    description:
      "Build balanced yoga sessions with proper warm-up, peak, and relaxation.",
  },
  {
    title: "Teaching Skills",
    description:
      "Develop cueing, observation, and feedback techniques for all levels.",
  },
  {
    title: "Understanding Yoga Philosophy",
    description:
      "Gain insights from ancient texts like the Yoga Sutras and Bhagavad Gita.",
  },
  {
    title: "Breath Control & Awareness",
    description:
      "Train in pranayama techniques to balance energy and focus the mind.",
  },
  {
    title: "Meditation & Mindfulness",
    description:
      "Learn techniques for inner stillness and integrating awareness in teaching.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          Online Hatha Yoga Classes
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
      Dive into the roots of yoga with our Hatha Yoga Teacher Training Course. Explore traditional asanas, breathwork, and meditation to build strength, balance, and inner calm while learning to guide others with confidence and clarity.
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
