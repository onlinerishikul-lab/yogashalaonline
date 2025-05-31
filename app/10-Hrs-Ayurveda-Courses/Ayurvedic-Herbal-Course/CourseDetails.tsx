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
      title: "Improve posture and alignment in yoga practice",
    },
    {
      id: 2,
      icon: <ShieldCheck />,
      title: "Prevent injuries through anatomical awareness",
    },
    {
      id: 3,
      icon: <StretchHorizontal />,
      title: "Learn to modify poses for different body types",
    },
    {
      id: 4,
      icon: <Brain />,
      title: "Enhance mind-body-breath connection",
    },
    {
      id: 5,
      icon: <Star />,
      title: "Build confidence in teaching and self-practice",
    },
    {
      id: 6,
      icon: <Move3D />,
      title: "Understand key muscle and joint functions",
    },
    {
      id: 7,
      icon: <Shield />,
      title: "Support safe and effective movement",
    },
    {
      id: 8,
      icon: <BookOpenCheck />,
      title: "Apply anatomy knowledge to real-life yoga sessions",
    },
    {
      id: 9,
      icon: <Ruler />,
      title: "Master alignment techniques for injury-free sessions",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Yoga Anatomy Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course is designed to transform your yoga journey with deep
          anatomical understanding, supporting both personal growth and safe teaching.
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
                  Gain real skills and insights with our in-depth, engaging sessions tailored to support safe and effective yoga practice.
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
