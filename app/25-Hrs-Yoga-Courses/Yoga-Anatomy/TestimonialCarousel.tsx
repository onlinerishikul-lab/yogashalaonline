'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    company: 'Gymstory',
    title: 'Lorem Ipsum Dolor Amet, Consectetur Adipisicing Elit. Odit Vitae Porta Porta te Mattis Nunc Hoc Veni',
    content:
      'Lorem ipsum dolor amet, consectetur adipiscing elit, venenatis integer magna ut risus et malesuada. Duis vehicula placerat neque pulvinar quam. Quis primis etiam imperdiet consectetur hac tincidunt eros.',
    name: 'Name',
    role: 'Phone',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  // You can add more testimonials here
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
    <section className="py-12 bg-white w-full flex flex-col items-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-orange-600 text-center mb-2">
        Straight from Our Trainees: <br /> Experiences That Inspire
      </h2>
      <p className="text-gray-600 text-center mb-8">
        We survey all of our clients, the results of which go directly to our CEO.
      </p>

      <div className="relative max-w-3xl w-full bg-white rounded-3xl shadow-md p-6 md:p-8 flex items-center justify-between">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-100 hover:bg-orange-300 text-orange-600 p-2 rounded-full transition"
        >
          <ChevronLeft />
        </button>

        {/* Testimonial Content */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
          {/* Text Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <img src="/logo-dark.svg" alt="Company Logo" className="h-5 w-auto" />
              <p className="text-sm font-medium text-gray-800">{testimonial.company}</p>
            </div>
            <p className="font-semibold text-gray-900 mb-2">{testimonial.title}</p>
            <p className="text-gray-600 mb-4">{testimonial.content}</p>
            <p className="font-medium text-gray-800">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>

          {/* User Image */}
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-orange-200"
          />
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-100 hover:bg-orange-300 text-orange-600 p-2 rounded-full transition"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
