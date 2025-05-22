"use client";

import React from "react";
import { Header } from "@/components/common/header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Testimonial = {
  rating: number;
  author: string;
  date: string;
  review?: string;
  videoUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    rating: 5,
    author: "Dimple Malkan",
    date: "May 20, 2025",
    review: "Rishikul Yogshala was absolutely amazing. I gained much more than just asana training...",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    rating: 5,
    author: "Jan",
    date: "Mar 06, 2025",
    review: "Class after class, you'll get saturated with information in an easily digestible way.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    rating: 5,
    author: "Alejandro Godinez",
    date: "May 20, 2025",
    review: "The lineage of the teachers is incredible. Super grateful of studying with them.",
  },
  {
    rating: 4,
    author: "Charmaine Wardenberg",
    date: "Apr 03, 2025",
    review: "Absolutely loved my experience at this yoga training school...",
  },
];

const TestimonialCard = ({ rating, author, date, review, videoUrl }: Testimonial) => (
  <div className="bg-white text-[#1e3a8a] rounded-xl shadow-md p-6 mx-2 md:mx-4">
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
    {videoUrl && (
      <div className="aspect-video mb-4 rounded overflow-hidden">
        <iframe
          src={videoUrl}
          title={`Testimonial video by ${author}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    )}
    <p className="text-sm text-gray-700">{review || "No full review provided."}</p>
  </div>
);

export default function TestimonialPage() {
  const videoTestimonials = testimonials.filter((t) => t.videoUrl).slice(0, 2);
  const remainingTestimonials = testimonials.filter((t) => !videoTestimonials.includes(t));

  return (
    <div className="bg-gradient-to-b from-[#e0f2fe] to-white min-h-screen px-4 py-10">
      <Header />
      <h1 className="text-4xl font-bold text-center text-[#1e3a8a] mb-10">
        What Our Students Say
      </h1>

      {/* Featured Video Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        {videoTestimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="aspect-video">
              <iframe
                src={t.videoUrl!}
                title={`Video by ${t.author}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-5 text-[#1e3a8a]">
              <h3 className="text-lg font-semibold">{t.author}</h3>
              <p className="text-sm text-gray-500 mb-2">{t.date}</p>
              <p className="text-sm text-gray-700">{t.review}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Swiper Slider for Text Testimonials */}
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
        >
          {remainingTestimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
