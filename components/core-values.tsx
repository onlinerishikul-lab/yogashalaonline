import Image from "next/image";
import React from "react";

export const CoreValuesSection = ({
  title,
  values,
}: {
  title?: string;
  values: { icon?: string; text?: string }[];
}) => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-[#4377B2] mb-14 relative">
        {title}
        <span className="block w-20 h-1 bg-[#4377B2] mx-auto mt-4 rounded-full" />
      </h2>

      {/* Values Grid */}
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        {values.map((value, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
          >
            {/* Icon Circle */}
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-[#4377B2]/10 mb-6 group-hover:scale-110 transition-transform duration-300">
              {value.icon && (
                <Image
                  src={value.icon}
                  alt="icon"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              )}
            </div>

            {/* Text */}
            <p className="text-gray-700 text-lg font-medium leading-relaxed">
              {value.text}
            </p>

            {/* Decorative Line */}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-[3px] bg-[#4377B2] rounded-full opacity-0 group-hover:opacity-100 transition duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};
