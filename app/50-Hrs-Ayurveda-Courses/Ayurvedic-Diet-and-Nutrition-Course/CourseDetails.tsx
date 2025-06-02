"use client";
"use client";

import {
  Utensils,
  Scale,
  BatteryFull,
  Eye,
  Bed,
  ShieldCheck,
  Sparkles,
  CircleDashed,
  Infinity,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Utensils />,
      title: "Improved Digestion",
      description: "Enhance metabolism and reduce gas, bloating, and heaviness.",
    },
    {
      id: 2,
      icon: <Scale />,
      title: "Balanced Weight",
      description: "Reach and maintain your natural body weight without dieting.",
    },
    {
      id: 3,
      icon: <BatteryFull />,
      title: "More Energy",
      description: "Feel energized and lighter through dosha-aligned meals.",
    },
    {
      id: 4,
      icon: <Eye />,
      title: "Mental Clarity",
      description: "Reduce brain fog and mood swings by feeding your mind right.",
    },
    {
      id: 5,
      icon: <Bed />,
      title: "Better Sleep",
      description: "Support deep rest with grounding and calming nutrition.",
    },
    {
      id: 6,
      icon: <ShieldCheck />,
      title: "Stronger Immunity",
      description: "Build resilience with healing herbs and digestive strength.",
    },
    {
      id: 7,
      icon: <Sparkles />,
      title: "Glowing Skin",
      description: "Experience inner beauty reflecting through clear, radiant skin.",
    },
    {
      id: 8,
      icon: <CircleDashed />,
      title: "Hormonal Balance",
      description: "Use food as therapy to support menstruation and stress management.",
    },
    {
      id: 9,
      icon: <Infinity />,
      title: "Lifelong Nourishment",
      description: "Develop intuitive, personalized eating for lifelong well-being.",
    },
  ];

  return (
    <section className="bg-[#fefefe] text-[#7b3f00] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Ayurvedic Diet and Nutrition Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#7b3f00]/90">
          Discover how food becomes medicine when aligned with your body, mind, and seasonal needs.
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

import {
  Utensils,
  Scales,
  BatteryFull,
  Eye,
  Bed,
  ShieldCheck,
  Sparkles,
  CircleDashed,
  Infinity,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Utensils />,
      title: "Improved Digestion",
      description: "Enhance metabolism and reduce gas, bloating, and heaviness.",
    },
    {
      id: 2,
      icon: <Scales />,
      title: "Balanced Weight",
      description: "Reach and maintain your natural body weight without dieting.",
    },
    {
      id: 3,
      icon: <BatteryFull />,
      title: "More Energy",
      description: "Feel energized and lighter through dosha-aligned meals.",
    },
    {
      id: 4,
      icon: <Eye />,
      title: "Mental Clarity",
      description: "Reduce brain fog and mood swings by feeding your mind right.",
    },
    {
      id: 5,
      icon: <Bed />,
      title: "Better Sleep",
      description: "Support deep rest with grounding and calming nutrition.",
    },
    {
      id: 6,
      icon: <ShieldCheck />,
      title: "Stronger Immunity",
      description: "Build resilience with healing herbs and digestive strength.",
    },
    {
      id: 7,
      icon: <Sparkles />,
      title: "Glowing Skin",
      description: "Experience inner beauty reflecting through clear, radiant skin.",
    },
    {
      id: 8,
      icon: <CircleDashed />,
      title: "Hormonal Balance",
      description: "Use food as therapy to support menstruation and stress management.",
    },
    {
      id: 9,
      icon: <Infinity />,
      title: "Lifelong Nourishment",
      description: "Develop intuitive, personalized eating for lifelong well-being.",
    },
  ];

  return (
    <section className="bg-[#fefefe] text-[#7b3f00] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Ayurvedic Diet and Nutrition Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#7b3f00]/90">
          Discover how food becomes medicine when aligned with your body, mind, and seasonal needs.
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
