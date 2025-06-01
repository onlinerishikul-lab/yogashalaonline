"use client";

import React from "react";

const skills = [
  {
    title: "Asana Mastery",
    description:
      "Understand the anatomy and alignment of foundational and advanced poses. Refine your personal practice and sharpen your teaching precision.",
  },
  {
    title: "Safe Adjustments",
    description:
      "Learn safe, respectful hands-on techniques. Support student alignment with confidence and care.",
  },
  {
    title: "Common Mistake Correction",
    description:
      "Identify and correct typical alignment errors in real time. Help students prevent injury and improve form.",
  },
  {
    title: "Teaching to All Body Types",
    description:
      "Adapt cues and modifications for varying body structures. Create an inclusive and empowering class experience.",
  },
  {
    title: "Anatomy in Motion",
    description:
      "Connect posture mechanics with functional anatomy. Strengthen your understanding of how the body truly moves.",
  },
  {
    title: "Verbal Cueing Techniques",
    description:
      "Deliver clear, effective alignment cues. Use language that inspires understanding and embodiment.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          75-Hour Asana Clinic for Yoga Professionals
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Deepen your understanding of the human body with our 25-hour Yoga Anatomy course, designed to help you practice and teach yoga safely. Learn about muscles, joints, bones, and movement patterns to prevent injuries and improve alignment. This course is ideal for yoga teachers and dedicated practitioners seeking a strong foundation in anatomy for a more mindful and informed yoga journey.
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
