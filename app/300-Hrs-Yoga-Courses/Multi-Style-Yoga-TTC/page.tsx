
"use client";
import HeroSection from "@/app/300-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/HeroSection";
import TestimonialSlider from "@/app/300-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/TestimonialSlider";
import YogaCoursePage from "@/app/300-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/yogacourse";
import LearnSection from "@/app/300-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/LearnSection";
import UniqueCourseSection from "@/app/300-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/UniqueCourseSection";
import TeachingApproach from "@/app/300-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/TeachingApproach";
import CourseDetails from "@/app/300-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/CourseDetails";
import YogaAccreditation from "@/app/300-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/YogaAccreditation";
import CertificatePromo from "@/app/300-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/CertificatePromo";
import TestimonialCarousel from "@/app/300-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/TestimonialCarousel";
import Faq from "@/app/300-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/Faq";
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
      <SiteFooter />
    </div>
  );
}
