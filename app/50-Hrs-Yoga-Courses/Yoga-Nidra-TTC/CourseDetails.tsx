"use client";

import {
  Infinity,
  Moon,
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
    { id: 2, icon: <Moon />, title: "Yoga Nidra Techniques" },
    { id: 3, icon: <Webhook />, title: "Flexible Online Learning" },
    { id: 4, icon: <Clock />, title: "Self-Paced Sessions" },
    { id: 5, icon: <CalendarDays />, title: "Complete in 50 Hours" },
    { id: 6, icon: <DollarSign />, title: "Affordable Enrollment" },
    { id: 7, icon: <Settings />, title: "Deep Relaxation & Conscious Sleep" },
    { id: 8, icon: <Activity />, title: "Stress Reduction & Mindfulness" },
    { id: 9, icon: <Users />, title: "Guidance from Experienced Yoga Nidra Teachers" },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What Will You Learn in Yoga Nidra TTC?
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-lg leading-relaxed text-[#4377b2]/90">
          Discover the ancient practice of conscious deep relaxation that promotes healing, reduces stress, and enhances mental clarity through guided meditation.
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
                  {feature.id === 1 && "Access this course anytime with no expiration."}
                  {feature.id === 2 && "Learn systematic relaxation and guided meditation techniques."}
                  {feature.id === 3 && "Learn at your own pace with online flexibility."}
                  {feature.id === 4 && "Complete lessons on your schedule."}
                  {feature.id === 5 && "Finish the full 50-hour training program."}
                  {feature.id === 6 && "Affordable pricing for all students."}
                  {feature.id === 7 && "Master methods to enter conscious sleep for healing."}
                  {feature.id === 8 && "Techniques to calm the nervous system and reduce anxiety."}
                  {feature.id === 9 && "Learn from certified Yoga Nidra instructors with experience."}
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
