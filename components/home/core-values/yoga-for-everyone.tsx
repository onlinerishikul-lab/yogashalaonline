import React from "react";
import { CoreValuesSection } from "@/components/core-values";

const YogaForEveryone = () => {
  const audience = [
    { icon: "/assets/core-values/kids.svg", text: "Kids" },
    { icon: "/assets/core-values/woman.svg", text: "Women" },
    { icon: "/assets/core-values/man.svg", text: "Men" },
  ];

  return (
    <CoreValuesSection
      title="Yoga For Everyone"
      values={audience}
    />
  );
};

export default YogaForEveryone;
