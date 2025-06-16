"use client";

import {
  Flame,
  Wind,
  ShieldCheck,
  PenTool,
  Brain,
  Mic,
  CalendarClock,
  Layers,
  Award,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Flame />,
      title: "Dynamic & Energizing Practice",
      description:
        "Build stamina and strength with flowing yoga sequences. Feel revitalized and focused.",
    },
    {
      id: 2,
      icon: <Wind />,
      title: "Improved Breath Control",
      description:
        "Learn to use breath as a tool for movement and calm. Enhance both physical and mental wellbeing.",
    },
    {
      id: 3,
      icon: <ShieldCheck />,
      title: "Safe & Effective Alignment",
      description:
        "Practice and teach poses with confidence and care. Reduce risk of injury.",
    },
    {
      id: 4,
      icon: <PenTool />,
      title: "Creative Class Building",
      description:
        "Design sequences tailored to different needs and goals. Keep students engaged and inspired.",
    },
    {
      id: 5,
      icon: <Brain />,
      title: "Enhanced Mind-Body Connection",
      description:
        "Deepen awareness through synchronized breath and movement. Achieve greater presence on and off the mat.",
    },
    {
      id: 6,
      icon: <Mic />,
      title: "Increased Teaching Confidence",
      description:
        "Gain skills to lead classes smoothly and clearly. Feel prepared to teach any level.",
    },
    {
      id: 7,
      icon: <CalendarClock />,
      title: "Flexibility & Accessibility",
      description:
        "Study online at your own pace, anytime, anywhere. Perfect for busy schedules.",
    },
    {
      id: 8,
      icon: <Layers />,
      title: "Holistic Yoga Education",
      description:
        "Combine practice, philosophy, anatomy, and teaching. Grow as a well-rounded yogi and instructor.",
    },
    {
      id: 9,
      icon: <Award />,
      title: "Yoga Alliance Certification",
      description:
        "Earn a respected certification for your teaching career. Open doors to global teaching opportunities.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
  Vinyasa Flow Yoga TTC
</h2>
<p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
  This training is designed to deepen your Vinyasa flow practice, 
  enhancing personal growth, teaching confidence, and a strong foundation in dynamic yoga movement.
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
