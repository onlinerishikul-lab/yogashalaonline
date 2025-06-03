"use client";

import {
  CloudMoon,
  Target,
  SmilePlus,
  WandSparkles,
  Bed,
  Infinity,
  Mic,
  Repeat,
  HelpingHand,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <CloudMoon />,
      title: "Deep Inner Calm",
      description:
        "Experience sustained peace, clarity, and a quieter mind.",
    },
    {
      id: 2,
      icon: <Target />,
      title: "Better Focus & Awareness",
      description:
        "Increase concentration and mental presence in daily life.",
    },
    {
      id: 3,
      icon: <SmilePlus />,
      title: "Stress Relief & Emotional Balance",
      description:
        "Meditation helps release tension and restore emotional harmony.",
    },
    {
      id: 4,
      icon: <WandSparkles />,
      title: "Boosted Creativity & Intuition",
      description:
        "Enhance your inner clarity, vision, and decision-making.",
    },
    {
      id: 5,
      icon: <Bed />,
      title: "Improved Sleep Quality",
      description:
        "Settle the nervous system and reduce nighttime anxiety.",
    },
    {
      id: 6,
      icon: <Infinity />,
      title: "Stronger Spiritual Connection",
      description:
        "Connect with inner truth and deeper consciousness.",
    },
    {
      id: 7,
      icon: <Mic />,
      title: "Empowered Teaching Ability",
      description:
        "Learn to share meditation confidently and effectively.",
    },
    {
      id: 8,
      icon: <Repeat />,
      title: "Lifelong Mindfulness Habits",
      description:
        "Build consistent practices that transform how you live.",
    },
    {
      id: 9,
      icon: <HelpingHand />,
      title: "Service to Others",
      description:
        "Help others find peace, healing, and self-awareness through your guidance.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Meditation Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course offers deep meditative tools that support personal clarity, calmness, and your ability to guide others toward a more peaceful life.
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
