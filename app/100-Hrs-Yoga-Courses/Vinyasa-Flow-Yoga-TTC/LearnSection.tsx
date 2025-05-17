"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const LearnSection = () => {
  const [active, setActive] = useState<number>(-1);

  const topics = [
    {
      title: "Foundations of Vinyasa Yoga",
      content:
        "Understand the principles of Vinyasa Flow, including its roots, evolution, and the philosophy that connects breath with movement.",
    },
    {
      title: "Breath-Synchronized Movement",
      content:
        "Explore how to synchronize breath (pranayama) with dynamic postures to create fluid and mindful Vinyasa sequences.",
    },
    {
      title: "Creative Sequencing Techniques",
      content:
        "Learn how to design intelligent, safe, and engaging Vinyasa flows that suit different levels of practitioners.",
    },
    {
      title: "Sun Salutations & Flow Structure",
      content:
        "Master various forms of Sun Salutations (Surya Namaskar) and understand their role in building strength, balance, and rhythm.",
    },
    {
      title: "Cueing, Adjustments & Teaching Skills",
      content:
        "Develop your teaching voice, refine your verbal cues, and learn effective hands-on adjustments and class management strategies.",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] p-6 md:p-12">
      <div className="bg-white rounded-2xl p-6 md:p-12 flex flex-col md:flex-row gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4377b2] mb-4">
            100-Hrs Yoga Courses: Vinyasa Flow Yoga TTC
          </h2>
          <p className="text-gray-500 mb-6">
            Dive into the dynamic and empowering world of Vinyasa Flow Yoga. This course blends breath and movement to create transformational practice and teaching experiences.
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
