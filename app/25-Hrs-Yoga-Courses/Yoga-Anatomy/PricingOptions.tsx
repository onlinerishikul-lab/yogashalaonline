// components/PricingOptions.tsx
"use client";

import React from "react";

const features = [
  "✅ Certification Available",
  "✅ 200 Hour Yoga Teacher Training",
  "✅ Digital Training Manual",
  "✅ Life Long Access",
  "✅ 24 Months of Teachers Support",
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
      PAY NOW
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
          Our Pricing Option
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <PricingCard
          title="FULL PAYMENT"
          description="For businesses, one-time domain registration and rights."
          price="$49.99"
          note="per member, per Month"
        />
        <PricingCard
          title="EASY INSTALLMENTS"
          description="For businesses, enterprise domain registration and rights."
          price="$20.99"
          note="per member, per Month"
        />
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        <p>100% Secure Payment</p>
        <p>
          If you are not happy after your purchase, let us know within 7 days and we will refund you 100%.<br />
          We’re here for you!
        </p>
      </div>
    </section>
  );
};

export default PricingOptions;
