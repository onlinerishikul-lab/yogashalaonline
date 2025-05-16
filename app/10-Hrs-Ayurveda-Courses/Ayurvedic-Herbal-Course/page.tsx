
"use client";
import HeroSection from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/HeroSection";
import TestimonialSlider from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/TestimonialSlider";
import YogaCoursePage from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/yogacourse";
import LearnSection from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/LearnSection";
import UniqueCourseSection from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/UniqueCourseSection";
import TeachingApproach from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/TeachingApproach";
import CourseDetails from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/CourseDetails";
import YogaAccreditation from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/YogaAccreditation";
import CertificatePromo from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/CertificatePromo";
import TestimonialCarousel from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/TestimonialCarousel";
import Faq from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/Faq";
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
