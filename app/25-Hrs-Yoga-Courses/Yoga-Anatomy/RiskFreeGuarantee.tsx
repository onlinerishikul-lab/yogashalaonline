"use client";

import React from "react";

const RiskFreeGuarantee = () => {
  return (
    <section className="w-full flex justify-center py-12 px-4 bg-white">
      <div className="relative bg-[#e8eefb] rounded-2xl p-8 max-w-2xl w-full overflow-hidden">
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-[#4377b2] mb-4">
            7-Day Risk-Free Guarantee
          </h2>
          <p className="text-gray-700 mb-4">
            We’re confident you’ll love the <strong>25-Hour Yoga Anatomy for a Safe Journey</strong> course.
            But if it doesn’t meet your expectations, we’ve got you covered.
          </p>
          <p className="text-gray-700 mb-4">
            Simply email us within <strong>7 days</strong> of purchase for a full refund—no questions asked.
            Explore the course, test it out, and decide with total peace of mind.
          </p>
          <p className="text-gray-900 font-semibold mb-6">
            You’ve got nothing to lose and everything to gain.
          </p>
          <button className="bg-[#4377b2] hover:bg-[#365a90] text-white font-semibold py-2 px-6 rounded-full transition">
            Enroll Now – Risk Free!
          </button>
        </div>

        {/* Decorative circle */}
        <div className="absolute top-0 left-0 w-6 h-6 bg-[#365a90] rounded-full transform -translate-x-1/2 -translate-y-1/2" />

        {/* Decorative plus signs */}
        <div className="absolute bottom-4 right-4 text-[#a8bfe7] text-lg leading-3">
          <div className="grid grid-cols-3 gap-1">
            {Array(6)
              .fill("+")
              .map((char, idx) => (
                <span key={idx}>{char}</span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskFreeGuarantee;
