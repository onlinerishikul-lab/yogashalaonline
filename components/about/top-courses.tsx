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
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Title & Image */}
          <div className="flex flex-col items-start space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#4377B2]">
              Our Top Courses
            </h2>
            <p className="text-gray-700 text-lg">
              Explore our most popular courses designed for holistic growth,
              combining the ancient practices of yoga and Ayurveda with modern
              convenience.
            </p>
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Woman practicing yoga"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>

          {/* Right: Course Cards */}
          <div className="flex flex-col space-y-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="w-full"
              >
                <Link href={course.link}>
                  <div className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-50 transition-colors shadow-md">
                    <div className="relative w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {course.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-[#4377B2] transform group-hover:translate-x-1 transition-transform" />
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
