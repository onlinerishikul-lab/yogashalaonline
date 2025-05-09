import { CoreValuesSection } from "@/components/core-values";

const CourseLevels = () => {
  return (
    <CoreValuesSection
      title="Course Levels"
      values={[
        { icon: "/assets/core-values/beginner.svg", text: "Beginner Course" },
        { icon: "/assets/core-values/intermediate.svg", text: "Intermediate Course" },
        { icon: "/assets/core-values/advance.svg", text: "Advance Course" },
      ]}
    />
  );
};

export default CourseLevels;
