"use client";

import {
  Utensils,
  Bed,
  BatteryFull,
  ShieldCheck,
  Eye,
  CircleDashed,
  Sparkles,
  HandHeart,
  Infinity,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Utensils />,
      title: "Better Digestion",
      description: "Support healthy metabolism and reduce bloating or sluggishness.",
    },
    {
      id: 2,
      icon: <Bed />,
      title: "Improved Sleep",
      description: "Restore natural sleep rhythms through Ayurvedic routines.",
    },
    {
      id: 3,
      icon: <BatteryFull />,
      title: "More Energy",
      description: "Feel lighter and more energized with balanced food and lifestyle choices.",
    },
    {
      id: 4,
      icon: <ShieldCheck />,
      title: "Stronger Immunity",
      description: "Boost your body’s defense system through herbs and daily habits.",
    },
    {
      id: 5,
      icon: <Eye />,
      title: "Mental Clarity",
      description: "Experience a calmer, clearer mind by balancing your Dosha.",
    },
    {
      id: 6,
      icon: <CircleDashed />,
      title: "Hormonal Balance",
      description: "Regulate cycles and stress with simple Ayurvedic practices.",
    },
    {
      id: 7,
      icon: <Sparkles />,
      title: "Radiant Skin & Hair",
      description: "Glow naturally with inner detox and herbal beauty care.",
    },
    {
      id: 8,
      icon: <HandHeart />,
      title: "Self-Healing Skills",
      description: "Gain confidence in caring for minor imbalances naturally.",
    },
    {
      id: 9,
      icon: <Infinity />,
      title: "Holistic Wellness",
      description: "Live a more harmonious life with mind-body-spirit alignment.",
    },
  ];

  return (
    <section className="bg-[#fefefe] text-[#7b3f00] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Ayurvedic Foundational Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#7b3f00]/90">
          Establish your journey in Ayurveda with transformative wellness habits and ancient healing wisdom.
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
