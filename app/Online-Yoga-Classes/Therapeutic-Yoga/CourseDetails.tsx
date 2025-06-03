"use client";

import {
  Heart,
  Smile,
  Users,
  HandHeart,
  Sliders,
  Eye,
  MoveDiagonal,
  UserCheck,
  Hands,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <HandHeart />,
      title: "Support Healing",
      description:
        "Help students manage pain, fatigue, and stress holistically.",
    },
    {
      id: 2,
      icon: <Smile />,
      title: "Emotional Balance",
      description:
        "Teach yoga tools for calming the mind and processing emotions.",
    },
    {
      id: 3,
      icon: <UserCheck />,
      title: "Boost Teaching Confidence",
      description:
        "Feel prepared to teach sensitive, adaptive, and gentle classes.",
    },
    {
      id: 4,
      icon: <Users />,
      title: "Wider Client Reach",
      description:
        "Work with diverse populations, including seniors and recovery groups.",
    },
    {
      id: 5,
      icon: <Sliders />,
      title: "Reduce Burnout",
      description:
        "Balance your energy with slower, grounding practices.",
    },
    {
      id: 6,
      icon: <Eye />,
      title: "Strengthen Mind-Body Connection",
      description:
        "Guide students toward greater awareness and self-trust.",
    },
    {
      id: 7,
      icon: <MoveDiagonal />,
      title: "Safe Movement Education",
      description:
        "Promote injury prevention through mindful, aligned practice.",
    },
    {
      id: 8,
      icon: <Heart />,
      title: "Deepen Personal Practice",
      description:
        "Experience yoga’s therapeutic benefits in your own life.",
    },
    {
      id: 9,
      icon: <Hands />,
      title: "Be a Healing Presence",
      description:
        "Hold space for others with compassion, empathy, and confidence.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Therapeutic Yoga Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course empowers you to use yoga as a tool for healing, empathy, and deeper connection—both for yourself and those you teach.
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
