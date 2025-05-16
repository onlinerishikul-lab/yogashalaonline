
"use client";
import HeroSection from "@/app/15-Hrs-Ayurveda-Courses/Ayurveda-Garbha-Samskara-Course/HeroSection";
import TestimonialSlider from "@/app/15-Hrs-Ayurveda-Courses/Ayurveda-Garbha-Samskara-Course/TestimonialSlider";
import YogaCoursePage from "@/app/15-Hrs-Ayurveda-Courses/Ayurveda-Garbha-Samskara-Course/yogacourse";
import LearnSection from "@/app/15-Hrs-Ayurveda-Courses/Ayurveda-Garbha-Samskara-Course/LearnSection";
import UniqueCourseSection from "@/app/15-Hrs-Ayurveda-Courses/Ayurveda-Garbha-Samskara-Course/UniqueCourseSection";
import TeachingApproach from "@/app/15-Hrs-Ayurveda-Courses/Ayurveda-Garbha-Samskara-Course/TeachingApproach";
import CourseDetails from "@/app/15-Hrs-Ayurveda-Courses/Ayurveda-Garbha-Samskara-Course/CourseDetails";
import YogaAccreditation from "@/app/15-Hrs-Ayurveda-Courses/Ayurveda-Garbha-Samskara-Course/YogaAccreditation";
import CertificatePromo from "@/app/15-Hrs-Ayurveda-Courses/Ayurveda-Garbha-Samskara-Course/CertificatePromo"
import TestimonialCarousel from "@/app/15-Hrs-Ayurveda-Courses/Ayurveda-Garbha-Samskara-Course/TestimonialCarousel";
import Faq from "@/app/15-Hrs-Ayurveda-Courses/Ayurveda-Garbha-Samskara-Course/Faq";
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
