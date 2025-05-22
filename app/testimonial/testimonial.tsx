// components/TestimonialPage.tsx
import React from "react";
import Slider from "react-slick";
import { Header } from "@/components/common/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    review:
      "Rishikul Yogshala was absolutely amazing. I gained much more than just asana training...",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4", // example video
  },
  {
    rating: 5,
    author: "Alejandro Godinez",
    date: "May 20, 2025",
    review:
      "The lineage of the teachers is incredible. Super grateful of studying with them.",
  },
  {
    rating: 5,
    author: "jan",
    date: "Mar 06, 2025",
    review:
      "Class after class, you'll get saturated with information in an easily digestible way.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    rating: 4,
    author: "Charmaine Wardenberg",
    date: "Apr 03, 2025",
    review:
      "Absolutely loved my experience at this yoga training school...",
  },
  // Add more testimonials as needed
];

const TestimonialCard = ({ rating, author, date, review, videoUrl }: Testimonial) => (
  <div className="bg-[#ffffff] text-[#4377b2] rounded-xl shadow-lg p-6 mx-2">
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
      <div className="aspect-w-16 aspect-h-9 mb-3">
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
  };

  return (
    <div className="bg-[#ffffff] min-h-screen px-4 py-8">
      <Header />
      <h1 className="text-3xl font-bold mb-6 text-center text-[#4377b2]">
        Student Testimonials
      </h1>
      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={index}
              rating={t.rating}
              author={t.author}
              date={t.date}
              review={t.review}
              videoUrl={t.videoUrl}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
