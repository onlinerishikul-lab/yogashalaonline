'use client';

import Image from 'next/image';

const points = [
  {
    number: '1',
    text: 'Personalized attention through small group sessions designed for focused learning.',
  },
  {
    number: '2',
    text: 'Progressive curriculum with clear goals and milestones, ensuring continuous development.',
  },
  {
    number: '3',
    text: 'Blending traditional wisdom with modern teaching tools and insights.',
  },
  {
    number: '4',
    text: 'Mindful mentorship to guide learners emotionally and intellectually.',
  },
];

export default function TeachingApproach() {
  return (
    <section className="relative bg-[#f5f5f5] text-[#101828] py-16 flex flex-col items-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-[#4377b2] mb-10">
        Our Teaching Approach
      </h2>

      <div className="flex flex-col items-center md:flex-row md:justify-center w-full max-w-6xl px-4">
        <div className="flex flex-col space-y-6 w-full md:w-1/3 z-10">
          {points.slice(0, 2).map((point) => (
            <div
              key={point.number}
              className="bg-white p-5 rounded-2xl flex items-start gap-4 shadow-md hover:shadow-lg transition"
            >
              <div className="w-7 h-7 flex items-center justify-center bg-[#4377b2] text-white text-sm font-bold rounded-full">
                {point.number}
              </div>
              <p className="text-sm leading-relaxed text-gray-700">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="relative w-[280px] md:w-[400px] mx-4 my-10 md:my-0 z-0">
          <Image
            src="/teaching-image.jpg"
            alt="Teaching"
            width={400}
            height={500}
            className="rounded-[24px] shadow-2xl object-cover w-full h-auto"
          />
        </div>

        <div className="flex flex-col space-y-6 w-full md:w-1/3 z-10">
          {points.slice(2).map((point) => (
            <div
              key={point.number}
              className="bg-white p-5 rounded-2xl flex items-start gap-4 shadow-md hover:shadow-lg transition"
            >
              <div className="w-7 h-7 flex items-center justify-center bg-[#4377b2] text-white text-sm font-bold rounded-full">
                {point.number}
              </div>
              <p className="text-sm leading-relaxed text-gray-700">{point.text}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-10 bg-[#4377b2] hover:bg-[#365f91] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg transition-transform transform hover:scale-105">
        Learn From Experts
      </button>

      <div className="absolute top-6 right-6 text-[#4377b2] text-2xl animate-pulse">✦</div>
    </section>
  );
}
