
"use client";
import HeroSection from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/HeroSection";
import TestimonialSlider from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/TestimonialSlider";
import YogaCoursePage from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/yogacourse";
import LearnSection from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/LearnSection";
import UniqueCourseSection from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/UniqueCourseSection";
import TeachingApproach from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/TeachingApproach";
import CourseDetails from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/CourseDetails";
import YogaAccreditation from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/YogaAccreditation";
import CertificatePromo from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/CertificatePromo";
import TestimonialCarousel from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/TestimonialCarousel";
import Faq from "@/app/75-Hrs-Yoga-Courses/Asana-Clinic/Faq";
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
