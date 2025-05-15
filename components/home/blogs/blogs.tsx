"use client";
import React from "react";
import Link from "next/link";
import { Blog } from "@/types/course";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

interface BlogsProps {
  blogs: Blog[];
}

const Blogs = ({ blogs }: BlogsProps) => {
  return (
    <div className="flex justify-center px-2 bg-[#FCF6F3]">
      <div className="container mx-auto w-full py-16 px-6">
        <h2 className="text-center text-[#4377B2] font-bold text-4xl mb-12">
          Expert Tips and Insights on Yoga
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          modules={[Pagination, Autoplay]}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="bg-[#EDF2F7] rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 h-full flex flex-col justify-between">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#4377B2] text-lg font-bold line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-[#4377B2] text-sm line-clamp-3">
                      {blog.overview}
                    </p>
                  </div>
                  <Link href={`/blog/${blog.slug}`}>
                    <button className="mt-4 w-full text-white bg-[#4377B2] hover:bg-[#365f8e] transition-colors font-semibold py-2 px-4 rounded-full">
                      Read Blog
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
