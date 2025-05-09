"use client";
import React from "react";
import Link from "next/link";
import { Blog } from "@/types/course";

interface BlogsProps {
  blogs: Blog[];
}

const Blogs = ({ blogs }: BlogsProps) => {
  return (
    <div className="flex justify-center px-2 bg-[#FCF6F3]">
      <div className="container mx-auto w-full py-16 px-6">
        <h2 className="text-center text-[#4377B2] font-bold text-4xl">
          Expert Tips and Insights on Yoga
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#4377B2] p-6 rounded-2xl flex flex-col justify-between h-full"
            >
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="rounded-lg h-40 w-full object-cover mb-4"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-xl font-semibold line-clamp-2">
                  {blog.title}
                </h1>
                <p className="text-white/90 text-sm line-clamp-3">
                  {blog.overview}
                </p>
              </div>
              <Link href={`/blog/${blog.slug}`}>
                <button className="text-[#4377B2] font-semibold py-2 px-4 rounded-full bg-white mt-4 hover:bg-white/90 transition-colors w-full">
                  Read Blog
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
