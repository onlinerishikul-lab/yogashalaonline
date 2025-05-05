// components/LearnSection.tsx
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const LearnSection = () => {
  const [active, setActive] = useState<number>(0);

  const topics = [
    {
      title: "Poses Practice",
      content:
        "Lorem ipsum odor amet, consectetur adipiscing elit. Venenatis et aliquet magnis nulla ut himenaeos. Duis vehicula imperdiet sed pulvinar ipsum. Quis primis etiam natoque parturient, consectetur hac tincidunt eros. Senectus sed augue purus blandit potenti purus phasellus vulputate."
    },
    {
      title: "Pranayama",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Yoga Philosophy",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Meditation",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  return (
    <div className="bg-[#F5F5F5] p-6 md:p-12">
      <div className="bg-white rounded-2xl p-6 md:p-12 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
            What you will learn?
          </h2>
          <p className="text-gray-500 mb-6">
            Lorem ipsum odor amet, consectetur adipiscing elit. Mus semper aptent
            sodales gravida gravida tempor; euismod class. Eros congue nec nunc
            iaculis leo; quisque maximus.
          </p>
          <button className="bg-orange-600 text-white font-medium rounded-full px-6 py-2">
            Contact Us
          </button>
        </div>
        <div className="md:w-1/2">
          {topics.map((topic, index) => (
            <div key={index} className="border-b py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setActive(index === active ? -1 : index)}
              >
                <h3 className="font-semibold text-lg">{topic.title}</h3>
                {active === index ? <Minus size={20} /> : <Plus size={20} />}
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
