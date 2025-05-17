"use client";

import React from "react";

const features = [
  "✅ Certificate of Completion",
  "✅ 50-Hour Mudra & Mantra Course",
  "✅ Learn Ancient Hand Gestures & Sound Healing",
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
  <div className="flex flex-col justify-between border border-[#4377b2] rounded-xl p-4 bg-white shadow-md w-[240px] transition hover:shadow-lg">
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

const PricingOptions = () => (
  <div className="flex flex-nowrap justify-center items-start gap-4 overflow-x-auto pb-2">
    <PricingCard
      title="One-Time Payment"
      description="Full access with one payment."
      price="$450.00"
      note="One-time payment"
    />
    <PricingCard
      title="Two-Part Installments"
      description="Split into two monthly payments."
      price="$235.00 x 2"
      note="Billed monthly"
    />
    <PricingCard
      title="Three-Part Installments"
      description="Split into three monthly payments."
      price="$165.00 x 3"
      note="Billed monthly"
    />
  </div>
);

const RiskFreeGuarantee = () => (
  <section className="w-full flex justify-center py-12 px-4 bg-white">
    <div className="relative bg-[#e8eefb] rounded-2xl p-8 max-w-3xl w-full overflow-hidden">
      <div className="text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold text-[#4377b2] mb-4">
          7-Day Risk-Free Guarantee
        </h2>
        <p className="text-gray-700 mb-4">
          Experience the power of ancient{" "}
          <strong>Mudras and Mantras</strong> in our 50-Hour Course. Request a full
          refund within 7 days if you&#39;re not satisfied.
        </p>
        <p className="text-gray-700 mb-4">
          Learn sacred hand gestures and sound vibrations to enhance your yoga and meditation practice.
        </p>
        <p className="text-gray-900 font-semibold mb-6">
          Unlock the secrets of mudras and mantras risk-free.
        </p>
        <button className="bg-[#4377b2] hover:bg-[#365a90] text-white font-semibold py-2 px-6 rounded-full transition">
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
  </section>
);

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-16">
      <section className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
            50-Hour Mudra & Mantra Course <br /> Unlock Ancient Healing Practices
          </h1>
          <p className="text-gray-700 text-sm">
            Learn sacred hand gestures and mantras that energize the body and mind, enhancing your yoga and meditation.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Detailed instruction on traditional mudras and mantras.</li>
            <li>Boost your spiritual practice and healing abilities.</li>
            <li>Video lessons, chanting practices, and teaching tips.</li>
            <li>Perfect for yoga teachers and practitioners.</li>
            <li>Lifetime access plus 24 months of instructor support.</li>
          </ul>
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

      <RiskFreeGuarantee />
    </div>
  );
};

export default YogaCoursePage;
