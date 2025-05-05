"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function YogaCoursePage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      {/* Header Section */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold text-orange-500 mb-8">Yoga Courses For Beginners</h1>
        <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-600">
          Join Now <ArrowRight size={16} />
        </button>
      </section>

      {/* Course Info Section */}
      <section className="grid md:grid-cols-3 gap-8 items-start mb-16">
        <div className="relative rounded-2xl bg-neutral-100 text-black p-6 shadow-lg">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white text-2xl">🧘‍♂️</span>
          </div>
          <h2 className="mt-10 font-bold text-lg">Course Language</h2>
          <p className="text-sm text-gray-700 mt-1">English</p>
        </div>

        <div className="rounded-2xl bg-neutral-100 h-32"></div>

        <div className="rounded-2xl bg-orange-500 text-white p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-2">Skills You’ll Learn</h2>
          <p className="text-sm">
            Yoga Poses for Beginners | The Science of Pranayama | Yoga Anatomy Basics | Eight-Limbs of Yoga | Seven Chakras | Bandhas & Mudras | Meditation | Mantras | Mobility Drills | Surya Namaskar and Basic Sequences
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="text-center mb-16">
        <h2 className="text-2xl text-orange-500 font-semibold mb-6">Core Values</h2>
        <div className="flex justify-center items-center gap-10">
          <span className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center">🚀</span>
          <div className="w-10 h-1 bg-orange-500"></div>
          <span className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center">🔔</span>
          <div className="w-10 h-1 bg-orange-500"></div>
          <span className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center">🔁</span>
        </div>
      </section>

      {/* Why Yogshala */}
      <section>
        <h2 className="text-2xl text-orange-500 font-semibold mb-6 text-center">Why Yogshala?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-500 to-orange-700 rounded-xl">
            🎓 <span className="text-lg font-semibold">Top Indian Academy</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-500 to-orange-700 rounded-xl">
            ⭐ <span className="text-lg font-semibold">5-Star Ratings</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-500 to-orange-700 rounded-xl">
            🌍 <span className="text-lg font-semibold">Globally Recognized Certifications</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-500 to-orange-700 rounded-xl">
            👨‍🏫 <span className="text-lg font-semibold">Expert Instructors</span>
          </div>
        </div>
      </section>
    </div>
  );
}
