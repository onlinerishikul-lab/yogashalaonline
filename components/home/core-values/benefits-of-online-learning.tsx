import React from "react";
import { CoreValuesSection } from "@/components/core-values";

const BenefitsOfOnlineLearning = () => {
  const benefits = [
    { icon: "/assets/3.png", text: "Affordable", size: 100 },
    { icon: "/assets/7.png", text: "Can Join From Anywhere", size: 100 },
    { icon: "/assets/5.png", text: "Global Access", size: 100 },
  ];

  return (
    <CoreValuesSection
      title="Benefits of Online Learning"
      values={benefits}
    />
  );
};

export default BenefitsOfOnlineLearning;
