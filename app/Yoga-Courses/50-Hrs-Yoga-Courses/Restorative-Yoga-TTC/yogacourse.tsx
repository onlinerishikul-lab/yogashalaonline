"use client";

import React from "react";

const skills = [
  {
    title: "Class Sequencing",
    description:
      "Learn to create calm, balanced yoga flows that guide students into deep relaxation.",
  },
  {
    title: "Using Props",
    description:
      "Use blankets, bolsters, and blocks to support the body and enhance comfort in every pose.",
  },
  {
    title: "Mindful Teaching",
    description:
      "Teach with awareness, compassion, and a heart-centered approach that inspires trust.",
  },
  {
    title: "Nervous System Basics",
    description:
      "Understand how restorative yoga soothes stress and supports the body’s healing response.",
  },
  {
    title: "Holding Space",
    description:
      "Develop a calm, steady presence that makes students feel safe, seen, and supported.",
  },
  {
    title: "Personalized Sessions",
    description:
      "Customize practices to meet the unique needs of each student for deeper healing.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          Restorative Yoga Teacher Training Course
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
         Learn the art of deep relaxation and healing through gentle, supported poses and mindful breathing.This course equips you to guide others into stillness, reduce stress, and restore balance.Perfect for yoga teachers, therapists, and anyone seeking calm and renewal.
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
