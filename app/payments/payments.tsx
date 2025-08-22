"use client";

import { Header } from "@/components/common/header";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Policies Section Component
export const PoliciesSection = () => {
  const policies = [
    {
      name: "Privacy Policy",
      link: "/payments/privacypolicy",
    },
    {
      name: "Cancellation Policy",
      link: "/payments/cancellation-policy",
    },
    {
      name: "Terms and Conditions",
      link: "/payments/terms-and-conditions",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
          Our Policies
        </h2>
        <ul className="space-y-4">
          {policies.map((policy, index) => (
            <li key={index}>
              <Link
                href={policy.link}
                className="block text-lg font-semibold text-indigo-600 hover:underline"
              >
                {policy.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState("advance");
  const [selectedCourse, setSelectedCourse] = useState("Yoga Anatomy For Safety");
  const payRef = useRef<HTMLDivElement>(null);

  const paymentLinks: Record<string, { razorpay: string; paypal: string }> = {
    advance: {
      razorpay: "https://razorpay.me/@Rishikul",
      paypal: "https://www.paypal.me/rishikulyogshala",
    },
    remaining: {
      razorpay: "https://razorpay.me/@Rishikul",
      paypal: "https://www.paypal.me/rishikulyogshala",
    },
  };

  const plans = [
    { id: "advance", title: "Advance Payment", price: "$50.00", description: "Pay now to reserve your spot." },
    { id: "remaining", title: "Remaining Payment", price: "$200.00", description: "When Joining The Course" },
  ];

  // ALL COURSES LIST
  const courses = [
    // --- 25 Hrs Yoga ---
    { id: "Yoga Anatomy For Safety", name: "25Hrs - Yoga Anatomy For Safety" },
    { id: "Face Yoga TTC", name: "25Hrs - Face Yoga TTC" },

    // --- 50 Hrs Yoga ---
    { id: "Restorative Yoga TTC", name: "50Hrs - Restorative Yoga TTC" },
    { id: "Meditation TTC", name: "50Hrs - Meditation TTC" },
    { id: "Pranayama TTC", name: "50Hrs - Pranayama TTC" },
    { id: "Yoga Nidra TTC", name: "50Hrs - Yoga Nidra TTC" },
    { id: "Chair Yoga TTC", name: "50Hrs - Chair Yoga TTC" },
    { id: "Mudra & Mantra Course", name: "50Hrs - Mudra & Mantra Course" },
    { id: "Kundalini Yoga Course", name: "50Hrs - Kundalini Yoga Course" },
    { id: "Kids Yoga Course", name: "50Hrs - Kids Yoga Course" },
    { id: "Yoga Therapy Course", name: "50Hrs - Yoga Therapy Course" },
    { id: "Pregnancy Yoga", name: "50Hrs - Pregnancy Yoga" },

    // --- 75 Hrs Yoga ---
    { id: "Core Concept of Yoga Philosophy", name: "75Hrs - Core Concept of Yoga Philosophy" },
    { id: "Asana Clinic for Yoga Professionals", name: "75Hrs - Asana Clinic for Yoga Professionals" },

    // --- 85 Hrs Yoga ---
    { id: "Prenatal & Postnatal Yoga Course", name: "85Hrs - Prenatal & Postnatal Yoga Course" },

    // --- 95 Hrs Yoga ---
    { id: "Kids Yoga Course 95", name: "95Hrs - Kids Yoga Course" },

    // --- 100 Hrs Yoga ---
    { id: "Multi Style Yoga TTC 100", name: "100Hrs - Multi Style Yoga TTC" },
    { id: "Vinyasa Flow Yoga TTC", name: "100Hrs - Vinyasa Flow Yoga TTC" },
    { id: "Hatha Yoga TTC", name: "100Hrs - Hatha Yoga TTC" },
    { id: "Advanced Yoga Therapy Course", name: "100Hrs - Advanced Yoga Therapy Course" },

    // --- 200 Hrs Yoga ---
    { id: "Multi Style Yoga TTC 200", name: "200Hrs - Multi Style Yoga TTC" },

    // --- 300 Hrs Yoga ---
    { id: "Multi Style Yoga TTC 300", name: "300Hrs - Multi Style Yoga TTC" },

    // --- Ayurveda 10 Hrs ---
    { id: "Ayurvedic Basics Course", name: "10Hrs - Ayurvedic Basics Course for Beginners" },
    { id: "Ayurvedic Herbal Course", name: "10Hrs - Ayurvedic Herbal Course" },

    // --- Ayurveda 15 Hrs ---
    { id: "Ayurvedic Relationship Course", name: "15Hrs - Ayurvedic Relationship Course" },
    { id: "Ayurveda Garbha Samskara Course", name: "15Hrs - Ayurveda Garbha Samskara Course" },

    // --- Ayurveda 25 Hrs ---
    { id: "Ayurveda Immunity Course", name: "25Hrs - Ayurveda Immunity Course" },
    { id: "Ayurveda Skin and Beauty Course", name: "25Hrs - Ayurveda Skin and Beauty Course" },

    // --- Ayurveda 50 Hrs ---
    { id: "Ayurvedic Foundational Course", name: "50Hrs - Ayurvedic Foundational Course" },
    { id: "Ayurvedic Diet and Nutrition Course", name: "50Hrs - Ayurvedic Diet and Nutrition Course" },
    { id: "Ayurvedic Lifestyle Course", name: "50Hrs - Ayurvedic Lifestyle Course" },

    // --- Yoga Classes ---
    { id: "Prenatal Yoga", name: "Class - Prenatal Yoga" },
    { id: "Postnatal Yoga", name: "Class - Postnatal Yoga" },
    { id: "Meditation", name: "Class - Meditation" },
    { id: "Pranayama", name: "Class - Pranayama" },
    { id: "Hatha Yoga", name: "Class - Hatha Yoga" },
    { id: "Vinyasa Flow", name: "Class - Vinyasa Flow" },
    { id: "Power Yoga", name: "Class - Power Yoga" },
    { id: "Diabetic Yoga", name: "Class - Diabetic Yoga" },
    { id: "Yoga Nidra", name: "Class - Yoga Nidra" },
  ];

  const handleEnrollClick = (planId: string) => {
    setSelectedPlan(planId);
    setTimeout(() => {
      payRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>
      <Header />

      {/* Full-Width Hero Section */}
      <div className="relative w-full h-[200px] sm:h-[200px]">
        <Image
          src="/1.png"
          alt="Peaceful yoga practice"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">
            Course Payment
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white py-10 px-4 sm:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Course Dropdown */}
          <div className="mb-10">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Select Course
            </label>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4377b2]"
            >
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>

          {/* Payment Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`border rounded-xl p-6 shadow-md transition duration-300 ${
                  selectedPlan === plan.id
                    ? "border-[#4377b2] bg-[#f0f7ff]"
                    : "border-gray-200"
                }`}
              >
                <h2 className="text-2xl font-semibold text-[#4377b2] mb-2">
                  {plan.title}
                </h2>
                <p className="text-gray-700 mb-2">{plan.description}</p>
                <p className="text-3xl font-bold text-black mb-4">
                  {plan.price}
                </p>
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
            <h2 className="text-2xl font-semibold text-[#4377b2] mb-4">
              Pay With
            </h2>
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

          {/* Policies Section */}
          <PoliciesSection />
        </div>
      </div>
    </div>
  );
}
