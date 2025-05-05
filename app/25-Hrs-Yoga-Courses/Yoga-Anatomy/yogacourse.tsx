"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function YogaCoursePage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 font-sans">
      {/* Header Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-[#4377B2] mb-8">
          Yoga Courses For Beginners
        </h1>
        <button className="flex items-center gap-2 bg-[#4377B2] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#365f91] mx-auto">
          Join Now <ArrowRight size={16} />
        </button>
      </section>

      {/* Course Info Section */}
      <section className="grid md:grid-cols-3 gap-8 items-start mb-20">
        <div className="relative rounded-2xl bg-white text-black p-6 shadow-lg">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#4377B2] w-14 h-14 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white text-2xl">🧘‍♂️</span>
          </div>
          <h2 className="mt-10 font-bold text-lg">Course Language</h2>
          <p className="text-sm text-gray-700 mt-1">English</p>
        </div>

        <div className="rounded-2xl bg-white h-32 shadow-lg" />

        <div className="rounded-2xl bg-[#4377B2] text-white p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-2">Skills You’ll Learn</h2>
          <p className="text-sm leading-relaxed">
            Yoga Poses for Beginners | The Science of Pranayama | Yoga Anatomy
            Basics | Eight-Limbs of Yoga | Seven Chakras | Bandhas & Mudras |
            Meditation | Mantras | Mobility Drills | Surya Namaskar and Basic
            Sequences
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="text-center mb-20">
        <h2 className="text-2xl text-[#4377B2] font-semibold mb-6">
          Core Values
        </h2>
        <div className="flex justify-center items-center gap-6">
          <span className="bg-[#4377B2] w-12 h-12 rounded-full flex items-center justify-center text-white text-xl">
            🚀
          </span>
          <div className="w-10 h-1 bg-[#4377B2]" />
          <span className="bg-[#4377B2] w-12 h-12 rounded-full flex items-center justify-center text-white text-xl">
            🔔
          </span>
          <div className="w-10 h-1 bg-[#4377B2]" />
          <span className="bg-[#4377B2] w-12 h-12 rounded-full flex items-center justify-center text-white text-xl">
            🔁
          </span>
        </div>
      </section>

      {/* Why Yogshala */}
      <section>
        <h2 className="text-2xl text-[#4377B2] font-semibold mb-8 text-center">
          Why Yogshala?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-[#4377B2] to-[#365f91]">
            <span className="text-white text-2xl">🎓</span>
            <span className="text-lg font-semibold text-white">
              Top Indian Academy
            </span>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-[#4377B2] to-[#365f91]">
            <span className="text-white text-2xl">⭐</span>
            <span className="text-lg font-semibold text-white">
              5-Star Ratings
            </span>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-[#4377B2] to-[#365f91]">
            <span className="text-white text-2xl">🌍</span>
            <span className="text-lg font-semibold text-white">
              Globally Recognized Certifications
            </span>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-[#4377B2] to-[#365f91]">
            <span className="text-white text-2xl">👨‍🏫</span>
            <span className="text-lg font-semibold text-white">
              Expert Instructors
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
