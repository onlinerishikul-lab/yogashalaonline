'use client';
import Image from 'next/image';

const points = [
  {
    number: '1',
    text: 'Lorem ipsum odor amet, consectetuer adipiscing elite',
  },
  {
    number: '2',
    text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris inceptos aliquam augue tristique convallis leo cursus lectus. Sodales malesuada curabitur primis consequat cras ligula.',
  },
  {
    number: '3',
    text: 'Lorem ipsum odor amet, consectetuer adipiscing elite',
  },
  {
    number: '4',
    text: 'Lorem ipsum odor amet, consectetuer adipiscing elite',
  },
];

export default function TeachingApproach() {
  return (
    <section className="relative bg-black text-white py-16 flex flex-col items-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-10">Our Teaching Approach</h2>

      <div className="relative flex flex-col items-center md:flex-row md:justify-center w-full max-w-6xl px-4">
        {/* Left Side */}
        <div className="flex flex-col space-y-6 w-full md:w-1/3 z-10">
          {points.slice(0, 2).map((point, idx) => (
            <div
              key={idx}
              className="bg-[#5B6484] p-4 md:p-5 rounded-xl flex items-start space-x-4 text-white"
            >
              <div className="w-6 h-6 flex items-center justify-center bg-white text-black text-xs font-semibold rounded-full">
                {point.number}
              </div>
              <p className="text-sm leading-snug">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="relative w-[280px] md:w-[400px] mx-4 my-10 md:my-0 z-0">
          <Image
            src="/teaching-image.jpg" // Replace with your actual image path
            alt="Teaching"
            width={400}
            height={500}
            className="rounded-[30px] shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col space-y-6 w-full md:w-1/3 z-10">
          {points.slice(2).map((point, idx) => (
            <div
              key={idx}
              className="bg-[#5B6484] p-4 md:p-5 rounded-xl flex items-start space-x-4 text-white"
            >
              <div className="w-6 h-6 flex items-center justify-center bg-white text-black text-xs font-semibold rounded-full">
                {point.number}
              </div>
              <p className="text-sm leading-snug">{point.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <button className="mt-10 bg-gradient-to-r from-[#3B82F6] to-[#EF4444] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition">
        Learn From Experts
      </button>

      {/* Optional floating star or shape */}
      <div className="absolute top-5 right-5 text-white text-xl">✦</div>
    </section>
  );
}
