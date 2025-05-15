"use client";
import Image from "next/image";
import React from "react";

const OurTeaching = () => {
  const tempContent = [
    {
      id: 1,
      heading: "Interactive Online Learning Experience",
      text: "Our courses are thoughtfully crafted to deliver a fully immersive and interactive learning journey in the virtual space. Through a combination of live classes, high-quality recorded modules, and dynamic digital resources, students can learn at their own pace while staying actively engaged. You'll benefit from real-time Q&A sessions, collaborative group activities, and regular one-on-one feedback from our experienced teachers. The environment is supportive and personalized, ensuring that every learner feels heard, motivated, and well-guided throughout their educational path. We use modern technology to bring the essence of classroom interaction to your screen—wherever you are in the world.",
      image: "/assets/teaching/Interactive.jpg",
    },
    {
      id: 2,
      heading: "Traditional Knowledge, Modern Relevance",
      text: "Our teaching philosophy bridges the ancient wisdom of yoga and Ayurveda with the demands and realities of the modern world. We draw inspiration from revered classical texts like the Yoga Sutras of Patanjali, Hatha Yoga Pradipika, and Charaka Samhita, while also integrating insights from contemporary science, psychology, and health practices. This blend allows students to gain a deep understanding of tradition while learning how to apply it meaningfully in today's fast-paced lifestyle. From managing stress and improving posture to boosting immunity and mental clarity, our curriculum equips you with timeless knowledge that supports holistic well-being in the 21st century.",
      image: "/assets/teaching/Traditional Knowledge.jpg",
    },
    {
      id: 3,
      heading: "Foundation in Anatomy, Alignment & Healing",
      text: "A strong grasp of anatomy and alignment is key to practicing and teaching yoga safely and effectively. Our training offers in-depth education on functional anatomy, biomechanics, and postural alignment. You'll learn how muscles, joints, and bones interact during different asanas, and how to adjust poses for various body types and limitations. In addition, we explore the principles of Ayurveda, including dosha analysis and personalized healing strategies, to create practices that support individual health goals. This dual focus empowers students to modify techniques intelligently, prevent injuries, and support others in their healing journey with clarity and confidence.",
      image: "/assets/teaching/Foundation.jpg",
    },
    {
      id: 4,
      heading: "Student-Centered Virtual Classrooms",
      text: "We believe that meaningful learning happens when students are seen, supported, and challenged at their level. Our virtual classrooms are designed to mirror the intimacy and engagement of in-person sessions. Each student receives customized attention through live mentorship, weekly progress check-ins, and flexible learning pathways tailored to their goals. Whether you're delving into yoga philosophy, mastering physical postures, or studying herbal remedies in Ayurveda, you'll experience a high-touch, responsive learning environment. Our instructors remain accessible and proactive in addressing questions, encouraging practice, and helping you grow with confidence—no matter where you're joining from.",
      image: "/assets/teaching/Student-Centered.jpg",
    },
  ];

  return (
    <div className="bg-[#4377B2] bg-cover flex justify-center px-6">
      <div className="container mx-auto py-14 text-white w-full">
        <h1 className="mb-10 text-4xl font-bold md:text-left text-center">Our Teaching Approach</h1>
        <div className="flex flex-col w-full gap-10">
          {tempContent.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col-reverse md:flex-row items-center gap-6 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Section */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-4">
                <h2 className="text-2xl md:text-4xl font-semibold mb-4">{item.heading}</h2>
                <p className="text-base text-justify">{item.text}</p>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-center">
                <Image
                  alt={item.heading}
                  src={item.image}
                  width={500}
                  height={300}
                  className="rounded-[25px] shadow-lg object-cover w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeaching;
