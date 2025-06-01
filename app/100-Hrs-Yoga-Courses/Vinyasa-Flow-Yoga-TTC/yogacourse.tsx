"use client";

import React from "react";

const skills = [
  {
    title: "Breath-Flow Coordination",
    description:
      "Learn how to link breath with movement for smooth transitions. Create energizing, mindful yoga flows.",
  },
  {
    title: "Sun Salutations Mastery",
    description:
      "Practice core sequences to warm up the body and build heat. Foundation for all Vinyasa classes.",
  },
  {
    title: "Asana Alignment & Safety",
    description:
      "Focus on precise posture alignment to prevent injuries. Modify poses for all levels safely.",
  },
  {
    title: "Creative Sequencing",
    description:
      "Build flowing classes for different skill levels and themes. Learn to design balanced, engaging sessions.",
  },
  {
    title: "Pranayama & Meditation",
    description:
      "Incorporate breath control and calming techniques. Enhance energy and mental clarity.",
  },
  {
    title: "Teaching Skills",
    description:
      "Develop clear cueing, voice modulation, and adjustments. Build confidence leading live or online classes.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          100-Hour Vinyasa Flow Yoga TTC
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
         Dive into the dynamic world of Vinyasa Flow yoga with our comprehensive training. Learn to synchronize breath with movement, build fluid sequences, and develop confident teaching skills to lead energizing classes for all levels.
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
