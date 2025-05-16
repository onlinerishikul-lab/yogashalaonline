
"use client";
import HeroSection from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/HeroSection";
import TestimonialSlider from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/TestimonialSlider";
import YogaCoursePage from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/yogacourse";
import LearnSection from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/LearnSection";
import UniqueCourseSection from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/UniqueCourseSection";
import TeachingApproach from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/TeachingApproach";
import CourseDetails from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/CourseDetails";
import YogaAccreditation from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/YogaAccreditation";
import CertificatePromo from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/CertificatePromo";
import TestimonialCarousel from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/TestimonialCarousel";
import Faq from "@/app/50-Hrs-Yoga-Courses/Kids-Yoga-Course/Faq";
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
