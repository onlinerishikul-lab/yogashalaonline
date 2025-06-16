"use client";

import {
  SmilePlus,
  Globe,
  Paintbrush,
  ThumbsUp,
  School,
  MessageCircle,
  Baby,
  HeartPulse,
  BadgeCheck,
} from "lucide-react";

const CourseDetails = () => {
  const features = [
    {
      id: 1,
      icon: <SmilePlus />,
      title: "Inspire Kids through Yoga",
      description:
        "Help children develop focus, calm, and body awareness. Create joyful and mindful experiences.",
    },
    {
      id: 2,
      icon: <Globe />,
      title: "Stand Out as a Yoga Teacher",
      description:
        "Specialize in a growing field with global demand. Expand your reach beyond adult yoga.",
    },
    {
      id: 3,
      icon: <Paintbrush />,
      title: "Develop Creativity & Fun",
      description:
        "Learn to blend yoga with storytelling, games, and music. Make learning active, engaging, and memorable.",
    },
    {
      id: 4,
      icon: <ThumbsUp />,
      title: "Build Confidence in Kids",
      description:
        "Use yoga to nurture self-esteem, emotional balance, and strength. Guide kids through challenges in healthy ways.",
    },
    {
      id: 5,
      icon: <School />,
      title: "Offer Programs in Schools or Studios",
      description:
        "Design curriculum for education, wellness, or daycare settings. Open new income and impact opportunities.",
    },
    {
      id: 6,
      icon: <MessageCircle />,
      title: "Enhance Communication Skills",
      description:
        "Improve how you engage and connect with young minds. Build patience, clarity, and warmth.",
    },
    {
      id: 7,
      icon: <Baby />,
      title: "Understand Child Development",
      description:
        "Know what children need at each stage. Support them physically, mentally, and emotionally.",
    },
    {
      id: 8,
      icon: <HeartPulse />,
      title: "Contribute to Mental Health",
      description:
        "Use mindfulness and movement to ease anxiety and restlessness. Foster emotional regulation and social skills.",
    },
    {
      id: 9,
      icon: <BadgeCheck />,
      title: "Earn a Certified Credential",
      description:
        "Receive a respected certification in Kids Yoga Teaching. Use it to build programs or add to your teaching resume.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] text-[#4377b2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Benefits of the Kids Yoga Course
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4377b2]/90">
          This course empowers you to teach yoga to children in a joyful, safe, and engaging way—supporting their development and your teaching journey.
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
