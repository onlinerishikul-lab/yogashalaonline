
"use client";
import HeroSection from "@/app/50-Hrs-Yoga-Courses/Mudra-Mantra-Course/HeroSection";
import TestimonialSlider from "@/app/50-Hrs-Yoga-Courses/Mudra-Mantra-Course/TestimonialSlider";
import YogaCoursePage from "@/app/50-Hrs-Yoga-Courses/Mudra-Mantra-Course/yogacourse";
import LearnSection from "@/app/50-Hrs-Yoga-Courses/Mudra-Mantra-Course/LearnSection";
import UniqueCourseSection from "@/app/50-Hrs-Yoga-Courses/Mudra-Mantra-Course/UniqueCourseSection";
import TeachingApproach from "@/app/50-Hrs-Yoga-Courses/Mudra-Mantra-Course/TeachingApproach";
import CourseDetails from "@/app/50-Hrs-Yoga-Courses/Mudra-Mantra-Course/CourseDetails";
import YogaAccreditation from "@/app/50-Hrs-Yoga-Courses/Mudra-Mantra-Course/YogaAccreditation";
import CertificatePromo from "@/app/50-Hrs-Yoga-Courses/Mudra-Mantra-Course/CertificatePromo";
import TestimonialCarousel from "@/app/50-Hrs-Yoga-Courses/Mudra-Mantra-Course/TestimonialCarousel";
import Faq from "@/app/50-Hrs-Yoga-Courses/Mudra-Mantra-Course/Faq";
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
