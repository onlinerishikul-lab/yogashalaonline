
"use client";
import HeroSection from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Lifestyle-Course/HeroSection";
import TestimonialSlider from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Lifestyle-Course/TestimonialSlider";
import YogaCoursePage from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Lifestyle-Course/yogacourse";
import LearnSection from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Lifestyle-Course/LearnSection";
import UniqueCourseSection from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Lifestyle-Course/UniqueCourseSection";
import TeachingApproach from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Lifestyle-Course/TeachingApproach";
import CourseDetails from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Lifestyle-Course/CourseDetails";
import YogaAccreditation from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Lifestyle-Course/YogaAccreditation";
import CertificatePromo from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Lifestyle-Course/CertificatePromo";
import TestimonialCarousel from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Lifestyle-Course/TestimonialCarousel";
import Faq from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Lifestyle-Course/Faq";
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
