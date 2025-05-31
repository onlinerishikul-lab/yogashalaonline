"use client";

import React from "react";

const skills = [
  {
    title: "Script Creation",
    description:
      "Write personalized, theme-based Yoga Nidra scripts.Craft calming, transformative sessions for various needs.",
  },
  {
    title: "Voice Guidance",
    description:
      "Master tone, pace, and breath to guide deeply.Lead soothing sessions that help students fully relax.",
  },
  {
    title: "Understanding Brainwaves",
    description:
      "Explore the journey from beta to delta states.Teach from a place of scientific clarity and insight.",
  },
  {
    title: "Session Structuring",
    description:
      "Design short or full-length sessions with intention.Include body scan, intention-setting, breath, and more.",
  },
  {
    title: "Holding Safe Space",
    description:
      "Learn how to create a warm, calm, and supportive space.Help students feel safe, heard, and guided.",
  },
  {
    title: "Emotional Awareness",
    description:
      "Understand how Yoga Nidra affects the subconscious.Support emotional release and personal growth.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          50 Hrs Online Yoga Nidra
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Dive into the transformative practice of Yoga Nidra — a guided meditative technique that promotes deep rest and inner healing. This course equips you to teach Yoga Nidra with clarity, compassion, and confidence.
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
