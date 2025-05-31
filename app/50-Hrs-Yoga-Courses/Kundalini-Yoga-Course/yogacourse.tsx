"use client";

import React from "react";

const skills = [
  {
    title: "Kundalini Kriyas",
    description:
      "Master dynamic movement sequences to awaken energy.Practice safely and effectively to build vitality.",
  },
  {
    title: "Pranayama Techniques",
    description:
      "Learn breath controls that balance and energize the nervous system.Use breathing to unlock deeper states of awareness.",
  },
  {
    title: "Mantra Chanting",
    description:
      "Use sacred sounds to elevate consciousness and focus.Integrate mantras into daily practice and teaching.",
  },
  {
    title: "Meditation & Visualization",
    description:
      "Guide students into deep meditative states.Use visualization to clear and energize chakras.",
  },
  {
    title: "Chakra Anatomy",
    description:
      "Understand the chakra system’s role in Kundalini awakening.Balance and align energy centers for holistic health.",
  },
  {
    title: "Energy Safety",
    description:
      "Recognize signs of safe and excessive energy activation.Implement techniques to manage and ground Kundalini energy.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          50 Hrs Online Kundalini Yoga Course
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Awaken your inner energy with Kundalini Yoga, combining breath, movement, mantra, and meditation to elevate consciousness. This course guides you to safely practice and teach Kundalini Yoga for holistic transformation.
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
