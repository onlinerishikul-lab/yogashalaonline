
"use client";
import HeroSection from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/HeroSection";
import TestimonialSlider from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/TestimonialSlider";
import YogaCoursePage from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/yogacourse";
import LearnSection from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/LearnSection";
import UniqueCourseSection from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/UniqueCourseSection";
import TeachingApproach from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/TeachingApproach";
import CourseDetails from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/CourseDetails";
import YogaAccreditation from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/YogaAccreditation";
import CertificatePromo from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/CertificatePromo";
import FacultyInfo from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/FacultyInfo";
import PricingOptions from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/PricingOptions";
import RiskFreeGuarantee from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/TestimonialCarousel";
import Faq from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/Faq";

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
