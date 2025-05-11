
"use client";
import HeroSection from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/HeroSection";
import TestimonialSlider from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/TestimonialSlider";
import YogaCoursePage from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/yogacourse";
import LearnSection from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/LearnSection";
import UniqueCourseSection from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/UniqueCourseSection";
import TeachingApproach from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/TeachingApproach";
import CourseDetails from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/CourseDetails";
import YogaAccreditation from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/YogaAccreditation";
import CertificatePromo from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/CertificatePromo";
import FacultyInfo from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/FacultyInfo";
import PricingOptions from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/PricingOptions";
import RiskFreeGuarantee from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/TestimonialCarousel";
import Faq from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/Faq";

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
