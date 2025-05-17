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
    { id: 1, icon: <Infinity />, title: "Lifetime Access" },
    { id: 2, icon: <Zap />, title: "Evidence-Based Curriculum" },
    { id: 3, icon: <Webhook />, title: "Online Learning Convenience" },
    { id: 4, icon: <Clock />, title: "Flexible Self-Paced Modules" },
    { id: 5, icon: <CalendarDays />, title: "Complete Within 100 Hours" },
    { id: 6, icon: <DollarSign />, title: "Cost-Effective Training" },
    { id: 7, icon: <Settings />, title: "Therapeutic Tools & Practices" },
    { id: 8, icon: <Activity />, title: "Focus on Healing & Safety" },
    { id: 9, icon: <Users />, title: "Mentorship by Certified Therapists" },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What Will You Gain from the Advanced Yoga Therapy Course?
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-lg leading-relaxed text-[#4377b2]/90">
          This 100-hour comprehensive course offers advanced insights into yoga therapy techniques, focusing on anatomy, healing practices, and personalized therapeutic applications.
        </p>
        <button className="mb-12 border-2 border-[#4377b2] text-[#4377b2] font-semibold px-8 py-3 rounded-full hover:bg-[#4377b2] hover:text-white transition">
          Join the Course
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
                  Each module is crafted to deepen your therapeutic knowledge and provide practical techniques to support diverse health needs through yoga.
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
