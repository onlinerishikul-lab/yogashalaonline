import Image from "next/image";
import React from "react";

const uspContent = [
  {
    icon: "/assets/usp/f7_person-3.png",
    count: "10,000+",
    text: "Satisfied Yoga Students",
  },
  {
    icon: "/assets/usp/uit_process.png",
    count: "20,000+",
    text: "Practices Perfected",
  },
  {
    icon: "/assets/usp/solar_star-linear.png",
    count: "10+ Years",
    text: "of Expertise",
  },
  {
    icon: "/assets/usp/100+.svg",
    count: "100+ Countries",
    text: "Unite Globally",
  },
];

const Usp = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {uspContent.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-gradient-to-b from-[#4377B2] to-[#285384] rounded-full p-4 flex items-center justify-center mb-4">
              <Image
                src={item.icon}
                height={40}
                width={40}
                alt={`${item.count} - ${item.text}`}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
              />
            </div>
            <h2 className="text-[#4377B2] text-xl sm:text-2xl font-semibold text-center">
              {item.count}
            </h2>
            <p className="text-[#4377B2] text-sm sm:text-base font-semibold text-center mt-1">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Usp;
