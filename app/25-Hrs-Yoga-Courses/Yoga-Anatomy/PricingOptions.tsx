"use client";

import React from "react";

const features = [
  "✅ Certificate of Completion",
  "✅ 25-Hour Yoga Anatomy Curriculum",
  "✅ Downloadable Training Manual",
  "✅ Lifetime Course Access",
  "✅ 24 Months of Instructor Support",
];

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
  <div className="border border-[#4377b2] rounded-lg p-6 w-full max-w-sm bg-white shadow-lg">
    <h3 className="text-lg font-semibold text-[#4377b2] mb-2">{title}</h3>
    <p className="text-sm mb-4">{description}</p>
    <div className="text-4xl font-bold text-[#4377b2] mb-2">{price}</div>
    <p className="text-sm mb-4">{note}</p>
    <button className="bg-[#4377b2] hover:bg-[#365a90] text-white font-semibold py-2 px-4 rounded-full w-full transition">
      ENROLL NOW
    </button>
    <ul className="mt-6 text-sm text-gray-700 space-y-2">
      {features.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

const PricingOptions = () => {
  return (
    <section className="py-16 px-4 bg-white relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4377b2]">
          Choose Your Plan
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Flexible pricing for your journey to safe, anatomy-informed yoga practice.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <PricingCard
          title="One-Time Payment"
          description="Get full access instantly with a single payment."
          price="$250.00"
          note="one-time payment"
        />
        <PricingCard
          title="Two-Part Installments"
          description="Split your payment into two easy installments."
          price="$250.00"
          note="billed twice, monthly"
        />
      </div>

      <div className="mt-10 text-center text-xs text-gray-500 max-w-xl mx-auto">
        <p>🔒 100% Secure Payment</p>
        <p>
          Not satisfied? Get a full refund within 7 days—no questions asked. We’re committed to your learning and growth!
        </p>
      </div>
    </section>
  );
};

export default PricingOptions;
