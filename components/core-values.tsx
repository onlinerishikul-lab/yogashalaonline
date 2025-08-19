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
    <section className="relative py-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#4377B2]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-2xl" />

      {/* Title */}
      <h2 className="relative text-4xl md:text-5xl font-extrabold text-center text-[#1E3A8A] mb-16 tracking-wide">
        {title}
        <span className="block w-24 h-1 bg-[#4377B2] mx-auto mt-5 rounded-full shadow-md" />
      </h2>

      {/* Values Grid */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {values.map((value, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center text-center p-8 
                       bg-white/70 backdrop-blur-xl border border-gray-100 
                       rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 
                       hover:-translate-y-2"
          >
            {/* Icon Circle */}
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-tr from-[#4377B2]/20 to-[#60A5FA]/20 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
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
            <p className="text-gray-800 text-lg font-semibold leading-relaxed">
              {value.text}
            </p>

            {/* Glow Line */}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-[3px] bg-gradient-to-r from-[#4377B2] to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 shadow-md" />
          </div>
        ))}
      </div>
    </section>
  );
};
