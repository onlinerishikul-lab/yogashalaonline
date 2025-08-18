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
    <div className="px-4 sm:px-6 lg:px-8 py-10 bg-white">
      {/* Section Title */}
      {title && (
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#4377B2] mb-12">
          {title}
        </h2>
      )}

      <div className="relative max-w-6xl mx-auto">
        {/* Horizontal connecting line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#4377B2] w-full md:w-[85%] md:left-[7.5%] hidden sm:block" />

        {/* Values */}
        <div className="flex flex-wrap justify-center gap-y-10 gap-x-8 md:gap-x-14 relative z-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-[45%] sm:w-[30%] md:w-[20%]"
            >
              <div className="flex items-center justify-center rounded-full bg-white shadow-md p-5 transition-transform hover:scale-110">
                {value.icon && (
                  <Image
                    src={value.icon}
                    alt="icon"
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                )}
              </div>
              <p className="text-gray-800 mt-3 text-sm sm:text-base font-semibold max-w-[200px] leading-snug">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
