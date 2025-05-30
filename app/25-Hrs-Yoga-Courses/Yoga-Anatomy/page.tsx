"use client";

import HeroSection from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/HeroSection";
import StickyCourseCard from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/TestimonialSlider";
import YogaCoursePage from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/yogacourse";
import LearnSection from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/LearnSection";
import UniqueCourseSection from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/UniqueCourseSection";
import TeachingApproach from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/TeachingApproach";
import CourseDetails from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/CourseDetails";
import YogaAccreditation from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/YogaAccreditation";
import CertificatePromo from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/CertificatePromo";
import TestimonialCarousel from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/TestimonialCarousel";
import Faq from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/Faq";
import { SiteFooter } from "@/components/common/footer";
export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      {/* Full-width Hero Section */}
      <HeroSection />

      {/* Main content with sticky card */}
      <div className="flex flex-col lg:flex-row gap-10 px-4 md:px-8 xl:px-20">
        {/* Left content */}
        <div className="w-full lg:w-[68%] space-y-10">
          <YogaCoursePage />
          <LearnSection />
          <UniqueCourseSection />
          <TeachingApproach />
          <CourseDetails />
          <YogaAccreditation />
          <CertificatePromo />
          <TestimonialCarousel />
          <Faq />
        </div>

        {/* Right sticky card */}
        <div className="hidden lg:block w-full lg:w-[32%]">
          <div className="sticky top-24">
            <StickyCourseCard />
          </div>
        </div>
      </div>

      {/* Full-width Footer */}
      <SiteFooter />
    </div>
  );
}
