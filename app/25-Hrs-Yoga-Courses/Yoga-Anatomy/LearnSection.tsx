"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const LearnSection = () => {
  const [active, setActive] = useState<number>(-1);

  const topics = [
    {
      title: "Foundations of Anatomy",
      content:
        "Gain a clear understanding of anatomical terminology, systems of the body, and how they relate to safe and effective yoga practices.",
    },
    {
      title: "Skeletal & Muscular Systems",
      content:
        "Explore key bones and muscle groups used in yoga. Learn how alignment and movement are affected by individual anatomical structure.",
    },
    {
      title: "Common Injuries & Safe Practice",
      content:
        "Identify common yoga-related injuries and learn techniques for injury prevention, modifications, and intelligent sequencing.",
    },
    {
      title: "Applied Anatomy in Yoga Poses",
      content:
        "Integrate anatomy knowledge into asana practice. Understand the biomechanics behind postures and how to adapt for various bodies.",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] px-4 sm:px-6 py-10 sm:py-16">
      <div className="bg-white rounded-2xl px-6 sm:px-10 py-8 sm:py-12 max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4377b2] mb-4">
            What You Will Learn
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
            Dive into essential anatomical knowledge that enhances your yoga
            teaching and personal practice—ensuring safety, awareness, and
            confidence.
          </p>
          <button className="bg-[#4377b2] text-white text-sm sm:text-base font-medium rounded-full px-6 py-2 transition hover:bg-[#365f91] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4377b2]">
            Contact Us
          </button>
        </div>

        {/* Accordion */}
        <div className="md:w-1/2">
          {topics.map((topic, index) => (
            <div key={index} className="border-b py-4">
              <div
                role="button"
                tabIndex={0}
                onClick={() => setActive(index === active ? -1 : index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActive(index === active ? -1 : index);
                  }
                }}
                className="flex justify-between items-center cursor-pointer"
                aria-expanded={active === index}
                aria-controls={`topic-content-${index}`}
              >
                <h3 className="font-semibold text-sm sm:text-base text-[#4377b2]">
                  {topic.title}
                </h3>
                {active === index ? (
                  <Minus size={20} className="text-[#4377b2]" />
                ) : (
                  <Plus size={20} className="text-[#4377b2]" />
                )}
              </div>

              <div
                id={`topic-content-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  active === index ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {topic.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
