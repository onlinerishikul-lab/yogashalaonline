
"use client";
import HeroSection from "@/app/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/HeroSection";
import TestimonialSlider from "@/app/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/TestimonialSlider";
import YogaCoursePage from "@/app/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/yogacourse";
import LearnSection from "@/app/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/LearnSection";
import UniqueCourseSection from "@/app/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/UniqueCourseSection";
import TeachingApproach from "@/app/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/TeachingApproach";
import CourseDetails from "@/app/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/CourseDetails";
import YogaAccreditation from "@/app/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/YogaAccreditation";
import CertificatePromo from "@/app/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/CertificatePromo";
import FacultyInfo from "@/app/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/FacultyInfo";
import PricingOptions from "@/app/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/PricingOptions";
import RiskFreeGuarantee from "@/app/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/TestimonialCarousel";
import Faq from "@/app/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/Faq";

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
