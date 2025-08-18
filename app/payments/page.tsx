"use client";

import Link from "next/link";
import { SiteFooter } from "@/components/common/footer";
import PaymentPage from "@/app/payments/payments";

export default function Page() {
  return (
    <div>
      <PaymentPage />

      {/* Policies Section */}
      <div className="text-center my-6 space-x-6">
        <Link href="/payments/cancellation-policy" className="text-blue-600 hover:underline">
          Cancellation Policy
        </Link>
        <Link href="/payments/privacypolicy" className="text-blue-600 hover:underline">
          Privacy Policy
        </Link>
        <Link href="/payments/terms-and-conditions" className="text-blue-600 hover:underline">
          Terms & Conditions
        </Link>
      </div>

      <SiteFooter />
    </div>
  );
}
