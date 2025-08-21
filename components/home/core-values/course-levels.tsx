import React from "react";
import { CoreValuesSection } from "@/components/core-values";

const CourseLevels = () => {
  const levels = [
    { icon: "/assets/4.png", text: "Beginner Course", size: 70 },
    { icon: "/assets/8.png", text: "Intermediate Course", size: 70 },
    { icon: "/assets/2.png", text: "Advance Course", size: 70 },
  ];

  return (
    <CoreValuesSection title="Course Levels" values={levels} />
  );
};

export default CourseLevels;
