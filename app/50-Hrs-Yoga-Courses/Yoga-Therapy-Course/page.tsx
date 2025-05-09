
"use client";
import HeroSection from "@/app/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/HeroSection";
import TestimonialSlider from "@/app/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/TestimonialSlider";
import YogaCoursePage from "@/app/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/yogacourse";
import LearnSection from "@/app/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/LearnSection";
import UniqueCourseSection from "@/app/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/UniqueCourseSection";
import TeachingApproach from "@/app/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/TeachingApproach";
import CourseDetails from "@/app/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/CourseDetails";
import YogaAccreditation from "@/app/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/YogaAccreditation";
import CertificatePromo from "@/app/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/CertificatePromo";
import FacultyInfo from "@/app/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/FacultyInfo";
import PricingOptions from "@/app/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/PricingOptions";
import RiskFreeGuarantee from "@/app/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/TestimonialCarousel";
import Faq from "@/app/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/Faq";

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
