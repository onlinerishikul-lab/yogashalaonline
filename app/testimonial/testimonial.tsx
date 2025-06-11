"use client";

import React, { useState } from "react";
import { Header } from "@/components/common/header";

type Video = {
  platform: "youtube" | "instagram";
  title: string;
  url: string;
  thumbnail: string;
};

const videos: Video[] = [
  {
    platform: "youtube",
    title: "Student Experience 1",
    url: "https://www.youtube.com/embed/1oxK0cYax9s?si=YWUW4Ks6WwT5pd0B",
    thumbnail: "https://img.youtube.com/vi/1oxK0cYax9s/hqdefault.jpg",
  },
  {
    platform: "youtube",
    title: "Student Experience 2",
    url: "https://www.youtube.com/embed/s6VazbcpPko?si=mZGJ4PYDhhCX3dsY",
    thumbnail: "https://img.youtube.com/vi/s6VazbcpPko/hqdefault.jpg",
  },
  {
    platform: "instagram",
    title: "Dimple Malkan",
    url: "https://www.instagram.com/reel/DI1THQjJr_r/",
    thumbnail: "/instagram1.jpg",
  },
  {
    platform: "instagram",
    title: "Jan",
    url: "https://www.instagram.com/reel/DI0QwlKhNxa/",
    thumbnail: "/instagram2.jpg",
  },
];

type Testimonial = {
  rating: number;
  author: string;
  date: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    rating: 5,
    author: "Dimple Malkan",
    date: "May 20, 2025",
    review:
      "Rishikul Yogshala was absolutely amazing. I gained much more than just asana training. The environment, teachers, and overall experience were transformative.",
  },
  {
    rating: 5,
    author: "Jan",
    date: "Mar 06, 2025",
    review:
      "Class after class, you'll get saturated with information in an easily digestible way. The pace, the structure, and the teachers are top-notch.",
  },
  {
    rating: 5,
    author: "Alejandro Godinez",
    date: "May 20, 2025",
    review:
      "The lineage of the teachers is incredible. They genuinely care for your growth. Super grateful for studying with them. Life-changing experience.",
  },
  {
    rating: 4,
    author: "Charmaine Wardenberg",
    date: "Apr 03, 2025",
    review:
      "Absolutely loved my experience. The campus, curriculum, and care from staff made the journey enjoyable and enlightening. Recommended for serious learners.",
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
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const renderVideoCard = (video: Video, index: number) => {
    const isPlaying = playingIndex === index;

    return (
      <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-md">
        {isPlaying ? (
          video.platform === "youtube" ? (
            <iframe
              src={video.url}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full bg-black/10 text-blue-700 text-sm underline"
            >
              View on Instagram
            </a>
          )
        ) : (
          <button
            className="w-full h-full"
            onClick={() => setPlayingIndex(index)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-3xl">
              ▶
            </div>
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-[#e0f2fe] to-white min-h-screen px-4 py-10">
      <Header />
      <h1 className="text-4xl font-bold text-center text-[#1e3a8a] mb-10">
        What Our Students Say
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Video Grid */}
        <div className="grid grid-cols-2 gap-4">
          {videos.map((video, index) => renderVideoCard(video, index))}
        </div>

        {/* Right Side: Testimonials */}
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
