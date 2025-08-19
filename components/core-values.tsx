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
    <div className="space-y-8 py-12">
      <h2 className="text-3xl font-bold text-center text-[#4377B2]">{title}</h2>

      {/* Values section with continuous lines */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-8">
        {/* Horizontal line */}
        <div className="absolute top-1/4 left-0 right-0 h-[2px] bg-[#4377B2] w-full md:w-[80%] md:left-[10%]" />

        <div className="flex flex-row justify-between items-start gap-12 md:gap-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 w-full md:w-48"
            >
              {/* Bigger icon with no background */}
              <div className="relative z-10 flex items-center justify-center">
                {value.icon && (
                  <Image src={value.icon} alt="icon" width={100} height={100} />
                )}
              </div>

              <p className="text-gray-800 mt-4 text-lg font-medium max-w-[200px]">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
