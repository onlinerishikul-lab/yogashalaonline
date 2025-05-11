
"use client";
import HeroSection from "@/app/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/HeroSection";
import TestimonialSlider from "@/app/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/TestimonialSlider";
import YogaCoursePage from "@/app/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/yogacourse";
import LearnSection from "@/app/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/LearnSection";
import UniqueCourseSection from "@/app/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/UniqueCourseSection";
import TeachingApproach from "@/app/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/TeachingApproach";
import CourseDetails from "@/app/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/CourseDetails";
import YogaAccreditation from "@/app/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/YogaAccreditation";
import CertificatePromo from "@/app/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/CertificatePromo";
import FacultyInfo from "@/app/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/FacultyInfo";
import PricingOptions from "@/app/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/PricingOptions";
import RiskFreeGuarantee from "@/app/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/TestimonialCarousel";
import Faq from "@/app/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/Faq";

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
