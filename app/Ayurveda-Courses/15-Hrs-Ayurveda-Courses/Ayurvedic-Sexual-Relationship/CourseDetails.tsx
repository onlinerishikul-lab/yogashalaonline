"use client";

import {
  Heart,
  HandHeart,
  MessageCircleHeart,
  Users2,
  Repeat2,
  Infinity,
  CloudSun,
  Sparkles,
  Eye,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Heart />,
      title: "Improve Emotional Awareness",
      description:
        "Understand your emotional triggers and manage them through Ayurvedic techniques.",
    },
    {
      id: 2,
      icon: <HandHeart />,
      title: "Deepen Emotional & Physical Intimacy",
      description:
        "Create meaningful closeness using sacred rituals and intentional touch.",
    },
    {
      id: 3,
      icon: <MessageCircleHeart />,
      title: "Strengthen Communication",
      description:
        "Learn to speak and listen with clarity, compassion, and presence.",
    },
    {
      id: 4,
      icon: <Users2 />,
      title: "Understand Yourself & Your Partner",
      description:
        "Gain insight into your doshas, love needs, and how they interact.",
    },
    {
      id: 5,
      icon: <Repeat2 />,
      title: "Heal Relationship Patterns",
      description:
        "Break free from cycles of conflict using Ayurvedic psychology and daily practices.",
    },
    {
      id: 6,
      icon: <Infinity />,
      title: "Support Long-Term Connection",
      description:
        "Develop shared routines and wellness habits that build lifelong harmony.",
    },
    {
      id: 7,
      icon: <CloudSun />,
      title: "Reduce Relationship Stress",
      description:
        "Use herbs, breathing, and lifestyle tools to ease emotional tension.",
    },
    {
      id: 8,
      icon: <Sparkles />,
      title: "Build Spiritual Connection",
      description:
        "Connect beyond the physical by aligning energy, intention, and heart.",
    },
    {
      id: 9,
      icon: <Eye />,
      title: "Live in Loving Awareness",
      description:
        "Bring mindfulness into your daily relationship and deepen every interaction.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Ayurvedic Relationship Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course offers a transformative approach to love and partnership using timeless Ayurvedic wisdom to strengthen emotional, physical, and spiritual intimacy.
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
                <p className="text-sm text-[#4377b2]/80">
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
