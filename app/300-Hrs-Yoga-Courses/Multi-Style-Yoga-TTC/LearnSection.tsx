"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const LearnSection = () => {
  const [active, setActive] = useState<number>(-1);

  const topics = [
    {
      title: "Mastering Multiple Yoga Styles",
      content:
        "Develop expertise across diverse yoga traditions including Hatha, Vinyasa, Ashtanga, Iyengar, Kundalini, and more.",
    },
    {
      title: "Advanced Asana & Sequencing",
      content:
        "Refine your asana practice with complex postures and learn to create dynamic and adaptive sequences.",
    },
    {
      title: "Deep Dive into Yoga Philosophy",
      content:
        "Explore classical yoga texts and philosophies to enrich your teaching and personal practice.",
    },
    {
      title: "Holistic Teaching Methodologies",
      content:
        "Master comprehensive teaching techniques, class management, and student assessment for all levels.",
    },
    {
      title: "In-depth Anatomy & Physiology",
      content:
        "Gain advanced knowledge of human anatomy, biomechanics, and injury prevention tailored for yoga.",
    },
    {
      title: "Pranayama, Meditation & Healing",
      content:
        "Learn sophisticated breathing techniques, meditation practices, and therapeutic applications of yoga.",
    },
    {
      title: "Yoga Lifestyle & Ethics",
      content:
        "Integrate yogic principles into daily life and understand ethical responsibilities as a yoga teacher.",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] p-6 md:p-12">
      <div className="bg-white rounded-2xl p-6 md:p-12 flex flex-col md:flex-row gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4377b2] mb-4">
            300-Hrs Yoga Courses: Multi-Style Yoga TTC
          </h2>
          <p className="text-gray-500 mb-6">
            Elevate your yoga teaching skills with extensive training across multiple yoga styles, preparing you to teach with confidence, depth, and versatility.
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
