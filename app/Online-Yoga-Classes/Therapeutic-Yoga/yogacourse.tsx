"use client";

import React from "react";

const skills = [
  {
    title: "Individualized Assessment",
    description:
      "Learn to assess and adapt yoga practices for different conditions.",
  },
  {
    title: "Adaptive Sequencing",
    description:
      "Design safe and effective classes for pain relief and healing.",
  },
  {
    title: "Breath & Nervous System Regulation",
    description:
      "Use breath to calm anxiety and activate the parasympathetic response.",
  },
  {
    title: "Restorative & Gentle Asanas",
    description:
      "Incorporate supported poses that ease tension and promote recovery.",
  },
  {
    title: "Chair & Bed Yoga",
    description:
      "Make yoga accessible to those with limited mobility or chronic conditions.",
  },
  {
    title: "Trauma-Informed Teaching",
    description:
      "Create safe, supportive, and inclusive spaces for all students.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          Online Therapeutic Yoga Classes
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
       Learn to guide yoga for healing and recovery with our Therapeutic Yoga TTC. Gain the skills to support students with physical, mental, or emotional challenges using gentle practices rooted in safety, anatomy, and compassion.
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
