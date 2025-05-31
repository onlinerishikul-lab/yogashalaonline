"use client";

import {
  Bed,
  BrainCog,
  CloudSun,
  Heart,
  ScanEye,
  Power,
  SmilePlus,
  UserCheck,
  Sparkles,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <CloudSun />,
      title: "Deep Relaxation",
      desc: "Encourages physical, mental, and emotional rest.\nFeel rejuvenated after just one session.",
    },
    {
      id: 2,
      icon: <Bed />,
      title: "Better Sleep",
      desc: "Improves sleep quality and eases insomnia naturally.\nRegular practice supports long-term restfulness.",
    },
    {
      id: 3,
      icon: <Heart />,
      title: "Stress & Anxiety Relief",
      desc: "Releases built-up mental tension and emotional overload.\nGuides the mind to peace and stillness.",
    },
    {
      id: 4,
      icon: <BrainCog />,
      title: "Improved Focus",
      desc: "Clears mental fog and improves clarity.\nBoosts memory, attention, and productivity.",
    },
    {
      id: 5,
      icon: <ScanEye />,
      title: "Emotional Healing",
      desc: "Allows repressed emotions to surface and release.\nSupports gentle inner healing and awareness.",
    },
    {
      id: 6,
      icon: <Power />,
      title: "Nervous System Reset",
      desc: "Activates the parasympathetic system for rest.\nLowers cortisol and balances hormones.",
    },
    {
      id: 7,
      icon: <SmilePlus />,
      title: "Inner Connection",
      desc: "Reconnects you to your inner self and intuition.\nSupports mindfulness and spiritual growth.",
    },
    {
      id: 8,
      icon: <UserCheck />,
      title: "Accessible for All",
      desc: "No movement required – suitable for all ages.\nSafe for injuries, fatigue, or anxiety.",
    },
    {
      id: 9,
      icon: <Sparkles />,
      title: "Self-Awareness & Growth",
      desc: "Deepens self-reflection and personal transformation.\nYoga Nidra is a tool for healing and awakening.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          9 Key Benefits of Yoga Nidra
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course helps you master Yoga Nidra techniques to unlock deep relaxation, emotional healing, and inner growth—for yourself and your students.
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
