"use client";

import React from "react";

const skills = [
  {
    title: "Chair-Based Movement",
    description:
      "Master safe and effective yoga postures using a chair. Learn to adapt classic asanas for seated and supported practice, ideal for all mobility levels.",
  },
  {
    title: "Gentle Anatomy Awareness",
    description:
      "Understand key joints and muscles involved in chair yoga. Focus on functional movement rather than complex anatomy, making learning accessible and clear.",
  },
  {
    title: "Injury Prevention & Modifications",
    description:
      "Learn how to modify yoga poses for seniors, beginners, and those with physical limitations. Avoid strain and promote safe, supportive practice.",
  },
  {
    title: "Breath, Mindfulness & Relaxation",
    description:
      "Discover how to integrate breath awareness and gentle movement to reduce stress, improve focus, and promote calm through seated yoga.",
  },
  {
    title: "Teaching Skills & Cueing",
    description:
      "Gain confidence in teaching chair yoga classes. Learn clear verbal cueing, class structure, and how to support diverse student needs.",
  },
  {
    title: "Accessible Yoga for All",
    description:
      "This TTC is designed for yoga teachers and caregivers who want to make yoga inclusive. It's perfect for working with older adults or those with reduced mobility.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          25-Hour Chair Yoga TTC <br /> Empowering Safe & Inclusive Practice
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Our 25-hour Chair Yoga Teacher Training Course is designed to help you teach yoga that’s safe, accessible, and deeply impactful. Learn how to adapt poses for those with limited mobility, gain anatomical insights, and create gentle, breath-led classes. Ideal for yoga teachers, caregivers, and wellness professionals wanting to offer inclusive yoga to everyone.
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
