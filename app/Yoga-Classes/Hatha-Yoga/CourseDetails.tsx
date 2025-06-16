"use client";

import {
  Users,
  Globe,
  Handshake,
  Dumbbell,
  Brain,
  Heart,
  Sun,
  BookOpen,
  Mic,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Mic />,
      title: "Build Strong Teaching Confidence",
      description:
        "Learn to guide others with clarity, compassion, and depth.",
    },
    {
      id: 2,
      icon: <Sun />,
      title: "Enhance Mind-Body Balance",
      description:
        "Align posture, breath, and awareness for holistic well-being.",
    },
    {
      id: 3,
      icon: <Dumbbell />,
      title: "Increased Physical Strength & Flexibility",
      description:
        "Develop a resilient and flexible body through daily practice.",
    },
    {
      id: 4,
      icon: <Brain />,
      title: "Improved Focus & Discipline",
      description:
        "Strengthen your mental clarity and self-discipline with yogic tools.",
    },
    {
      id: 5,
      icon: <Heart />,
      title: "Emotional Regulation & Calmness",
      description:
        "Experience less stress, better emotional balance, and inner peace.",
    },
    {
      id: 6,
      icon: <BookOpen />,
      title: "Authentic Connection to Yoga",
      description:
        "Immerse in traditional practices rooted in Indian yogic wisdom.",
    },
    {
      id: 7,
      icon: <Handshake />,
      title: "Deeper Self-Awareness",
      description:
        "Know yourself through introspective practices and mindful living.",
    },
    {
      id: 8,
      icon: <Users />,
      title: "Community & Support",
      description:
        "Learn alongside like-minded practitioners and lifelong teachers.",
    },
    {
      id: 9,
      icon: <Globe />,
      title: "Global Recognition",
      description:
        "Become a certified teacher eligible to teach worldwide (Yoga Alliance).",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Hatha Yoga Class
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This Class helps you develop a strong foundation in classical Hatha Yoga while building strength, awareness, and teaching confidence.
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
