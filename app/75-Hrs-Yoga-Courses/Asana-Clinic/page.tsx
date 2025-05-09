
"use client";
import HeroSection from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/HeroSection";
import TestimonialSlider from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/TestimonialSlider";
import YogaCoursePage from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/yogacourse";
import LearnSection from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/LearnSection";
import UniqueCourseSection from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/UniqueCourseSection";
import TeachingApproach from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/TeachingApproach";
import CourseDetails from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/CourseDetails";
import YogaAccreditation from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/YogaAccreditation";
import CertificatePromo from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/CertificatePromo";
import FacultyInfo from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/FacultyInfo";
import PricingOptions from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/PricingOptions";
import RiskFreeGuarantee from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/TestimonialCarousel";
import Faq from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/Faq";

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
