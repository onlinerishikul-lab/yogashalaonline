"use client";

import {
  Infinity,
  Zap,
  Webhook,
  Clock,
  CalendarDays,
  DollarSign,
  Settings,
  Activity,
  Users,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    { id: 1, icon: <Infinity />, title: "Lifetime Access to Materials" },
    { id: 2, icon: <Zap />, title: "Integrated Multi-Style Curriculum" },
    { id: 3, icon: <Webhook />, title: "Learn Anywhere, Anytime" },
    { id: 4, icon: <Clock />, title: "Flexible 100-Hour Learning Pace" },
    { id: 5, icon: <CalendarDays />, title: "Self-Guided Progression" },
    { id: 6, icon: <DollarSign />, title: "Budget-Friendly Pricing" },
    { id: 7, icon: <Settings />, title: "Teaching Techniques & Tools" },
    { id: 8, icon: <Activity />, title: "Ashtanga, Vinyasa, Hatha & Yin Focus" },
    { id: 9, icon: <Users />, title: "Expert Support from Diverse Trainers" },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What Will You Learn in the Multi-Style Yoga TTC?
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-lg leading-relaxed text-[#4377b2]/90">
          Our 100-hour Multi-Style Yoga Teacher Training Course introduces you to a blend of traditional and modern yoga forms, helping you evolve into a confident and versatile yoga teacher.
        </p>
        <button className="mb-12 border-2 border-[#4377b2] text-[#4377b2] font-semibold px-8 py-3 rounded-full hover:bg-[#4377b2] hover:text-white transition">
          Start Your Journey
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-4 bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-2xl text-[#4377b2] mt-1">{feature.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  {feature.id}. {feature.title}
                </h3>
                <p className="text-sm text-[#4377b2]/80">
                  Explore multiple yoga styles with in-depth sessions that enhance your teaching versatility, knowledge of alignment, and class structuring.
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
