// app/(legal)/cancellation-policy/page.tsx
import React from "react";
import { Header } from "@/components/common/header";
import { SiteFooter } from "@/components/common/footer";

export default function CancellationPolicy() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#4377b2] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cancellation & Refund Policy</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Clear and transparent policies for course cancellations and refunds
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            All course fees are <strong>non-refundable</strong> once payment is
            made.
          </li>
          <li>
            Enrollment can be <strong>rescheduled</strong> or transferred to
            another course within <strong>12 months</strong>.
          </li>
          <li>
            If a course is canceled by RishikulOnline, a full refund or transfer
            will be offered.
          </li>
          <li>
            Requests must be submitted in writing to{" "}
            <a
              href="mailto:contact@rishikulonline108.com"
              className="text-blue-600 underline"
            >
              contact@rishikulonline108.com
            </a>
            .
          </li>
        </ul>
      </div>
      
      <SiteFooter />
    </>
  );
}
