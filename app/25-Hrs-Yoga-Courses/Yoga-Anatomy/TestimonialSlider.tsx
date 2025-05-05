// components/TestimonialSlider.tsx
'use client';

import React, { useEffect, useState } from 'react';

const slides = [
  {
    image: '/slide1.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    avatar: '/avatar1.jpg',
  },
  {
    image: '/slide2.jpg',
    text: 'Ut aliquam purus sit amet luctus venenatis...',
    avatar: '/avatar2.jpg',
  },
  {
    image: '/slide3.jpg',
    text: 'Lectus magna fringilla urna, porttitor...',
    avatar: '/avatar3.jpg',
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-12 bg-white flex justify-center">
      <div className="relative w-[600px] h-[300px] overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute transition-opacity duration-1000 ease-in-out w-full h-full ${
              current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white p-4">
              <img
                src={slide.avatar}
                alt="Avatar"
                className="w-16 h-16 rounded-full border-2 border-white mb-4"
              />
              <p className="text-center text-sm">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
