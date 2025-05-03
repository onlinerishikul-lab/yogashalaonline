"use client";
import React from 'react';
import { Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16 md:py-24 px-4"
      style={{ backgroundImage: "url('/img/25.hrs.png')" }}
    >
      {/* Dark semi-transparent overlay to improve contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-6xl mx-auto text-white">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight mb-4 animate-fade-in">
            25-Hour Yoga Anatomy Course
          </h1>
          <p className="text-lg md:text-xl max-w-2xl animate-slide-up">
            Deepen your understanding of the human body and elevate your yoga practice with our focused online anatomy training.
          </p>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 animate-slide-up">
          <button className="bg-white text-primary px-8 py-3 rounded-md hover:bg-gray-200 transition-all">
            Enroll Now – $250
          </button>
          <button className="bg-transparent text-white border border-white px-8 py-3 rounded-md hover:bg-white hover:text-primary transition-all">
            Course Details
          </button>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/90 p-6 rounded-lg shadow-md text-primary transform hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-serif font-medium mb-2">Yoga Anatomy Mastery</h3>
            <p>Gain essential knowledge of muscles, joints, and movement to enhance safe and effective teaching.</p>
          </div>

          <div className="bg-white/90 p-6 rounded-lg shadow-md text-primary transform hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-serif font-medium mb-2">Flexible Online Format</h3>
            <p>Learn at your own pace with lifetime access to video lectures, guides, and expert support.</p>
          </div>

          <div className="bg-white/90 p-6 rounded-lg shadow-md text-primary transform hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-serif font-medium mb-2">Designed for All Levels</h3>
            <p>Perfect for yoga teachers, students, and wellness professionals looking to deepen their anatomical knowledge.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
