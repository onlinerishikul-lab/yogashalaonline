"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const LearnSection = () => {
  const [active, setActive] = useState<number>(-1);

  const topics = [
    {
      title: "Introduction to Advanced Yoga Therapy",
      content:
        "Understand the principles and scope of yoga therapy and its role in holistic healing and chronic condition management.",
    },
    {
      title: "Therapeutic Anatomy & Physiology",
      content:
        "Dive deep into anatomy focusing on systems most impacted by yoga therapy, including the nervous, respiratory, and musculoskeletal systems.",
    },
    {
      title: "Assessment & Personalized Program Design",
      content:
        "Learn techniques for client assessment, identifying contraindications, and designing customized therapeutic yoga sequences.",
    },
    {
      title: "Yoga Therapy for Common Conditions",
      content:
        "Explore evidence-based yoga interventions for conditions such as arthritis, back pain, anxiety, and respiratory issues.",
    },
    {
      title: "Advanced Techniques & Modifications",
      content:
        "Master advanced pranayama, meditation, and asana modifications tailored to individual healing needs and limitations.",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] p-6 md:p-12">
      <div className="bg-white rounded-2xl p-6 md:p-12 flex flex-col md:flex-row gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4377b2] mb-4">
            100-Hrs Yoga Courses: Advanced Yoga Therapy Course
          </h2>
          <p className="text-gray-500 mb-6">
            Elevate your yoga teaching skills with our advanced therapy course designed for practitioners aiming to deepen their therapeutic knowledge and client care techniques.
          </p>
          <button className="bg-[#4377b2] text-white font-medium rounded-full px-6 py-2 transition duration-200 hover:bg-[#365f91]">
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
                <p
                  id={`topic-content-${index}`}
                  className="mt-2 text-gray-500 text-sm"
                >
                  {topic.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
