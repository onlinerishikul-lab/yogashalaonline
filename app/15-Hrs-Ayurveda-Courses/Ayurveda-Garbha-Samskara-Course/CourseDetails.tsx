"use client";

import {
  Baby,
  HeartHands,
  Sparkles,
  Flower2,
  ShieldCheck,
  RefreshCcw,
  GraduationCap,
  Brain,
  Sun,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Baby />,
      title: "Nurture Baby’s Physical & Mental Growth",
      description:
        "Provide optimal womb care for healthy development using Ayurvedic guidance.",
    },
    {
      id: 2,
      icon: <HeartHands />,
      title: "Support Mother’s Strength & Calm",
      description:
        "Reduce stress, fatigue, and imbalances through holistic care.",
    },
    {
      id: 3,
      icon: <Sparkles />,
      title: "Promote Conscious Parenting",
      description:
        "Build a deeper spiritual connection with your child before birth.",
    },
    {
      id: 4,
      icon: <Flower2 />,
      title: "Reduce Pregnancy Discomfort",
      description:
        "Ease nausea, fatigue, and tension with natural techniques.",
    },
    {
      id: 5,
      icon: <ShieldCheck />,
      title: "Empower Natural Birthing",
      description:
        "Prepare body and mind for a safe, empowered birthing experience.",
    },
    {
      id: 6,
      icon: <RefreshCcw />,
      title: "Improve Postnatal Recovery",
      description:
        "Restore balance and vitality after birth through diet and rituals.",
    },
    {
      id: 7,
      icon: <GraduationCap />,
      title: "Guide Others Professionally",
      description:
        "Use your certification to support clients as a Garbha Samskara practitioner.",
    },
    {
      id: 8,
      icon: <Brain />,
      title: "Harmonize Body-Mind Connection",
      description:
        "Cultivate sattva (mental clarity) through meditative practices.",
    },
    {
      id: 9,
      icon: <Sun />,
      title: "Uplift the Next Generation",
      description:
        "Contribute to birthing conscious, balanced children through ancient wisdom.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Ayurveda Garbha Samskara Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This sacred course helps mothers and professionals foster conscious, healthy pregnancies using timeless Ayurvedic wisdom and holistic care practices.
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
