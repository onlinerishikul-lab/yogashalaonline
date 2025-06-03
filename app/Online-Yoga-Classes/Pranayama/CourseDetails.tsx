"use client";

import {
  HeartPulse,
  Wind,
  Brain,
  Sparkles,
  ShieldCheck,
  Bed,
  SunMoon,
  Mic,
  Stethoscope,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <HeartPulse />,
      title: "Emotional Balance",
      description:
        "Calm the mind and navigate emotions with more clarity and control.",
    },
    {
      id: 2,
      icon: <Wind />,
      title: "Improved Energy Flow",
      description:
        "Boost vitality by harmonizing breath and energy systems.",
    },
    {
      id: 3,
      icon: <Brain />,
      title: "Better Focus & Mental Clarity",
      description:
        "Sharpens awareness and removes mental fog.",
    },
    {
      id: 4,
      icon: <Sparkles />,
      title: "Deep Inner Peace",
      description:
        "Experience tranquility and inner stability with regular breathwork.",
    },
    {
      id: 5,
      icon: <ShieldCheck />,
      title: "Stronger Immune & Respiratory Health",
      description:
        "Supports lung function and immune resilience.",
    },
    {
      id: 6,
      icon: <Bed />,
      title: "Enhanced Sleep & Relaxation",
      description:
        "Relieves anxiety and helps regulate healthy sleep cycles.",
    },
    {
      id: 7,
      icon: <SunMoon />,
      title: "Spiritual Growth & Awareness",
      description:
        "Activates inner perception and higher states of consciousness.",
    },
    {
      id: 8,
      icon: <Mic />,
      title: "Empowered Teaching Skills",
      description:
        "Gain confidence in guiding groups and individuals in Pranayama.",
    },
    {
      id: 9,
      icon: <Stethoscope />,
      title: "Self-Healing & Regulation Tools",
      description:
        "Use breath as medicine for body, mind, and energy.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Pranayama Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course teaches powerful breath practices that restore balance, energize the body, and awaken inner healing and clarity.
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
