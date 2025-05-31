"use client";

import {
  Couch,
  ShieldCheck,
  SlidersHorizontal,
  Wind,
  UserCheck,
  Brain,
  Target,
  BookOpenCheck,
  HeartPulse,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Couch />,
      title: "Posture & Comfort",
      description:
        "Learn how to guide proper seated posture for longer, pain-free meditation. Comfort supports deeper stillness and focus.",
    },
    {
      id: 2,
      icon: <ShieldCheck />,
      title: "Safe Mental Space",
      description:
        "Understand how to create a mentally safe and grounding environment. Support students through emotional release and inner work.",
    },
    {
      id: 3,
      icon: <SlidersHorizontal />,
      title: "Practice Adaptations",
      description:
        "Adjust meditation styles to suit beginners, busy minds, or emotional needs. Offer flexible options like guided, silent, or breath-based techniques.",
    },
    {
      id: 4,
      icon: <Wind />,
      title: "Breath & Awareness",
      description:
        "Use the breath as a powerful anchor to the present moment. Teach how breathwork enhances awareness and calm.",
    },
    {
      id: 5,
      icon: <UserCheck />,
      title: "Teaching Confidence",
      description:
        "Build the skills to lead meditations clearly and calmly. Guide others with presence, compassion, and clarity.",
    },
    {
      id: 6,
      icon: <Brain />,
      title: "Mind Science Basics",
      description:
        "Understand how the mind works and how meditation influences thoughts and emotions. Teach from a place of insight and inner knowledge.",
    },
    {
      id: 7,
      icon: <Target />,
      title: "Stillness & Inner Focus",
      description:
        "Emphasize stillness as a path to inner peace and mental clarity. Help students cultivate self-awareness and deep presence.",
    },
    {
      id: 8,
      icon: <BookOpenCheck />,
      title: "Practical Session Planning",
      description:
        "Design real-world meditation classes and personal routines. Learn scripts, pacing, and how to support your students' journey.",
    },
    {
      id: 9,
      icon: <HeartPulse />,
      title: "Emotional Balance",
      description:
        "Support emotional regulation and mental well-being through regular meditation. Teach practices that restore balance and reduce stress.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          What You’ll Learn in the Meditation Teacher Training
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course helps you develop the clarity, presence, and emotional intelligence to guide others in meaningful meditation practices.
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
