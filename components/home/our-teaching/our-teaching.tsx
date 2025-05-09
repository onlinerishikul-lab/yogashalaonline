import Image from "next/image";
import React from "react";

const OurTeaching = () => {
  const tempContent = [
    {
      id: 1,
      heading: "Interactive Online Learning Experience",
      text: "Our courses are thoughtfully crafted to deliver a fully immersive and interactive learning journey in the virtual space...",
      image: "/assets/teaching/Interactive.jpg",
    },
    {
      id: 2,
      heading: "Traditional Knowledge, Modern Relevance",
      text: "Our teaching philosophy bridges the ancient wisdom of yoga and Ayurveda with the demands and realities of the modern world...",
      image: "/assets/teaching/tech-two.png",
    },
    {
      id: 3,
      heading: "Foundation in Anatomy, Alignment & Healing",
      text: "A strong grasp of anatomy and alignment is key to practicing and teaching yoga safely and effectively...",
      image: "/assets/teaching/tech-three.png",
    },
    {
      id: 4,
      heading: "Student-Centered Virtual Classrooms",
      text: "We believe that meaningful learning happens when students are seen, supported, and challenged at their level...",
      image: "/assets/teaching/tech-two.png",
    },
  ];

  return (
    <div className="bg-[#4377B2] bg-cover flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-14 text-white">
        <h1 className="mb-10 text-4xl font-bold text-center md:text-left">
          Our Teaching Approach
        </h1>
        <div className="flex flex-col gap-12">
          {tempContent.map((item, index) => (
            <div
              key={item.id}
              className={`grid md:grid-cols-2 items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full">
                <Image
                  alt="image"
                  src={item.image}
                  width={600}
                  height={400}
                  className="w-full max-h-[400px] object-cover rounded-[25px]"
                />
              </div>
              <div className="w-full text-justify">
                <h2 className="text-2xl font-semibold mb-4 md:text-3xl">
                  {item.heading}
                </h2>
                <p className="text-base leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeaching;
