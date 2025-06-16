"use client";

import React from "react";

const skills = [
  {
    title: "Flow-Based Sequencing",
    description:
      "Design smooth, purposeful class flows that match breath with movement.",
  },
  {
    title: "Creative Class Design",
    description:
      "Craft engaging sessions with peak poses, themes, and transitions.",
  },
  {
    title: "Teaching Techniques",
    description:
      "Improve cueing, pacing, and presence for clear, confident instruction.",
  },
  {
    title: "Breath-Movement Awareness",
    description:
      "Learn how to sync pranayama with dynamic asana for energy balance.",
  },
  {
    title: "Body Alignment & Adjustments",
    description:
      "Ensure safe transitions and alignment during flowing sequences.",
  },
  {
    title: "Yoga Anatomy",
    description:
      "Understand how muscles and joints work to protect and enhance movement.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          Online Vinyasa Flow Yoga Classes
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
        Flow with breath, movement, and mindfulness in our Vinyasa Yoga TTC. Learn to sequence dynamic classes that energize the body, calm the mind, and inspire transformation—for yourself and your future students.
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
