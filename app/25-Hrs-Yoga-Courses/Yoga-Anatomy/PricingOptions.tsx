"use client"
import React from "react";
const PricingOptions = () => {
  return (
    <section className="bg-white py-16 px-4 relative overflow-hidden">
      {/* Background curves can be applied with CSS or an SVG */}
      <div className="absolute inset-0 bg-[url('/pricing-bg.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-12">
          Our Pricing Option
        </h2>

        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {/* Full Payment */}
          <div className="border-2 border-orange-500 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-left">FULL PAYMENT</h3>
            <p className="text-sm text-left text-gray-600 mb-4">
              For businesses, one-time domain registration and options.
            </p>
            <div className="text-4xl font-bold text-orange-600 mb-2">$49.99</div>
            <p className="text-sm text-gray-600 mb-4">Per member, per Month</p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded font-medium w-full">
              PAY NOW
            </button>

            <ul className="text-left mt-6 space-y-2 text-sm text-gray-700">
              <li>✅ Certification Available</li>
              <li>✅ 200 Hour Yoga Teacher Training</li>
              <li>✅ Digital Training Manual</li>
              <li>✅ Life Long Access</li>
              <li>✅ 24 Months of Teachers Support</li>
            </ul>
          </div>

          {/* Easy Installments */}
          <div className="border-2 border-orange-500 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-left">EASY INSTALLMENTS</h3>
            <p className="text-sm text-left text-gray-600 mb-4">
              For businesses, one-time domain registration and options.
            </p>
            <div className="text-4xl font-bold text-orange-600 mb-2">$20.99</div>
            <p className="text-sm text-gray-600 mb-4">Per member, per Month</p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded font-medium w-full">
              PAY NOW
            </button>

            <ul className="text-left mt-6 space-y-2 text-sm text-gray-700">
              <li>✅ Certification Available</li>
              <li>✅ 200 Hour Yoga Teacher Training</li>
              <li>✅ Digital Training Manual</li>
              <li>✅ Life Long Access</li>
              <li>✅ 24 Months of Teachers Support</li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-10">
          100% Secure Payment <br />
          If you are not happy after your p
