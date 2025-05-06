'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    company: 'YogAspire',
    title: 'Empowering and Eye-Opening',
    content:
      'The 25-hour course gave me a solid understanding of anatomy in yoga. It changed how I practice and teach — I feel safer and more confident.',
    name: 'Anjali Mehta',
    role: 'Certified Yoga Instructor',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    company: 'InnerGlow Yoga',
    title: 'Supportive & Insightful Journey',
    content:
      'The instructors made complex anatomy feel approachable. Their guidance was compassionate and professional throughout the course.',
    name: 'David Lin',
    role: 'Yoga Therapy Practitioner',
    image: 'https://randomuser.me/api/portraits/men/53.jpg',
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-[#f5f5f5] w-full flex flex-col items-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-[#4377b2] text-center mb-3">
        What Our Students Say
      </h2>
      <p className="text-gray-600 text-center mb-10 text-sm md:text-base">
        Honest reflections from those who’ve grown through our 25-hour yoga anatomy journey.
      </p>

      <div className="relative max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-10 transition-all">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute bottom-4 left-4 transform bg-[#4377b2] hover:bg-[#365f91] text-white p-3 rounded-full shadow-md hover:scale-110 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute bottom-4 right-4 transform bg-[#4377b2] hover:bg-[#365f91] text-white p-3 rounded-full shadow-md hover:scale-110 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#4377b2] shadow-md"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <p className="text-sm font-medium text-[#4377b2]">{testimonial.company}</p>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {testimonial.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{testimonial.content}</p>
            <div className="font-medium text-gray-800">{testimonial.name}</div>
            <div className="text-sm text-gray-500">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
