"use client";

import React from "react";

const skills = [
  {
    title: "Teaching Core Pranayama Techniques",
    description:
      "Learn to teach breath techniques like Anulom Vilom, Ujjayi, and Bhramari with precision.",
  },
  {
    title: "Breath Awareness & Control",
    description:
      "Develop the skill to observe and consciously shape the breath for healing and clarity.",
  },
  {
    title: "Energy Channel Cleansing",
    description:
      "Practice techniques to purify nadis and awaken subtle energy flow.",
  },
  {
    title: "Voice & Cue Mastery",
    description:
      "Use calming, clear instructions to lead safe and effective sessions.",
  },
  {
    title: "Creating Breath Sequences",
    description:
      "Design daily or therapeutic breathing routines for different needs.",
  },
  {
    title: "Mind & Breath Synchronization",
    description:
      "Cultivate presence by aligning mental focus with rhythmic breathing.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          Online Pranayama Yoga Classes
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
       Master the ancient science of breath with this Pranayama Teacher Training Class. Learn how to harness the breath for energy, clarity, and healing, and gain the skills to teach powerful breathing techniques safely and effectively.
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
