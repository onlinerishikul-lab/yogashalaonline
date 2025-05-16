
"use client";
import HeroSection from "@/app/50-Hrs-Yoga-Courses/Pregnancy-Yoga/HeroSection";
import TestimonialSlider from "@/app/50-Hrs-Yoga-Courses/Pregnancy-Yoga/TestimonialSlider";
import YogaCoursePage from "@/app/50-Hrs-Yoga-Courses/Pregnancy-Yoga/yogacourse";
import LearnSection from "@/app/50-Hrs-Yoga-Courses/Pregnancy-Yoga/LearnSection";
import UniqueCourseSection from "@/app/50-Hrs-Yoga-Courses/Pregnancy-Yoga/UniqueCourseSection";
import TeachingApproach from "@/app/50-Hrs-Yoga-Courses/Pregnancy-Yoga/TeachingApproach";
import CourseDetails from "@/app/50-Hrs-Yoga-Courses/Pregnancy-Yoga/CourseDetails";
import YogaAccreditation from "@/app/50-Hrs-Yoga-Courses/Pregnancy-Yoga/YogaAccreditation";
import CertificatePromo from "@/app/50-Hrs-Yoga-Courses/Pregnancy-Yoga/CertificatePromo";
import TestimonialCarousel from "@/app/50-Hrs-Yoga-Courses/Pregnancy-Yoga/TestimonialCarousel";
import Faq from "@/app/50-Hrs-Yoga-Courses/Pregnancy-Yoga/Faq";
import { SiteFooter } from "@/components/common/footer";
import Faculty from "@/components/home/Faculty/faculty";

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
      <Faculty/>
      <TestimonialCarousel/>
      <Faq/>
      <SiteFooter/>
    </div>
  );
}
