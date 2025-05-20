'use client';

import React from "react";

// Shared course features
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
  <div className="flex flex-col justify-between border border-[#4377b2] rounded-xl p-6 bg-white shadow-md w-full max-w-[300px] transition hover:shadow-lg">
    <div>
      <h3 className="text-base font-semibold text-[#4377b2] mb-2">{title}</h3>
      <p className="text-sm mb-3 text-gray-700">{description}</p>
      <div className="text-2xl font-bold text-[#4377b2] mb-2">{price}</div>
      <p className="text-xs mb-4 text-gray-600">{note}</p>
    </div>
    <div className="mt-2">
      <button className="bg-[#4377b2] hover:bg-[#365a90] text-white font-medium py-3 px-5 rounded-full w-full text-sm transition">
        ENROLL NOW
      </button>
      <ul className="mt-5 text-xs text-gray-700 space-y-1">
        {features.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

// Pricing Section Container
const PricingOptions = () => (
  <div className="w-full flex flex-wrap justify-center gap-6 md:gap-8">
    <PricingCard
      title="One-Time Payment"
      description="Pay once and get full access."
      price="$250.00"
      note="One-time payment"
    />
    <PricingCard
      title="Two-Part Installments"
      description="Split into two monthly payments."
      price="$125.00 x 2"
      note="Billed monthly"
    />
    <PricingCard
      title="Three-Part Installments"
      description="Split into three monthly payments."
      price="$85.00 x 3"
      note="Billed monthly"
    />
  </div>
);

// Risk-Free Guarantee Section
const RiskFreeGuarantee = () => (
  <section className="w-full flex justify-center py-12 px-4 bg-white">
    <div className="relative bg-[#e8eefb] rounded-2xl p-8 max-w-3xl w-full overflow-hidden">
      <div className="text-center md:text-left">
        <h2 className="text-xl sm:text-2xl font-bold text-[#4377b2] mb-4">
          7-Day Risk-Free Guarantee
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We’re confident you’ll love the{" "}
          <strong>25-Hour Yoga Anatomy for a Safe Journey</strong> course.
          But if it doesn’t meet your expectations, we’ve got you covered.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Simply email us within <strong>7 days</strong> of purchase for a full
          refund—no questions asked. Explore the course, test it out, and decide
          with total peace of mind.
        </p>
        <p className="text-gray-900 font-semibold mb-6">
          You’ve got nothing to lose and everything to gain.
        </p>
        <button className="bg-[#4377b2] hover:bg-[#365a90] text-white font-semibold py-3 px-8 rounded-full transition text-sm sm:text-base">
          Enroll Now – Risk Free!
        </button>
      </div>

      {/* Decorative circle */}
      <div className="absolute top-0 left-0 w-6 h-6 bg-[#365a90] rounded-full transform -translate-x-1/2 -translate-y-1/2" />

      {/* Decorative plus signs */}
      <div className="absolute bottom-4 right-4 text-[#a8bfe7] text-lg leading-3 select-none">
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

// Main Page Component
const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-16 max-w-7xl mx-auto">
      {/* Header & Pricing */}
      <section className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4377b2] leading-tight">
            25-Hour Yoga Anatomy <br /> for a Safe Journey
          </h1>
          <p className="text-gray-700 text-sm sm:text-base max-w-md leading-relaxed">
            Master safe and effective yoga practices with in-depth anatomical
            guidance. Flexible plans to get started today.
          </p>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-2 max-w-md">
            <li>Understand key muscles and joints in yoga poses.</li>
            <li>Learn how to avoid common injuries through alignment.</li>
            <li>Gain confidence in teaching safe, mindful movement.</li>
            <li>Includes HD video lessons and a downloadable manual.</li>
            <li>Perfect for yoga teachers and dedicated practitioners.</li>
          </ul>
          <button className="bg-[#4377b2] hover:bg-[#365a90] text-white px-6 py-3 rounded-full font-medium flex items-center space-x-3 text-base w-fit">
            <span>Join Now</span>
            <span>&rarr;</span>
          </button>
        </div>
        <div className="md:w-1/2 w-full">
          <PricingOptions />
          <div className="text-center text-xs sm:text-sm text-gray-500 mt-3 max-w-md mx-auto md:mx-0">
            🔒 100% Secure Payment. Full refund within 7 days if you&#39;re not
            satisfied.
          </div>
        </div>
      </section>

      {/* Risk-Free Guarantee */}
      <RiskFreeGuarantee />
    </div>
  );
};

export default YogaCoursePage;
