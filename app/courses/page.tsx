// app/online-courses/page.tsx

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Reusable Section Component
const CourseSection = ({
  id,
  title,
  description,
  image,
  reverse,
}: {
  id: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}) => {
  return (
    <section
      id={id}
      className={`flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-20 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-green-900">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
        <Link
          href={`/${id}`}
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition"
        >
          Explore {title}
        </Link>
      </div>
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default function OnlineCoursesPage() {
  return (
    <main>
      {/* Header */}
      <header className="bg-green-900 text-white py-6 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ayushman Courses</h1>
        <nav className="space-x-6">
          <Link href="#ayurveda" className="hover:text-gray-300">
            Ayurveda
          </Link>
          <Link href="#yoga" className="hover:text-gray-300">
            Yoga
          </Link>
          <Link href="#courses" className="hover:text-gray-300">
            Courses
          </Link>
        </nav>
      </header>

      {/* Ayurveda Section */}
      <CourseSection
        id="ayurveda"
        title="Online Ayurveda Programs"
        description="Learn ancient wisdom of Ayurveda from certified experts. Our programs focus on holistic healing, diet, and lifestyle practices to balance your mind, body, and spirit."
        image="/images/ayurveda.jpg"
      />

      {/* Yoga Section */}
      <CourseSection
        id="yoga"
        title="Online Yoga Classes"
        description="Experience the power of yoga from your home. Join live sessions with experienced instructors to improve flexibility, strength, and mindfulness."
        image="/images/yoga.jpg"
        reverse
      />

      {/* Courses Section */}
      <CourseSection
        id="courses"
        title="Comprehensive Online Courses"
        description="We provide structured online courses covering Ayurveda, Yoga, Meditation, and Wellness. Learn at your own pace with recorded sessions and study materials."
        image="/images/courses.jpg"
      />

      {/* Footer */}
      <footer className="bg-green-900 text-white text-center py-6 mt-12">
        <p>© {new Date().getFullYear()} Ayushman. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
