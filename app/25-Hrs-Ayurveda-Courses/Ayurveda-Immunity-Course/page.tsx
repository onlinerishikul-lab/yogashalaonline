
"use client";
import HeroSection from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course/HeroSection";
import TestimonialSlider from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course/TestimonialSlider";
import YogaCoursePage from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course/yogacourse";
import LearnSection from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course/LearnSection";
import UniqueCourseSection from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course/UniqueCourseSection";
import TeachingApproach from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course/TeachingApproach";
import CourseDetails from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course/CourseDetails";
import YogaAccreditation from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course/YogaAccreditation";
import CertificatePromo from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course/CertificatePromo";
import TestimonialCarousel from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course/TestimonialCarousel";
import Faq from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course/Faq";
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
