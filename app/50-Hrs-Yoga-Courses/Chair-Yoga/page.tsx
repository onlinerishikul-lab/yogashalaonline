
"use client";
import HeroSection from "@/app/50-Hrs-Yoga-Courses/Chair-Yoga/HeroSection";
import TestimonialSlider from "@/app/50-Hrs-Yoga-Courses/Chair-Yoga/TestimonialSlider";
import YogaCoursePage from "@/app/50-Hrs-Yoga-Courses/Chair-Yoga/yogacourse";
import LearnSection from "@/app/50-Hrs-Yoga-Courses/Chair-Yoga/LearnSection";
import UniqueCourseSection from "@/app/50-Hrs-Yoga-Courses/Chair-Yoga/UniqueCourseSection";
import TeachingApproach from "@/app/50-Hrs-Yoga-Courses/Chair-Yoga/TeachingApproach";
import CourseDetails from "@/app/50-Hrs-Yoga-Courses/Chair-Yoga/CourseDetails";
import YogaAccreditation from "@/app/50-Hrs-Yoga-Courses/Chair-Yoga/YogaAccreditation";
import CertificatePromo from "@/app/50-Hrs-Yoga-Courses/Chair-Yoga/CertificatePromo";
import FacultyInfo from "@/app/50-Hrs-Yoga-Courses/Chair-Yoga/FacultyInfo";
import PricingOptions from "@/app/50-Hrs-Yoga-Courses/Chair-Yoga/PricingOptions";
import RiskFreeGuarantee from "@/app/50-Hrs-Yoga-Courses/Chair-Yoga/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/50-Hrs-Yoga-Courses/Chair-Yoga/TestimonialCarousel";
import Faq from "@/app/50-Hrs-Yoga-Courses/Chair-Yoga/Faq";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <TestimonialSlider />
      <YogaCoursePage />
      < LearnSection/>
      <UniqueCourseSection />
      <TeachingApproach />
      <CourseDetails />
      <YogaAccreditation/>
      <CertificatePromo/>
      <FacultyInfo/>
      <PricingOptions/>
      <RiskFreeGuarantee/>
      <TestimonialCarousel/>
      <Faq/>
    </div>
  );
}
