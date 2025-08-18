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
    <div className="space-y-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#4377B2]">
        {title}
      </h2>

      {/* Values section with continuous lines */}
      <div className="relative max-w-6xl mx-auto">
        {/* Horizontal line */}
        <div className="absolute top-[25%] left-0 right-0 h-[2px] bg-[#4377B2] w-full md:w-[80%] md:left-[10%] hidden sm:block" />

        <div className="flex flex-wrap justify-center gap-y-12 gap-x-6 md:gap-x-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-full sm:w-[45%] md:w-[22%] px-2"
            >
              <div className="flex items-center justify-center relative z-10 transition-transform hover:scale-110">
                {value.icon && (
                  <Image
                    src={value.icon}
                    alt="icon"
                    width={85}
                    height={85}
                    className="object-contain"
                  />
                )}
              </div>
              <p className="text-gray-800 mt-4 text-base sm:text-lg font-medium max-w-[220px]">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
