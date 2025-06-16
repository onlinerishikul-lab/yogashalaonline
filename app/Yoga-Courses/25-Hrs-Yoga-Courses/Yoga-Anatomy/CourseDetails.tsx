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
      title: "Posture & Alignment",
      description:
        "Learn how to improve posture and body alignment for better balance and stability in yoga. Good alignment enhances effectiveness and reduces the risk of strain.",
    },
    {
      id: 2,
      icon: <ShieldCheck />,
      title: "Injury Prevention",
      description:
        "Understand how anatomical awareness can help prevent common yoga injuries. Practice smarter and safer with proper movement techniques.",
    },
    {
      id: 3,
      icon: <StretchHorizontal />,
      title: "Pose Modifications",
      description:
        "Discover how to adapt yoga poses for different body types and limitations. Make your classes inclusive and accessible to all.",
    },
    {
      id: 4,
      icon: <Brain />,
      title: "Mind-Body-Breath Connection",
      description:
        "Deepen your awareness of how breath, body, and mind work together. Use this connection to build a more mindful and grounded practice.",
    },
    {
      id: 5,
      icon: <Star />,
      title: "Teaching & Self-Practice Confidence",
      description:
        "Gain confidence in applying anatomy knowledge to your teaching and personal practice. Feel empowered to lead safe, informed sessions.",
    },
    {
      id: 6,
      icon: <Move3D />,
      title: "Muscle & Joint Basics",
      description:
        "Understand key muscles and joints used in yoga movements. Learn how they function to support better flow and control.",
    },
    {
      id: 7,
      icon: <Shield />,
      title: "Safe & Smart Movement",
      description:
        "Build a strong foundation in moving safely and effectively through yoga sequences. Prevent overuse and imbalance with informed movement.",
    },
    {
      id: 8,
      icon: <BookOpenCheck />,
      title: "Anatomy in Practice",
      description:
        "Apply what you learn directly to real-life yoga classes and sessions. Make your practice more precise and purposeful.",
    },
    {
      id: 9,
      icon: <Ruler />,
      title: "Alignment Mastery",
      description:
        "Master alignment techniques that keep your practice injury-free. Focus on small adjustments that make a big difference.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Yoga Anatomy Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course is designed to transform your yoga journey with deep anatomical
          understanding, supporting both personal growth and safe teaching.
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
