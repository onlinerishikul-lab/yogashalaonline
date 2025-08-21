"use client";
// app/(legal)/privacy-policy/page.tsx
import React from "react";
import { Header } from "@/components/common/header";
import { SiteFooter } from "@/components/common/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#4377b2] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Your privacy and data protection are our top priorities at RishikulOnline
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        <p>
          RishikulOnline respects the privacy of every individual and is
          committed to safeguarding your personal information. This policy
          applies solely to{" "}
          <a
            href="https://www.rishikulonline108.com"
            className="text-blue-600 underline"
          >
            https://www.rishikulonline108.com
          </a>{" "}
          and ensures that your data is never misused or disclosed without
          consent.
        </p>
        
        <h2 className="text-xl font-semibold">Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Name, email address, phone number, and course details</li>
          <li>Payment details for enrollment</li>
          <li>
            Technical information such as IP address, browser type, and login
            time
          </li>
        </ul>
        
        <h2 className="text-xl font-semibold">Use of Information</h2>
        <p>
          Information is used only for communication, course delivery, feedback,
          and promotional purposes (optional). You may opt out anytime by
          contacting us at{" "}
          <a
            href="mailto:contact@rishikulonline108.com"
            className="text-blue-600 underline"
          >
            contact@rishikulonline108.com
          </a>
          .
        </p>
      </div>
      
      <SiteFooter />
    </>
  );
}
