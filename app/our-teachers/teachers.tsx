"use client";
import { useState } from "react";
import Image from "next/image";
import { teachers } from "@/constants/about-data"; // ✅ Import from constants

function TeacherCard({ teacher }: { teacher: (typeof teachers)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const preview = teacher.description.slice(0, 250);
  const isLong = teacher.description.length > 250;

  return (
    <div className="bg-[#4377b2] text-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
      <div className="relative w-full h-72">
        <Image
          src={teacher.image}
          alt={teacher.name}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold">{teacher.name}</h2>
        <h4 className="italic text-sm mb-3 text-white/80">{teacher.Subtitle}</h4>
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

export default function TeachersPage() {
  return (
    <div className="bg-white text-[#4377b2] min-h-screen py-12 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Teachers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
}
