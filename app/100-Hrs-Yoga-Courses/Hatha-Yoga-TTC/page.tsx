
"use client";
import HeroSection from "@/app/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/HeroSection";
import TestimonialSlider from "@/app/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/TestimonialSlider";
import YogaCoursePage from "@/app/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/yogacourse";
import LearnSection from "@/app/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/LearnSection";
import UniqueCourseSection from "@/app/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/UniqueCourseSection";
import TeachingApproach from "@/app/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/TeachingApproach";
import CourseDetails from "@/app/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/CourseDetails";
import YogaAccreditation from "@/app/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/YogaAccreditation";
import CertificatePromo from "@/app/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/CertificatePromo";
import FacultyInfo from "@/app/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/FacultyInfo";
import PricingOptions from "@/app/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/PricingOptions";
import RiskFreeGuarantee from "@/app/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/TestimonialCarousel";
import Faq from "@/app/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/Faq";

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
