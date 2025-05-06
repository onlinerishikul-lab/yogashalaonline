'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/slide1.jpg',
    text: 'The interactive modules made learning engaging and effective.',
    avatar: '/avatar1.jpg',
    name: 'John Doe',
  },
  {
    image: '/slide2.jpg',
    text: 'I appreciated the real-world examples that clarified complex topics.',
    avatar: '/avatar2.jpg',
    name: 'Jane Smith',
  },
  {
    image: '/slide3.jpg',
    text: 'The course structure was well-organized and easy to follow.',
    avatar: '/avatar3.jpg',
    name: 'Michael Brown',
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-16 flex justify-center items-center px-4">
      <div className="relative w-full max-w-4xl h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={`Slide ${idx + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-3xl"
              priority={idx === 0}
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 flex flex-col justify-end">
              <div className="bg-white bg-opacity-90 p-4 rounded-xl shadow-md max-w-md mx-auto text-center">
                <div className="flex flex-col items-center mb-2">
                  <Image
                    src={slide.avatar}
                    alt="Avatar"
                    width={64}
                    height={64}
                    className="rounded-full border-2 border-orange-500 shadow-lg"
                  />
                  <h4 className="text-lg font-semibold mt-2">{slide.name}</h4>
                </div>
                <p className="text-gray-700 text-sm">{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
