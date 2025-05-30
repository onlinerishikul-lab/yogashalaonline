"use client";

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
  <div className="flex flex-col justify-between border border-[#4377b2] rounded-xl p-4 bg-white shadow-md w-full sm:w-[260px] transition hover:shadow-lg">
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


// Risk-Free Guarantee Section
const RiskFreeGuarantee = () => (
  <section className="w-full flex justify-center py-12 px-4 bg-white">
    <div className="relative bg-[#e8eefb] rounded-2xl p-8 max-w-3xl w-full overflow-hidden">
      <div className="text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold text-[#4377b2] mb-4">
          7-Day Risk-Free Guarantee
        </h2>
        <p className="text-gray-700 mb-4">
          We’re confident you’ll love the{" "}
          <strong>25-Hour Yoga Anatomy for a Safe Journey</strong> course.
          But if it doesn’t meet your expectations, we’ve got you covered.
        </p>
        <p className="text-gray-700 mb-4">
          Simply email us within <strong>7 days</strong> of purchase for a full
          refund—no questions asked. Explore the course, test it out, and decide
          with total peace of mind.
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

// Main Page Component
const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-16">
      {/* Header & Pricing */}
      <section className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
            25-Hour Yoga Anatomy <br /> for a Safe Journey
          </h1>
          <p className="text-gray-700 text-sm">
           Deepen your understanding of the human body with our 25-hour Yoga Anatomy course, designed to help you practice and teach yoga safely. Learn about muscles, joints, bones, and movement patterns to prevent injuries and improve alignment. This course is ideal for yoga teachers and dedicated practitioners seeking a strong foundation in anatomy for a more mindful and informed yoga journey.
          </p>
          <button className="bg-[#4377b2] hover:bg-[#365a92] text-white px-5 py-2.5 rounded-full font-medium flex items-center space-x-2 text-sm">
            <span>Join Now</span>
            <span>&rarr;</span>
          </button>
        </div>
        <div className="md:w-1/2 w-full">
          <PricingOptions />
          <div className="text-center text-xs text-gray-500 mt-2">
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
