import { Users, BarChart, Trophy, Globe } from "lucide-react";
import React from "react";

const uspContent = [
  {
    icon: <Users className="w-12 h-12 text-[#4377B2]" />,
    count: "10,000+",
    text: "Satisfied Yoga Students",
  },
  {
    icon: <BarChart className="w-12 h-12 text-[#4377B2]" />,
    count: "20,000+",
    text: "Practices Perfected",
  },
  {
    icon: <Trophy className="w-12 h-12 text-[#4377B2]" />,
    count: "10+ Years",
    text: "of Expertise",
  },
  {
    icon: <Globe className="w-12 h-12 text-[#4377B2]" />,
    count: "100+ Countries",
    text: "Unite Globally",
  },
];

const Usp = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#4377B2] mb-8">
          Why Choose Rishikul Online?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {uspContent.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-[#4377B2] text-center">
                {item.count}
              </h3>
              <p className="text-gray-600 text-center mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Usp;
