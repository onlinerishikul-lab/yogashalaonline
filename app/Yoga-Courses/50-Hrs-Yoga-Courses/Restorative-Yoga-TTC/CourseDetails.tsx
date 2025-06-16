"use client";

import {
  LayoutDashboard,
  ShieldCheck,
  SlidersHorizontal,
  Wind,
  UserCheck,
  Brain,
  HandHeart,
  BookOpenCheck,
  Sparkles,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <LayoutDashboard />,
      title: "Supportive Posture & Alignment",
      description:
        "Learn how to position the body with props for maximum comfort and relaxation. Correct alignment promotes deep rest and healing.",
    },
    {
      id: 2,
      icon: <ShieldCheck />,
      title: "Injury Prevention",
      description:
        "Understand how gentle movement and support reduce risk of strain or discomfort. Teach safely, especially for those recovering or with limitations.",
    },
    {
      id: 3,
      icon: <SlidersHorizontal />,
      title: "Pose Adaptations",
      description:
        "Customize poses for different needs, ages, and body types. Make restorative yoga accessible and inclusive for all.",
    },
    {
      id: 4,
      icon: <Wind />,
      title: "Breath & Stillness",
      description:
        "Use breath awareness to calm the mind and body deeply. Stillness and breathwork are the heart of restorative yoga.",
    },
    {
      id: 5,
      icon: <UserCheck />,
      title: "Teaching with Confidence",
      description:
        "Gain the skills and presence to lead peaceful, grounding sessions. Hold space with assurance and empathy.",
    },
    {
      id: 6,
      icon: <Brain />,
      title: "Understanding the Nervous System",
      description:
        "Learn how restorative yoga soothes the nervous system and reduces stress. Teach practices that activate rest and repair.",
    },
    {
      id: 7,
      icon: <HandHeart />,
      title: "Calm, Safe Movements",
      description:
        "Focus on slow, intentional movements and long holds. Create an environment where students feel safe and nurtured.",
    },
    {
      id: 8,
      icon: <BookOpenCheck />,
      title: "Practical Teaching Skills",
      description:
        "Apply what you learn to real-world sessions and private clients. Build your class structure with hands-on practice.",
    },
    {
      id: 9,
      icon: <Sparkles />,
      title: "Healing Through Stillness",
      description:
        "Master the art of deep rest and inner healing through still postures. Support emotional release and balance with mindful teaching.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          What You’ll Learn in the Restorative Yoga Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course helps you create deeply healing experiences through restorative yoga—
          guiding students into stillness, safety, and inner peace.
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
