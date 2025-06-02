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
  {
    title: "Dosha Understanding",
    description:
      "Learn your mind-body type and how to maintain balance. Recognize symptoms of imbalance and restore harmony.",
  },
  {
    title: "Daily Routine (Dinacharya)",
    description:
      "Practice self-care habits for better health and energy. Align your daily activities with nature’s rhythm.",
  },
  {
    title: "Basic Diet & Digestion",
    description:
      "Understand Ayurvedic food principles and eating habits. Support strong digestion and overall immunity.",
  },
  {
    title: "Herbal Home Remedies",
    description:
      "Use common kitchen herbs for natural healing. Address minor health issues like colds, headaches, or stress.",
  },
  {
    title: "Mind-Body Connection",
    description:
      "Explore the deep connection between mental and physical health. Learn stress-reducing techniques rooted in Ayurveda.",
  },
  {
    title: "Seasonal Living (Ritucharya)",
    description:
      "Adapt your lifestyle and diet according to seasonal changes. Maintain balance and vitality throughout the year.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          10-Hour Ayurvedic Basics Course for Beginners
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Begin your journey into the ancient healing science of Ayurveda. This beginner-friendly course introduces core principles, daily wellness routines, body types (doshas), and natural remedies for a balanced, healthy life.
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
