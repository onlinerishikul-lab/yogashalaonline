"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/common/header";
import { SiteFooter } from "@/components/common/footer";

// ---------- TYPES ----------
type Course = {
  title: string;
  teacher: string;
  image: string;
  url?: string;
};

// ---------- SLUGIFY (for Wellness Section) ----------
function slugify(title: string): string {
  return title
    .normalize("NFKD")
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-+/g, "-")
    .trim();
}

// ---------- COURSES (your same arrays here) ----------
const ayurvedaCourses: Course[] = [ /* ... your Ayurveda courses ... */ ];
const yogaCourses: Course[] = [ /* ... your Yoga courses ... */ ];
const wellnessCourses: Course[] = [ /* ... your Wellness courses ... */ ];

// ---------- COMPONENT ----------
export default function AllCoursesPage() {
  const router = useRouter();

  const renderCourses = (courses: Course[], isWellness = false) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => {
        const slug = isWellness ? slugify(course.title) : "";
        const linkHref = isWellness
          ? (course.url || `/Yoga-Classes/${slug}`)
          : (course.url || "#");

        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
          >
            <div className="relative h-48 w-full">
              <Image
                src={course.image}
                alt={course.title}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-2xl font-semibold text-[#4377B2] mb-1">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-600 mb-3">{course.teacher}</p>
                <ul className="text-sm text-gray-700 mb-4 space-y-1">
                  <li><strong>Everyday:</strong> 6 Days a Week & All Time</li>
                  <li><strong>English:</strong> 6:00am, 7:30am, 6:00pm, 7:30pm IST</li>
                  <li><strong>Hindi:</strong> 6:00am, 7:30am, 5:00pm, 6:00pm IST</li>
                  <li><strong>Session Duration:</strong> 1 Hour Class</li>
                </ul>
              </div>
              <div className="flex gap-2 mt-4">
                <Link
                  href={linkHref}
                  className="bg-[#4377B2] text-white px-4 py-2 rounded hover:bg-[#285384] transition w-full text-center"
                >
                  View Detail
                </Link>
                <button
                  onClick={() => router.push("/contact")}
                  className="border border-[#4377B2] text-[#4377B2] px-4 py-2 rounded hover:bg-[#4377B2] hover:text-white transition w-full"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <Header />

      {/* ✅ Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="/hero-courses.jpg" // 👉 Replace with your image
          alt="Courses Hero"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our Courses
          </h1>
          <p className="max-w-2xl text-lg">
            Learn Ayurveda, Yoga & Wellness from certified professionals.
          </p>
        </div>
      </section>

      {/* Ayurveda Section */}
      <section className="min-h-screen bg-[#FBF6F3] py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#4377B2] mb-10">
            Our Ayurveda Courses
          </h1>
          {renderCourses(ayurvedaCourses)}
        </div>
      </section>

      {/* Yoga Section */}
      <section className="min-h-screen bg-[#F9F9FF] py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#4377B2] mb-10">
            Our Yoga Courses
          </h1>
          {renderCourses(yogaCourses)}
        </div>
      </section>

      {/* Wellness Section */}
      <section className="min-h-screen bg-[#FBF6F3] py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#4377B2] mb-10">
            Our Yoga Classes
          </h1>
          {renderCourses(wellnessCourses, true)}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
