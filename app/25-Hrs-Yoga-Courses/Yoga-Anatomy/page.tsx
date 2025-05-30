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
import Faculty from "@/components/home/Faculty/faculty";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-10">
      {/* LEFT: All main page content */}<div>
         <HeroSection />
      <div className="flex-1 space-y-8">
        <YogaCoursePage />
        <LearnSection />
        <UniqueCourseSection />
        <TeachingApproach />
        <CourseDetails />
        <YogaAccreditation />
        <CertificatePromo />
        <Faculty />
        <TestimonialCarousel />
        <Faq />
        <SiteFooter />
      </div>

      {/* RIGHT: Sticky course card */}
      <StickyCourseCard />
    </div>
      </div>
  );
}
