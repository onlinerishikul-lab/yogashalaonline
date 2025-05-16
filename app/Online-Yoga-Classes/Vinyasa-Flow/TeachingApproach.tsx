'use client';

import Image from 'next/image';

const points = [
  {
    number: '1',
    text: 'Small group sessions that ensure individual support on your yoga journey.',
  },
  {
    number: '2',
    text: 'Step-by-step anatomical guidance tailored to a 25-hour progressive learning plan.',
  },
  {
    number: '3',
    text: 'Hands-on posture correction and alignment tips from certified instructors.',
  },
  {
    number: '4',
    text: 'Integrating ancient yogic principles with modern anatomical knowledge.',
  },
  {
    number: '5',
    text: 'Breathwork and mindfulness practices for holistic well-being.',
  },
  {
    number: '6',
    text: 'Experienced mentors to support your safe, mindful, and confident practice.',
  },
];

export default function TeachingApproach() {
  return (
    <section className="relative bg-[#f5f5f5] text-[#101828] py-16 flex flex-col items-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-[#4377b2] mb-10">
        Our Yoga Teaching Approach
      </h2>

      <div className="flex flex-col items-center md:flex-row md:justify-center w-full max-w-6xl px-4">
        {/* Left Side */}
        <div className="flex flex-col space-y-6 w-full md:w-1/3 z-10">
          {points.slice(0, 3).map((point) => (
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

        {/* Center Image */}
        <div className="relative w-[280px] md:w-[400px] mx-4 my-10 md:my-0 z-0">
          <Image
            src="/teaching-image.jpg" // Replace with a relevant yoga image
            alt="Yoga Teaching"
            width={400}
            height={500}
            className="rounded-[24px] shadow-2xl object-cover w-full h-auto"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col space-y-6 w-full md:w-1/3 z-10">
          {points.slice(3).map((point) => (
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

      {/* Call to Action Button */}
      <button className="mt-10 bg-[#4377b2] hover:bg-[#365f91] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg transition-transform transform hover:scale-105">
        Enroll in the 25-hr Course
      </button>

      {/* Decorative Icon */}
      <div className="absolute top-6 right-6 text-[#4377b2] text-2xl animate-pulse">✦</div>
    </section>
  );
}
