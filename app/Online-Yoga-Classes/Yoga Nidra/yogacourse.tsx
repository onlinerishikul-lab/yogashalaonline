"use client";

import React from "react";
const skills = [
  {
    title: "Guided Relaxation Techniques",
    description:
      "Learn to lead calming sessions that relax body and mind completely.",
  },
  {
    title: "Understanding Brainwave States",
    description:
      "Explore how Yoga Nidra shifts consciousness for healing and clarity.",
  },
  {
    title: "Voice and Language Skills",
    description:
      "Master tone, pacing, and scriptwriting for maximum impact.",
  },
  {
    title: "Creating Personalized Sessions",
    description:
      "Adapt Yoga Nidra for stress, trauma, sleep, or spiritual growth.",
  },
  {
    title: "Using Sankalpa (Intentions)",
    description:
      "Guide students to set and nourish deep, transformative intentions.",
  },
  {
    title: "Teaching in Diverse Settings",
    description:
      "Confidently offer Yoga Nidra in classes, therapy, or corporate wellness.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          Online Yoga Nidra Classes
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
      Dive into the deeply restorative world of Yoga Nidra. This Class trains you to guide transformative sessions that relax the body, calm the nervous system, and awaken conscious awareness—perfect for teachers, healers, and seekers alike.
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
