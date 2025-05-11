
"use client";
import HeroSection from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/HeroSection";
import TestimonialSlider from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/TestimonialSlider";
import YogaCoursePage from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/yogacourse";
import LearnSection from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/LearnSection";
import UniqueCourseSection from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/UniqueCourseSection";
import TeachingApproach from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/TeachingApproach";
import CourseDetails from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/CourseDetails";
import YogaAccreditation from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/YogaAccreditation";
import CertificatePromo from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/CertificatePromo";
import FacultyInfo from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/FacultyInfo";
import PricingOptions from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/PricingOptions";
import RiskFreeGuarantee from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/TestimonialCarousel";
import Faq from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/Faq";

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
