"use client";

import {
  Infinity,
  HeartPulse,
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
    { id: 2, icon: <HeartPulse />, title: "Healing Through Yoga Therapy" },
    { id: 3, icon: <Webhook />, title: "Flexible Online Learning" },
    { id: 4, icon: <Clock />, title: "Self-Paced Study" },
    { id: 5, icon: <CalendarDays />, title: "Complete in 50 Hours" },
    { id: 6, icon: <DollarSign />, title: "Affordable Enrollment" },
    { id: 7, icon: <Settings />, title: "Personalized Therapeutic Techniques" },
    { id: 8, icon: <Activity />, title: "Holistic Body & Mind Approach" },
    { id: 9, icon: <Users />, title: "Guidance from Certified Yoga Therapists" },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What Will You Learn in Yoga Therapy Course?
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-lg leading-relaxed text-[#4377b2]/90">
          Explore how yoga therapy integrates yoga practices to support healing, recovery, and wellness for various physical and mental health conditions.
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
                  {feature.id === 1 && "Access the course materials anytime, forever."}
                  {feature.id === 2 && "Learn specialized yoga therapy techniques for healing."}
                  {feature.id === 3 && "Enjoy the freedom of flexible online classes."}
                  {feature.id === 4 && "Study at your own pace and schedule."}
                  {feature.id === 5 && "Complete the comprehensive 50-hour curriculum."}
                  {feature.id === 6 && "Affordable fees making therapy training accessible."}
                  {feature.id === 7 && "Learn to customize therapy for individual needs."}
                  {feature.id === 8 && "Understand holistic approaches to body and mind health."}
                  {feature.id === 9 && "Receive mentorship from experienced yoga therapy experts."}
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
