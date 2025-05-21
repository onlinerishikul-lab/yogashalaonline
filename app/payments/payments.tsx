// pages/payment.tsx
"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState('one-time');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const paymentLinks: Record<string, { razorpay: string; paypal: string }> = {
    'one-time': {
      razorpay: 'https://razorpay.me/@Rishikul',
      paypal: 'https://www.paypal.me/rishikulyogshala',
    },
    'two-part': {
      razorpay: 'https://razorpay.me/@Rishikul',
      paypal: 'https://www.paypal.me/rishikulyogshala',
    },
    'three-part': {
      razorpay: 'https://razorpay.me/@Rishikul',
      paypal: 'https://www.paypal.me/rishikulyogshala',
    },
  };

  const plans = [
    {
      id: 'one-time',
      title: 'One-Time Payment',
      price: '$250.00',
      description: 'Pay once and get full access.',
      image: '/images/one-time.jpg'
    },
    {
      id: 'two-part',
      title: 'Two-Part Installments',
      price: '$125.00 x 2',
      description: 'Split into two monthly payments.',
      image: '/images/two-part.jpg'
    },
    {
      id: 'three-part',
      title: 'Three-Part Installments',
      price: '$85.00 x 3',
      description: 'Split into three monthly payments.',
      image: '/images/three-part.jpg'
    },
  ];

  const courses = [
    {
      title: "Online Yoga Training",
      dropdown: [
        {
          title: "25 Hrs Yoga Courses",
          href: "/yoga/25-hours",
          subDropdown: [
            { title: "Yoga Anotomy For Safety", href: "/25-Hrs-Yoga-Courses/Yoga-Anatomy/" },
            { title: "Face Yoga TTC", href: "/25-Hrs-Yoga-Courses/face-yoga/" },
          ],
        },
        {
          title: "50 Hrs Yoga Courses",
          href: "/yoga/50-hours",
          subDropdown: [
            { title: "Restorative Yoga TTC", href: "/50-Hrs-Yoga-Courses/Restorative-Yoga-TTC/" },
            { title: "Meditation TTC", href: "/50-Hrs-Yoga-Courses/Meditation-TTC/" },
            { title: "Pranayama TTC", href: "/50-Hrs-Yoga-Courses/Pranayama-TTC/" },
            { title: "Yoga Nidra TTC", href: "/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/" },
            { title: "Chair Yoga TTC", href: "/50-Hrs-Yoga-Courses/Chair-Yoga/" },
            { title: "Mudra & Mantra Course", href: "/50-Hrs-Yoga-Courses/Mudra-Mantra-Course/" },
            { title: "Kundalini Yoga Course", href: "/50-Hrs-Yoga-Courses/Kundalini-Yoga-Course/" },
            { title: "Kids Yoga Course", href: "/50-Hrs-Yoga-Courses/Kids-Yoga-Course/" },
            { title: "Yoga Therapy Course", href: "/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/" },
            { title: "Pregnancy Yoga", href: "/50-Hrs-Yoga-Courses/Pregnancy-Yoga/" },
          ],
        },
        {
          title: "200 Hrs Yoga Courses",
          subDropdown: [
            { title: "Multi Style Yoga TTC", href: "/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/" },
          ],
        },
        {
          title: "300 Hrs Yoga Courses",
          subDropdown: [
            { title: "Multi Style Yoga TTC", href: "/300-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen py-10 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#4377b2] mb-6 text-center">Enroll in Your Course</h1>

        {/* Course Selector */}
        <div className="mb-10">
          <label className="block text-lg font-medium text-gray-700 mb-2">Select Course</label>
          <div className="border border-gray-300 rounded-md overflow-hidden">
            {courses.map((category, i) => (
              <div key={i}>
                <button
                  className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold text-[#4377b2]"
                  onClick={() =>
                    setOpenDropdown(openDropdown === category.title ? null : category.title)
                  }
                >
                  {category.title}
                </button>
                {openDropdown === category.title &&
                  category.dropdown.map((group, j) => (
                    <div key={j} className="pl-6 bg-white">
                      <p className="text-gray-800 font-medium pt-3">{group.title}</p>
                      <ul className="mb-3">
                        {group.subDropdown.map((item, k) => (
                          <li
                            key={k}
                            className={`py-1 px-2 cursor-pointer hover:bg-blue-100 text-sm text-gray-700 ${
                              selectedCourse === item.title ? 'bg-blue-100' : ''
                            }`}
                            onClick={() => setSelectedCourse(item.title)}
                          >
                            {item.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            ))}
          </div>
          {selectedCourse && (
            <div className="mt-2 text-sm text-green-600">Selected: {selectedCourse}</div>
          )}
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {plans.map(plan => (
            <div key={plan.id} className={`border rounded-xl p-6 shadow-lg bg-white transition-transform transform hover:scale-105 ${selectedPlan === plan.id ? 'border-[#4377b2]' : 'border-gray-200'}`}>
              <Image src={plan.image} alt={plan.title} width={400} height={200} className="rounded-md mb-4" />
              <h2 className="text-2xl font-semibold text-[#4377b2] mb-2">{plan.title}</h2>
              <p className="text-lg mb-2">{plan.description}</p>
              <p className="text-3xl font-bold text-black mb-4">{plan.price}</p>
              <ul className="text-sm text-gray-700 mb-4 space-y-2">
                <li>✅ Certificate of Completion</li>
                <li>✅ 25-Hour Yoga Anatomy Curriculum</li>
                <li>✅ Downloadable Training Manual</li>
                <li>✅ Lifetime Course Access</li>
                <li>✅ 24 Months of Instructor Support</li>
              </ul>
              <button
                className="w-full bg-[#4377b2] text-white py-2 rounded-lg hover:bg-[#365e93]"
                onClick={() => setSelectedPlan(plan.id)}
              >
                ENROLL NOW
              </button>
            </div>
          ))}
        </div>

        {/* Payment Buttons */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-[#4377b2] mb-4">Proceed to Payment</h2>
          <div className="flex justify-center space-x-4">
            <a
              href={paymentLinks[selectedPlan].razorpay}
              target="_blank"
              className="bg-[#4377b2] text-white px-6 py-2 rounded-md hover:bg-[#365e93]"
              rel="noreferrer"
            >
              Razorpay
            </a>
            <a
              href={paymentLinks[selectedPlan].paypal}
              target="_blank"
              className="bg-[#4377b2] text-white px-6 py-2 rounded-md hover:bg-[#365e93]"
              rel="noreferrer"
            >
              PayPal
            </a>
          </div>
        </div>

        {/* Policy Section */}
        <div className="border-t pt-6 text-sm text-gray-700">
          <h3 className="text-lg font-semibold text-[#4377b2] mb-2">Privacy Policy</h3>
          <p className="mb-4">We respect your privacy and ensure that your personal information is safe. We do not share your details with any third party without your consent.</p>
          <h3 className="text-lg font-semibold text-[#4377b2] mb-2">Cancellation & Refund Policy</h3>
          <p>If you wish to cancel your enrollment, please contact us within 7 days of purchase. Refunds will be processed based on the course access and materials consumed. Once course material has been downloaded or accessed, refund requests may not be entertained.</p>
        </div>
      </div>
    </div>
  );
}
