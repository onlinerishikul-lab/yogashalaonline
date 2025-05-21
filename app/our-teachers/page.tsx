
"use client";
import TeachersPage from "@/app/our-teachers/teachers"
import { Header } from "@/components/common/header";
import { SiteFooter } from "@/components/common/footer";

export default function Page() {
  return (
    <div>
      <Header />
      <TeachersPage />
      <SiteFooter />
    </div>
  );
}
