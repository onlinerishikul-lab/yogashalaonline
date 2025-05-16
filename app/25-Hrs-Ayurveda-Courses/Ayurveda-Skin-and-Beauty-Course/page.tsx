
"use client";
import HeroSection from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Skin-and-Beauty-Course/HeroSection";
import TestimonialSlider from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Skin-and-Beauty-Course/TestimonialSlider";
import YogaCoursePage from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Skin-and-Beauty-Course/yogacourse";
import LearnSection from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Skin-and-Beauty-Course/LearnSection";
import UniqueCourseSection from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Skin-and-Beauty-Course/UniqueCourseSection";
import TeachingApproach from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Skin-and-Beauty-Course/TeachingApproach";
import CourseDetails from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Skin-and-Beauty-Course/CourseDetails";
import YogaAccreditation from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Skin-and-Beauty-Course/YogaAccreditation";
import CertificatePromo from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Skin-and-Beauty-Course/CertificatePromo";
import TestimonialCarousel from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Skin-and-Beauty-Course/TestimonialCarousel";
import Faq from "@/app/25-Hrs-Ayurveda-Courses/Ayurveda-Skin-and-Beauty-Course/Faq";
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
