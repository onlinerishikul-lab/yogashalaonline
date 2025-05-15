"use client";

import React from "react";

// Shared features
const features = [
  "✅ Certificate of Completion",
  "✅ 25-Hour Yoga Anatomy Curriculum",
  "✅ Downloadable Training Manual",
  "✅ Lifetime Course Access",
  "✅ 24 Months of Instructor Support",
];

// Pricing Card Component
const PricingCard = ({
  title,
  description,
  price,
  note,
}: {
  title: string;
  description: string;
  price: string;
  note: string;
}) => (
  <div className="flex flex-col justify-between border border-[#4377b2] rounded-lg p-5 bg-white shadow-sm w-full max-w-sm h-full">
    <div>
      <h3 className="text-sm font-semibold text-[#4377b2] mb-1">{title}</h3>
      <p className="text-xs mb-2 text-gray-700">{description}</p>
      <div className="text-xl font-bold text-[#4377b2] mb-1">{price}</div>
      <p className="text-xs mb-3 text-gray-600">{note}</p>
    </div>
    <div className="mt-2">
      <button className="bg-[#4377b2] hover:bg-[#365a90] text-white font-medium py-2 px-4 rounded-full w-full text-sm transition">
        ENROLL NOW
      </button>
      <ul className="mt-4 text-xs text-gray-700 space-y-1">
        {features.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

// Risk-Free Guarantee Card (reused as a card)
const RiskFreeGuaranteeCard = () => (
  <div className="flex flex-col justify-between border border-[#4377b2] rounded-lg p-5 bg-[#e8eefb] shadow-sm w-full max-w-sm h-full relative overflow-hidden">
    <div>
      <h3 className="text-sm font-semibold text-[#4377b2] mb-2">7-Day Risk-Free Guarantee</h3>
      <p className="text-xs text-gray-700 mb-2">
        We’re confident you’ll love the <strong>25-Hour Yoga Anatomy</strong> course.
        But if not, email us within <strong>7 days</strong> for a full refund—no questions asked.
      </p>
      <p className="text-xs text-gray-900 font-semibold mb-4">
        Nothing to lose, everything to gain.
      </p>
    </div>
    <div className="mt-2">
      <button className="bg-[#4377b2] hover:bg-[#365a90] text-white font-semibold py-2 px-4 rounded-full w-full text-sm">
        Enroll Now – Risk Free!
      </button>
    </div>
    <div className="absolute top-0 left-0 w-6 h-6 bg-[#365a90] rounded-full transform -translate-x-1/2 -translate-y-1/2" />
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
);

// Pricing Section
const PricingOptions = () => (
  <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-4 w-full">
    <PricingCard
      title="One-Time Payment"
      description="Get full access instantly with a single payment."
      price="$250.00"
      note="One-time payment"
    />
    <PricingCard
      title="Two-Part Installments"
      description="Split your payment into two easy installments."
      price="$250.00"
      note="Billed twice, monthly"
    />
    <RiskFreeGuaranteeCard />
  </div>
);

// Main Yoga Course Component
const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black p-6 md:p-10 space-y-12">
      {/* Header & Pricing Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left: Intro */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
            25-Hour Yoga Anatomy <br /> for a Safe Journey
          </h1>
          <button className="bg-[#4377b2] hover:bg-[#365a92] text-white px-5 py-2.5 rounded-full font-medium flex items-center space-x-2 text-sm">
            <span>Join Now</span>
            <span>&rarr;</span>
          </button>
        </div>

        {/* Right: Pricing Cards */}
        <div className="md:w-1/2 w-full">
          <PricingOptions />
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>🔒 100% Secure Payment</p>
            <p className="mt-1">
              Not satisfied? Get a full refund within 7 days—no questions asked.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaCoursePage;
