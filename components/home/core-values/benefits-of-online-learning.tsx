import { CoreValuesSection } from "@/components/core-values";

const BenefitsOfOnlineLearning = () => {
  return (
    <CoreValuesSection
      title="Benefits of Online Learning"
      values={[
        { icon: "/assets/core-values/affordable.svg", text: "Affordable" },
        { icon: "/assets/core-values/anywhere.svg", text: "Can Join From Anywhere" },
        { icon: "/assets/core-values/global-access.svg", text: "Global Access" },
      ]}
    />
  );
};

export default BenefitsOfOnlineLearning;
