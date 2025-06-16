"use client";

import React from "react";

const skills = [
  {
    title: "Prenatal Sequencing",
    description:
      "Create trimester-safe flows to support strength and mobility. Adapt your class plan to evolving pregnancy needs.",
  },
  {
    title: "Breathing Techniques",
    description:
      "Teach calming pranayama to ease anxiety and prepare for labor. Help mothers connect deeply with themselves and their baby.",
  },
  {
    title: "Pregnancy Anatomy",
    description:
      "Understand how pregnancy affects muscles, joints, and organs. Use this knowledge to keep yoga safe and supportive.",
  },
  {
    title: "Labor Preparation",
    description:
      "Use yoga to build physical stamina and emotional readiness. Incorporate tools like squats, breath, and meditation for birth.",
  },
  {
    title: "Emotional Support",
    description:
      "Guide mothers through common fears and mood changes. Hold space with empathy and grounding presence.",
  },
  {
    title: "Modifications & Props",
    description:
      "Use props to adjust for balance, swelling, and fatigue. Make yoga safe and soothing for every student.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          50-Hrs Pregnancy Yoga Course
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Support mothers through the sacred journey of pregnancy with the power of yoga. This course trains you to safely guide expecting mothers with yoga techniques for comfort, strength, and emotional balance during all trimesters.
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
