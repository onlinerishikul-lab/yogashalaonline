"use client";

import {
  StretchHorizontal,
  UserCheck,
  ShieldCheck,
  ScanFace,
  Mic,
  Dumbbell,
  Sparkles,
  Layers3,
  BadgeCheck,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <StretchHorizontal />,
      title: "Deepen Asana Knowledge",
      description:
        "Explore each posture beyond the surface. Understand the purpose, alignment, and benefit of every pose.",
    },
    {
      id: 2,
      icon: <UserCheck />,
      title: "Elevate Teaching Confidence",
      description:
        "Feel ready to offer corrections, modifications, and adjustments. Handle diverse student needs with skill.",
    },
    {
      id: 3,
      icon: <ShieldCheck />,
      title: "Enhance Student Safety",
      description:
        "Prevent injuries through proper alignment and awareness. Keep your classes safe, accessible, and professional.",
    },
    {
      id: 4,
      icon: <ScanFace />,
      title: "Improve Body Awareness",
      description:
        "Recognize body imbalances and asymmetries. Use practice to support healthy movement habits.",
    },
    {
      id: 5,
      icon: <Mic />,
      title: "Master Verbal Cueing",
      description:
        "Deliver clear, insightful instructions. Use language that resonates and educates.",
    },
    {
      id: 6,
      icon: <Dumbbell />,
      title: "Learn Functional Anatomy",
      description:
        "Understand how muscles and joints work in yoga. Make anatomy easy, practical, and teachable.",
    },
    {
      id: 7,
      icon: <Sparkles />,
      title: "Build Class Creativity",
      description:
        "Design sequences with intelligence and variety. Keep your classes engaging, safe, and impactful.",
    },
    {
      id: 8,
      icon: <Layers3 />,
      title: "Support All Levels",
      description:
        "Offer pose variations for beginners to advanced students. Be ready for mixed-level classes with confidence.",
    },
    {
      id: 9,
      icon: <BadgeCheck />,
      title: "Get Certified",
      description:
        "Add a respected certification to your credentials. Showcase your continued growth as a yoga professional.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
  Benefits of Asana Clinic for Yoga Professionals
</h2>
<p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
  Refine your teaching skills and deepen your understanding of asanas with focused, hands-on training. Gain the confidence, precision, and knowledge to lead impactful and safe yoga sessions.
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
