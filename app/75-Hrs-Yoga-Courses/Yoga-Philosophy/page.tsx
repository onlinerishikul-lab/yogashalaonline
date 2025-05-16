
"use client";
import HeroSection from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/HeroSection";
import TestimonialSlider from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/TestimonialSlider";
import YogaCoursePage from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/yogacourse";
import LearnSection from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/LearnSection";
import UniqueCourseSection from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/UniqueCourseSection";
import TeachingApproach from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/TeachingApproach";
import CourseDetails from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/CourseDetails";
import YogaAccreditation from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/YogaAccreditation";
import CertificatePromo from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/CertificatePromo";
import TestimonialCarousel from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/TestimonialCarousel";
import Faq from "@/app/75-Hrs-Yoga-Courses/Yoga-Philosophy/Faq";
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
