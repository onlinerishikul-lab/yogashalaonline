"use client";

import React from "react";

const skills = [
  {
    title: "Enhanced Focus",
    description:
      "Sharpen mental clarity and concentration.Mudras and mantras anchor your attention deeply.",
  },
  {
    title: "Emotional Balance",
    description:
      "Release stress and regulate emotions naturally.Promote calmness and inner peace.",
  },
  {
    title: " Energy Alignment",
    description:
      "Balance chakras and subtle energy channels.Feel vibrant and grounded in your daily life.",
  },
  {
    title: "Improved Meditation",
    description:
      "Deepen your meditative experience.Sound and gesture enhance stillness and awareness.",
  },
  {
    title: "Spiritual Growth",
    description:
      "Connect with ancient traditions and your inner self.Experience transformation on a deeper level.",
  },
  {
    title: "Healing Support",
    description:
      "Aid physical and emotional healing processes.Use mudras and mantras as complementary therapies.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          50 Hrs Online Mudra-Mantra-Course
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Explore the ancient power of mudras (hand gestures) and mantras (sacred sounds) to deepen your yoga and meditation practice. This course teaches you how to use these tools for healing, focus, and spiritual growth.
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
