import React from "react";
import Image from "next/image";

const BenefitsOfOnlineLearning = () => {
  const benefits = [
    { icon: "/assets/core-values/team.svg", text: "Community" },
    { icon: "/assets/core-values/loop.svg", text: "Flexibility" },
    { icon: "/assets/core-values/star.svg", text: "Quality" },
    { icon: "/assets/core-values/global.svg", text: "Global Access" },
  ];

  return (
    <section className="w-full bg-[#f9f9f9] py-12">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#4377B2] mb-10">
        Benefits of Online Learning
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 px-6">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="w-16 h-16 relative mb-3">
              <Image
                src={item.icon}
                alt={item.text}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-[#4377B2] text-sm font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsOfOnlineLearning;
