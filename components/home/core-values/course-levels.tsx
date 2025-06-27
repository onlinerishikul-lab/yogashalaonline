import React from "react";
import { CoreValuesSection } from "@/components/core-values";

const CourseLevels = () => {
  const levels = [
    { icon: "/assets/core-values/8.png", text: "Beginner Course" },
    { icon: "/assets/core-values/4.png", text: "Intermediate Course" },
    { icon: "/assets/core-values/2.png", text: "Advance Course" },
  ];

  return (
    <CoreValuesSection
      title="Course Levels"
      values={levels}
    />
  );
};

export default CourseLevels;
