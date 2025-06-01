"use client";

import {
  Award,
  BookOpenCheck,
  Wind,
  HeartPulse,
  BarChart3,
  Clock,
  Users,
  CheckCircle2,
  HandHeart,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Award />,
      title: "Expert-Level Teaching Skills",
      description:
        "Lead advanced yoga classes with confidence. Attract a wide range of students.",
    },
    {
      id: 2,
      icon: <BookOpenCheck />,
      title: "Comprehensive Yoga Knowledge",
      description:
        "Gain deep insights into multiple yoga styles. Strengthen your foundation.",
    },
    {
      id: 3,
      icon: <Wind />,
      title: "Enhanced Breath & Mind Control",
      description:
        "Utilize advanced pranayama and meditation for wellbeing. Improve focus and relaxation.",
    },
    {
      id: 4,
      icon: <HeartPulse />,
      title: "Therapeutic Yoga Skills",
      description:
        "Support students with injuries or health challenges. Adapt practice safely.",
    },
    {
      id: 5,
      icon: <BarChart3 />,
      title: "Personal Practice Growth",
      description:
        "Elevate your own yoga journey to new heights. Explore advanced techniques.",
    },
    {
      id: 6,
      icon: <Clock />,
      title: "Flexible Learning Options",
      description:
        "Study at your own pace with expert support. Balance training with life commitments.",
    },
    {
      id: 7,
      icon: <Users />,
      title: "Community & Network",
      description:
        "Connect with global yogis and teachers. Share knowledge and grow.",
    },
    {
      id: 8,
      icon: <CheckCircle2 />,
      title: "Professional Certification",
      description:
        "Earn Yoga Alliance-recognized credentials. Advance your yoga career worldwide.",
    },
    {
      id: 9,
      icon: <HandHeart />,
      title: "Ethical & Mindful Teaching",
      description:
        "Adopt yogic values in your teaching approach. Build trust and respect.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Multi Style Yoga TTC
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This advanced-level training equips you with expert tools, deeper practice, and a supportive community to become a confident and impactful yoga teacher.
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
