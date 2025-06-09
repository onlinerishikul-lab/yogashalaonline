"use client";

import {
  Activity,
  BarChart3,
  Scale,
  CloudSun,
  Soup,
  Zap,
  Repeat,
  HeartPulse,
  BookOpenCheck,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <BarChart3 />,
      title: "Blood Sugar Regulation",
      description: "Stabilize glucose levels with therapeutic yoga routines.",
    },
    {
      id: 2,
      icon: <Scale />,
      title: "Improved Insulin Response",
      description:
        "Boost insulin sensitivity through mindful movement and breath.",
    },
    {
      id: 3,
      icon: <Activity />,
      title: "Weight Management",
      description: "Support healthy metabolism and reduce excess weight.",
    },
    {
      id: 4,
      icon: <CloudSun />,
      title: "Lower Stress & Cortisol",
      description:
        "Calm the nervous system to protect hormone balance.",
    },
    {
      id: 5,
      icon: <Soup />,
      title: "Enhanced Digestion",
      description: "Stimulate metabolism and improve gut function naturally.",
    },
    {
      id: 6,
      icon: <Zap />,
      title: "Increased Energy Levels",
      description: "Feel more active and less fatigued day-to-day.",
    },
    {
      id: 7,
      icon: <Repeat />,
      title: "Supportive Lifestyle Shift",
      description:
        "Develop habits that align with healing and prevention.",
    },
    {
      id: 8,
      icon: <HeartPulse />,
      title: "Holistic Health Awareness",
      description:
        "Understand the mind-body connection in managing chronic conditions.",
    },
    {
      id: 9,
      icon: <BookOpenCheck />,
      title: "Empowerment Through Knowledge",
      description:
        "Feel confident managing diabetes beyond medication.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Exclusive Reversing Diabetic Yoga Class
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This Class offers a holistic yoga-based approach to managing and reversing diabetes, enhancing vitality and long-term wellness.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-4 bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-2xl text-[#4377b2] mt-1 shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">
                  {feature.id}. {feature.title}
                </h3>
                <p className="text-sm text-[#4377b2]/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
