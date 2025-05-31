"use client";

import {
  Armchair,
  Move,
  SlidersHorizontal,
  Wind,
  UserCheck,
  Eye,
  StretchHorizontal,
  Landmark,
  Smile,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Armchair />,
      title: "Posture & Alignment on the Chair",
      description:
        "Learn how to guide correct posture using a chair for safety and support. Proper alignment ensures stability and ease in every pose.",
    },
    {
      id: 2,
      icon: <Move />,
      title: "Safe & Gentle Movements",
      description:
        "Teach low-impact movements that protect joints and muscles. Perfect for seniors, beginners, or those with limited mobility.",
    },
    {
      id: 3,
      icon: <SlidersHorizontal />,
      title: "Pose Adaptations",
      description:
        "Modify traditional yoga poses into seated variations. Offer an inclusive experience without needing to get on the floor.",
    },
    {
      id: 4,
      icon: <Wind />,
      title: "Breath & Relaxation",
      description:
        "Use breathwork and relaxation techniques to reduce stress and tension. Combine gentle movement with calming breath for a full-body reset.",
    },
    {
      id: 5,
      icon: <UserCheck />,
      title: "Teaching with Confidence",
      description:
        "Gain the skills to teach chair yoga classes with clarity and compassion. Learn how to guide groups or individuals confidently.",
    },
    {
      id: 6,
      icon: <Eye />,
      title: "Understanding Body Needs",
      description:
        "Recognize physical limitations and how to adapt accordingly. Learn how to serve older adults, office workers, or recovery clients.",
    },
    {
      id: 7,
      icon: <StretchHorizontal />,
      title: "Balanced & Safe Sequences",
      description:
        "Create balanced class flows focused on mobility, strength, and calm. Design routines that energize without overwhelming.",
    },
    {
      id: 8,
      icon: <Landmark />,
      title: "Practical Applications",
      description:
        "Bring chair yoga to homes, workplaces, and wellness centers. Expand your reach by making yoga more accessible.",
    },
    {
      id: 9,
      icon: <Smile />,
      title: "Improved Mobility & Well-being",
      description:
        "Support physical and mental health through gentle, regular practice. Help students regain strength, balance, and inner peace.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          What You’ll Learn in the Chair Yoga Teacher Training
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          Learn to safely guide chair yoga practices that support mobility, comfort, and calm for every body and age.
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
