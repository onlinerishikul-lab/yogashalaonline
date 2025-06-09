"use client";

import React from "react";

const skills = [
  {
    title: "Diabetic-Specific Yoga Sequences",
    description:
      "Learn gentle, effective poses tailored for blood sugar balance.",
  },
  {
    title: "Pranayama for Pancreatic Health",
    description:
      "Use breath to improve insulin sensitivity and reduce cortisol.",
  },
  {
    title: "Understanding Diabetes & Yoga",
    description:
      "Explore how yoga influences glucose metabolism and organ function.",
  },
  {
    title: "Meditation & Stress Reduction",
    description:
      "Manage emotional triggers that affect blood sugar levels.",
  },
  {
    title: "Ayurvedic Nutrition Tips",
    description:
      "Incorporate diabetic-friendly eating habits naturally and holistically.",
  },
  {
    title: "Daily Routine & Discipline",
    description:
      "Build consistent habits that promote long-term reversal.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          Online Exclusive Reversing Diabetic Yoga Classes
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
      Discover a holistic, yogic approach to managing and reversing Type 2 diabetes. This exclusive Classes blends therapeutic yoga, breathwork, diet guidance, and lifestyle awareness to help regulate blood sugar and restore balance naturally.
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
