import Image from "next/image";
import React from "react";

export const CoreValuesSection = ({
  title,
  values,
}: {
  title?: string | undefined;
  values: { icon?: string | undefined; text?: string | undefined }[];
}) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Title */}
      {title && (
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#4377B2] mb-14">
          {title}
        </h2>
      )}

      <div className="relative max-w-6xl mx-auto">
        {/* Horizontal connecting line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4377B2] to-transparent w-full" />

        {/* Values */}
        <div className="flex flex-wrap justify-center gap-y-14 gap-x-12 relative z-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-[40%] sm:w-[28%] md:w-[20%]"
            >
              <div className="flex items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-50 shadow-lg p-6 transition-transform duration-300 hover:scale-110 hover:shadow-xl">
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
              <p className="text-gray-800 mt-4 text-sm sm:text-base font-semibold leading-snug">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
