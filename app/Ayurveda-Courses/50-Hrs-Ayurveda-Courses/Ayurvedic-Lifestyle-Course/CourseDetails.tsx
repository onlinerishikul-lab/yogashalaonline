"use client";

import {
  Sun,
  Flame,
  Bed,
  HeartPulse,
  Droplets,
  CircleDashed,
  ShieldCheck,
  Brain,
  Repeat,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Sun />,
      title: "More Energy Daily",
      description: "Feel naturally energized with morning and evening Ayurvedic habits.",
    },
    {
      id: 2,
      icon: <Flame />,
      title: "Improved Digestion",
      description: "Support your gut with food timing, herbs, and lifestyle shifts.",
    },
    {
      id: 3,
      icon: <Bed />,
      title: "Deep, Restful Sleep",
      description: "Create a peaceful bedtime ritual that enhances quality rest.",
    },
    {
      id: 4,
      icon: <HeartPulse />,
      title: "Reduced Stress & Anxiety",
      description: "Calm your nervous system with bodywork, breath, and daily grounding.",
    },
    {
      id: 5,
      icon: <Droplets />,
      title: "Clearer Skin & Detox",
      description: "Cleanse from the inside out with gentle Ayurvedic detox practices.",
    },
    {
      id: 6,
      icon: <CircleDashed />,
      title: "Hormonal Balance",
      description: "Stabilize menstrual cycles and reduce PMS with mindful living.",
    },
    {
      id: 7,
      icon: <ShieldCheck />,
      title: "Stronger Immune System",
      description: "Boost your immunity naturally with dinacharya and ritucharya.",
    },
    {
      id: 8,
      icon: <Brain />,
      title: "Mental Clarity & Focus",
      description: "Reduce digital fatigue and increase mental alertness with simple tools.",
    },
    {
      id: 9,
      icon: <Repeat />,
      title: "Lasting Lifestyle Transformation",
      description: "Build life-affirming habits that keep you aligned with your true nature.",
    },
  ];

  return (
    <section className="bg-[#fefefe] text-[#7b3f00] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Ayurvedic Lifestyle Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#7b3f00]/90">
          Align your daily rhythms with ancient Ayurvedic wisdom for a healthier, more balanced life.
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
