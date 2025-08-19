"use client";
// app/(legal)/privacy-policy/page.tsx
import React from "react";
import { Header } from "@/components/common/header";
import { SiteFooter } from "@/components/common/footer";
export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      <Header />
      <h1 className="text-3xl font-bold">Privacy Policy | RishikulOnline</h1>
      <p>
        RishikulOnline respects the privacy of every individual and is committed
        to safeguarding your personal information. This policy applies solely to{" "}
        <a href="https://www.rishikulonline108.com" className="text-blue-600">
          https://www.rishikulonline.com
        </a>{" "}
        and ensures that your data is never misused or disclosed without consent.
      </p>

      <h2 className="text-xl font-semibold">Information We Collect</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Name, email address, phone number, and course details</li>
        <li>Payment details for enrollment</li>
        <li>
          Technical information such as IP address, browser type, and login time
        </li>
      </ul>

      <h2 className="text-xl font-semibold">Use of Information</h2>
      <p>
        Information is used only for communication, course delivery, feedback,
        and promotional purposes (optional). You may opt out anytime by
        contacting us at{" "}
        <a
          href="mailto:contact@rishikulonline.com"
          className="text-blue-600 underline"
        >
          contact@rishikulonline108.com
        </a>
        .
      </p>
      <SiteFooter />
    </div>
  );
}
