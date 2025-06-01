"use client";

import {
  Dumbbell,
  Wind,
  ShieldCheck,
  Mic,
  Brain,
  Clock,
  BookOpenCheck,
  Users,
  BadgeCheck,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Dumbbell />,
      title: "Build Strength & Flexibility",
      description:
        "Improve your body’s endurance and range of motion. Feel more balanced and healthy.",
    },
    {
      id: 2,
      icon: <Wind />,
      title: "Deepen Breath Awareness",
      description:
        "Use pranayama to improve energy and calm your mind. Support mental clarity and focus.",
    },
    {
      id: 3,
      icon: <ShieldCheck />,
      title: "Learn Safe Alignment",
      description:
        "Practice and teach poses that prevent injury. Promote longevity in yoga practice.",
    },
    {
      id: 4,
      icon: <Mic />,
      title: "Develop Teaching Confidence",
      description:
        "Lead classes smoothly with clear guidance. Inspire students with your knowledge.",
    },
    {
      id: 5,
      icon: <Brain />,
      title: "Balanced Mind-Body Practice",
      description:
        "Combine physical postures with meditation for wellness. Achieve harmony within.",
    },
    {
      id: 6,
      icon: <Clock />,
      title: "Flexible Learning Schedule",
      description:
        "Study online at your own pace. Fit yoga training into your busy life.",
    },
    {
      id: 7,
      icon: <BookOpenCheck />,
      title: "Comprehensive Yoga Education",
      description:
        "Gain knowledge of poses, breathing, and philosophy. Become a well-rounded yogi.",
    },
    {
      id: 8,
      icon: <Users />,
      title: "Community Support",
      description:
        "Connect with fellow students and teachers. Grow your practice in a supportive space.",
    },
    {
      id: 9,
      icon: <BadgeCheck />,
      title: "Yoga Alliance Certification",
      description:
        "Earn a recognized certificate for teaching worldwide. Expand your career opportunities.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
  Hatha Yoga TTC
</h2>
<p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
  This training is designed to strengthen your foundation in traditional Hatha Yoga, 
  promoting balance, mindfulness, and teaching confidence through steady postures, breathwork, and yogic philosophy.
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
