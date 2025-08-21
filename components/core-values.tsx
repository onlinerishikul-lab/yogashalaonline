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
    <section className="py-12">
      {/* Title */}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4377B2] mb-10">
          {title}
        </h2>
      )}

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start text-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Circle background for icons */}
              <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center">
                {value.icon && (
                  <Image
                    src={value.icon}
                    alt="icon"
                    width={64}
                    height={55}
                    className="object-contain"
                  />
                )}
              </div>

              {/* Text */}
              <p className="mt-4 text-gray-800 text-lg font-semibold">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
