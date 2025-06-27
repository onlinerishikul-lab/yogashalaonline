import React from "react";
import { CoreValuesSection } from "@/components/core-values";

const BenefitsOfOnlineLearning = () => {
  const benefits = [
    { icon: "/assets/core-values/3.png", text: "Affordable" },
    { icon: "/assets/core-values/7.png", text: "Can Join From Anywhere" },
    { icon: "/assets/core-values/5.png", text: "Global Access" },
  ];

  return (
    <CoreValuesSection
      title="Benefits of Online Learning"
      values={benefits}
    />
  );
};

export default BenefitsOfOnlineLearning;
