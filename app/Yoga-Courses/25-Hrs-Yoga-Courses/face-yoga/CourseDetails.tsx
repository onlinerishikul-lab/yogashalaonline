"use client";

import {
  Smile,
  ShieldCheck,
  SlidersHorizontal,
  Wind,
  UserCheck,
  Activity,
  HeartHandshake,
  BookOpenCheck,
  Sparkles,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Smile />,
      title: "Facial Alignment & Posture",
      description:
        "Learn how correct facial posture improves symmetry, tone, and youthful appearance. Support natural lifting through mindful muscle engagement.",
    },
    {
      id: 2,
      icon: <ShieldCheck />,
      title: "Injury-Free Practice",
      description:
        "Understand safe techniques to avoid strain or overuse in delicate facial muscles. Protect skin and muscles with gentle, effective movements.",
    },
    {
      id: 3,
      icon: <SlidersHorizontal />,
      title: "Custom Modifications",
      description:
        "Adapt face yoga routines for different skin types, ages, and needs. Make your classes inclusive, accessible, and personalized.",
    },
    {
      id: 4,
      icon: <Wind />,
      title: "Breath & Awareness",
      description:
        "Connect your breath with facial movements for deeper relaxation and glow. Enhance results through mindful breathing and presence.",
    },
    {
      id: 5,
      icon: <UserCheck />,
      title: "Teaching Confidence",
      description:
        "Develop the skills to lead face yoga sessions with clarity and ease. Build trust and guide others through each step with assurance.",
    },
    {
      id: 6,
      icon: <Activity />,
      title: "Muscle Knowledge",
      description:
        "Understand the key facial muscles involved in toning, lifting, and relaxing. Use anatomy basics to target the right areas effectively.",
    },
    {
      id: 7,
      icon: <HeartHandshake />,
      title: "Safe & Gentle Movements",
      description:
        "Learn soft, controlled techniques that protect the skin and avoid tension. Focus on comfort while achieving visible results.",
    },
    {
      id: 8,
      icon: <BookOpenCheck />,
      title: "Real-World Application",
      description:
        "Apply your training to create routines for clients, online classes, or self-practice. Turn knowledge into confident, real-world teaching.",
    },
    {
      id: 9,
      icon: <Sparkles />,
      title: "Lift & Glow Techniques",
      description:
        "Master techniques that naturally lift, tone, and enhance facial radiance. Support anti-aging and inner glow through daily practice.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Face Yoga Anatomy Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course is designed to transform your face yoga journey with deep anatomical
          understanding, supporting both personal growth and safe teaching.
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
