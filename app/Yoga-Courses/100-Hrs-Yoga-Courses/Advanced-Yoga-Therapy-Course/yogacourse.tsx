"use client";

import React from "react";

const skills = [
  {
    title: "Advanced Therapeutic Postures",
    description:
      "Master postures designed to aid recovery and healing. Modify safely for diverse client needs.",
  },
  {
    title: "Personalized Program Design",
    description:
      "Create yoga plans tailored to individual health conditions. Support long-term wellness and rehabilitation.",
  },
  {
    title: "Breathwork for Healing",
    description:
      "Use pranayama techniques to improve respiratory and mental health. Enhance relaxation and energy flow.",
  },
  {
    title: "Understanding Chronic Conditions",
    description:
      "Learn how yoga supports common chronic illnesses. Apply safe and effective modifications.",
  },
  {
    title: "Anatomy & Pathology Insights",
    description:
      "Deepen knowledge of body systems relevant to therapy. Improve assessment and client care.",
  },
  {
    title: "Client Assessment Skills",
    description:
      "Evaluate physical and mental needs accurately. Develop safe practice guidelines.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          100-Hour Advanced Yoga Therapy Course
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Deepen your understanding of yoga therapy with advanced techniques to support healing and wellness. Learn to tailor yoga practices for specific health conditions and enhance your ability to guide clients safely and effectively.
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
