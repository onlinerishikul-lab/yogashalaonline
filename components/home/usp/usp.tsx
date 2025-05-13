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
    text: "unite globally",
  },
];

const Usp = () => {
  return (
    <div className="flex items-center justify-center container mx-auto   px-2 sm:px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 w-full">
        {uspContent.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 sm:p-4 lg:p-6 hover:transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-gradient-to-b from-[#4377B2] to-[#285384] rounded-full h-[80px] w-[80px] sm:h-[90px] sm:w-[90px] lg:h-[100px] lg:w-[100px] p-2 flex items-center justify-center mb-2 sm:mb-3">
              <Image
                src={item.icon}
                height={30}
                width={30}
                alt="usp icon"
                className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]"
              />
            </div>
            <h2 className="text-[#4377B2] text-xl sm:text-2xl lg:text-2xl font-semibold text-center">
              {item.count}
            </h2>
            <p className="text-[#4377B2] text-sm sm:text-base lg:text-base font-semibold text-center mt-1">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usp;
