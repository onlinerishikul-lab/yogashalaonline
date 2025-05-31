"use client";

import {
  HeartPulse,
  ShieldCheck,
  StretchHorizontal,
  Brain,
  Star,
  Move3D,
  Shield,
  BookOpenCheck,
  Ruler,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <HeartPulse />,
      title: "Boost circulation and energy gently",
    },
    {
      id: 2,
      icon: <ShieldCheck />,
      title: "Practice yoga safely with guided support",
    },
    {
      id: 3,
      icon: <StretchHorizontal />,
      title: "Adapt poses for all ages and abilities",
    },
    {
      id: 4,
      icon: <Brain />,
      title: "Calm the mind and reduce stress",
    },
    {
      id: 5,
      icon: <Star />,
      title: "Gain confidence to teach chair yoga",
    },
    {
      id: 6,
      icon: <Move3D />,
      title: "Understand movement without strain",
    },
    {
      id: 7,
      icon: <Shield />,
      title: "Support students with limited mobility",
    },
    {
      id: 8,
      icon: <BookOpenCheck />,
      title: "Apply simple anatomy in real classes",
    },
    {
      id: 9,
      icon: <Ruler />,
      title: "Learn safe posture and alignment tips",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Why Join the Chair Yoga TTC?
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course helps you teach and practice chair yoga with ease, confidence, and care—perfect for seniors, office workers, and anyone seeking a gentler approach.
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
                  Learn practical tools and thoughtful techniques to make yoga truly accessible for everyone.
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
