"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

type Course = {
  title: string;
  teacher: string;
  image: string;
};

const courseList: Course[] = [
  {
    title: "Prenatal Yoga",
    teacher: "By Experienced Yoga Teachers",
    image: "/images/prenatal.jpg",
  },
  {
    title: "Postnatal Yoga",
    teacher: "By Certified Postnatal Experts",
    image: "/images/postnatal.jpg",
  },
  {
    title: "Meditation",
    teacher: "By Mindfulness Coaches",
    image: "/images/meditation.jpg",
  },
  {
    title: "Pranayama",
    teacher: "By Breathing Technique Specialists",
    image: "/images/pranayama.jpg",
  },
  {
    title: "Hatha Yoga",
    teacher: "By Traditional Yoga Gurus",
    image: "/images/hatha.jpg",
  },
  {
    title: "Vinyasa Flow",
    teacher: "By Flow Yoga Professionals",
    image: "/images/vinyasa.jpg",
  },
  {
    title: "Therapeutic Yoga",
    teacher: "By Therapeutic Yoga Instructors",
    image: "/images/therapeutic.jpg",
  },
];

export default function ClassesPage() {
  const handleExport = (course: Course) => {
    const data = {
      ...course,
      schedule: {
        english: ["6:00am", "7:30am", "6:00pm", "7:30pm IST"],
        hindi: ["6:00am", "7:30am", "5:00pm", "6:00pm IST"],
      },
      duration: "1 Hour",
      frequency: "6 Days a Week & All Time",
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${course.title.replace(/\s+/g, "_")}_Info.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#FBF6F3] py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#4377B2] mb-10">
            Our Yoga & Wellness Classes
          </h1>
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
                    <p className="text-sm text-gray-600 mb-3">
                      {course.teacher}
                    </p>
                    <ul className="text-sm text-gray-700 mb-4 space-y-1">
                      <li>
                        <strong>Everyday:</strong> 6 Days a Week & All Time
                      </li>
                      <li>
                        <strong>English:</strong> 6:00am, 7:30am, 6:00pm,
                        7:30pm IST
                      </li>
                      <li>
                        <strong>Hindi:</strong> 6:00am, 7:30am, 5:00pm, 6:00pm
                        IST
                      </li>
                      <li>
                        <strong>Session Duration:</strong> 1 Hour Class
                      </li>
                    </ul>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button className="bg-[#4377B2] text-white px-4 py-2 rounded hover:bg-[#285384] transition w-full">
                      View Detail
                    </button>
                    <button className="border border-[#4377B2] text-[#4377B2] px-4 py-2 rounded hover:bg-[#4377B2] hover:text-white transition w-full">
                      Enroll Now
                    </button>
                  </div>

                  <button
                    onClick={() => handleExport(course)}
                    className="mt-3 text-sm underline text-[#4377B2] hover:text-[#285384] transition text-left"
                  >
                    Export Course Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
