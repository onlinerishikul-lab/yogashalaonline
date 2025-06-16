"use client";

import HeroSection from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/HeroSection";
import StickyCourseCard from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/TestimonialSlider";
import YogaCoursePage from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/yogacourse";
import LearnSection from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/LearnSection";
import CourseDetails from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/CourseDetails";
import YogaAccreditation from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/YogaAccreditation";
import CertificatePromo from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/CertificatePromo";
import TestimonialCarousel from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/TestimonialCarousel";
import Faq from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/Faq";
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
