import React from "react";
import { CoreValuesSection } from "@/components/core-values";

const YogaForEveryone = () => {
  const audience = [
    { icon: "/assets/1.png", text: "Kids" },
    { icon: "/assets/6.png", text: "Women" },
    { icon: "/assets/9.png", text: "Men" },
  ];

  return (
    <CoreValuesSection
      title="Yoga For Everyone"
      values={audience}
    />
  );
};

export default YogaForEveryone;
