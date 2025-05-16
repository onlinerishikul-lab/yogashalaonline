
"use client";
import HeroSection from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/HeroSection";
import TestimonialSlider from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/TestimonialSlider";
import YogaCoursePage from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/yogacourse";
import LearnSection from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/LearnSection";
import UniqueCourseSection from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/UniqueCourseSection";
import TeachingApproach from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/TeachingApproach";
import CourseDetails from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/CourseDetails";
import YogaAccreditation from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/YogaAccreditation";
import CertificatePromo from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/CertificatePromo";
import TestimonialCarousel from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/TestimonialCarousel";
import Faq from "@/app/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/Faq";
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
