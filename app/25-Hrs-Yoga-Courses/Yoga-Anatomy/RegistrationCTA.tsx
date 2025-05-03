"use client";
import React from 'react';

const RegistrationCTA = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#2c4a6e] text-[#4377b2]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Begin Your Teacher Training Journey</h2>
        <p className="text-lg text-[#dbe8f6] max-w-3xl mx-auto mb-8">
          Take the first step toward becoming a certified yoga teacher with our comprehensive Online 200-Hour Teacher Training program. Join our global community of teachers and change lives—including your own.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-[#4377b2] text-white px-6 py-2 rounded-md hover:bg-[#375f90] transition-all">
            Apply Now
          </button>
          <button className="bg-[#f0f4fa] text-[#4377b2] border border-[#4377b2] px-8 py-3 rounded-md hover:bg-[#e4edf8] transition-all">
            Download Syllabus
          </button>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="text-center">
            <div className="text-3xl font-semibold">15+</div>
            <p className="text-[#b0c4dd]">Years Experience</p>
          </div>
          <div className="h-12 w-px bg-[#365c87] hidden md:block"></div>
          <div className="text-center">
            <div className="text-3xl font-semibold">1,000+</div>
            <p className="text-[#b0c4dd]">Graduates</p>
          </div>
          <div className="h-12 w-px bg-[#365c87] hidden md:block"></div>
          <div className="text-center">
            <div className="text-3xl font-semibold">30+</div>
            <p className="text-[#b0c4dd]">Countries</p>
          </div>
        </div>

        <div className="mt-12 border-t border-[#34567f] pt-8">
          <p className="text-[#9db5d4]">
            Next Program Start Date: September 15, 2025
          </p>
          <p className="mt-2 text-[#9db5d4]">
            Early Bird Registration Ends: July 15, 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationCTA;
