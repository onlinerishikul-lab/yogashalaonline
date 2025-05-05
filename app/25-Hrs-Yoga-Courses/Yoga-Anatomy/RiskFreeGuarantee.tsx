'use client';
import React from 'react';

const RiskFreeGuarantee = () => {
  return (
    <section className="bg-orange-50 py-12 px-4 rounded-lg relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold text-orange-600 mb-4">
          Our Guarantee to You: Learn Risk-Free
        </h2>
        <p className="text-gray-700 mb-4">
          We're confident you'll love our course, but we understand it might not be for everyone.
          That's why we offer a money-back guarantee. If you enroll and realize it was not what you expected,
          simply let us know within 7 days for a full refund.
        </p>
        <p className="text-gray-700 mb-4">
          No questions asked. It’s our way of ensuring you can explore yoga with peace of mind.
        </p>
        <p className="text-gray-900 font-semibold mb-6">Ready to start your yoga journey?</p>

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition">
          Join Us Today Risk Free!
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-8 h-8 bg-orange-700 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-6 right-6 text-orange-300 text-2xl leading-3">
        <div className="grid grid-cols-3 gap-2">
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
        </div>
      </div>
    </section>
  );
};

export default RiskFreeGuarantee;
