"use client";

import React from "react";
import { Header } from "@/components/common/header";

type Testimonial = {
  rating: number;
  author: string;
  date: string;
  review: string;
  videoUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    rating: 5,
    author: "BEATRIZ MACHADO",
    date: "Sep 15, 2024",
    review: "Excelentes profesores, buena organización y disciplina, para poder hacer una formación intensiva, las habitaciones, la comida, el cuidado a l@s alumn@s, gracias, gracias, gracias!!!",
  },
  {
    rating: 5,
    author: "Berta Couto",
    date: "Sep 15, 2024",
    review: "It was a fantastic experience. The instructor was knowledgeable, patient and created a calming environment that made the classes enjoyable. The sessions were well-structured, catering to different skill levels, and I felt a noticeable improvement in both my flexibility and mental clarity. Overall, it was a rewarding and enriching experience that I would highly recommend to anyone looking to enhance their physical and mental well-being.",
  },
  {
    rating: 4.5,
    author: "Galina Shlyapina",
    date: "Sep 09, 2024",
    review: "Good training and atmosphere",
  },
  {
    rating: 5,
    author: "Manoj Kumar",
    date: "Aug 31, 2024",
    review: "I am very happy with a teacher training program.",
  },
  {
    rating: 5,
    author: "Ursula Machado",
    date: "Jul 10, 2024",
    review: "Excellent teachers. Course translated into Spanish. It made learning a lot easier. I had a little difficulty registering but luckily it was resolved.",
  },
  {
    rating: 5,
    author: "Shay Sadovski - Hatha Yoga Teacher",
    date: "May 07, 2024",
    review: "Very professional school, got so much knowledge and opened me to deeper spiritual world. The management was amazing too. Got all the help I needed and way above. And the food, wow!",
  },
  {
    rating: 5,
    author: "Yei Pi",
    date: "Apr 15, 2024",
    review: "Excelentes Maestros y calidad de contenidos",
  },
  {
    rating: 4,
    author: "Kemie Carpio",
    date: "Apr 13, 2024",
    review: "I learned a lot and it's authentic, however their anatomy lessons were a bit outdated when I took it years ago. Hopefully they have updated.",
  },
  {
    rating: 5,
    author: "De Luna",
    date: "Mar 18, 2024",
    review: "A wonderful experience. Body, mind and soul in its purest form. Excellent teachers and paradisiacal surroundings, a home to return soon. Namasté",
  },
  {
    rating: 5,
    author: "Michelle Akhavan",
    date: "Mar 03, 2024",
    review: "The teachers and organizers were incredible. They were the most balanced, wonderful people I’ve ever had the chance to learn from and I am forever grateful. The school is beautiful and the curriculum was very well planned. I hope to go back again when my children grow older.",
  },
  // Sample testimonials with video
  {
    rating: 5,
    author: "Dimple Malkan",
    date: "May 20, 2025",
    review: "Rishikul Yogshala was absolutely amazing. I gained much more than just asana training. The environment, teachers, and overall experience were transformative.",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    rating: 5,
    author: "Jan",
    date: "Mar 06, 2025",
    review: "Class after class, you'll get saturated with information in an easily digestible way. The teachers are top-notch.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const TestimonialCard = ({ rating, author, date, review }: Testimonial) => (
  <div className="bg-white text-[#1e3a8a] rounded-xl shadow-md p-4 mb-4">
    <div className="flex justify-between items-center mb-1">
      <h3 className="text-md font-semibold">{author}</h3>
      <span className="text-xs text-gray-500">{date}</span>
    </div>
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-sm ${i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"}`}>
          ★
        </span>
      ))}
      <span className="ml-2 text-xs text-gray-600">{rating} out of 5</span>
    </div>
    <p className="text-sm text-gray-700">{review}</p>
  </div>
);

export default function TestimonialPage() {
  return (
    <div className="bg-gradient-to-b from-[#e0f2fe] to-white min-h-screen px-4 py-10">
      <Header />
      <h1 className="text-3xl font-bold text-center text-[#1e3a8a] mb-8">What Our Students Say</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Text Reviews */}
        <div className="overflow-y-auto max-h-[80vh] pr-2">
          {testimonials.map(
            (t, index) =>
              !t.videoUrl && (
                <TestimonialCard
                  key={index}
                  author={t.author}
                  date={t.date}
                  rating={t.rating}
                  review={t.review}
                />
              )
          )}
        </div>

        {/* Video Reviews */}
        <div className="overflow-y-auto max-h-[80vh] space-y-4 pl-2">
          {testimonials.map(
            (t, index) =>
              t.videoUrl && (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-xl p-3 space-y-2"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={t.videoUrl}
                      title={`Video by ${t.author}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-40 rounded-lg"
                    />
                  </div>
                  <div className="text-[#1e3a8a]">
                    <h3 className="text-md font-semibold">{t.author}</h3>
                    <p className="text-xs text-gray-500">{t.date}</p>
                    <p className="text-sm text-gray-700">{t.review}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
