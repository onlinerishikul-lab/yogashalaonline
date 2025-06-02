"use client";

import {
  Leaf,
  Flame,
  Moon,
  Sparkles,
  Droplets,
  Recycle,
  FlaskConical,
  TreePine,
  BookOpenCheck,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Leaf />,
      title: "Boost Natural Immunity",
      description:
        "Strengthen your system with herbs like tulsi, amla, and ashwagandha.",
    },
    {
      id: 2,
      icon: <Flame />,
      title: "Support Digestion Naturally",
      description:
        "Use herbs like fennel, ginger, and trikatu for better metabolism and gut health.",
    },
    {
      id: 3,
      icon: <Moon />,
      title: "Improve Sleep & Reduce Anxiety",
      description:
        "Soothe your nervous system with calming herbs like brahmi and jatamansi.",
    },
    {
      id: 4,
      icon: <Sparkles />,
      title: "Enhance Skin & Hair Health",
      description:
        "Discover herbal beauty treatments that are 100% natural and nourishing.",
    },
    {
      id: 5,
      icon: <Droplets />,
      title: "Balance Hormones Gently",
      description:
        "Support reproductive health with traditional women’s herbs like shatavari.",
    },
    {
      id: 6,
      icon: <Recycle />,
      title: "Detox the Natural Way",
      description:
        "Use herbs like neem and triphala to cleanse your body without harsh chemicals.",
    },
    {
      id: 7,
      icon: <FlaskConical />,
      title: "Create Herbal Home Remedies",
      description:
        "Gain confidence in making DIY treatments for your whole family.",
    },
    {
      id: 8,
      icon: <TreePine />,
      title: "Live in Harmony with Nature",
      description:
        "Adopt seasonal and holistic herb use as part of your lifestyle.",
    },
    {
      id: 9,
      icon: <BookOpenCheck />,
      title: "Lay Foundation for Advanced Herbalism",
      description:
        "Start your journey toward deeper Ayurvedic study or therapeutic training.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Ayurvedic Herbal Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          Learn to use powerful, natural herbs to support health and wellness through the ancient wisdom of Ayurveda.
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
