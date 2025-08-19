"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/common/header";
import { SiteFooter } from "@/components/common/footer";

type Course = {
  title: string;
  teacher: string;
  image: string;
  url?: string; // ✅ added optional URL override
};

// ✅ Converts course titles to clean lowercase URL slugs
function slugify(title: string): string {
  return title
    .normalize("NFKD")
    .replace(/\u00A0/g, " ")        // convert non-breaking space to normal space
    .replace(/\s+/g, "-")           // space → dash
    .replace(/[^\w\-]+/g, "")       // remove special characters
    .replace(/\-+/g, "-")           // collapse multiple dashes
    .toLowerCase()                  // force lowercase
    .trim();
}

const courseList: Course[] = [
  {
    title: "Prenatal Yoga",
    teacher: "By Experienced Yoga Teachers",
    image: "/Prenatal.jpg",
  },
  {
    title: "Postnatal Yoga",
    teacher: "By Certified Postnatal Experts",
    image: "/Postnatal.jpg",
  },
  {
    title: "Meditation",
    teacher: "By Mindfulness Coaches",
    image: "/meditation.png",
  },
  {
    title: "Pranayama",
    teacher: "By Breathing Technique Specialists",
    image: "/pranayama.jpg",
  },
  {
    title: "Hatha Yoga",
    teacher: "By Traditional Yoga Gurus",
    image: "/hatha-yoga.jpg",
  },
  {
    title: "Vinyasa Flow",
    teacher: "By Flow Yoga Professionals",
    image: "/vinyasaflow.jpg",
  },
  {
    title: "Exclusive Reversing Diabetic Yoga",
    teacher: "By Exclusive Reversing Diabetic Yoga Instructors",
    image: "/DiabeticYoga.jpg",
  },
  {
    title: "Power Yoga",
    teacher: "By Power Yoga Professionals",
    image: "/PowerYoga.jpg",
  },
  {
    title: "Yoga Nidra",
    teacher: "By Yoga Nidra Professionals",
    image: "/YogaNidra.jpg",
    url: "/Yoga-Classes/Yoga%20Nidra", // ✅ direct fixed URL
  },
];

export default function ClassesPage() {
  const router = useRouter();

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#FBF6F3] py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#4377B2] mb-10">
            Our Yoga & Wellness Classes
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseList.map((course, index) => {
              const slug = slugify(course.title);
              const linkHref = course.url || `/Yoga-Classes/${slug}`;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h2 className="text-2xl font-semibold text-[#4377B2] mb-1">
                        {course.title}
                      </h2>
                      <p className="text-sm text-gray-600 mb-3">
                        {course.teacher}
                      </p>
                      <ul className="text-sm text-gray-700 mb-4 space-y-1">
                        <li>
                          <strong>Everyday:</strong> 6 Days a Week & All Time
                        </li>
                        <li>
                          <strong>English:</strong> 6:00am, 7:30am, 6:00pm, 7:30pm IST
                        </li>
                        <li>
                          <strong>Hindi:</strong> 6:00am, 7:30am, 5:00pm, 6:00pm IST
                        </li>
                        <li>
                          <strong>Session Duration:</strong> 1 Hour Class
                        </li>
                      </ul>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 mt-4">
                      <Link
                        href={linkHref}   // ✅ uses direct URL if available
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
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
