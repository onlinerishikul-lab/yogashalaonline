'use client';

import React from "react";

// Pricing Features
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
  <div className="border border-[#4377b2] rounded-xl p-4 w-full bg-white shadow-md max-w-xs">
    <h3 className="text-md font-semibold text-[#4377b2] mb-1">{title}</h3>
    <p className="text-xs mb-2">{description}</p>
    <div className="text-2xl font-bold text-[#4377b2] mb-1">{price}</div>
    <p className="text-xs mb-2">{note}</p>
    <button className="bg-[#4377b2] hover:bg-[#365a90] text-white font-medium py-2 px-4 rounded-full w-full transition">
      ENROLL NOW
    </button>
    <ul className="mt-4 text-xs text-gray-700 space-y-1">
      {features.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

// Pricing Section
const PricingOptions = () => (
  <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-start w-full">
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
  </div>
);

// Main Component
const YogaCourse = () => {
  return (
    <div className="flex flex-col space-y-16 bg-gray-50 text-black p-6 md:p-12">
      {/* Section: Course Introduction */}
      <div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 md:space-x-12">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
            25-Hour Yoga Anatomy <br /> for a Safe Journey
          </h1>
          <button className="mt-6 bg-[#4377b2] hover:bg-[#365a92] text-white px-5 py-2.5 rounded-full font-medium flex items-center space-x-2 transition">
            <span>Join Now</span>
            <span>&rarr;</span>
          </button>
        </div>

        {/* Right Section: Pricing */}
        <div className="md:w-1/2 w-full">
          <PricingOptions />
          <div className="mt-6 text-center text-xs text-gray-500">
            <p>🔒 100% Secure Payment</p>
            <p className="mt-1">
              Not satisfied? Get a full refund within 7 days—no questions asked.
            </p>
          </div>
        </div>
      </div>

      {/* Section: Why Yogshala? */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#4377b2] mb-8">
          Why Choose Yogshala?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { icon: "fas fa-user-md", text: "Anatomy-Focused Approach" },
            { icon: "fas fa-heartbeat", text: "Injury Prevention Techniques" },
            { icon: "fas fa-globe", text: "Globally Recognized Accreditation" },
            { icon: "fas fa-chalkboard-teacher", text: "Led by Expert Trainers" },
          ].map(({ icon, text }, idx) => (
            <div
              key={idx}
              className="flex items-center bg-white p-4 rounded-2xl shadow-md space-x-4"
            >
              <div className="bg-[#4377b2] text-white p-3 rounded-full shadow">
                <i className={`${icon} text-sm`}></i>
              </div>
              <p className="text-sm font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YogaCourse;
