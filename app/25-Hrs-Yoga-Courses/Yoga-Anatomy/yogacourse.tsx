'use client';

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

const YogaCourse = () => {
  return (
    <div className="flex flex-col space-y-16 bg-gray-50 text-black p-8 md:p-16">
      {/* Section: Course Introduction */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#4377b2] leading-tight">
            25-Hour Yoga Anatomy <br /> for a Safe Journey
          </h1>
          <button className="mt-8 bg-[#4377b2] hover:bg-[#365a92] text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 transition">
            <span>Join Now</span>
            <span>&rarr;</span>
          </button>
        </div>

        {/* Replaced Right Section */}
        <div className="w-full md:w-1/2">
          <PricingCard
            title="One-Time Payment"
            description="Get full access instantly with a single payment."
            price="$250.00"
            note="one-time payment"
          />
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
            <div key={idx} className="flex items-center bg-white p-6 rounded-2xl shadow-md space-x-4">
              <div className="bg-[#4377b2] text-white p-4 rounded-full shadow">
                <i className={`${icon} text-lg`}></i>
              </div>
              <p className="text-lg font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Additional Pricing Option */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#4377b2] mb-8">
          Other Payment Option
        </h3>
        <div className="flex justify-center">
          <PricingCard
            title="Two-Part Installments"
            description="Split your payment into two easy installments."
            price="$250.00"
            note="billed twice, monthly"
          />
        </div>
        <div className="mt-10 text-xs text-gray-500 max-w-xl mx-auto">
          <p>🔒 100% Secure Payment</p>
          <p>
            Not satisfied? Get a full refund within 7 days—no questions asked. We’re committed to your learning and growth!
          </p>
        </div>
      </div>
    </div>
  );
};

export default YogaCourse;
