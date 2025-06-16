"use client";

import {
  Sparkle,
  Eye,
  HeartPulse,
  SunMoon,
  Leaf,
  Dumbbell,
  Moon,
  Flame,
  Users,
} from "lucide-react";

const CourseDetails = () => {
  const benefits = [
    {
      id: 1,
      icon: <Sparkle />,
      title: "Energy Awakening",
      description:
        "Activate dormant energy centers for vitality.\nExperience heightened awareness and creativity.",
    },
    {
      id: 2,
      icon: <Eye />,
      title: "Mental Clarity",
      description:
        "Clear mental fog and sharpen focus.\nImprove decision-making and mindfulness.",
    },
    {
      id: 3,
      icon: <HeartPulse />,
      title: "Emotional Balance",
      description:
        "Release stored emotions and reduce anxiety.\nCultivate calmness and emotional resilience.",
    },
    {
      id: 4,
      icon: <SunMoon />,
      title: "Spiritual Growth",
      description:
        "Deepen connection to your higher self.\nExperience expanded consciousness and peace.",
    },
    {
      id: 5,
      icon: <Leaf />,
      title: "Stress Relief",
      description:
        "Activate relaxation through breath and movement.\nLower cortisol and balance the nervous system.",
    },
    {
      id: 6,
      icon: <Dumbbell />,
      title: "Strength & Flexibility",
      description:
        "Build endurance and tone the body.\nSupport healthy joints and muscles.",
    },
    {
      id: 7,
      icon: <Moon />,
      title: "Improved Sleep",
      description:
        "Regulate sleep patterns with calming practices.\nWake feeling refreshed and rejuvenated.",
    },
    {
      id: 8,
      icon: <Flame />,
      title: "Self-Empowerment",
      description:
        "Gain confidence through energetic mastery.\nTake control of your health and well-being.",
    },
    {
      id: 9,
      icon: <Users />,
      title: "Community Connection",
      description:
        "Join a supportive network of like-minded practitioners.\nShare growth and inspiration on your journey.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          What You’ll Learn in the Kundalini Yoga Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          Discover the transformational power of meditation — physically, mentally, emotionally, and spiritually.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-2xl text-[#4377b2] mt-1 shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">
                  {item.id}. {item.title}
                </h3>
                <p className="text-sm text-[#4377b2]/80 whitespace-pre-line">
                  {item.description}
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
