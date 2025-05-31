"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Charmaine Wardenberg",
    title: "A Warm, Inspiring Environment to Grow In",
    company: "Rishikul Yogshala",
    content:
      "Absolutely loved my experience at this yoga training school. The quality of the teachers is exceptional — each one brings deep knowledge, passion, and a truly supportive presence to the training. I also really appreciated the flexibility in their approach, allowing space for different styles of yoga teaching and encouraging us to find our own unique voice as instructors. A warm, inspiring environment to grow in.",
    role: "",
  },
  {
    name: "RAMKISHAN KUGATHAS",
    title: "Truly Enriching Experience",
    company: "Rishikul Yogshala",
    content:
      "I recently completed the Prenatal Yoga course at Rishikul Yogshala and it was a truly enriching experience. The teachers were kind, knowledgeable, and supportive throughout. I learned safe and effective yoga practices for pregnancy, along with breathing techniques and relaxation methods. The environment was peaceful and well-organized. I highly recommend Rishikul Yogshala for anyone seeking authentic and caring yoga education.",
    role: "",
  },
  {
    name: "Dimple Malkan",
    title: "Much More Than Asana Training",
    company: "Rishikul Yogshala",
    content:
      "Rishikul Yogshala was absolutely amazing. I am very fortunate that I did my 200 hours there. I gained much more than just asana training. The yogic philosophy taught by Krishna is part of my daily life now. Every class and every teacher is extremely knowledgeable and always available to help and answer questions. Highly recommend! 🙏",
    role: "",
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
        Honest reflections from those who’ve grown through our yoga training programs.
      </p>

      <div className="relative max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-10 transition-all">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#4377b2] hover:bg-[#365f91] text-white p-3 rounded-full shadow-md hover:scale-110 transition"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#4377b2] hover:bg-[#365f91] text-white p-3 rounded-full shadow-md hover:scale-110 transition"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center gap-6">
          <p className="text-sm font-medium text-[#4377b2]">{testimonial.company}</p>
          <h3 className="text-lg font-semibold text-gray-900">{testimonial.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{testimonial.content}</p>
          <div className="font-medium text-gray-800">{testimonial.name}</div>
          {testimonial.role && <div className="text-sm text-gray-500">{testimonial.role}</div>}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
