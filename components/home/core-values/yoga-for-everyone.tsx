import React from "react";
import { CoreValuesSection } from "@/components/core-values";

const YogaForEveryone = () => {
  const audience = [
    { icon: "/assets/1.png", text: "Kids",size: 150  },
    { icon: "/assets/6.png", text: "Women",size: 150  },
    { icon: "/assets/9.png", text: "Men",size: 150  },
  ];

  return (
    <CoreValuesSection
      title="Yoga For Everyone"
      values={audience}
    />
  );
};

export default YogaForEveryone;
