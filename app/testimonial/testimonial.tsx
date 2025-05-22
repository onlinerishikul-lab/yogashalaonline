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
    author: "jan",
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
  <div className="bg-white text-[#4377b2] rounded-xl shadow-lg p-6 mx-2">
    <div className="flex items-center justify-between mb-2">
      <div className="font-semibold text-lg">{author}</div>
      <span className="text-sm">{date}</span>
    </div>
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-xl ${i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-sm">{rating} out of 5</span>
    </div>
    {videoUrl ? (
      <div className="aspect-video mb-3">
        <iframe
          src={videoUrl}
          title={`Video by ${author}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-64 rounded-md"
        />
      </div>
    ) : null}
    <p className="text-sm">{review || "No full review provided."}</p>
  </div>
);

export default function TestimonialPage() {
  const videoTestimonials = testimonials.filter((t) => t.videoUrl).slice(0, 2);
  const remainingTestimonials = testimonials.filter((t) => !videoTestimonials.includes(t));

  return (
    <div className="bg-[#ffffff] min-h-screen px-4 py-8">
      <Header />
      <h1 className="text-3xl font-bold mb-6 text-center text-[#4377b2]">
        Student Testimonials
      </h1>

      {/* Featured Videos */}
      <div className="grid md:grid-cols-2 gap-8 mb-10 max-w-6xl mx-auto">
        {videoTestimonials.map((t, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src={t.videoUrl!}
              title={`Video by ${t.author}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64 md:h-80"
            />
            <div className="p-4 text-[#4377b2]">
              <div className="font-semibold text-lg">{t.author}</div>
              <div className="text-sm mb-2">{t.date}</div>
              <p className="text-sm">{t.review}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Swiper Slider for Remaining Testimonials */}
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
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
