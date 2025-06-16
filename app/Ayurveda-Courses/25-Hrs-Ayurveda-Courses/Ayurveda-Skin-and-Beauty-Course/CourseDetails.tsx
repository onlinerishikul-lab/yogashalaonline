"use client";

import {
  Sparkles,
  Smile,
  Droplet,
  Heart,
  Hourglass,
  Activity,
  Leaf,
  Brain,
  BookOpenCheck,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Sparkles />,
      title: "Natural Glow & Radiance",
      description:
        "Achieve healthy, glowing skin without synthetic products.",
    },
    {
      id: 2,
      icon: <Smile />,
      title: "Clear, Blemish-Free Skin",
      description:
        "Balance your doshas to reduce acne, dryness, and inflammation.",
    },
    {
      id: 3,
      icon: <Droplet />,
      title: "Reduced Skin Sensitivity",
      description:
        "Soothe and calm your skin with dosha-appropriate care.",
    },
    {
      id: 4,
      icon: <Heart />,
      title: "Holistic Self-Care Rituals",
      description:
        "Create a relaxing daily routine that nourishes both body and soul.",
    },
    {
      id: 5,
      icon: <Hourglass />,
      title: "Younger-Looking Skin",
      description:
        "Use age-old anti-ageing secrets for firm, youthful skin.",
    },
    {
      id: 6,
      icon: <Activity />,
      title: "Inner Health = Outer Beauty",
      description:
        "Heal your skin by treating the root cause, not just symptoms.",
    },
    {
      id: 7,
      icon: <Leaf />,
      title: "Sustainable Beauty Practices",
      description:
        "Learn zero-waste, natural beauty rituals using kitchen herbs.",
    },
    {
      id: 8,
      icon: <Brain />,
      title: "Stress-Free Skin",
      description:
        "Address skin issues related to anxiety, poor sleep, or mental tension.",
    },
    {
      id: 9,
      icon: <BookOpenCheck />,
      title: "Empowered Beauty Knowledge",
      description:
        "Feel confident and radiant with tools for lifelong skin wellness.",
    },
  ];

  return (
    <section className="bg-[#fefefe] text-[#7b3f00] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Ayurveda Skin and Beauty Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#7b3f00]/90">
          Unlock radiant skin and timeless beauty with the ancient, holistic secrets of Ayurveda.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-4 bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-2xl text-[#7b3f00] mt-1 shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">
                  {feature.id}. {feature.title}
                </h3>
                <p className="text-sm text-[#7b3f00]/80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
