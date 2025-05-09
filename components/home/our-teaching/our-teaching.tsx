import Image from "next/image";
import React from "react";

const OurTeaching = () => {
  const tempContent = [
    {
      id: 1,
      heading: "Interactive Online Learning Experience",
      text: "Our courses are designed to be immersive and engaging, even in a virtual environment. Whether you're attending live sessions or learning through recorded modules, you’ll receive personalized guidance, real-time feedback, and support from our expert teachers. From one-on-one Q&A sessions to interactive assignments, we make sure every student feels connected, involved, and empowered throughout their learning journey.",
      image: "/assets/teaching/Interactive.jpg",
    },
    {
      id: 2,
      heading: "Traditional Knowledge, Modern Relevance",
      text: "We honor the ancient teachings of yoga and Ayurveda while presenting them in a way that’s practical for today’s lifestyle. Rooted in classical texts like the Yoga Sutras, Hatha Yoga Pradipika, and Charaka Samhita, our curriculum also includes modern scientific insights and contemporary health challenges. This makes the learning not only authentic but also deeply applicable to daily life and global wellness.",
      image: "/assets/teaching/tech-two.png",
    },
    {
      id: 3,
      heading: "Foundation in Anatomy, Alignment & Healing",
      text: "Understanding the body is essential for both practice and teaching. Our training emphasizes functional anatomy and posture alignment to help students practice safely and effectively. We also explore Ayurvedic body types (doshas) and how yoga practices can be adapted to support individual healing. This approach empowers you to modify poses, prevent injuries, and guide others with confidence and care.",
      image: "/assets/teaching/tech-three.png",
    },
    {
      id: 4,
      heading: "Student-Centered Virtual Classrooms",
      text: "We prioritize individual attention and flexible learning. Our online platform allows you to join from anywhere in the world while still receiving the support and interaction you'd find in a physical classroom. Whether you’re practicing asanas or learning about Ayurvedic herbs, our instructors provide consistent mentorship, clear feedback, and a personalized learning path tailored to your pace and goals.",
      image: "/assets/teaching/tech-two.png",
    },
  ];

  return (
    <div className="bg-[#4377B2] bg-cover flex justify-center px-6">
      <div className="container mx-auto p-2 w-full py-14 text-white">
        <h1 className="mb-10 text-4xl font-bold md:text-left">
          Our Teaching Approach
        </h1>
        <div className="flex flex-col w-full gap-10">
          {tempContent.map((item, index) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 md:grid-cols-2  gap-8 md:gap-20 mb-12 ${
                index % 2 !== 0 ? "md:grid-cols-2-reverse" : ""
              }`}
            >
              <div
                className={`text-center md:text-left ${
                  index % 2 !== 0 ? "" : "order-last"
                }`}
              >
                <h1 className="text-xl font-semibold mb-4 md:text-4xl">
                  {item.heading}
                </h1>
                <p className="text-base">{item.text}</p>
              </div>
              <Image
                alt="image"
                src={item.image}
                height={500}
                width={500}
                className={`mb-4 rounded-[25px] md:rounded-r-[25px] md:rounded-tl-[25px] ${
                  index % 2 === 0
                    ? "md:rounded-bl-[0px]"
                    : "md:rounded-br-[0px]"
                } w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeaching;
