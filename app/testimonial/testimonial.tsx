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
    author: "Dimple Malkan",
    date: "May 20, 2025",
    review:
      "Rishikul Yogshala was absolutely amazing. I gained much more than just asana training. The environment, teachers, and overall experience were transformative. I highly recommend it to anyone seeking authentic yoga.",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    rating: 5,
    author: "Jan",
    date: "Mar 06, 2025",
    review:
      "Class after class, you'll get saturated with information in an easily digestible way. The pace, the structure, and the teachers are top-notch. I left with a deep understanding and great friends.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    rating: 5,
    author: "Alejandro Godinez",
    date: "May 20, 2025",
    review:
      "The lineage of the teachers is incredible. They genuinely care for your growth. I’m super grateful for studying with them and this experience has changed my life and my view on yoga forever.",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    rating: 4,
    author: "Charmaine Wardenberg",
    date: "Apr 03, 2025",
    review:
      "Absolutely loved my experience at this yoga training school. The campus, curriculum, and care from staff made the journey enjoyable and enlightening. Would recommend it to serious learners.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
    {
    rating: 5,
    author: "Dimple Malkan",
    date: "May 20, 2025",
    review:
      "Rishikul Yogshala was absolutely amazing. I gained much more than just asana training. The environment, teachers, and overall experience were transformative. I highly recommend it to anyone seeking authentic yoga.",

  },
  {
    rating: 5,
    author: "Jan",
    date: "Mar 06, 2025",
    review:
      "Class after class, you'll get saturated with information in an easily digestible way. The pace, the structure, and the teachers are top-notch. I left with a deep understanding and great friends.",

  },
  {
    rating: 5,
    author: "Alejandro Godinez",
    date: "May 20, 2025",
    review:
      "The lineage of the teachers is incredible. They genuinely care for your growth. I’m super grateful for studying with them and this experience has changed my life and my view on yoga forever.",

  },
  {
    rating: 4,
    author: "Charmaine Wardenberg",
    date: "Apr 03, 2025",
    review:
      "Absolutely loved my experience at this yoga training school. The campus, curriculum, and care from staff made the journey enjoyable and enlightening. Would recommend it to serious learners.",
  },
];

const TestimonialCard = ({ rating, author, date, review }: Testimonial) => (
  <div className="bg-white text-[#1e3a8a] rounded-xl shadow-md p-6 mb-6">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-semibold">{author}</h3>
      <span className="text-sm text-gray-500">{date}</span>
    </div>
    <div className="flex items-center mb-3">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-xl ${i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating} out of 5</span>
    </div>
    <p className="text-sm text-gray-700">{review}</p>
  </div>
);

export default function TestimonialPage() {
  return (
    <div className="bg-gradient-to-b from-[#e0f2fe] to-white min-h-screen px-4 py-10">
      <Header />
      <h1 className="text-4xl font-bold text-center text-[#1e3a8a] mb-10">
        What Our Students Say
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Video Testimonials only (no text description) */}
        <div className="space-y-8">
          {testimonials.map(
            (t, index) =>
              t.videoUrl && (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="aspect-video">
                    <iframe
                      src={t.videoUrl}
                      title={`Video by ${t.author}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )
          )}
        </div>

        {/* Right: Text Testimonials */}
        <div>
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={index}
              author={t.author}
              date={t.date}
              rating={t.rating}
              review={t.review}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
