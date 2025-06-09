"use client";

import { Header } from "@/components/common/header";
import React, { useState, useRef } from 'react';
import Image from 'next/image';

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState('advance');
  const [selectedCourse, setSelectedCourse] = useState('200-hour-yoga');
  const payRef = useRef<HTMLDivElement>(null);

  const paymentLinks: Record<string, { razorpay: string; paypal: string }> = {
    'advance': {
      razorpay: 'https://razorpay.me/@Rishikul',
      paypal: 'https://www.paypal.me/rishikulyogshala',
    },
    'remaining': {
      razorpay: 'https://razorpay.me/@Rishikul',
      paypal: 'https://www.paypal.me/rishikulyogshala',
    },
  };

  const plans = [
    {
      id: 'advance',
      title: 'Advance Payment',
      price: '$50.00',
      description: 'Pay now to reserve your spot.',
    },
    {
      id: 'remaining',
      title: 'Remaining Payment',
      price: '$200.00',
      description: 'After joining course',
    },
  ];

  const handleEnrollClick = (planId: string) => {
    setSelectedPlan(planId);
    setTimeout(() => {
      payRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen py-10 px-4 sm:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/1.png"
              alt="Peaceful yoga practice"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-[#4377b2] mb-6 text-center">Select Payment Option</h1>

          {/* Payment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {plans.map(plan => (
              <div
                key={plan.id}
                className={`border rounded-xl p-6 shadow-md transition duration-300 ${
                  selectedPlan === plan.id ? 'border-[#4377b2] bg-[#f0f7ff]' : 'border-gray-200'
                }`}
              >
                <h2 className="text-2xl font-semibold text-[#4377b2] mb-2">{plan.title}</h2>
                <p className="text-gray-700 mb-2">{plan.description}</p>
                <p className="text-3xl font-bold text-black mb-4">{plan.price}</p>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  <li>✅ Lifetime Access</li>
                  <li>✅ Certified Completion</li>
                  <li>✅ 24x7 Instructor Support</li>
                </ul>
                <button
                  onClick={() => handleEnrollClick(plan.id)}
                  className="w-full bg-[#4377b2] text-white py-2 rounded-md hover:bg-[#365e93]"
                >
                  ENROLL NOW
                </button>
              </div>
            ))}
          </div>

          {/* Payment Buttons */}
          <div ref={payRef} className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-[#4377b2] mb-4">Pay With</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={paymentLinks[selectedPlan].razorpay}
                target="_blank"
                rel="noreferrer"
                className="bg-[#4377b2] text-white px-6 py-2 rounded-md hover:bg-[#365e93]"
              >
                Razorpay
              </a>
              <a
                href={paymentLinks[selectedPlan].paypal}
                target="_blank"
                rel="noreferrer"
                className="bg-[#4377b2] text-white px-6 py-2 rounded-md hover:bg-[#365e93]"
              >
                PayPal
              </a>
            </div>
          </div>

          {/* Policies */}
          <div className="border-t pt-6 text-sm text-gray-700 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#4377b2] mb-1">Privacy Policy</h3>
              <p>We respect your privacy. Your information is safe and will not be shared without consent.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#4377b2] mb-1">Cancellation & Refund Policy</h3>
              <p>
                Contact us within 7 days for cancellations. Refunds depend on content access. Downloaded material may not qualify for refunds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
