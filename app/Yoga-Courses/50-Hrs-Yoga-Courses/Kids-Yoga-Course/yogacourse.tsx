"use client";

import React from "react";

const skills = [
  {
    title: "Anatomy & Biomechanics",
    description:
      "Understand how the body moves through yoga with practical insights into functional anatomy. Learn the mechanics behind each posture to enhance safety and effectiveness.",
  },
  {
    title: "Muscles & Joints",
    description:
      "Explore how muscles, joints, and connective tissues work during different asanas. Gain clarity on body movement patterns and alignment principles.",
  },
  {
    title: "Injury Prevention",
    description:
      "Learn how to modify poses to suit individual needs and avoid common yoga injuries. Build a safe practice for yourself and your students.",
  },
  {
    title: "Breath & Body Awareness",
    description:
      "Discover the link between breath, movement, and mental focus. Improve overall body awareness and deepen your practice.",
  },
  {
    title: "Key Body Areas",
    description:
      "Focus on the anatomy of the spine, hips, shoulders, and core—the foundations of most yoga poses. Understand how to protect and strengthen these vital areas.",
  },
  {
    title: "For All Levels",
    description:
      "This course is designed for both beginners and experienced yoga teachers. The content is easy to follow, insightful, and immediately applicable.",
  },
];

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          50 Hrs Online Kids Yoga Teacher Training Course
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
Introduce children to the joy of yoga through playful, imaginative, and age-appropriate practices. This course equips you with the tools to teach yoga to kids in a fun, safe, and creative way. Spark mindfulness and body awareness early in life.
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
