"use client";
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
      image: "/assets/teaching/Traditional Knowledge.jpg",
    },
    {
      id: 3,
      heading: "Foundation in Anatomy, Alignment",
      text: "A strong grasp of anatomy and alignment is key to practicing and teaching yoga safely and effectively...",
      image: "/assets/teaching/Foundation.jpg",
    },
    {
      id: 4,
      heading: "Student-Centered Virtual Classrooms",
      text: "We believe that meaningful learning happens when students are seen, supported, and challenged at their level...",
      image: "/assets/teaching/Student-Centered.jpg",
    },
  ];

  return (
    <section className="bg-[#4377B2] text-white px-4 md:px-6 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-12">
          Our Teaching Approach
        </h1>
        <div className="flex flex-col gap-20">
          {tempContent.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-10`}
            >
              {/* Text */}
              <div className="w-full md:w-1/2 px-2 md:px-4 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.heading}
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-justify">
                  {item.text}
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-center">
                <Image
                  src={item.image}
                  alt={item.heading}
                  width={600}
                  height={400}
                  className="rounded-[20px] shadow-lg object-cover w-full max-w-[600px] h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeaching;
