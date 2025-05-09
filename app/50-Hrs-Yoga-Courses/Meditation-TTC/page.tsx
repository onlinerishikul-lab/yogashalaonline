
"use client";
import HeroSection from "@/app/50-Hrs-Yoga-Courses/Meditation-TTC/HeroSection";
import TestimonialSlider from "@/app/50-Hrs-Yoga-Courses/Meditation-TTC/TestimonialSlider";
import YogaCoursePage from "@/app/50-Hrs-Yoga-Courses/Meditation-TTC/yogacourse";
import LearnSection from "@/app/50-Hrs-Yoga-Courses/Meditation-TTC/LearnSection";
import UniqueCourseSection from "@/app/50-Hrs-Yoga-Courses/Meditation-TTC/UniqueCourseSection";
import TeachingApproach from "@/app/50-Hrs-Yoga-Courses/Meditation-TTC/TeachingApproach";
import CourseDetails from "@/app/50-Hrs-Yoga-Courses/Meditation-TTC/CourseDetails";
import YogaAccreditation from "@/app/50-Hrs-Yoga-Courses/Meditation-TTC/YogaAccreditation";
import CertificatePromo from "@/app/50-Hrs-Yoga-Courses/Meditation-TTC/CertificatePromo";
import FacultyInfo from "@/app/50-Hrs-Yoga-Courses/Meditation-TTC/FacultyInfo";
import PricingOptions from "@/app/50-Hrs-Yoga-Courses/Meditation-TTC/PricingOptions";
import RiskFreeGuarantee from "@/app/50-Hrs-Yoga-Courses/Meditation-TTC/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/50-Hrs-Yoga-Courses/Meditation-TTC/TestimonialCarousel";
import Faq from "@/app/50-Hrs-Yoga-Courses/Meditation-TTC/Faq";

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
