"use client";

import React from "react";
const skills = [
  {
    title: "Therapeutic Sequencing",
    description:
      "Design yoga sessions that target specific conditions.Balance safety, accessibility, and effectiveness in every class.",
  },
  {
    title: "Client Assessment",
    description:
      "Learn to observe and evaluate body-mind needs.Tailor yoga practices based on detailed understanding.",
  },
  {
    title: "Anatomy & Physiology",
    description:
      "Deepen knowledge of the body’s systems.Apply this to make yoga practices safer and more effective.",
  },
  {
    title: "Pranayama for Healing",
    description:
      "Use breath to calm the nervous system and manage symptoms.Teach techniques for anxiety, asthma, and fatigue.",
  },
  {
    title: "Yoga for Common Ailments",
    description:
      "Address issues like back pain, arthritis, stress, and diabetes.Adapt yoga tools for chronic health conditions",
  },
  {
    title: "Props & Modifications",
    description:
      "Utilize blocks, straps, bolsters, and chairs for healing.Make yoga accessible to all body types and limitations.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          50-Hour Yoga Therapy Course
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
         Learn how to apply yoga as a powerful healing tool for physical, mental, and emotional well-being. This Yoga Therapy Course empowers you with knowledge, techniques, and confidence to help others through safe, personalized yoga practices.
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
