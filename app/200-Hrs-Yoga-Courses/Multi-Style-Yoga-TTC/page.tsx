
"use client";
import HeroSection from "@/app/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/HeroSection";
import TestimonialSlider from "@/app/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/TestimonialSlider";
import YogaCoursePage from "@/app/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/yogacourse";
import LearnSection from "@/app/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/LearnSection";
import UniqueCourseSection from "@/app/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/UniqueCourseSection";
import TeachingApproach from "@/app/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/TeachingApproach";
import CourseDetails from "@/app/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/CourseDetails";
import YogaAccreditation from "@/app/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/YogaAccreditation";
import CertificatePromo from "@/app/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/CertificatePromo";
import FacultyInfo from "@/app/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/FacultyInfo";
import PricingOptions from "@/app/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/PricingOptions";
import RiskFreeGuarantee from "@/app/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/TestimonialCarousel";
import Faq from "@/app/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/Faq";

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
