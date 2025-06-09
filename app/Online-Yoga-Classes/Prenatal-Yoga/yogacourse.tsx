"use client";

import React from "react";

const skills = [
  {
    title: "Safe Prenatal Sequencing",
    description:
      "Design yoga classes tailored to each trimester’s unique needs.",
  },
  {
    title: "Breathwork for Labor",
    description:
      "Teach calming pranayama techniques that aid during labor and delivery.",
  },
  {
    title: "Pelvic Floor Support",
    description:
      "Strengthen and relax pelvic muscles for a healthier pregnancy and birth.",
  },
  {
    title: "Modifying Asanas Safely",
    description:
      "Confidently adapt poses for comfort, balance, and safety.",
  },
  {
    title: "Emotional Support Tools",
    description:
      "Use meditation and grounding practices to reduce anxiety and build trust.",
  },
  {
    title: "Understanding Prenatal Anatomy",
    description:
      "Learn how pregnancy affects the body and how yoga supports these changes.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          Online Prenatal Yoga Classes
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
        This Prenatal Yoga Class equips you with safe, effective, and nurturing practices for all trimesters. Learn to support physical comfort, emotional balance, and a deep connection between mother and baby through mindful movement and breath.
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
