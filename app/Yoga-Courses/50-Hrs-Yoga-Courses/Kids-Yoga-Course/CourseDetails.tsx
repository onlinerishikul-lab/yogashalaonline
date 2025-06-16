"use client";

import {
  Smile,
  ThumbsUp,
  Focus,
  Heart,
  Sparkles,
  Move3D,
  Leaf,
  Users,
  School,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <Smile />,
      title: "Holistic Child Development",
      description:
        "Support emotional, physical, and mental well-being in a joyful way.",
    },
    {
      id: 2,
      icon: <ThumbsUp />,
      title: "Builds Self-Confidence",
      description:
        "Yoga empowers children to believe in themselves and their abilities.",
    },
    {
      id: 3,
      icon: <Focus />,
      title: "Enhances Focus and Attention",
      description:
        "Techniques that improve classroom behavior and learning outcomes.",
    },
    {
      id: 4,
      icon: <Heart />,
      title: "Encourages Emotional Resilience",
      description:
        "Children learn to manage stress and regulate emotions naturally.",
    },
    {
      id: 5,
      icon: <Sparkles />,
      title: "Sparks Creativity and Imagination",
      description:
        "Playful sequences allow children to express themselves freely.",
    },
    {
      id: 6,
      icon: <Move3D />,
      title: "Strengthens Mind-Body Connection",
      description:
        "Improves coordination, balance, and awareness of their bodies.",
    },
    {
      id: 7,
      icon: <Leaf />,
      title: "Promotes Healthy Habits Early",
      description:
        "Instills mindfulness, movement, and calm from a young age.",
    },
    {
      id: 8,
      icon: <Users />,
      title: "Fosters Social Skills",
      description:
        "Group activities encourage cooperation, kindness, and listening.",
    },
    {
      id: 9,
      icon: <School />,
      title: "Inspires Family & School Integration",
      description:
        "Easily adaptable for family yoga or school curriculums.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of Kids Yoga Program
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          Our program nurtures young minds and bodies, providing lifelong tools for emotional intelligence, mindfulness, and physical health.
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
                <p className="text-sm text-[#4377b2]/80">
                  {feature.description}
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
