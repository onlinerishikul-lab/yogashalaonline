'use client';

import Image from 'next/image';

const points = [
  {
    number: '1',
    text: 'Our instructors bring years of experience to guide your learning journey.',
  },
  {
    number: '2',
    text: 'Interactive sessions ensure you grasp concepts effectively and efficiently.',
  },
  {
    number: '3',
    text: 'Personalized feedback helps you improve continuously.',
  },
  {
    number: '4',
    text: 'Real-world projects prepare you for industry challenges.',
  },
];

export default function TeachingApproach() {
  return (
    <section className="relative bg-[#101828] text-white py-16 flex flex-col items-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-[#4377b2] mb-10">
        Our Teaching Approach
      </h2>

      <div className="relative flex flex-col items-center md:flex-row md:justify-center w-full max-w-6xl px-4">
        {/* Left Points */}
        <div className="flex flex-col space-y-6 w-full md:w-1/3 z-10">
          {points.slice(0, 2).map((point, idx) => (
            <div
              key={idx}
              className="bg-[#1F2937] p-5 rounded-2xl flex items-start gap-4 shadow-md hover:shadow-lg transition"
            >
              <div className="w-7 h-7 flex items-center justify-center bg-white text-[#4377b2] text-sm font-bold rounded-full">
                {point.number}
              </div>
              <p className="text-sm leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="relative w-[280px] md:w-[400px] mx-4 my-10 md:my-0 z-0">
          <Image
            src="/teaching-image.jpg"
            alt="Teaching"
            width={400}
            height={500}
            className="rounded-[24px] shadow-2xl object-cover w-full h-auto"
          />
        </div>

        {/* Right Points */}
        <div className="flex flex-col space-y-6 w-full md:w-1/3 z-10">
          {points.slice(2).map((point, idx) => (
            <div
              key={idx}
              className="bg-[#1F2937] p-5 rounded-2xl flex items-start gap-4 shadow-md hover:shadow-lg transition"
            >
              <div className="w-7 h-7 flex items-center justify-center bg-white text-[#4377b2] text-sm font-bold rounded-full">
                {point.number}
              </div>
              <p className="text-sm leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-10 bg-[#4377b2] hover:bg-[#365a90] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg transition-transform transform hover:scale-105">
        Learn From Experts
      </button>

      {/* Decorative Element */}
      <div className="absolute top-6 right-6 text-[#a8bfe7] text-2xl animate-pulse">✦</div>
    </section>
  );
}
