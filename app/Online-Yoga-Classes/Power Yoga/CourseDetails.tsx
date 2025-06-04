"use client";

import {
  Dumbbell,
  HeartPulse,
  Focus,
  Flame,
  StretchHorizontal,
  Wind,
  Mic,
  Infinity,
  Repeat,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Dumbbell />,
      title: "Build Physical Strength",
      description: "Develop lean muscle and endurance through active flows.",
    },
    {
      id: 2,
      icon: <HeartPulse />,
      title: "Improve Cardiovascular Health",
      description: "Boost circulation and stamina with aerobic sequences.",
    },
    {
      id: 3,
      icon: <Focus />,
      title: "Enhance Mental Focus",
      description: "Sharpen your awareness under physical challenge.",
    },
    {
      id: 4,
      icon: <Flame />,
      title: "Burn Calories & Fat",
      description: "Increase metabolism through high-energy sessions.",
    },
    {
      id: 5,
      icon: <StretchHorizontal />,
      title: "Boost Flexibility & Mobility",
      description: "Expand your range of motion while building power.",
    },
    {
      id: 6,
      icon: <Wind />,
      title: "Stress Relief Through Movement",
      description: "Release tension and mental fatigue with dynamic flow.",
    },
    {
      id: 7,
      icon: <Mic />,
      title: "Confidence in Teaching",
      description: "Learn to lead energizing classes for any group.",
    },
    {
      id: 8,
      icon: <Infinity />,
      title: "Connect Mind & Body",
      description: "Align physical motion with inner awareness and breath.",
    },
    {
      id: 9,
      icon: <Repeat />,
      title: "Build a Strong Daily Practice",
      description: "Create a sustainable, powerful personal routine.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Power Yoga Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This Power Yoga program combines dynamic movement and mindful breathwork to help you build strength, endurance, and inner clarity.
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
