"use client";
import HeroSection from "@/app/25-Hrs-Yoga-Courses/face-yoga/HeroSection";
import TestimonialSlider from "@/app/25-Hrs-Yoga-Courses/face-yoga/TestimonialSlider";
import YogaCoursePage from "@/app/25-Hrs-Yoga-Courses/face-yoga/yogacourse";
import LearnSection from "@/app/25-Hrs-Yoga-Courses/face-yoga/LearnSection";
import UniqueCourseSection from "@/app/25-Hrs-Yoga-Courses/face-yoga/UniqueCourseSection";
import TeachingApproach from "@/app/25-Hrs-Yoga-Courses/face-yoga/TeachingApproach";
import CourseDetails from "@/app/25-Hrs-Yoga-Courses/face-yoga/CourseDetails";
import YogaAccreditation from "@/app/25-Hrs-Yoga-Courses/face-yoga/YogaAccreditation";
import CertificatePromo from "@/app/25-Hrs-Yoga-Courses/face-yoga/CertificatePromo";
import TestimonialCarousel from "@/app/25-Hrs-Yoga-Courses/face-yoga/TestimonialCarousel";
import Faq from "@/app/25-Hrs-Yoga-Courses/face-yoga/Faq";
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
