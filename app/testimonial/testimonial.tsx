import { Header } from "@/components/common/header";
import React from 'react';

const testimonials = [
  {
    rating: 5,
    author: 'Dimple Malkan',
    date: 'May 20, 2025',
    review: 'Rishikul Yogshala was absolutely amazing. I am very fortunate that I did my 200 hours there. I gained much more than just asana training. The yogic philosophy taught by Krishna is part of my daily life now. Every class and every teacher is extremely knowledgeable and always available to help and answer questions. Highly recommend! 🙏😊'
  },
  {
    rating: 5,
    author: 'Alejandro Godinez',
    date: 'May 20, 2025',
    review: 'The school is amazing! The lineage of the teachers is incredible and the teachings are very traditional and complete. Super grateful of studying with them.'
  },
  {
    rating: 5,
    author: 'Natalia Solange Castrege',
    date: 'May 20, 2025',
    review: ''
  },
  {
    rating: 3,
    author: 'Leanne Hayter',
    date: 'May 19, 2025',
    review: 'Excellent teachers.'
  },
  {
    rating: 5,
    author: 'RAMKISHAN KUGATHAS',
    date: 'May 07, 2025',
    review: 'I recently completed the Prenatal Yoga course at Rishikul Yogshala and it was a truly enriching experience...'
  },
  // ... Add the remaining testimonials similarly
];

const TestimonialCard = ({ rating, author, date, review }) => (
  <div className="bg-white text-[#4377b2] rounded-xl shadow-md p-6 mb-6">
    <div className="flex items-center mb-2">
      <div className="text-lg font-bold">{author}</div>
      <span className="ml-2 text-sm">{date}</span>
    </div>
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'}>★</span>
      ))}
      <span className="ml-2 text-sm">{rating} out of 5</span>
    </div>
    <p className="text-sm">{review || 'No full review provided.'}</p>
  </div>
);

export default function TestimonialsPage() {
  return (
    <div className="bg-[#4377b2] min-h-screen p-8">
      <Header />
      <h1 className="text-white text-3xl font-bold text-center mb-10">Testimonials</h1>
      <div className="max-w-4xl mx-auto">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </div>
  );
}
