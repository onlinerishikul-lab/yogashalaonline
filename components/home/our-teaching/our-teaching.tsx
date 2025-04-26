import Image from "next/image";
import React from "react";

const OurTeaching = () => {
  const tempContent = [
    {
      id: 1,
      heading: "Comprehensive Learning Framework",
      text: "Rishikul Online training program provides an all-encompassing approach to yoga, integrating physical practices like asanas and pranayama with the mental and spiritual aspects of meditation and philosophy. By fusing traditional techniques with contemporary insights, we ensure the teachings are both timeless and relevant. The focus is on creating a connection between the body and mind, supported by a welcoming community that encourages personal growth and mutual learning.",
      image: "/assets/teaching/tech-one.png",
    },
    {
      id: 2,
      heading: "Practical Teaching Experience",
      text: "A key aspect of Virtual YTCC program is hands-on teaching practice, allowing you to develop your skills in real-time. Through guided sessions and constructive feedback, you'll refine your teaching techniques and discover your unique style. We emphasize creating a safe and inclusive space for students, equipping you with the tools to lead classes confidently and effectively, no matter the level of your audience.",
      image: "/assets/teaching/tech-two.png",
    },
    {
      id: 3,
      heading: "Authentic Yoga Philosophy & Lifestyle",
      text: "Online YTCC training dives deep into the wisdom of ancient yoga texts, such as the Yoga Sutras and the Bhagavad Gita, exploring their significance and application in modern life. This knowledge extends beyond the mat, inspiring a lifestyle rooted in mindfulness and self-awareness. By understanding yoga's cultural origins, you'll gain a deeper appreciation for the practice and the ability to teach with authenticity and respect for its traditions.",
      image: "/assets/teaching/tech-three.png",
    },
    {
      id: 4,
      heading: "Focus on Anatomy and Alignment",
      text: "Understanding the human body is essential for safe and effective yoga teaching. Rishikul Online YTCC program offers detailed insights into the mechanics of movement, helping you prevent injuries and adapt postures to suit individual needs. With a strong emphasis on alignment, you'll learn to guide students into poses safely and confidently. Additionally, the training equips you to provide precise verbal instructions and hands-on adjustments, enhancing the overall learning experience for your students.",
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
