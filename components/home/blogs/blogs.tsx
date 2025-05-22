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
    <div className="flex justify-center px-4 bg-[#ffffff]">
      <div className="container mx-auto w-full py-16 px-4 sm:px-6">
        <h2 className="text-center text-[#4377B2] font-bold text-3xl sm:text-4xl mb-12">
          Expert Tips and Insights on Yoga
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#EDF2F7] rounded-3xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl duration-300"
            >
              {/* Blog Image */}
              <div className="relative w-full h-48">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         25vw"
                  priority
                />
              </div>

              {/* Blog Content */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div className="mb-4">
                  <h3 className="text-[#4377B2] text-lg font-bold mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-[#4377B2] text-sm line-clamp-3">
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
