// app/(legal)/terms-and-conditions/page.tsx
import React from "react";
import { Header } from "@/components/common/header";
import { SiteFooter } from "@/components/common/footer";

export default function TermsAndConditions() {
  return (
     <Header />
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      <h1 className="text-3xl font-bold">
        Terms & Conditions | RishikulOnline
      </h1>

      <h2 className="text-xl font-semibold">1. Course Commitment</h2>
      <p>
        Students agree to attend all live/recorded sessions and understand that
        progress depends on their personal dedication and practice.
      </p>

      <h2 className="text-xl font-semibold">2. Code of Conduct</h2>
      <p>
        Respectful behavior is expected towards teachers, students, and the
        learning environment. Disruptive actions may result in termination
        without refund.
      </p>

      <h2 className="text-xl font-semibold">3. Payment Terms</h2>
      <p>
        A minimum deposit of $200 is required to secure enrollment. The balance
        must be paid in full before course commencement. All fees are
        non-refundable unless canceled by RishikulOnline.
      </p>

      <h2 className="text-xl font-semibold">4. Dispute Resolution</h2>
      <p>
        All disputes shall be governed under <strong>Indian jurisdiction</strong>{" "}
        and settled in a competent court in India.
      </p>
        <SiteFooter />
    </div>
  );
}
