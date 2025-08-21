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
  url: string;
};

const courseList: Course[] = [
  {
    title: "Ayurvedic Basics Course for Beginners",
    teacher: "By Certified Ayurveda Instructors",
    image: "/ayurveda.png",
    url: "/Ayurveda-Courses/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/",
  },
  {
    title: "Ayurvedic Herbal Course",
    teacher: "By Herbal Science Experts",
    image: "/ayurveda1.jpg",
    url: "/Ayurveda-Courses/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/",
  },
  {
    title: "Ayurvedic Relationship Course",
    teacher: "By Certified Ayurvedic Counselors",
    image: "/Sexual-Relationship.jpg",
    url: "/Ayurveda-Courses/15-Hrs-Ayurveda-Courses/Ayurvedic-Relationship/",
  },
  {
    title: "Ayurveda Garbha Samskara Course",
    teacher: "By Ayurvedic Fertility Specialists",
    image: "/Garbha-Samskara.jpg",
    url: "/Ayurveda-Courses/15-Hrs-Ayurveda-Courses/Ayurveda-Garbha-Samskara-Course/",
  },
  {
    title: "Ayurveda Immunity Course",
    teacher: "By Ayurvedic Immunity Coaches",
    image: "/Immunity.jpg",
    url: "/Ayurveda-Courses/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course/",
  },
  {
    title: "Ayurveda Skin and Beauty Course",
    teacher: "By Ayurvedic Beauty Experts",
    image: "/Beauty.jpg",
    url: "/Ayurveda-Courses/25-Hrs-Ayurveda-Courses/Ayurveda-Skin-and-Beauty-Course/",
  },
  {
    title: "Ayurvedic Foundational Course",
    teacher: "By Senior Ayurveda Professionals",
    image: "/ayurveda1.jpg",
    url: "/Ayurveda-Courses/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/",
  },
  {
    title: "Ayurvedic Diet and Nutrition Course",
    teacher: "By Ayurvedic Nutritionists",
    image: "/Diet.jpg",
    url: "/Ayurveda-Courses/50-Hrs-Ayurveda-Courses/Ayurvedic-Diet-and-Nutrition-Course/",
  },
  {
    title: "Ayurvedic Lifestyle Course",
    teacher: "By Holistic Ayurveda Coaches",
    image: "/Lifestyle.jpg",
    url: "/Ayurveda-Courses/50-Hrs-Ayurveda-Courses/Ayurvedic-Lifestyle-Course/",
  },
];

export default function ClassesPage() {
  const router = useRouter();

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#4377b2] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Ayurveda Courses</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover the ancient wisdom of Ayurveda through our comprehensive courses taught by certified experts
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="min-h-screen bg-[#FBF6F3] py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseList.map((course, index) => (
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

                  <div className="flex gap-2 mt-4">
                    <Link
                      href={course.url}
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
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
