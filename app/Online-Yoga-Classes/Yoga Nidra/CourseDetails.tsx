"use client";

import {
  Lotus,
  Bed,
  Focus,
  Heart,
  BatteryCharging,
  Accessibility,
  Sparkles,
  Mic,
  RefreshCw,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Lotus />,
      title: "Deep Stress Relief",
      description: "Release physical and emotional tension with profound relaxation.",
    },
    {
      id: 2,
      icon: <Bed />,
      title: "Better Sleep",
      description: "Promote deep rest and reset circadian rhythms naturally.",
    },
    {
      id: 3,
      icon: <Focus />,
      title: "Enhance Focus & Awareness",
      description: "Improve mental clarity through deep conscious rest.",
    },
    {
      id: 4,
      icon: <Heart />,
      title: "Support Emotional Healing",
      description: "Help process unresolved emotions in a safe, quiet space.",
    },
    {
      id: 5,
      icon: <BatteryCharging />,
      title: "Boost Energy & Vitality",
      description: "Restore your nervous system and recharge your energy reserves.",
    },
    {
      id: 6,
      icon: <Accessibility />,
      title: "Accessible to Everyone",
      description: "Can be practiced by anyone, regardless of age or mobility.",
    },
    {
      id: 7,
      icon: <Sparkles />,
      title: "Spiritual Exploration",
      description: "Facilitates inner connection, insight, and Sankalpa realization.",
    },
    {
      id: 8,
      icon: <Mic />,
      title: "Tools for Teachers & Healers",
      description: "Expand your offerings with a powerful new modality.",
    },
    {
      id: 9,
      icon: <RefreshCw />,
      title: "Personal Growth Journey",
      description: "Experience transformation in your own life through regular practice.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Yoga Nidra Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This Yoga Nidra course offers deep relaxation, healing, and rejuvenation to help you and your students access the deepest layers of awareness and rest.
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
