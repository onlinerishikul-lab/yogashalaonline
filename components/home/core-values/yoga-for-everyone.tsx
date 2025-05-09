import { CoreValuesSection } from "@/components/core-values";

const YogaForEveryone = () => {
  return (
    <CoreValuesSection
      title="Yoga For Everyone"
      values={[
        { icon: "/assets/core-values/kids.svg", text: "Kids" },
        { icon: "/assets/core-values/woman.svg", text: "Women" },
        { icon: "/assets/core-values/man.svg", text: "Men" },
      ]}
    />
  );
};

export default YogaForEveryone;
