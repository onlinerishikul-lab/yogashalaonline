"use client";
import { Header } from "@/components/common/header";
import { SiteFooter } from "@/components/common/footer";
import PaymentPage from "@/components/payments/PaymentPage";

export default function Page() {
  return (
    <div>
      <Header />
      <PaymentPage />
      <SiteFooter />
    </div>
  );
}
