import React from "react";
import { CoreValuesSection } from "@/components/core-values";

const YogaForEveryone = () => {
  const audience = [
    { icon: "/assets/1.png", text: "Kids", size: 70 },
    { icon: "/assets/6.png", text: "Women", size: 50 },
    { icon: "/assets/9.png", text: "Men", size: 50 },
  ];

  return (
    <CoreValuesSection title="Yoga For Everyone" values={audience} />
  );
};

export default YogaForEveryone;
