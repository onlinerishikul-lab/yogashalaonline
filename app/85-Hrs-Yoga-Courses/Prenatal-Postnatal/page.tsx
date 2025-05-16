
"use client";
import HeroSection from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/HeroSection";
import TestimonialSlider from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/TestimonialSlider";
import YogaCoursePage from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/yogacourse";
import LearnSection from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/LearnSection";
import UniqueCourseSection from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/UniqueCourseSection";
import TeachingApproach from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/TeachingApproach";
import CourseDetails from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/CourseDetails";
import YogaAccreditation from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/YogaAccreditation";
import CertificatePromo from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/CertificatePromo";
import TestimonialCarousel from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/TestimonialCarousel";
import Faq from "@/app/85-Hrs-Yoga-Courses/Prenatal-Postnatal/Faq";
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
