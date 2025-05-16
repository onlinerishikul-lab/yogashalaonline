
"use client";
import HeroSection from "@/app/50-Hrs-Yoga-Courses/Pranayama-TTC/HeroSection";
import TestimonialSlider from "@/app/50-Hrs-Yoga-Courses/Pranayama-TTC/TestimonialSlider";
import YogaCoursePage from "@/app/50-Hrs-Yoga-Courses/Pranayama-TTC/yogacourse";
import LearnSection from "@/app/50-Hrs-Yoga-Courses/Pranayama-TTC/LearnSection";
import UniqueCourseSection from "@/app/50-Hrs-Yoga-Courses/Pranayama-TTC/UniqueCourseSection";
import TeachingApproach from "@/app/50-Hrs-Yoga-Courses/Pranayama-TTC/TeachingApproach";
import CourseDetails from "@/app/50-Hrs-Yoga-Courses/Pranayama-TTC/CourseDetails";
import YogaAccreditation from "@/app/50-Hrs-Yoga-Courses/Pranayama-TTC/YogaAccreditation";
import CertificatePromo from "@/app/50-Hrs-Yoga-Courses/Pranayama-TTC/CertificatePromo";
import TestimonialCarousel from "@/app/50-Hrs-Yoga-Courses/Pranayama-TTC/TestimonialCarousel";
import Faq from "@/app/50-Hrs-Yoga-Courses/Pranayama-TTC/Faq";
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
