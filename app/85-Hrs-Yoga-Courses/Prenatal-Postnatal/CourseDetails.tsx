"use client";

import {
  Baby,
  GraduationCap,
  ShieldCheck,
  Smile,
  Users,
  Star,
  Brain,
  Wind,
  BadgeCheck,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Baby />,
      title: "Support Women's Health",
      description:
        "Empower mothers with practices for strength and serenity. Be part of a deeply rewarding teaching path.",
    },
    {
      id: 2,
      icon: <GraduationCap />,
      title: "Gain Niche Teaching Skills",
      description:
        "Stand out by specializing in prenatal/postnatal yoga. Meet growing demand for skilled, sensitive instructors.",
    },
    {
      id: 3,
      icon: <ShieldCheck />,
      title: "Ensure Student Safety",
      description:
        "Confidently modify classes for unique physical needs. Avoid common risks and provide a safe space to move.",
    },
    {
      id: 4,
      icon: <Smile />,
      title: "Build Emotional Intelligence",
      description:
        "Learn how to hold space with presence and compassion. Support emotional well-being through life transitions.",
    },
    {
      id: 5,
      icon: <Users />,
      title: "Serve a Wider Community",
      description:
        "Offer yoga to a diverse group of students in transition. Make your teaching inclusive and nurturing.",
    },
    {
      id: 6,
      icon: <Star />,
      title: "Develop Confidence",
      description:
        "Feel prepared to teach any stage of pregnancy or postpartum. Gain tools, templates, and teaching practice.",
    },
    {
      id: 7,
      icon: <Brain />,
      title: "Improve Anatomy Knowledge",
      description:
        "Understand the female body in pregnancy and recovery. Teach with anatomical awareness and purpose.",
    },
    {
      id: 8,
      icon: <Wind />,
      title: "Teach Holistically",
      description:
        "Blend physical, emotional, and breath-based practices. Offer classes that nourish mind, body, and spirit.",
    },
    {
      id: 9,
      icon: <BadgeCheck />,
      title: "Earn a Trusted Certification",
      description:
        "Receive a respected credential in maternal yoga. Add to your professional teaching resume and CE hours.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Prenatal & Postnatal Yoga Course for Teachers
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course equips yoga teachers with essential skills, compassion, and confidence to guide pregnant and postpartum students through safe, empowering practices.
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
