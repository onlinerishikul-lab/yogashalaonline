import Image from "next/image";
import React from "react";

export const CoreValuesSection = ({
  title,
  values,
}: {
  title?: string;
  values: { icon?: string; text?: string; size?: number }[];
}) => {
  return (
    <div className="py-0">
      {/* Title */}
      {title && (
        <h2 className="text-3xl font-bold text-center text-[#4377B2] mb-12">
          {title}
        </h2>
      )}

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        {/* Horizontal line */}
        <div className="absolute top-10 left-0 right-0 h-[3px] bg-[#4377B2] w-full -z-0" />

        {/* Icons + Text */}
        <div className="flex justify-between items-center relative z-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-24 md:w-32 relative"
            >
              {/* Icon + Text as one block */}
              <div className="relative inline-block">
                {value.icon && (
                  <Image
                    src={value.icon}
                    alt="icon"
                    width={value.size ?? 100}
                    height={value.size ?? 100}
                    className="mx-auto"
                  />
                )}
                {/* Text OVERLAPPING bottom of icon */}
                <p className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-gray-800 text-base font-semibold whitespace-nowrap">
                  {value.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
