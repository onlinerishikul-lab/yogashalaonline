"use client";

import {
  Dumbbell,
  Mic,
  Sparkles,
  Wind,
  Brain,
  HeartPulse,
  Globe,
  ShieldCheck,
  Repeat,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Dumbbell />,
      title: "Strength & Stamina",
      description:
        "Improve physical endurance and body awareness through regular flows.",
    },
    {
      id: 2,
      icon: <Mic />,
      title: "Confidence in Teaching",
      description:
        "Gain tools and skills to lead Vinyasa yoga sessions effectively.",
    },
    {
      id: 3,
      icon: <Sparkles />,
      title: "Creative Expression",
      description:
        "Explore your own voice and style through themed sequences.",
    },
    {
      id: 4,
      icon: <Wind />,
      title: "Better Breath Control",
      description:
        "Enhance energy and focus by learning breath-based movement.",
    },
    {
      id: 5,
      icon: <Brain />,
      title: "Mental Clarity & Focus",
      description:
        "Use flowing meditation to release stress and sharpen awareness.",
    },
    {
      id: 6,
      icon: <HeartPulse />,
      title: "Deep Mind-Body Connection",
      description:
        "Cultivate harmony between movement, breath, and consciousness.",
    },
    {
      id: 7,
      icon: <Globe />,
      title: "Global Recognition",
      description:
        "Get certified to teach Vinyasa yoga anywhere in the world.",
    },
    {
      id: 8,
      icon: <ShieldCheck />,
      title: "Injury Prevention & Safety",
      description:
        "Learn alignment and modifications to protect students and self.",
    },
    {
      id: 9,
      icon: <Repeat />,
      title: "Balanced Lifestyle",
      description:
        "Integrate yoga into everyday life with purpose and rhythm.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Vinyasa Flow Class
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          Dive into the dynamic art of Vinyasa Flow, building strength, creativity, and breath-led movement as both a practitioner and teacher.
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
