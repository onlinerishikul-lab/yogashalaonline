
"use client";
import HeroSection from "@/app/Online-Yoga-Classes/Pranayama/HeroSection";
import TestimonialSlider from "@/app/Online-Yoga-Classes/Pranayama/TestimonialSlider";
import YogaCoursePage from "@/app/Online-Yoga-Classes/Pranayama/yogacourse";
import LearnSection from "@/app/Online-Yoga-Classes/Pranayama/LearnSection";
import UniqueCourseSection from "@/app/Online-Yoga-Classes/Pranayama/UniqueCourseSection";
import TeachingApproach from "@/app/Online-Yoga-Classes/Pranayama/TeachingApproach";
import CourseDetails from "@/app/Online-Yoga-Classes/Pranayama/CourseDetails";
import YogaAccreditation from "@/app/Online-Yoga-Classes/Pranayama/YogaAccreditation";
import CertificatePromo from "@/app/Online-Yoga-Classes/Pranayama/CertificatePromo";
import TestimonialCarousel from "@/app/Online-Yoga-Classes/Pranayama/TestimonialCarousel";
import Faq from "@/app/Online-Yoga-Classes/Pranayama/Faq";
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
