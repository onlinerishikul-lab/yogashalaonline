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
    { id: 1, icon: <Infinity />, title: "Lifetime Access to Meditation Practices" },
    { id: 2, icon: <Zap />, title: "Mindfulness & Concentration Techniques" },
    { id: 3, icon: <Webhook />, title: "Flexible Online Learning" },
    { id: 4, icon: <Clock />, title: "Guided and Self-Paced Sessions" },
    { id: 5, icon: <CalendarDays />, title: "Practice at Your Own Pace" },
    { id: 6, icon: <DollarSign />, title: "Affordable Enrollment Options" },
    { id: 7, icon: <Settings />, title: "Tools for Breath and Focus Control" },
    { id: 8, icon: <Activity />, title: "Stress Reduction & Mental Clarity" },
    { id: 9, icon: <Users />, title: "Expert Guidance from Meditation Teachers" },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What Will You Learn in the Meditation Course?
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-lg leading-relaxed text-[#4377b2]/90">
          Cultivate inner peace and mental clarity through proven meditation practices including mindfulness, breathwork, and concentration techniques.
        </p>
        <button className="mb-12 border-2 border-[#4377b2] text-[#4377b2] font-semibold px-8 py-3 rounded-full hover:bg-[#4377b2] hover:text-white transition">
          Enroll Now
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
                  Learn to manage stress, improve focus, and enhance well-being with structured meditation guidance.
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
