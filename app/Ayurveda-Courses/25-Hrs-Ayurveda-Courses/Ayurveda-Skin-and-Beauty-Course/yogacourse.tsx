"use client";

import React from "react";

const skills = [
  {
    title: "Skin Type & Dosha Understanding",
    description:
      "Learn how Vata, Pitta, and Kapha affect your skin health and appearance.",
  },
  {
    title: "Herbal Beauty Formulations",
    description:
      "Craft natural cleansers, scrubs, and masks using Ayurvedic herbs and ingredients.",
  },
  {
    title: "Glow-Enhancing Daily Routines",
    description:
      "Build a Dinacharya (daily routine) that supports vibrant, radiant skin from the inside out.",
  },
  {
    title: "Facial Marma Massage Techniques",
    description:
      "Stimulate key energy points on the face to enhance tone, lift, and deep relaxation.",
  },
  {
    title: "Beauty from Within",
    description:
      "Support clear, glowing skin through strong digestion, detoxification, and proper nutrition.",
  },
  {
    title: "Anti-Ageing Rituals",
    description:
      "Discover timeless beauty secrets through Ayurvedic herbs, routines, and lifestyle practices.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          25-Hour Ayurveda Skin and Beauty Course
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Discover the timeless secrets of radiant skin and natural beauty through Ayurveda. This course teaches you how to balance your doshas, nourish your skin from within, and craft herbal beauty rituals for a glowing, youthful appearance.
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
