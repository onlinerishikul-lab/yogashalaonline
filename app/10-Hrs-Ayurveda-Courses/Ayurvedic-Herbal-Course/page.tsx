
"use client";
import HeroSection from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/HeroSection";
import TestimonialSlider from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/TestimonialSlider";
import YogaCoursePage from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/yogacourse";
import LearnSection from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/LearnSection";
import UniqueCourseSection from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/UniqueCourseSection";
import TeachingApproach from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/TeachingApproach";
import CourseDetails from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/CourseDetails";
import YogaAccreditation from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/YogaAccreditation";
import CertificatePromo from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/CertificatePromo";
import FacultyInfo from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/FacultyInfo";
import PricingOptions from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/PricingOptions";
import RiskFreeGuarantee from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/TestimonialCarousel";
import Faq from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/Faq";

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
