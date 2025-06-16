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
    title: "Yoga Anotomy For Safety",
    teacher: "By Certified Anatomy Experts",
    image: "/25.hrs.png",
    url: "/Yoga-Courses/25-Hrs-Yoga-Courses/Yoga-Anatomy/",
  },
  {
    title: "Face Yoga TTC",
    teacher: "By Face Yoga Professionals",
    image: "/face.jpg",
    url: "/Yoga-Courses/25-Hrs-Yoga-Courses/face-yoga/",
  },
  {
    title: "Restorative Yoga TTC",
    teacher: "By Restorative Yoga Teachers",
    image: "/Restoration-yoga.jpg",
    url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Restorative-Yoga-TTC/",
  },
  {
    title: "Meditation TTC",
    teacher: "By Meditation Experts",
    image: "/meditation.jpg",
    url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Meditation-TTC/",
  },
  {
    title: "Pranayama TTC",
    teacher: "By Breathing Technique Experts",
    image: "/pranayama.jpg",
    url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Pranayama-TTC/",
  },
  {
    title: "Yoga Nidra TTC",
    teacher: "By Yoga Nidra Instructors",
    image: "/yoga-nidra.jpg",
    url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/",
  },
  {
    title: "Chair Yoga TTC",
    teacher: "By Adaptive Yoga Teachers",
    image: "/Chair-Yoga.jpg",
    url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Chair-Yoga/",
  },
  {
    title: "Mudra & Mantra Course",
    teacher: "By Yogic Sound Practitioners",
    image: "/Mudra-Mantra-Course.jpg",
    url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Mudra-Mantra-Course/",
  },
  {
    title: "Kundalini Yoga Course",
    teacher: "By Kundalini Masters",
    image: "/Kundalini-Yoga-Course.jpg",
    url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Kundalini-Yoga-Course/",
  },
  {
    title: "Kids Yoga Course",
    teacher: "By Certified Kids Yoga Teachers",
    image: "/kids-yoga.jpg",
    url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Kids-Yoga-Course/",
  },
  {
    title: "Yoga Therapy Course",
    teacher: "By Yoga Therapists",
    image: "/Yoga-Therapy-Course.jpg",
    url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/",
  },
  {
    title: "Pregnancy Yoga",
    teacher: "By Prenatal Yoga Teachers",
    image: "/Pregnancy-Yoga.jpg",
    url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Pregnancy-Yoga/",
  },
  {
    title: "Core Concept of Yoga Philosophy",
    teacher: "By Yoga Scholars",
    image: "/Yoga-philosophy.jpg",
    url: "/Yoga-Courses/75-Hrs-Yoga-Courses/Yoga-Philosophy/",
  },
  {
    title: "Asana Clinic for Yoga Professionals",
    teacher: "By Advanced Asana Trainers",
    image: "/asana-clinic.jpg",
    url: "/Yoga-Courses/75-Hrs-Yoga-Courses/Asana-Clinic/",
  },
  {
    title: "Prenatal & Postnatal Yoga Course for Teachers",
    teacher: "By Pregnancy Yoga Experts",
    image: "/Prenatal-Postnatal.jpg",
    url: "/Yoga-Courses/85-Hrs-Yoga-Courses/Prenatal-Postnatal/",
  },
  {
    title: "Kids Yoga Course (95 Hrs)",
    teacher: "By Experienced Kids Yoga Trainers",
    image: "/kids-yoga.jpg",
    url: "/Yoga-Courses/95-Hrs-Yoga-Courses/Kids-Yoga-Course/",
  },
  {
    title: "Multi Style Yoga TTC (100 Hrs)",
    teacher: "By Master Yoga Trainers",
    image: "/multistyle-yoga.jpg",
    url: "/Yoga-Courses/100-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/",
  },
  {
    title: "Vinyasa Flow Yoga TTC",
    teacher: "By Flow Yoga Experts",
    image: "/vinyasaflow-yoga.png",
    url: "/Yoga-Courses/100-Hrs-Yoga-Courses/Vinyasa-Flow-Yoga-TTC/",
  },
  {
    title: "Hatha Yoga TTC",
    teacher: "By Traditional Hatha Yoga Instructors",
    image: "/hatha-yoga.png",
    url: "/Yoga-Courses/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/",
  },
  {
    title: "Advanced Yoga Therapy Course",
    teacher: "By Therapeutic Yoga Professionals",
    image: "/yoga-theraphy.jpg",
    url: "/Yoga-Courses/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/",
  },
  {
    title: "Multi Style Yoga TTC (200 Hrs)",
    teacher: "By International Yoga Masters",
    image: "/multistyle-yoga.jpg",
    url: "/Yoga-Courses/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/",
  },
  {
    title: "Multi Style Yoga TTC (300 Hrs)",
    teacher: "By Expert Yoga Teachers",
    image: "/multistyle-yoga.jpg",
    url: "/Yoga-Courses/300-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/",
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
            Our Yoga Courses
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
