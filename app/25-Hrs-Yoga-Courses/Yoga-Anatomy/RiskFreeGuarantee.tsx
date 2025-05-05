'use client';
import React from 'react';

const RiskFreeGuarantee = () => {
  return (
    <section className="w-full flex justify-center py-12 px-4 bg-white">
      <div className="relative bg-orange-50 rounded-2xl p-8 max-w-2xl w-full overflow-hidden">
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-orange-600 mb-4">
            Our Guarantee to You: Learn Risk-Free
          </h2>
          <p className="text-gray-700 mb-4">
            We&apos;re confident you&apos;ll love our course, but we understand it might not be for everyone.
            That&apos;s why we offer a money-back guarantee. If you enroll and realize it was not what you expected,
            simply let us know within 7 days for a full refund.
          </p>
          <p className="text-gray-700 mb-4">
            No questions asked. It&apos;s our way of ensuring you can explore yoga with peace of mind.
          </p>
          <p className="text-gray-900 font-semibold mb-6">Ready to start your yoga journey?</p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition">
            Join Us Today Risk Free!
          </button>
        </div>

        {/* Decorative circle */}
        <div className="absolute top-0 left-0 w-6 h-6 bg-orange-700 rounded-full transform -translate-x-1/2 -translate-y-1/2" />

        {/* Decorative plus signs */}
        <div className="absolute bottom-4 right-4 text-orange-300 text-lg leading-3">
          <div className="grid grid-cols-3 gap-1">
            {Array(6).fill('+').map((char, idx) => (
              <span key={idx}>{char}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskFreeGuarantee;
