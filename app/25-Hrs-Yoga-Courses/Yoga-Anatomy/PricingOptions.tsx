'use client';

import React from 'react';

const PricingOptions = () => {
  return (
    <section className="py-16 px-4 bg-white relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4377b2]">Our Pricing Option</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {/* Full Payment Card */}
        <div className="border border-[#4377b2] rounded-lg p-6 w-full max-w-sm bg-white shadow-lg">
          <h3 className="text-lg font-semibold text-[#4377b2] mb-2">FULL PAYMENT</h3>
          <p className="text-sm mb-4">For businesses, one-time domain registration and rights.</p>
          <div className="text-4xl font-bold text-[#4377b2] mb-2">
            $49.<span className="text-xl">99</span>
          </div>
          <p className="text-sm mb-4">per member, per Month</p>
          <button className="bg-[#4377b2] hover:bg-[#365a90] text-white font-semibold py-2 px-4 rounded-full w-full transition">
            PAY NOW
          </button>

          <ul className="mt-6 text-sm text-gray-700 space-y-2">
            <li>✅ Certification Available</li>
            <li>✅ 200 Hour Yoga Teacher Training</li>
            <li>✅ Digital Training Manual</li>
            <li>✅ Life Long Access</li>
            <li>✅ 24 Months of Teachers Support</li>
          </ul>
        </div>

        {/* Easy Installments Card */}
        <div className="border border-[#4377b2] rounded-lg p-6 w-full max-w-sm bg-white shadow-lg">
          <h3 className="text-lg font-semibold text-[#4377b2] mb-2">EASY INSTALLMENTS</h3>
          <p className="text-sm mb-4">For businesses, enterprise domain registration and rights.</p>
          <div className="text-4xl font-bold text-[#4377b2] mb-2">
            $20.<span className="text-xl">99</span>
          </div>
          <p className="text-sm mb-4">per member, per Month</p>
          <button className="bg-[#4377b2] hover:bg-[#365a90] text-white font-semibold py-2 px-4 rounded-full w-full transition">
            PAY NOW
          </button>

          <ul className="mt-6 text-sm text-gray-700 space-y-2">
            <li>✅ Certification Available</li>
            <li>✅ 200 Hour Yoga Teacher Training</li>
            <li>✅ Digital Training Manual</li>
            <li>✅ Life Long Access</li>
            <li>✅ 24 Months of Teachers Support</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        <p>100% Secure Payment</p>
        <p>
          If you are not happy after your purchase, do let us know within 7 days of purchase and we will refund you 100%.
          <br />
          We’re here for you!
        </p>
      </div>
    </section>
  );
};

export default PricingOptions;
