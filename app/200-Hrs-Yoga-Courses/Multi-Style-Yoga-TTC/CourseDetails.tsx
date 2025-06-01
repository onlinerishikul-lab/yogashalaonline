"use client";

import {
  Layers,
  BookOpen,
  Wind,
  Brain,
  Clock,
  Users,
  ShieldCheck,
  Mic,
  Globe2,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Layers />,
      title: "Versatile Teaching Skills",
      description:
        "Lead multiple yoga styles with confidence. Attract diverse students.",
    },
    {
      id: 2,
      icon: <BookOpen />,
      title: "Comprehensive Yoga Knowledge",
      description:
        "Gain a broad understanding of yoga practice. Strengthen your foundation.",
    },
    {
      id: 3,
      icon: <Wind />,
      title: "Improved Breath Control",
      description:
        "Use pranayama for better health and calmness. Support mental focus.",
    },
    {
      id: 4,
      icon: <Brain />,
      title: "Balanced Mind-Body Practice",
      description:
        "Integrate movement, breath, and meditation. Achieve holistic wellness.",
    },
    {
      id: 5,
      icon: <Clock />,
      title: "Flexible Learning Schedule",
      description:
        "Study at your own pace from anywhere. Fit yoga training into your life.",
    },
    {
      id: 6,
      icon: <Users />,
      title: "Community Connection",
      description:
        "Engage with fellow yoga practitioners. Share growth and inspiration.",
    },
    {
      id: 7,
      icon: <ShieldCheck />,
      title: "Safe Practice Techniques",
      description:
        "Learn alignment and anatomy to avoid injury. Promote longevity in yoga.",
    },
    {
      id: 8,
      icon: <Mic />,
      title: "Teaching Confidence",
      description:
        "Lead effective, engaging classes. Build your yoga career.",
    },
    {
      id: 9,
      icon: <Globe2 />,
      title: "Recognized Certification",
      description:
        "Earn a Yoga Alliance accredited certificate. Open doors worldwide.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Multi Style Yoga TTC
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This comprehensive training equips you with the knowledge and versatility to teach confidently, connect deeply, and grow your practice globally.
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
