
"use client";
import HeroSection from "@/app/100-Hrs-Yoga-Courses/Vinyasa-Flow-Yoga-TTC/HeroSection";
import TestimonialSlider from "@/app/100-Hrs-Yoga-Courses/Vinyasa-Flow-Yoga-TTC/TestimonialSlider";
import YogaCoursePage from "@/app/100-Hrs-Yoga-Courses/Vinyasa-Flow-Yoga-TTC/yogacourse";
import LearnSection from "@/app/100-Hrs-Yoga-Courses/Vinyasa-Flow-Yoga-TTC/LearnSection";
import UniqueCourseSection from "@/app/100-Hrs-Yoga-Courses/Vinyasa-Flow-Yoga-TTC/UniqueCourseSection";
import TeachingApproach from "@/app/100-Hrs-Yoga-Courses/Vinyasa-Flow-Yoga-TTC/TeachingApproach";
import CourseDetails from "@/app/100-Hrs-Yoga-Courses/Vinyasa-Flow-Yoga-TTC/CourseDetails";
import YogaAccreditation from "@/app/100-Hrs-Yoga-Courses/Vinyasa-Flow-Yoga-TTC/YogaAccreditation";
import CertificatePromo from "@/app/100-Hrs-Yoga-Courses/Vinyasa-Flow-Yoga-TTC/CertificatePromo";
import TestimonialCarousel from "@/app/100-Hrs-Yoga-Courses/Vinyasa-Flow-Yoga-TTC/TestimonialCarousel";
import Faq from "@/app/100-Hrs-Yoga-Courses/Vinyasa-Flow-Yoga-TTC/Faq";
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
