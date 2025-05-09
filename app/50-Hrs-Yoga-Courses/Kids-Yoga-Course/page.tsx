
"use client";
import HeroSection from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/HeroSection";
import TestimonialSlider from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/TestimonialSlider";
import YogaCoursePage from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/yogacourse";
import LearnSection from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/LearnSection";
import UniqueCourseSection from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/UniqueCourseSection";
import TeachingApproach from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/TeachingApproach";
import CourseDetails from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/CourseDetails";
import YogaAccreditation from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/YogaAccreditation";
import CertificatePromo from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/CertificatePromo";
import FacultyInfo from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/FacultyInfo";
import PricingOptions from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/PricingOptions";
import RiskFreeGuarantee from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/TestimonialCarousel";
import Faq from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/Faq";

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
