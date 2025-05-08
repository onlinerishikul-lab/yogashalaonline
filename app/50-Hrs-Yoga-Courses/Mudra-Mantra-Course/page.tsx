
"use client";
import HeroSection from "@/app/25-Hrs-Yoga-Courses/face-yoga/HeroSection";
import TestimonialSlider from "@/app/25-Hrs-Yoga-Courses/face-yoga/TestimonialSlider";
import YogaCoursePage from "@/app/25-Hrs-Yoga-Courses/face-yoga/yogacourse";
import LearnSection from "@/app/25-Hrs-Yoga-Courses/face-yoga/LearnSection";
import UniqueCourseSection from "@/app/25-Hrs-Yoga-Courses/face-yoga/UniqueCourseSection";
import TeachingApproach from "@/app/25-Hrs-Yoga-Courses/face-yoga/TeachingApproach";
import CourseDetails from "@/app/25-Hrs-Yoga-Courses/face-yoga/CourseDetails";
import YogaAccreditation from "@/app/25-Hrs-Yoga-Courses/face-yoga/YogaAccreditation";
import CertificatePromo from "@/app/25-Hrs-Yoga-Courses/face-yoga/CertificatePromo";
import FacultyInfo from "@/app/25-Hrs-Yoga-Courses/face-yoga/FacultyInfo";
import PricingOptions from "@/app/25-Hrs-Yoga-Courses/face-yoga/PricingOptions";
import RiskFreeGuarantee from "@/app/25-Hrs-Yoga-Courses/face-yoga/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/25-Hrs-Yoga-Courses/face-yoga/TestimonialCarousel";
import Faq from "@/app/25-Hrs-Yoga-Courses/face-yoga/Faq";

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
