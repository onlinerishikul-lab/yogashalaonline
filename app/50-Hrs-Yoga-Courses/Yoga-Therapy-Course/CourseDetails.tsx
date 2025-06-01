"use client";

import {
  HeartPulse,
  BookOpenCheck,
  Award,
  RefreshCcw,
  ThumbsUp,
  Brain,
  Stethoscope,
  ShieldCheck,
  Sparkle,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <HeartPulse />,
      title: "Empower Healing",
      description:
        "Use yoga to support recovery and wellness. Help students manage conditions and regain strength.",
    },
    {
      id: 2,
      icon: <BookOpenCheck />,
      title: "Specialized Knowledge",
      description:
        "Gain deep insights into body systems and dysfunctions. Bridge traditional yoga and modern therapeutic needs.",
    },
    {
      id: 3,
      icon: <Award />,
      title: "Professional Recognition",
      description:
        "Earn credentials to teach in therapeutic settings. Open new paths in clinics, hospitals, and rehab centers.",
    },
    {
      id: 4,
      icon: <RefreshCcw />,
      title: "Adaptability",
      description:
        "Learn to modify yoga for different ages and abilities. Serve diverse populations with confidence.",
    },
    {
      id: 5,
      icon: <ThumbsUp />,
      title: "Build Confidence",
      description:
        "Lead private and group sessions with precision and care. Feel assured in your therapeutic teaching role.",
    },
    {
      id: 6,
      icon: <Brain />,
      title: "Mind-Body Integration",
      description:
        "Support mental wellness through physical practices. Teach students to manage emotions through yoga.",
    },
    {
      id: 7,
      icon: <Stethoscope />,
      title: "Support Chronic Conditions",
      description:
        "Offer consistent relief to those living with long-term illness. Help students live fuller, healthier lives.",
    },
    {
      id: 8,
      icon: <ShieldCheck />,
      title: "Ethical & Safe Practice",
      description:
        "Understand your scope and responsibilities. Maintain a respectful, supportive environment.",
    },
    {
      id: 9,
      icon: <Sparkle />,
      title: "Personal Growth",
      description:
        "Deepen your own self-care and awareness. Transform your yoga into a healing path for yourself and others.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of Yoga Therapy Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course equips you to guide others through healing with evidence-based yoga practices tailored to modern wellness needs.
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
                  {feature.description}
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
