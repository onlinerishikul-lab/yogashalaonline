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
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <StretchHorizontal />,
      title: "Well-Rounded Knowledge",
      description:
        "Understand how different yoga styles complement each other. Practice with variety and purpose.",
    },
    {
      id: 2,
      icon: <Star />,
      title: "Strong Foundation for Teaching",
      description:
        "Build core skills you can expand in a 200-hour course. Step confidently into the teacher’s path.",
    },
    {
      id: 3,
      icon: <Move3D />,
      title: "Flexibility & Balance",
      description:
        "Train your body across dynamic and passive forms. Improve mobility, stability, and alignment.",
    },
    {
      id: 4,
      icon: <Brain />,
      title: "Mind-Body Connection",
      description:
        "Enhance awareness through breath, movement, and stillness. Support emotional and mental balance.",
    },
    {
      id: 5,
      icon: <HeartPulse />,
      title: "Boost Energy & Vitality",
      description:
        "Feel more energized through breath-led movement. Reduce fatigue and cultivate clarity.",
    },
    {
      id: 6,
      icon: <Ruler />,
      title: "Discover Your Preferred Style",
      description:
        "Try out different styles before choosing a specialization. Align your practice with your lifestyle and goals.",
    },
    {
      id: 7,
      icon: <Shield />,
      title: "Personal Growth & Discipline",
      description:
        "Learn consistency, self-reflection, and mindful routines. Strengthen body and spirit together.",
    },
    {
      id: 8,
      icon: <BookOpenCheck />,
      title: "Accessible Anytime, Anywhere",
      description:
        "Study online at your pace with lifetime access. Ideal for busy schedules and self-paced learners.",
    },
    {
      id: 9,
      icon: <ShieldCheck />,
      title: "Yoga Alliance CE Credit",
      description:
        "Use your certificate for CE hours with Yoga Alliance. Add credibility to your teaching journey.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
  Multi Style Yoga TTC
</h2>
<p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
  This training is designed to deepen your yoga practice across multiple styles, 
  fostering personal growth, teaching confidence, and a well-rounded foundation in yoga.
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
