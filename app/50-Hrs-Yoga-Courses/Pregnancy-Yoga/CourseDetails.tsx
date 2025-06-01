"use client";

import {
  Baby,
  GraduationCap,
  ShieldCheck,
  Heart,
  Smile,
  HeartPulse,
  ThumbsUp,
  Sparkle,
  Laptop2,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Baby />,
      title: "Empower Moms-to-Be",
      description:
        "Support women in one of life’s most powerful transitions. Help them feel strong, safe, and nurtured.",
    },
    {
      id: 2,
      icon: <GraduationCap />,
      title: "Specialized Expertise",
      description:
        "Stand out with skills tailored for prenatal care. Become a trusted guide in the wellness space.",
    },
    {
      id: 3,
      icon: <ShieldCheck />,
      title: "Safe Yoga Practices",
      description:
        "Understand what to include or avoid each trimester. Ensure physical safety and emotional ease.",
    },
    {
      id: 4,
      icon: <Heart />,
      title: "Support for Labor",
      description:
        "Teach tools that help during childbirth. Breathing, visualization, and strength training included.",
    },
    {
      id: 5,
      icon: <Smile />,
      title: "Mind-Body Bonding",
      description:
        "Help mothers connect with their baby through mindful movement. Foster calmness and confidence through every pose.",
    },
    {
      id: 6,
      icon: <HeartPulse />,
      title: "Reduce Pregnancy Discomforts",
      description:
        "Address pain, swelling, stress, and insomnia. Offer natural relief through targeted sequences.",
    },
    {
      id: 7,
      icon: <ThumbsUp />,
      title: "Build Teaching Confidence",
      description:
        "Gain clear, professional teaching techniques. Lead classes with clarity and care.",
    },
    {
      id: 8,
      icon: <Sparkle />,
      title: "Holistic Wellness Approach",
      description:
        "Blend physical, emotional, and spiritual practices. Go beyond fitness into true pregnancy wellness.",
    },
    {
      id: 9,
      icon: <Laptop2 />,
      title: "Flexible Online Learning",
      description:
        "Study from home, at your pace, while gaining full certification. Balance your life while investing in your future.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of Prenatal Yoga Training
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course empowers you to support pregnant women through safe, nurturing, and holistic yoga practices that enhance both mental and physical wellness.
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
