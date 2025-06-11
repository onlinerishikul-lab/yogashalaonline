"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  <div className="bg-white text-[#1e3a8a] rounded-xl shadow-md p-6 mb-6 flex-1">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-semibold">{author}</h3>
      <span className="text-sm text-gray-500">{date}</span>
    </div>
    <div className="flex items-center mb-3">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-xl ${
            i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
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
  const [openInstagram, setOpenInstagram] = useState<Video | null>(null);

  const renderVideoCard = (video: Video, index: number) => {
    const isPlaying = playingIndex === index;

    return (
      <div
        key={index}
        className="relative rounded-lg overflow-hidden shadow-md h-full min-h-[200px]"
      >
        {isPlaying && video.platform === "youtube" ? (
          <iframe
            src={video.url}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <button
            className="w-full h-full relative"
            onClick={() =>
              video.platform === "youtube"
                ? setPlayingIndex(index)
                : setOpenInstagram(video)
            }
          >
            <div className="relative w-full h-full">
              <Image
                src={video.thumbnail}
                alt={video.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-3xl">
              ▶
            </div>
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-[#e0f2fe] to-white min-h-screen px-4 py-10 relative">
      <Header />
      <h1 className="text-4xl font-bold text-center text-[#1e3a8a] mb-10">
        What Our Students Say
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-stretch">
        {/* Left Side: Video Grid */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {videos.map((video, index) => renderVideoCard(video, index))}
        </div>

        {/* Right Side: Testimonials */}
        <div className="flex-1 flex flex-col">
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

      {/* Instagram Modal */}
      {openInstagram && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setOpenInstagram(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setOpenInstagram(null)}
            >
              ×
            </button>
            <h2 className="text-lg font-semibold mb-2">{openInstagram.title}</h2>
            <div className="aspect-video w-full bg-gray-100">
              <iframe
                src={`https://www.instagram.com/reel/${openInstagram.url
                  .split("/reel/")[1]
                  ?.replace("/", "")}/embed`}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-sm text-blue-700 underline">
              If the video doesn&rsquo;t load,{" "}
              <a
                href={openInstagram.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                click here to view on Instagram
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
