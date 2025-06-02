"use client";

import HeroSection from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/HeroSection";
import StickyCourseCard from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/TestimonialSlider";
import YogaCoursePage from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/yogacourse";
import LearnSection from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/LearnSection";
import CourseDetails from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/CourseDetails";
import YogaAccreditation from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/YogaAccreditation";
import CertificatePromo from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/CertificatePromo";
import TestimonialCarousel from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/TestimonialCarousel";
import Faq from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/Faq";
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
