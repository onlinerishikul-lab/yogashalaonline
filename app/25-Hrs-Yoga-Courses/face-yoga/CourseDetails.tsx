"use client";

import {
  Smile,
  Eye,
  FaceIcon,
  HeartPulse,
  Star,
  ShieldCheck,
  Move3D,
  Brain,
  BookOpenCheck,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Smile />,
      title: "Naturally lift and tone facial muscles",
    },
    {
      id: 2,
      icon: <Eye />,
      title: "Reduce eye puffiness, wrinkles, and tension",
    },
    {
      id: 3,
      icon: <FaceIcon />,
      title: "Enhance facial symmetry and glow",
    },
    {
      id: 4,
      icon: <HeartPulse />,
      title: "Improve blood circulation and skin health",
    },
    {
      id: 5,
      icon: <Star />,
      title: "Boost confidence in personal and teaching practice",
    },
    {
      id: 6,
      icon: <ShieldCheck />,
      title: "Learn safe techniques to prevent facial strain",
    },
    {
      id: 7,
      icon: <Move3D />,
      title: "Understand facial anatomy for effective training",
    },
    {
      id: 8,
      icon: <Brain />,
      title: "Cultivate mind-face-breath awareness",
    },
    {
      id: 9,
      icon: <BookOpenCheck />,
      title: "Master teaching skills to lead impactful sessions",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Face Yoga TTC
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course empowers you to harness the power of natural facial
          rejuvenation while gaining confidence to teach face yoga with purpose
          and precision.
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
                  Gain practical skills, deepen self-awareness, and learn to guide
                  others through transformative face yoga practices.
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
