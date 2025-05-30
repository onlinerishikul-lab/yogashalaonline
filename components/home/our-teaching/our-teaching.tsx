"use client";
import Image from "next/image";
import React from "react";

const OurTeaching = () => {
  const tempContent = [
    {
      id: 1,
      heading: "Interactive Online Learning Experience",
      text: "Enjoy a fully immersive learning journey with live classes, recorded modules, and engaging digital resources. Get real-time Q&A, group activities, and one-on-one guidance from expert teachers. Learn at your own pace with a supportive, classroom-like environment—anywhere in the world.",
      image: "/assets/teaching/Interactive.jpg",
    },
    {
      id: 2,
      heading: "Our Teaching Philosophy",
      text: "We blend the ancient wisdom of yoga and Ayurveda with modern science and lifestyle needs. Inspired by classical texts and contemporary health practices, our approach helps you apply traditional knowledge to today’s world. Learn to manage stress, improve posture, boost immunity, and enhance mental clarity for holistic well-being.",
      image: "/assets/teaching/Traditional Knowledge.jpg",
    },
    {
      id: 3,
      heading: "Foundation in Anatomy & Alignment",
      text: "Gain a clear understanding of anatomy, alignment, and biomechanics for safe and effective yoga practice. Learn how to adapt poses for different body types and avoid injuries with smart adjustments. We also include Ayurvedic principles like dosha analysis to help personalize healing and support holistic health.",
      image: "/assets/teaching/Foundation.jpg",
    },
    {
      id: 4,
      heading: "Student-Centered Virtual Classrooms",
      text: "Our online classes offer personalized guidance, live mentorship, and flexible learning paths tailored to your goals. You’ll receive individual attention through progress check-ins and interactive sessions that feel just like in-person learning. Whether exploring yoga, Ayurveda, or philosophy, our supportive instructors are here to help you grow with confidence.",
      image: "/assets/teaching/Student-Centered.jpg",
    },
  ];

  return (
    <section className="bg-white text-[#333] px-4 md:px-6 py-5 lg:py-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#4377B2]">
          Our Teaching Approach
        </h1>
        <div className="flex flex-col gap-14">
          {tempContent.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 border-l-4 pl-4 border-[#4377B2]`}
            >
              {/* Text */}
              <div className="w-full md:w-1/2 px-2 md:px-4 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#4377B2]">
                  {item.heading}
                </h2>
                <p className="text-lg leading-relaxed text-justify">
                  {item.text}
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-center">
                <Image
                  src={item.image}
                  alt={item.heading}
                  width={500}
                  height={300}
                  className="rounded-[20px] shadow-lg object-cover w-full max-w-[500px] h-auto"
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
