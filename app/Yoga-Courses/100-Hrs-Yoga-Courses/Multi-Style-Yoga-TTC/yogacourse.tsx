"use client";

import React from "react";

const skills = [
  {
    title: "Foundations of Multiple Styles",
    description:
      "Gain insight into Hatha, Vinyasa, Yin, and Ashtanga yoga. Build a well-rounded base for deeper study or teaching.",
  },
  {
    title: "Asana Alignment Techniques",
    description:
      "Learn correct alignment and modifications for core poses. Ensure safe and mindful practice for all levels.",
  },
  {
    title: "Breath & Movement Coordination",
    description:
      "Develop breath awareness in both static and flowing styles. Build stronger focus and energy through pranayama.",
  },
  {
    title: "Yoga Philosophy Basics",
    description:
      "Understand key yogic texts and principles. Bring meaning and depth to your practice.",
  },
  {
    title: "Body Awareness & Safety",
    description:
      "Explore yoga anatomy for joints, muscles, and movement. Prevent injuries and support your students better.",
  },
  {
    title: "Sequencing & Structure",
    description:
      "Craft simple yet effective yoga class sequences. Blend different styles into one flowing session.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          100-Hour Multi Style Yoga TTC
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Explore the foundations of multiple yoga styles in one comprehensive 100-hour TTC. Ideal for beginners or continuing students, this course offers a rich blend of Hatha, Vinyasa, Yin, and Ashtanga yoga to help you build a solid and diverse personal or teaching practice.
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
