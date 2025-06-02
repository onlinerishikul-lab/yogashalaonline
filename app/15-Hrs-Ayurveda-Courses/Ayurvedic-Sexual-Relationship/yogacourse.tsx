"use client";

import React from "react";

const skills = [
  {
    title: "Dosha Compatibility Understanding",
    description:
      "Explore how Vata, Pitta, and Kapha influence behavior, emotional needs, and communication styles in relationships.",
  },
  {
    title: "Emotional Balance Through Ayurveda",
    description:
      "Identify signs of emotional imbalance and apply Ayurvedic tools—like diet, herbs, and routines—for inner harmony.",
  },
  {
    title: "Mindful Communication Techniques",
    description:
      "Practice sattvic communication to foster empathy, clarity, and deeper connection in conversations.",
  },
  {
    title: "Sacred Relationship Rituals",
    description:
      "Incorporate bonding practices like shared gratitude, abhyanga (oil massage), or meditative silence into daily life.",
  },
  {
    title: "Ayurveda & Love Languages",
    description:
      "Understand how each dosha gives and receives love, and discover personalized ways to nurture your partner.",
  },
  {
    title: "Healing with Breath & Meditation",
    description:
      "Use pranayama and meditation techniques to soothe emotions, enhance self-awareness, and deepen relationships.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          15-Hour Ayurvedic Relationship Course
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
         Discover how Ayurveda helps build deeper, more conscious relationships. This course blends dosha-based insights, emotional balance, and daily rituals to nurture love, understanding, and connection—both within and with others.
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
