// components/LearnSection.tsx
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const LearnSection = () => {
  const [active, setActive] = useState<number>(-1); // Default to no section open

  const topics = [
    {
      title: "Poses Practice",
      content:
        "Explore different yoga poses to improve flexibility, strength, and balance. Learn proper alignment and breathing with each posture."
    },
    {
      title: "Pranayama",
      content:
        "Master breathing techniques that promote physical and mental wellness. Learn how to control your breath to energize or calm the body."
    },
    {
      title: "Yoga Philosophy",
      content:
        "Understand the spiritual and philosophical roots of yoga. Learn about the 8 limbs of yoga, the yamas and niyamas, and more."
    },
    {
      title: "Meditation",
      content:
        "Learn techniques for focused meditation, mindfulness, and inner peace. Build a habit that enhances clarity and reduces stress."
    }
  ];

  return (
    <div className="bg-[#F5F5F5] p-6 md:p-12">
      <div className="bg-white rounded-2xl p-6 md:p-12 flex flex-col md:flex-row gap-12">
        {/* Left Side Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4377b2] mb-4">
            What you will learn?
          </h2>
          <p className="text-gray-500 mb-6">
            Explore our diverse curriculum designed to build your mind-body connection, boost awareness, and deepen your yoga practice.
          </p>
          <button className="bg-[#4377b2] text-white font-medium rounded-full px-6 py-2 transition duration-200 hover:bg-[#365f91]">
            Contact Us
          </button>
        </div>

        {/* Right Side Accordion */}
        <div className="md:w-1/2">
          {topics.map((topic, index) => (
            <div key={index} className="border-b py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setActive(index === active ? -1 : index)}
              >
                <h3 className="font-semibold text-lg text-[#4377b2]">
                  {topic.title}
                </h3>
                {active === index ? (
                  <Minus size={20} className="text-[#4377b2]" />
                ) : (
                  <Plus size={20} className="text-[#4377b2]" />
                )}
              </div>
              {active === index && (
                <p className="mt-2 text-gray-500 text-sm">{topic.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnSection;
