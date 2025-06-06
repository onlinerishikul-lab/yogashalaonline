"use client";

import React from "react";

const skills = [
  {
    title: "Dynamic Sequencing",
    description:
      "Design fast-paced flows that build heat and strength.",
  },
  {
    title: "Core & Full-Body Engagement",
    description:
      "Activate deep muscles for a balanced, powerful practice.",
  },
  {
    title: "Breath & Movement Coordination",
    description:
      "Master Ujjayi breathing to fuel high-energy sessions.",
  },
  {
    title: "Cueing & Teaching Voice",
    description:
      "Instruct with clarity and confidence in high-intensity settings.",
  },
  {
    title: "Functional Yoga Anatomy",
    description:
      "Understand muscles and joints to enhance safety and strength.",
  },
  {
    title: "Fitness + Mindfulness",
    description:
      "Merge physical power with mental focus and awareness.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          Online Power Yoga Classes
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
      Power Yoga blends strength, flexibility, and endurance into a dynamic, fitness-focused practice. This course trains you to teach energetic, sweat-inducing flows while maintaining yogic roots and mindful awareness.
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
