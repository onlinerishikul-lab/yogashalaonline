import React from "react";
import { CoreValuesSection } from "@/components/core-values";

const CourseLevels = () => {
  const levels = [
    { icon: "/assets/core-values/beginner.svg", text: "Beginner Course" },
    { icon: "/assets/core-values/intermediate.svg", text: "Intermediate Course" },
    { icon: "/assets/core-values/advance.svg", text: "Advance Course" },
  ];

  return (
    <CoreValuesSection
      title="Course Levels"
      values={levels}
    />
  );
};

export default CourseLevels;
