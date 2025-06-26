"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Yoga Anatomy For Safety",
    link: "/Yoga-Courses/25-Hrs-Yoga-Courses/face-yoga",
    image: "/25.hrs.png",
  },
  {
    title: "Face Yoga TTC",
    link: "/Yoga-Courses/25-Hrs-Yoga-Courses/face-yoga",
    image: "/Face-Yoga.jpg",
  },
  {
    title: "Ayurveda Immunity Course",
    link: "/Ayurveda-Courses/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course",
    image: "/Immunity.jpg",
  },
];

export default function TopCourses() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Hero Section */}
          <div className="relative h-[500px] lg:h-full rounded-3xl rounded-tr-[50px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Woman practicing yoga in nature"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-0 right-0 w-[100px] h-[100px] rounded-full border-[10px] border-white bg-[#4377B2]" />
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Our Top
                <br />
                Courses
              </h2>
              <p className="text-xl">{courses[0].title}</p>
            </div>
          </div>

          {/* Courses List */}
          <div className="flex flex-col justify-between h-full">
            {courses.slice(1).map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 1) * 0.2 }}
                className="flex-1"
              >
                <Link href={course.link}>
                  <div className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-50 transition-colors shadow-md h-full">
                    <div className="relative w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {course.title}
                      </h3>
                      <ArrowRight className="w-6 h-6 text-[#4377B2] transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
