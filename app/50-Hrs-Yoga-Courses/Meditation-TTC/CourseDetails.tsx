"use client";

import {
  HeartPulse,
  Brain,
  Smile,
  Star,
  Moon,
  Zap,
  Heart,
  Repeat,
  Activity,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <HeartPulse />,
      title: "Reduces stress and promotes relaxation",
    },
    {
      id: 2,
      icon: <Brain />,
      title: "Improves focus and mental clarity",
    },
    {
      id: 3,
      icon: <Smile />,
      title: "Enhances emotional well-being and mood",
    },
    {
      id: 4,
      icon: <Star />,
      title: "Boosts self-awareness and mindfulness",
    },
    {
      id: 5,
      icon: <Moon />,
      title: "Supports better sleep quality",
    },
    {
      id: 6,
      icon: <Zap />,
      title: "Lowers anxiety and helps manage depression",
    },
    {
      id: 7,
      icon: <Heart />,
      title: "Increases patience and compassion",
    },
    {
      id: 8,
      icon: <Repeat />,
      title: "Strengthens the mind-body connection",
    },
    {
      id: 9,
      icon: <Activity />,
      title:
        "Enhances overall physical health by reducing blood pressure and improving immune function",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Meditation & Yoga Practice
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          Experience holistic wellness as you develop mindfulness, emotional
          balance, and physical health through consistent practice and guidance.
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
                  Learn practical tools and techniques to nurture your mind and body for lasting wellness.
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
