
"use client";
import HeroSection from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/HeroSection";
import TestimonialSlider from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/TestimonialSlider";
import YogaCoursePage from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/yogacourse";
import LearnSection from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/LearnSection";
import UniqueCourseSection from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/UniqueCourseSection";
import TeachingApproach from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/TeachingApproach";
import CourseDetails from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/CourseDetails";
import YogaAccreditation from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/YogaAccreditation";
import CertificatePromo from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/CertificatePromo";
import FacultyInfo from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/FacultyInfo";
import PricingOptions from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/PricingOptions";
import RiskFreeGuarantee from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/TestimonialCarousel";
import Faq from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/Faq";

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
