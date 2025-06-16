"use client";

import {
  Wind,
  ShieldCheck,
  SlidersHorizontal,
  InfinityIcon,
  UserCheck,
  ActivitySquare,
  SunMoon,
  Landmark,
  Heart,
} from "lucide-react";

const PranayamaCourse = () => {
  const features = [
    {
      id: 1,
      icon: <Wind />,
      title: "Breath Awareness & Control",
      description:
        "Learn how to guide conscious breathing for better focus and energy. Breath control forms the foundation of all pranayama practice.",
    },
    {
      id: 2,
      icon: <ShieldCheck />,
      title: "Safe Breathing Techniques",
      description:
        "Understand how to teach pranayama safely for all levels. Avoid strain by building breath practices gradually and mindfully.",
    },
    {
      id: 3,
      icon: <SlidersHorizontal />,
      title: "Technique Modifications",
      description:
        "Adapt breathwork for different ages, health conditions, and needs. Make pranayama accessible and supportive for every body.",
    },
    {
      id: 4,
      icon: <InfinityIcon />,
      title: "Mind-Body Connection",
      description:
        "Use breath to bridge the body and mind for inner harmony. Pranayama deepens awareness and emotional balance.",
    },
    {
      id: 5,
      icon: <UserCheck />,
      title: "Confident Teaching Skills",
      description:
        "Develop the confidence to lead pranayama sessions clearly and effectively. Teach with calm, clarity, and purpose.",
    },
    {
      id: 6,
      icon: <ActivitySquare />,
      title: "Anatomy of Breath",
      description:
        "Explore how the lungs, diaphragm, and nervous system work in pranayama. Teach from a place of scientific understanding.",
    },
    {
      id: 7,
      icon: <SunMoon />,
      title: "Calm & Energizing Practices",
      description:
        "Learn techniques to calm the mind or boost vitality depending on need. Balance energy using breath as your tool.",
    },
    {
      id: 8,
      icon: <Landmark />,
      title: "Real-Life Integration",
      description:
        "Apply pranayama to daily life, yoga classes, and wellness routines. Design practices for students, clients, or personal use.",
    },
    {
      id: 9,
      icon: <Heart />,
      title: "Inner Peace & Clarity",
      description:
        "Guide students toward stillness, focus, and mental clarity through breath. Pranayama cultivates peace from the inside out.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          What You’ll Learn in the Pranayama Teacher Training
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          Learn to guide breath-based practices that calm the mind, energize the body, and cultivate deep awareness.
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

export default PranayamaCourse;
