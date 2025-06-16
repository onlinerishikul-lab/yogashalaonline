"use client";

import React from "react";

const skills = [
  {
    title: "Facial Muscle Awareness & Control",
    description:
      "Learn to activate and isolate facial muscles for better tone and expression control.",
  },
  {
    title: "Natural Lifting & Toning Techniques",
    description:
      "Practice gentle exercises that naturally lift and firm your face without any tools or treatments.",
  },
  {
    title: "Breathwork for Relaxation & Glow",
    description:
      "Use deep breathing techniques to calm the mind and boost your natural skin radiance.",
  },
  {
    title: "Stress & Tension Release from Face & Neck",
    description:
      "Release built-up tension in the jaw, forehead, and neck to soften lines and relax fully.",
  },
  {
    title: "Daily Face Yoga Routine Building",
    description:
      "Create a quick, effective daily routine to maintain a youthful and glowing face.",
  },
  {
    title: "Anti-Ageing & Skin Revitalization Methods ",
    description:
      "Discover natural techniques to reduce wrinkles and refresh your skin from within.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          25-Hour Face Yoga for Natural Glow & Toning
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Learn simple, effective exercises to lift, tone, and relax your facial muscles naturally.Boost blood circulation, reduce wrinkles, and achieve a radiant glow—no chemicals, no needles.Perfect for all ages, this self-paced course helps you feel confident and refreshed from within.
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
