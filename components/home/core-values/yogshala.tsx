import Image from "next/image";
import React from "react";

const defaultValues = [
  { id: 1, icon: "/assets/why/expert.svg", text: "Expert Trainer" },
  { id: 2, icon: "/assets/why/holistic.svg", text: "Holistic Approach" },
  { id: 3, icon: "/assets/why/diverse.svg", text: "Diverse Course Offerings" },
  { id: 4, icon: "/assets/why/certificate.svg", text: "Yoga Certificates" },
  { id: 5, icon: "/assets/why/live.svg", text: "Live and Interactive Sessions" },
  { id: 6, icon: "/assets/why/community.svg", text: "Global Community" },
];

interface YogShalaProps {
  isFromServer?: boolean;
  values?: string[];
}

interface YogshalaItem {
  id: number;
  text: string;
  icon?: string;
}

const YogShala: React.FC<YogShalaProps> = ({ isFromServer = false, values }) => {
  const displayData: YogshalaItem[] = isFromServer
    ? values?.map((text, index) => ({ id: index + 1, text })) ?? []
    : defaultValues;

  return (
    <section className="py-16 md:py-24">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-[#4377B2] mb-8 md:mb-16">
        Why Yogshala?
      </h2>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {displayData.map(({ id, text, icon }) => (
            <div
              key={id}
              className="flex items-center gap-4 md:gap-6 bg-gradient-to-r from-[#4377B2] to-[#285384] rounded-r-[30px] rounded-l-[100px] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 rounded-full m-1 p-2 md:p-3 bg-white h-20 w-20 flex justify-center items-center shadow-md">
                {!isFromServer && icon && (
                  <Image
                    src={icon}
                    alt={text}
                    width={45}
                    height={45}
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                )}
              </div>
              <h3
                className={`text-base md:text-2xl font-medium text-white flex-1 ${
                  isFromServer ? "pl-6" : "pr-2"
                }`}
              >
                {text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogShala;
