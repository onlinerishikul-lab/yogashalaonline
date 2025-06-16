"use client";

import React from "react";

const skills = [
  {
    title: "Nurture Baby’s Physical & Mental Growth",
    description:
      "Provide optimal womb care for healthy development using Ayurvedic guidance.",
  },
  {
    title: "Support Mother’s Strength & Calm",
    description:
      "Reduce stress, fatigue, and imbalances through holistic and nurturing care.",
  },
  {
    title: "Promote Conscious Parenting",
    description:
      "Build a deeper spiritual connection with your child even before birth.",
  },
  {
    title: "Reduce Pregnancy Discomfort",
    description:
      "Ease nausea, fatigue, and physical tension with safe, natural techniques.",
  },
  {
    title: "Empower Natural Birthing",
    description:
      "Prepare both body and mind for a safe, confident, and empowered birth experience.",
  },
  {
    title: "Improve Postnatal Recovery",
    description:
      "Restore balance, strength, and vitality after birth through Ayurvedic diet and rituals.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          15-Hour Ayurveda Garbha Samskara Course
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Garbha Samskara is the ancient Ayurvedic wisdom of conscious conception and prenatal care. This course guides you through holistic practices that nurture the body, mind, and spirit of both mother and baby—before, during, and after pregnancy.
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
