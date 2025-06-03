"use client";

import React from "react";

const skills = [
  {
    title: "Healing Postnatal Sequences",
    description:
      "Learn safe, nurturing sequences that aid physical and emotional recovery.",
  },
  {
    title: "Pelvic Floor & Core Strength",
    description:
      "Restore stability and tone through gentle, targeted exercises.",
  },
  {
    title: "Postural Realignment",
    description:
      "Correct imbalances from pregnancy and feeding posture habits.",
  },
  {
    title: "Breathwork for Energy & Calm",
    description:
      "Use breath to re-energize, balance hormones, and release tension.",
  },
  {
    title: "Emotional Balance Tools",
    description:
      "Support new mothers with mindfulness and grounding practices.",
  },
  {
    title: "Adapting Asanas Safely",
    description:
      "Teach modifications that honor healing time and physical limitations.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          Online Postnatal Yoga Classes
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
        This Postnatal Yoga Course is designed to support new mothers in healing, strengthening, and restoring balance after childbirth. Learn safe yoga practices to reconnect with your body, calm the mind, and build emotional resilience during early motherhood.
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
