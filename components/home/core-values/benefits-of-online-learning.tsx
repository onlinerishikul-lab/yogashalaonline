import React from "react";
import { CoreValuesSection } from "@/components/core-values";

const BenefitsOfOnlineLearning = () => {
  const benefits = [
    { icon: "/assets/3.png", text: "Affordable" },
    { icon: "/assets/7.png", text: "Can Join From Anywhere" },
    { icon: "/assets/5.png", text: "Global Access" },
  ];

  return (
    <CoreValuesSection
      title="Benefits of Online Learning"
      values={benefits}
    />
  );
};

export default BenefitsOfOnlineLearning;
