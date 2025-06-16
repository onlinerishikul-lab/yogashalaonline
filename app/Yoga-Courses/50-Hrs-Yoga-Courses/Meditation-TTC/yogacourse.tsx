"use client";

import React from "react";

const skills = [
  {
    title: "Daily Practice Building",
    description:
      "Learn how to establish a simple, calming daily meditation routine that fits your life.",
  },
  {
    title: "Breath & Mind Control",
    description:
      "Use breath awareness to calm your mind and create inner stillness.",
  },
  {
    title: "Guided Meditation Techniques",
    description:
      "Master step-by-step scripts and techniques for leading others gently into meditation.",
  },
  {
    title: "Creating a Calm Space",
    description:
      "Understand how to build a peaceful setting that supports deeper focus and presence.",
  },
  {
    title: "Mindfulness & Stillness",
    description:
      "Develop awareness of thoughts and sensations without judgment, moment by moment.",
  },
  {
    title: "Compassionate Teaching",
    description:
      "Share meditation with empathy, presence, and a heart-centered approach.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          50-Hrs Meditation TTC
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Meditation trains the mind to stay present and centered amidst daily distractions.It promotes mental clarity, reduces anxiety, and nurtures self-awareness.        </p>
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
