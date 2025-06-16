"use client";

import HeroSection from "@/app/Yoga-Courses/25-Hrs-Yoga-Courses/Yoga-Anatomy/HeroSection";
import StickyCourseCard from "@/app/Yoga-Courses/25-Hrs-Yoga-Courses/Yoga-Anatomy/TestimonialSlider";
import YogaCoursePage from "@/app/Yoga-Courses/25-Hrs-Yoga-Courses/Yoga-Anatomy/yogacourse";
import LearnSection from "@/app/Yoga-Courses/25-Hrs-Yoga-Courses/Yoga-Anatomy/LearnSection";
import CourseDetails from "@/app/Yoga-Courses/25-Hrs-Yoga-Courses/Yoga-Anatomy/CourseDetails";
import YogaAccreditation from "@/app/Yoga-Courses/25-Hrs-Yoga-Courses/Yoga-Anatomy/YogaAccreditation";
import CertificatePromo from "@/app/Yoga-Courses/25-Hrs-Yoga-Courses/Yoga-Anatomy/CertificatePromo";
import TestimonialCarousel from "@/app/Yoga-Courses/25-Hrs-Yoga-Courses/Yoga-Anatomy/TestimonialCarousel";
import Faq from "@/app/Yoga-Courses/25-Hrs-Yoga-Courses/Yoga-Anatomy/Faq";
import { SiteFooter } from "@/components/common/footer";

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      {/* Full-width Hero Section */}
      <HeroSection />

      {/* Main content with sticky card on desktop */}
      <div className="flex flex-col lg:flex-row gap-10 px-4 md:px-8 xl:px-20">
        {/* Left content */}
        <div className="w-full lg:w-[75%] space-y-10">
          <YogaCoursePage />
          <LearnSection />
          <CourseDetails />
          <YogaAccreditation />
          <CertificatePromo />
          <TestimonialCarousel />
          <Faq />
        </div>

        {/* Right sticky card */}
        <div className="hidden lg:block w-full lg:w-[25%]">
          <div className="sticky top-24">
            <StickyCourseCard />
          </div>
        </div>
      </div>

      {/* Mobile view: sticky card appears below all content */}
      <div className="block lg:hidden px-4 md:px-8 xl:px-20">
        <StickyCourseCard />
      </div>

      {/* Full-width Footer */}
      <SiteFooter />
    </div>
  );
}
