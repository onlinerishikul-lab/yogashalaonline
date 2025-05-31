"use client";

import {
  HeartPulse,
  ShieldCheck,
  StretchHorizontal,
  Brain,
  Star,
  Bed,
  HandHeart,
  BookOpenCheck,
  Ruler,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Bed />,
      title: "Promote deep relaxation and nervous system healing",
    },
    {
      id: 2,
      icon: <HandHeart />,
      title: "Create a safe and nurturing space for all students",
    },
    {
      id: 3,
      icon: <StretchHorizontal />,
      title: "Use props effectively for maximum comfort and support",
    },
    {
      id: 4,
      icon: <Brain />,
      title: "Understand the mind-body connection in restorative practice",
    },
    {
      id: 5,
      icon: <Star />,
      title: "Build confidence in teaching slow, mindful yoga",
    },
    {
      id: 6,
      icon: <HeartPulse />,
      title: "Support emotional release and energetic balance",
    },
    {
      id: 7,
      icon: <ShieldCheck />,
      title: "Adapt restorative yoga for different needs and conditions",
    },
    {
      id: 8,
      icon: <BookOpenCheck />,
      title: "Design complete restorative yoga sequences",
    },
    {
      id: 9,
      icon: <Ruler />,
      title: "Master posture setup and alignment for healing outcomes",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Restorative Yoga TTC
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This training is crafted to help you guide others into deep rest and renewal while building your own resilience and confidence as a restorative yoga teacher.
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
                  Learn to hold space, use breathwork, and deliver deep healing through gentle, supported practice.
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
