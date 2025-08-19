"use client";

import { useState } from "react";
import Image from "next/image";
import { teachers } from "@/constants/about-data"; // ✅ Import teacher data
import { Header } from "@/components/common/header";
import { SiteFooter } from "@/components/common/footer";

// ---------- Teacher Card Component ----------
function TeacherCard({ teacher }: { teacher: (typeof teachers)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const preview = teacher.description.slice(0, 250);
  const isLong = teacher.description.length > 250;

  return (
    <div className="bg-[#4377b2] text-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
      {/* ---------- IMAGE WITH OVERLAY ---------- */}
      <div className="relative w-full h-72">
        <Image
          src={teacher.image}
          alt={teacher.name}
          fill
          className="rounded-t-xl object-cover object-top"
        />
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
          <h2 className="text-xl font-semibold">{teacher.name}</h2>
          <h4 className="italic text-sm text-white/80">{teacher.Subtitle}</h4>
        </div>
      </div>

      {/* ---------- DESCRIPTION ---------- */}
      <div className="p-6">
        <p className="text-sm leading-relaxed">
          {expanded ? teacher.description : preview}
          {isLong && (
            <span
              className="text-yellow-300 ml-2 cursor-pointer font-semibold"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show less" : "Read more"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

// ---------- Page Component ----------
export default function TeachersPage() {
  return (
    <>
      {/* ---------- HEADER ---------- */}
      <Header />

      {/* ---------- HERO SECTION ---------- */}
      <section className="relative bg-[#4377b2] text-white py-20 px-6 sm:px-12 lg:px-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6">Meet Our Teachers</h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            Our dedicated and experienced teachers bring wisdom, compassion, and
            a deep love for yoga to every class. Discover the people who will
            guide you on your journey at <strong>RishikulOnline</strong>.
          </p>
        </div>
      </section>

      {/* ---------- MAIN CONTENT ---------- */}
      <main className="bg-white text-[#4377b2] min-h-screen py-16 px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </main>

      {/* ---------- FOOTER ---------- */}
      <SiteFooter />
    </>
  );
}
