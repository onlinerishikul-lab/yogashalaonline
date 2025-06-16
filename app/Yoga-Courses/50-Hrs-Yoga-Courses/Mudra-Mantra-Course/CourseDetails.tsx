"use client";

import {
  Sparkles,
  Brain,
  Heart,
  Infinity,
  CloudSun,
  Dumbbell,
  BedDouble,
  ShieldCheck,
  Users2,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Sparkles />,
      title: "Energy Awakening",
      desc: "Activate dormant Kundalini energy for vitality.\nExperience heightened awareness and creativity.",
    },
    {
      id: 2,
      icon: <Brain />,
      title: "Mental Clarity",
      desc: "Clear mental fog and sharpen focus.\nImprove decision-making and mindfulness.",
    },
    {
      id: 3,
      icon: <Heart />,
      title: "Emotional Balance",
      desc: "Release stored emotions and reduce anxiety.\nCultivate calmness and emotional resilience.",
    },
    {
      id: 4,
      icon: <Infinity />,
      title: "Spiritual Growth",
      desc: "Deepen connection to your higher self.\nExperience expanded consciousness and peace.",
    },
    {
      id: 5,
      icon: <CloudSun />,
      title: "Stress Relief",
      desc: "Activate relaxation through breath and movement.\nLower cortisol and balance the nervous system.",
    },
    {
      id: 6,
      icon: <Dumbbell />,
      title: "Physical Strength & Flexibility",
      desc: "Build endurance and tone the body.\nSupport healthy joints and muscles.",
    },
    {
      id: 7,
      icon: <BedDouble />,
      title: "Improved Sleep",
      desc: "Regulate sleep patterns with calming practices.\nWake feeling refreshed and rejuvenated.",
    },
    {
      id: 8,
      icon: <ShieldCheck />,
      title: "Self-Empowerment",
      desc: "Gain confidence through energetic mastery.\nTake control of your health and well-being.",
    },
    {
      id: 9,
      icon: <Users2 />,
      title: "Community Connection",
      desc: "Join a supportive network of like-minded practitioners.\nShare growth and inspiration on your journey.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Key Benefits of This Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This transformational training is designed to elevate your energy, focus, and inner power—supporting your growth at every level: physical, mental, emotional, and spiritual.
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
                <p className="text-sm text-[#4377b2]/80 whitespace-pre-line">
                  {feature.desc}
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
