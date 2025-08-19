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
    thumbnail: "t1.png",
  },
  {
    platform: "youtube",
    title: "Student Experience 2",
    url: "https://www.youtube.com/embed/s6VazbcpPko?si=mZGJ4PYDhhCX3dsY",
    thumbnail: "t2.png",
  },
  {
    platform: "youtube",
    title: "Dimple Malkan",
    url: "https://www.youtube.com/embed/5D8tnZDdOIM",
    thumbnail: "t3.png",
  },
  {
    platform: "youtube",
    title: "Jan",
    url: "https://www.youtube.com/embed/kvLuu9rhM7Y",
    thumbnail: "t4.png",
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
                fill
                className="object-cover"
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
    <div className="bg-gradient-to-b from-[#e0f2fe] to-white min-h-screen relative">
      {/* Fixed Header */}
      <div className="bg-[#4377b2]">
        <Header />
      </div>

      {/* Hero Section */}
     {/* Hero Section */}
<section className="relative bg-gradient-to-r from-[#4377b2] to-[#265a8f] text-white py-20 px-6 text-center">
  <div className="max-w-3xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Student Stories & Experiences
    </h1>
    <p className="text-base md:text-lg text-gray-100">
      Hear directly from our students about their journey, growth, and
      transformation at Rishikul Yogshala.
    </p>
  </div>

  {/* Decorative Wave */}
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="w-full h-20"
    >
      <path
        fill="#ffffff"
        fillOpacity="1"
        d="M0,192L80,197.3C160,203,320,213,480,197.3C640,181,800,139,960,133.3C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </div>
</section>


      {/* Main Content */}
      <div className="px-4 pt-16 pb-10">
        <h2 className="text-4xl font-bold text-center text-[#1e3a8a] mb-10">
          What Our Students Say
        </h2>

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
