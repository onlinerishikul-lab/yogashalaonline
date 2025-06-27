import React from "react";
import { CoreValuesSection } from "@/components/core-values";

const YogaForEveryone = () => {
  const audience = [
    { icon: "/assets/core-values/1.png", text: "Kids" },
    { icon: "/assets/core-values/6.png", text: "Women" },
    { icon: "/assets/core-values/9.png", text: "Men" },
  ];

  return (
    <CoreValuesSection
      title="Yoga For Everyone"
      values={audience}
    />
  );
};

export default YogaForEveryone;
