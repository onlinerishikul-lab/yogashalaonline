"use client";

import {
  HeartPulse,
  UserCog,
  Wind,
  SearchCheck,
  Brain,
  Star,
  ShieldCheck,
  BookOpenCheck,
  BadgeCheck,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <HeartPulse />,
      title: "Specialized Healing Skills",
      description: "Develop techniques to support physical and mental recovery. Enhance client wellbeing.",
    },
    {
      id: 2,
      icon: <UserCog />,
      title: "Personalized Yoga Plans",
      description: "Design tailored sessions addressing unique needs. Maximize therapeutic benefits.",
    },
    {
      id: 3,
      icon: <Wind />,
      title: "Enhanced Breath Control",
      description: "Use advanced pranayama for relaxation and healing. Promote holistic health.",
    },
    {
      id: 4,
      icon: <SearchCheck />,
      title: "Improved Client Assessment",
      description: "Accurately evaluate and monitor progress. Ensure safe practice.",
    },
    {
      id: 5,
      icon: <Brain />,
      title: "Deeper Anatomical Understanding",
      description: "Link anatomy with therapy for effective interventions. Boost confidence in treatment.",
    },
    {
      id: 6,
      icon: <Star />,
      title: "Therapeutic Teaching Confidence",
      description: "Lead sessions with clarity and compassion. Adapt to individual client needs.",
    },
    {
      id: 7,
      icon: <ShieldCheck />,
      title: "Ethical Practice",
      description: "Maintain professional standards and client trust. Commit to safety and integrity.",
    },
    {
      id: 8,
      icon: <BookOpenCheck />,
      title: "Case-Based Learning",
      description: "Apply knowledge practically through real-life scenarios. Build practical expertise.",
    },
    {
      id: 9,
      icon: <BadgeCheck />,
      title: "Advanced Certification",
      description: "Receive recognized certification to advance your career. Open doors to specialized yoga therapy roles.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Advanced Yoga Therapy Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This advanced course empowers yoga practitioners with therapeutic tools, deep knowledge, and practical applications for healing-focused sessions.
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
