"use client";

import React from "react";

const skills = [
  {
    title: "Age-Based Teaching Tools",
    description:
      "Design fun and effective classes for toddlers, kids, and teens. Understand what works best at each developmental stage.",
  },
  {
    title: "Creative Class Planning",
    description:
      "Use storytelling, songs, art, and games to make yoga engaging. Build themes that are both meaningful and playful.",
  },
  {
    title: "Mindfulness for Kids",
    description:
      "Teach children how to calm their minds and stay focused. Use breathwork, guided visuals, and quiet time.",
  },
  {
    title: "Yoga Safety for Children",
    description:
      "Learn anatomy basics and safety cues for growing bodies. Avoid common risks and ensure safe, supportive movement.",
  },
  {
    title: "Classroom Management",
    description:
      "Create a balanced, respectful, and joyful environment. Build trust, manage energy levels, and keep flow.",
  },
  {
    title: "Inclusive & Trauma-Aware Teaching",
    description:
      "Respect emotional needs and diverse backgrounds. Build a space where every child feels seen and heard.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          95-Hour Kids Yoga Course
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
         Learn how to teach yoga to children with creativity, safety, and fun. This 95-hour training equips you with tools to support physical, emotional, and mental well-being in kids through yoga, storytelling, games, and mindful play.
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
