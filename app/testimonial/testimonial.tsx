"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

export const TestimonialsPage  = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#4377b2] text-white shadow-md z-50">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/rishikulonlinlogo.png"
            alt="Rishikul Online Yoga Logo"
            width={60}
            height={60}
            className="object-contain"
            priority
          />
          <span className="text-lg font-bold">Rishikul Online</span>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm md:text-base">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/our-teachers" className="hover:underline">
            Our Team
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/courses" className="hover:underline">
            Courses
          </Link>
          <Link href="/payments/privacypolicy" className="hover:underline">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </header>
  );
};
