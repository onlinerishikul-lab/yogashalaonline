"use client";

import React from "react";

const skills = [
  {
    title: "Yogic Ethics",
    description:
      "Master the Yamas and Niyamas to cultivate discipline and compassion. Bring spiritual clarity and intention to everyday life.",
  },
  {
    title: "Understanding the Sutras",
    description:
      "Explore Patanjali’s Yoga Sutras for insight into the mind and liberation. Discover tools for stillness, focus, and inner peace.",
  },
  {
    title: "Gita’s Wisdom",
    description:
      "Unpack timeless lessons from the Bhagavad Gita. Learn about action, devotion, and surrender in life’s journey.",
  },
  {
    title: "Karma & Rebirth",
    description:
      "Understand how actions shape destiny and future lives. Align your choices with conscious, mindful living.",
  },
  {
    title: "Eight Limbs of Yoga",
    description:
      "Gain clarity on asana, breath, concentration, and meditation. Use this holistic path to deepen personal or teaching practice.",
  },
  {
    title: "Gunas & Mind Qualities",
    description:
      "Learn about Sattva, Rajas, and Tamas in human behavior. Balance energy for peace, focus, and harmony.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          75-Hour Core Concept of Yoga Philosophy
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
Dive deep into the timeless wisdom of yoga philosophy. This course explores the foundational texts, concepts, and ethical principles that shape the heart of authentic yoga practice, helping you align your life with purpose and awareness.

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
