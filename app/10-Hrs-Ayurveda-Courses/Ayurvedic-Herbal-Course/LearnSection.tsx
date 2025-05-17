"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const LearnSection = () => {
  const [active, setActive] = useState<number>(-1);

  const topics = [
    {
      title: "Introduction to Ayurvedic Herbs",
      content:
        "Learn about the role of herbs in Ayurveda, their classifications, and how they support holistic health and healing.",
    },
    {
      title: "Common Medicinal Herbs & Their Benefits",
      content:
        "Explore popular Ayurvedic herbs like Ashwagandha, Turmeric, Tulsi, and Neem, and understand their therapeutic properties.",
    },
    {
      title: "Herbal Preparations & Usage",
      content:
        "Discover different ways herbs are prepared and used in Ayurveda, including teas, powders, oils, and tinctures.",
    },
    {
      title: "Balancing Doshas with Herbal Remedies",
      content:
        "Understand how specific herbs help balance the Vata, Pitta, and Kapha doshas to promote optimal wellness.",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] p-6 md:p-12">
      <div className="bg-white rounded-2xl p-6 md:p-12 flex flex-col md:flex-row gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4377b2] mb-4">
            What You Will Learn
          </h2>
          <p className="text-gray-500 mb-6">
            This 10-hour Ayurvedic Herbal Course introduces you to the healing power of traditional herbs, their uses, and how to incorporate them into daily health routines for natural balance and vitality.
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
