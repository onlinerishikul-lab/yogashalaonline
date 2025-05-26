import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface CoreValue {
  icon?: string;
  text?: string;
}

interface CoreValuesSectionProps {
  title?: string;
  values: CoreValue[];
}

export const CoreValuesSection: React.FC<CoreValuesSectionProps> = ({
  title,
  values,
}) => {
  return (
    <section className="space-y-8 w-full py-10" aria-labelledby="core-values-title">
      {title && (
        <h2
          id="core-values-title"
          className="text-2xl sm:text-3xl font-bold text-center text-[#4377B2]"
        >
          {title}
        </h2>
      )}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal line - hidden on small screens */}
        <div className="hidden md:block absolute top-[25%] left-[10%] right-0 h-[2px] bg-[#4377B2] w-[80%]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-4 justify-items-center">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 w-full max-w-[200px]"
            >
              <div
                className={cn(
                  "w-16 h-16 rounded-full bg-[#4377B2] flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110"
                )}
              >
                {value.icon && (
                  <Image
                    src={value.icon}
                    alt={value.text ?? "icon"}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                )}
              </div>
              <p className="text-gray-800 mt-2 text-base font-medium">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
