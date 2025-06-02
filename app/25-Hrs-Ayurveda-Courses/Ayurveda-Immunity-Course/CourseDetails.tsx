"use client";

import {
  ShieldCheck,
  CloudSun,
  Flame,
  Zap,
  Leaf,
  Brain,
  Bed,
  CalendarCheck,
  LifeBuoy,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <ShieldCheck />,
      title: "Stronger Immunity Naturally",
      description:
        "Build lasting immune strength through natural Ayurvedic wisdom.",
    },
    {
      id: 2,
      icon: <CloudSun />,
      title: "Fewer Seasonal Illnesses",
      description:
        "Prevent colds, flu, and allergies with seasonal care tips.",
    },
    {
      id: 3,
      icon: <Flame />,
      title: "Healthier Digestion = Stronger Immunity",
      description:
        "Balance Agni (digestive fire) to support overall vitality.",
    },
    {
      id: 4,
      icon: <Zap />,
      title: "More Energy & Clarity",
      description:
        "Feel energized and mentally clear by removing toxins and fatigue.",
    },
    {
      id: 5,
      icon: <Leaf />,
      title: "Safe Herbal Support",
      description:
        "Use proven herbs to support immunity for all ages.",
    },
    {
      id: 6,
      icon: <Brain />,
      title: "Stress Reduction",
      description:
        "Calm the nervous system, which helps protect the immune system.",
    },
    {
      id: 7,
      icon: <Bed />,
      title: "Better Sleep & Recovery",
      description:
        "Support restorative sleep, essential for immune renewal.",
    },
    {
      id: 8,
      icon: <CalendarCheck />,
      title: "Daily Holistic Habits",
      description:
        "Incorporate wellness routines that easily fit into your life.",
    },
    {
      id: 9,
      icon: <LifeBuoy />,
      title: "Lifelong Health Awareness",
      description:
        "Gain tools you can use for yourself and others for years to come.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Ayurveda Immunity Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          Discover how to naturally boost your immune system, prevent illness, and develop lifelong wellness habits with ancient Ayurvedic principles.
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
