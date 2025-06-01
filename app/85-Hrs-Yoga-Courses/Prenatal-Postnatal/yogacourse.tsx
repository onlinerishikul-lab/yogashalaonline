"use client";

import React from "react";

const skills = [
  {
    title: "Safe Asana Modifications",
    description:
      "Learn how to modify common poses for pregnancy and postpartum needs. Support comfort, alignment, and safety in every stage.",
  },
  {
    title: "Breathwork & Meditation",
    description:
      "Teach calming techniques for stress, anxiety, and labor preparation. Help students connect deeply to body and baby.",
  },
  {
    title: "Trimester-Based Sequencing",
    description:
      "Design classes suited to the changing needs of each trimester. Support flexibility, strength, and energy levels appropriately.",
  },
  {
    title: "Postnatal Recovery Techniques",
    description:
      "Guide women safely through postpartum healing and re-strengthening. Focus on pelvic floor, abdominal integrity, and rest.",
  },
  {
    title: "Anatomy of Pregnancy",
    description:
      "Understand how the body changes through each phase. Support alignment and address common physical challenges.",
  },
  {
    title: "Emotional Support Tools",
    description:
      "Develop presence and empathy as a yoga teacher. Create space for trust, connection, and compassion.",
  },
];


const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          85-Hour Prenatal & Postnatal Yoga Course for Teachers
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
         Support mothers through every stage of pregnancy and postpartum with safe, nurturing yoga. This course equips teachers with the knowledge, confidence, and tools to guide women in building strength, relieving discomfort, and connecting deeply with their bodies and babies.
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
