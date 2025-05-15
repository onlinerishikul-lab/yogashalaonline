"use client";
import HeroSection from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/HeroSection";
import TestimonialSlider from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/TestimonialSlider";
import YogaCoursePage from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/yogacourse";
import LearnSection from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/LearnSection";
import UniqueCourseSection from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/UniqueCourseSection";
import TeachingApproach from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/TeachingApproach";
import CourseDetails from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/CourseDetails";
import YogaAccreditation from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/YogaAccreditation";
import CertificatePromo from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/CertificatePromo";
import FacultyInfo from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/FacultyInfo";
import RiskFreeGuarantee from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/TestimonialCarousel";
import Faq from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/Faq";
import { SiteFooter } from "@/components/common/footer";


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
      <RiskFreeGuarantee/>
      <TestimonialCarousel/>
      <Faq/>
      <SiteFooter />
    </div>
  );
}
