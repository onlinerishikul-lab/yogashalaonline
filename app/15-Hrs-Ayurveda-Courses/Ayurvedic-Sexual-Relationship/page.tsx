
"use client";
import HeroSection from "@/app/15-Hrs-Ayurveda-Courses/Ayurvedic-Sexual-Relationship/HeroSection";
import TestimonialSlider from "@/app/15-Hrs-Ayurveda-Courses/Ayurvedic-Sexual-Relationship/TestimonialSlider";
import YogaCoursePage from "@/app/15-Hrs-Ayurveda-Courses/Ayurvedic-Sexual-Relationship/yogacourse";
import LearnSection from "@/app/15-Hrs-Ayurveda-Courses/Ayurvedic-Sexual-Relationship/LearnSection";
import UniqueCourseSection from "@/app/15-Hrs-Ayurveda-Courses/Ayurvedic-Sexual-Relationship/UniqueCourseSection";
import TeachingApproach from "@/app/15-Hrs-Ayurveda-Courses/Ayurvedic-Sexual-Relationship/TeachingApproach";
import CourseDetails from "@/app/15-Hrs-Ayurveda-Courses/Ayurvedic-Sexual-Relationship/CourseDetails";
import YogaAccreditation from "@/app/15-Hrs-Ayurveda-Courses/Ayurvedic-Sexual-Relationship/YogaAccreditation";
import CertificatePromo from "@/app/15-Hrs-Ayurveda-Courses/Ayurvedic-Sexual-Relationship/CertificatePromo";
import TestimonialCarousel from "@/app/15-Hrs-Ayurveda-Courses/Ayurvedic-Sexual-Relationship/TestimonialCarousel";
import Faq from "@/app/15-Hrs-Ayurveda-Courses/Ayurvedic-Sexual-Relationship/Faq";
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
