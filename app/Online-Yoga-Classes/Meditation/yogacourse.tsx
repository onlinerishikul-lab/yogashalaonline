"use client";

import React from "react";

const skills = [
  {
    title: "Guiding Meditation Sessions",
    description:
      "Confidently lead individual or group sessions using clear, grounded instruction.",
  },
  {
    title: "Voice & Presence Training",
    description:
      "Learn how to use tone, silence, and presence to hold sacred space.",
  },
  {
    title: "Mindfulness Tools",
    description:
      "Teach tools that bring people into the present moment with awareness.",
  },
  {
    title: "Mantra & Chanting",
    description:
      "Explore the power of sound, vibration, and repetition in meditation.",
  },
  {
    title: "Creating Class Themes",
    description:
      "Craft impactful sessions around focus, healing, or transformation.",
  },
  {
    title: "Science of Meditation",
    description:
      "Understand how meditation affects the nervous system and brain.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          Online Meditation Classes
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
       This Meditation Teacher Training Course is designed to deepen your personal meditation practice and empower you to guide others. Learn traditional and modern techniques to cultivate stillness, focus, and inner awareness, both for yourself and your students.
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
