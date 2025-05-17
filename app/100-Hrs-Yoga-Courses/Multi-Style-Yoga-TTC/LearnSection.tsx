"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const LearnSection = () => {
  const [active, setActive] = useState<number>(-1);

  const topics = [
    {
      title: "Introduction to Multi-Style Yoga",
      content:
        "Get an overview of multiple yoga traditions including Hatha, Vinyasa, Ashtanga, and Yin Yoga—understanding their history and philosophy.",
    },
    {
      title: "Hatha & Vinyasa Flow Fundamentals",
      content:
        "Explore static and dynamic practices with emphasis on alignment, breath coordination, and transitioning between postures.",
    },
    {
      title: "Ashtanga Primary Series Basics",
      content:
        "Learn the foundational structure of the Ashtanga Primary Series with attention to breath (Ujjayi), bandhas, and drishti.",
    },
    {
      title: "Yin Yoga & Restorative Techniques",
      content:
        "Discover the calming, meditative aspects of Yin Yoga including long-held poses and energetic balance through fascia release.",
    },
    {
      title: "Teaching Skills & Class Sequencing",
      content:
        "Master multi-style sequencing, cueing techniques, and class management while maintaining authenticity across different yoga styles.",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] p-6 md:p-12">
      <div className="bg-white rounded-2xl p-6 md:p-12 flex flex-col md:flex-row gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4377b2] mb-4">
            100-Hrs Yoga Courses: Multi-Style Yoga TTC
          </h2>
          <p className="text-gray-500 mb-6">
            Experience a diverse and balanced yoga journey by learning multiple yoga styles in one course. Ideal for aspiring teachers or practitioners looking to broaden their skills.
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
