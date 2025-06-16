"use client";

import {
  RefreshCw,
  ShieldCheck,
  Zap,
  Smile,
  AlignVerticalJustifyCenter,
  HeartHandshake,
  Eye,
  BookOpenCheck,
  Sparkles,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <RefreshCw />,
      title: "Faster Recovery Post-Birth",
      description:
        "Gentle movement accelerates healing and energy restoration.",
    },
    {
      id: 2,
      icon: <ShieldCheck />,
      title: "Rebuild Core & Stability",
      description:
        "Safely tone abdominal and pelvic muscles for long-term strength.",
    },
    {
      id: 3,
      icon: <Zap />,
      title: "Manage Stress & Fatigue",
      description:
        "Relaxation and breathwork combat overwhelm and sleeplessness.",
    },
    {
      id: 4,
      icon: <Smile />,
      title: "Improved Mood & Hormonal Balance",
      description:
        "Support mental health with mindful practices and breath.",
    },
    {
      id: 5,
      icon: <AlignVerticalJustifyCenter />,
      title: "Better Posture & Alignment",
      description:
        "Relieve strain from carrying, nursing, and baby care.",
    },
    {
      id: 6,
      icon: <HeartHandshake />,
      title: "Bonding with Baby",
      description:
        "Optional mom-and-baby practices enhance connection and joy.",
    },
    {
      id: 7,
      icon: <Eye />,
      title: "Increased Self-Awareness",
      description:
        "Reconnect with your body and emotions after pregnancy.",
    },
    {
      id: 8,
      icon: <BookOpenCheck />,
      title: "Supportive Teaching Framework",
      description:
        "Gain tools to guide and support new mothers effectively.",
    },
    {
      id: 9,
      icon: <Sparkles />,
      title: "Long-Term Wellness Habits",
      description:
        "Establish a healing routine that supports motherhood and beyond.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Postnatal Yoga Class
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This Class nurtures the well-being of new mothers, helping them restore strength, balance, and emotional connection through mindful postnatal yoga practices.
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
