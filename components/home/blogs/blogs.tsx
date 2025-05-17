"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Next Image
import { Blog } from "@/types/course";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#EDF2F7] rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2"
            >
              <div className="relative w-full h-48"> {/* ✅ Maintain aspect ratio */}
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         25vw"
                  priority // ✅ Improves LCP for above-the-fold
                />
              </div>
              <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)]">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
