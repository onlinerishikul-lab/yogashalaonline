import React from "react";

import YogShala from "./yogshala";
import { CoreValuesSection } from "@/components/core-values";
import { cn } from "@/lib/utils";

const coreValues = [
  {
    title: "Benefits of  Online Learning",
    values: [
      { icon: "/assets/core-values/affordable.svg", text: "Affordable" },
      {
        icon: "/assets/core-values/anywhere.svg",
        text: "Can Join From Anywhere",
      },
      { icon: "/assets/core-values/global-access.svg", text: "Global Access" },
    ],
  },
  {
    title: "Course Levels",
    values: [
      { icon: "/assets/core-values/beginner.svg", text: "Beginner  Course" },
      {
        icon: "/assets/core-values/intermediate.svg",
        text: "Intermediate Course",
      },
      { icon: "/assets/core-values/advance.svg", text: "Advance Course" },
    ],
  },
  {
    title: "Yoga For EveryOne",
    values: [
      { icon: "/assets/core-values/kids.svg", text: "Kids" },
      { icon: "/assets/core-values/woman.svg", text: "Women" },
      { icon: "/assets/core-values/man.svg", text: "Men" },
    ],
  },
];

interface CoreViewProps {
  isBgVisible?: boolean;
  isFromServer?: boolean;
  values?: string[];
  whyYogshala?: string[];
}

const CoreView = ({
  // isBgVisible = true,
  isFromServer = false,
  values,
  whyYogshala,
}: CoreViewProps) => {
  // Transform server values into groups of three
  const transformServerValues = (serverValues: string[] = []) => {
    const result = [];
    for (let i = 0; i < serverValues.length; i += 3) {
      const groupValues = serverValues
        .slice(i, i + 3)
        .map((text) => ({ text }));
      result.push({ values: groupValues });
    }
    return result;
  };

  const transformedValues = values ? transformServerValues(values) : [];

  return (
    <div
      className={cn(
        "relative"
        // isBgVisible &&
        //   'bg-[url("/assets/CoreValues.svg")] bg-cover bg-no-repeat bg-opacity-30'
      )}
    >
      <div className="flex justify-center container mx-auto ">
        <div className="p-2 w-full px-6">
          <div className="space-y-0">
            <h2 className="text-4xl font-bold text-center text-[#4377B2]">
              Core Values
            </h2>
            <div>
              {!isFromServer &&
                coreValues.map((coreValue, index) => (
                  <CoreValuesSection
                    key={index}
                    title={coreValue.title}
                    values={coreValue.values}
                  />
                ))}

              {isFromServer &&
                transformedValues.map((value, index) => (
                  <CoreValuesSection key={index} values={value.values} />
                ))}
            </div>
          </div>
          <YogShala isFromServer={isFromServer} values={whyYogshala} />
        </div>
      </div>
    </div>
  );
};

export default CoreView;
