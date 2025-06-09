
"use client";
import HeroSection from "@/app/Online-Yoga-Classes/Yoga Nidra/HeroSection";
import StickyCourseCard  from "@/app/Online-Yoga-Classes/Yoga Nidra/TestimonialSlider";
import YogaCoursePage from "@/app/Online-Yoga-Classes/Yoga Nidra/yogacourse";
import LearnSection from "@/app/Online-Yoga-Classes/Yoga Nidra/LearnSection";
import CourseDetails from "@/app/Online-Yoga-Classes/Yoga Nidra/CourseDetails";
import TestimonialCarousel from "@/app/Online-Yoga-Classes/Yoga Nidra/TestimonialCarousel";
import Faq from "@/app/Online-Yoga-Classes/Yoga Nidra/Faq";
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
