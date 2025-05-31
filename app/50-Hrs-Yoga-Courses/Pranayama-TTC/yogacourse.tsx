"use client";

import React from "react";

const skills = [
  {
    title: "Breath Awareness",
    description:
      "Gain a deep understanding of your natural breath and how to enhance it.",
  },
  {
    title: "Pranayama Techniques",
    description:
      "Master powerful breathing methods to increase energy and calm the mind.",
  },
  {
    title: "Safe Teaching Practices",
    description:
      "Learn how to guide students safely through pranayama exercises.",
  },
  {
    title: "Mind-Body Connection",
    description:
      "Explore how breath influences mental clarity and emotional balance.",
  },
  {
    title: "Daily Breathwork",
    description:
      "Build easy, effective routines to improve wellbeing and focus.",
  },
  {
    title: "Teaching Confidence",
    description:
      "Develop clear communication and compassionate guidance skills",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          50 Hrs Online Pranayama TTC
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Pranayama connects your breath with your life force, helping you cultivate peace and energy.Regular practice strengthens the respiratory system and improves overall well-being.        </p>
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
