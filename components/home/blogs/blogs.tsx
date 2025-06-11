"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/types/course";

interface BlogsProps {
  blogs: Blog[];
}

const Blogs = ({ blogs }: BlogsProps) => {
  return (
    <div className="bg-[#FCF6F3] py-12 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}
        <h2 className="text-center text-[#4377B2] font-bold text-2xl sm:text-3xl lg:text-4xl mb-10 sm:mb-12 leading-tight">
          Expert Tips and Insights on Yoga
        </h2>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Blog Image */}
              <div className="relative w-full h-48 sm:h-52 lg:h-44 xl:h-48">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority
                />
              </div>

              {/* Blog Content */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div className="mb-4">
                  <h3 className="text-[#4377B2] text-base sm:text-lg font-bold mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-[#4377B2] text-sm sm:text-base line-clamp-3">
                    {blog.overview}
                  </p>
                </div>

                <Link href={`/blog/${blog.slug}`} passHref>
                  <button className="mt-auto w-full text-white bg-[#4377B2] hover:bg-[#365f8e] transition-colors font-semibold py-2 px-4 rounded-full">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
