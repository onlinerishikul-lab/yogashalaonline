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
    { id: 1, icon: <Infinity />, title: "Lifetime Course Access" },
    { id: 2, icon: <Zap />, title: "Dynamic Vinyasa Flow Curriculum" },
    { id: 3, icon: <Webhook />, title: "Flexible Online Learning Experience" },
    { id: 4, icon: <Clock />, title: "100-Hour Self-Paced Schedule" },
    { id: 5, icon: <CalendarDays />, title: "Complete at Your Convenience" },
    { id: 6, icon: <DollarSign />, title: "Cost-Effective Course Fee" },
    { id: 7, icon: <Settings />, title: "Sequencing & Cueing Techniques" },
    { id: 8, icon: <Activity />, title: "Focus on Breath-Movement Sync" },
    { id: 9, icon: <Users />, title: "Guidance from Vinyasa Experts" },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What Will You Learn in the Vinyasa Flow Yoga TTC?
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-lg leading-relaxed text-[#4377b2]/90">
          Join our 100-hour Vinyasa Flow Yoga Teacher Training to master smooth transitions, mindful breathwork, and creative sequencing — empowering you to guide fluid, energizing classes.
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
                  Learn the art of building powerful Vinyasa sequences, aligning breath with movement, and cultivating a flowing, meditative teaching presence.
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
