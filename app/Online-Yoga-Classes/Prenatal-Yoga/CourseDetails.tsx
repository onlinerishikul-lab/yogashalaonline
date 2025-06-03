"use client";

import {
  Baby,
  BedDouble,
  Dumbbell,
  HeartHandshake,
  CloudSun,
  Move3D,
  ShieldCheck,
  CircleDot,
  Users,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Baby />,
      title: "Reduced Pregnancy Discomfort",
      description:
        "Ease back pain, swelling, and fatigue with gentle movement.",
    },
    {
      id: 2,
      icon: <BedDouble />,
      title: "Improved Sleep & Relaxation",
      description:
        "Relaxation techniques promote restful sleep and emotional balance.",
    },
    {
      id: 3,
      icon: <Dumbbell />,
      title: "Strength & Flexibility for Labor",
      description:
        "Prepare the body with strength-building and mobility exercises.",
    },
    {
      id: 4,
      icon: <HeartHandshake />,
      title: "Bonding with the Baby",
      description:
        "Foster connection with your baby through breath, stillness, and intention.",
    },
    {
      id: 5,
      icon: <CloudSun />,
      title: "Lowered Stress & Anxiety",
      description:
        "Cultivate emotional calmness with meditation and mindfulness.",
    },
    {
      id: 6,
      icon: <Move3D />,
      title: "Safer, More Mindful Movement",
      description:
        "Learn how to move in ways that honor your changing body.",
    },
    {
      id: 7,
      icon: <ShieldCheck />,
      title: "Empowered Birthing Experience",
      description:
        "Feel more confident and in control as you approach labor.",
    },
    {
      id: 8,
      icon: <CircleDot />,
      title: "Stronger Core & Pelvic Muscles",
      description:
        "Build stability and postnatal recovery through pelvic-focused practices.",
    },
    {
      id: 9,
      icon: <Users />,
      title: "Community & Support",
      description:
        "Connect with other expectant mothers or prenatal yoga practitioners.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Prenatal Yoga Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course empowers expecting mothers with physical, mental, and emotional tools to navigate pregnancy with ease, mindfulness, and strength.
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
