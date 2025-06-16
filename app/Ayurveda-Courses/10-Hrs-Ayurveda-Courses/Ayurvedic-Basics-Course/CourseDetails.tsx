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
  Leaf,
  Sparkles,
  BatteryCharging,
  Flame,
  Moon,
  Sun,
  Home,
  Calendar,
  GraduationCap,
} from "lucide-react";

const CourseDetails = () => {
  const yogaFeatures = [
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

  const ayurvedaFeatures = [
    {
      id: 1,
      icon: <Leaf />,
      title: "Boost Natural Immunity",
      desc: "Use food, herbs, and lifestyle to strengthen your body’s defense.",
    },
    {
      id: 2,
      icon: <Sparkles />,
      title: "Balance Your Mind & Body",
      desc: "Identify imbalances early and restore harmony through simple tools.",
    },
    {
      id: 3,
      icon: <BatteryCharging />,
      title: "Improve Daily Energy",
      desc: "Create routines that align with your natural biorhythm.",
    },
    {
      id: 4,
      icon: <Flame />,
      title: "Better Digestion & Metabolism",
      desc: "Adopt Ayurvedic principles to ease digestion and improve nutrition.",
    },
    {
      id: 5,
      icon: <Moon />,
      title: "Stress & Sleep Management",
      desc: "Learn natural ways to relax the nervous system and sleep well.",
    },
    {
      id: 6,
      icon: <Sun />,
      title: "Glow from Within",
      desc: "Support healthy skin and detox naturally with daily habits.",
    },
    {
      id: 7,
      icon: <Home />,
      title: "Practical Remedies at Home",
      desc: "Master herbal solutions for common health issues.",
    },
    {
      id: 8,
      icon: <Calendar />,
      title: "Live Seasonally & Mindfully",
      desc: "Stay healthy and vibrant with every seasonal shift.",
    },
    {
      id: 9,
      icon: <GraduationCap />,
      title: "Lay Foundation for Further Study",
      desc: "Build the base for advanced Ayurvedic learning or therapeutic training.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Yoga Anatomy */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Yoga Anatomy Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course is designed to transform your yoga journey with deep anatomical understanding, supporting both personal growth and safe teaching.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-left mb-16">
          {yogaFeatures.map((feature) => (
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

        {/* Ayurveda Wellness */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
  Benefits of the Ayurvedic Basics Course for Beginners
</h2>
<p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
  This course offers a foundational understanding of Ayurveda, helping you explore natural healing, daily wellness routines, and balanced living practices rooted in ancient wisdom.
</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {ayurvedaFeatures.map((feature) => (
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
                <p className="text-sm text-[#4377b2]/80">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
