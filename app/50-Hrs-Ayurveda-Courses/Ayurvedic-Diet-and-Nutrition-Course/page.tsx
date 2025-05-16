
"use client";
import HeroSection from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Diet-and-Nutrition-Course/HeroSection";
import TestimonialSlider from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Diet-and-Nutrition-Course/TestimonialSlider";
import YogaCoursePage from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Diet-and-Nutrition-Course/yogacourse";
import LearnSection from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Diet-and-Nutrition-Course/LearnSection";
import UniqueCourseSection from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Diet-and-Nutrition-Course/UniqueCourseSection";
import TeachingApproach from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Diet-and-Nutrition-Course/TeachingApproach";
import CourseDetails from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Diet-and-Nutrition-Course/CourseDetails";
import YogaAccreditation from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Diet-and-Nutrition-Course/YogaAccreditation";
import CertificatePromo from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Diet-and-Nutrition-Course/CertificatePromo";
import TestimonialCarousel from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Diet-and-Nutrition-Course/TestimonialCarousel";
import Faq from "@/app/50-Hrs-Ayurveda-Courses/Ayurvedic-Diet-and-Nutrition-Course/Faq";
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
