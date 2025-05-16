
"use client";
import HeroSection from "@/app/Online-Yoga-Classes/Hatha-Yoga/HeroSection";
import TestimonialSlider from "@/app/Online-Yoga-Classes/Hatha-Yoga/TestimonialSlider";
import YogaCoursePage from "@/app/Online-Yoga-Classes/Hatha-Yoga/yogacourse";
import LearnSection from "@/app/Online-Yoga-Classes/Hatha-Yoga/LearnSection";
import UniqueCourseSection from "@/app/Online-Yoga-Classes/Hatha-Yoga/UniqueCourseSection";
import TeachingApproach from "@/app/Online-Yoga-Classes/Hatha-Yoga/TeachingApproach";
import CourseDetails from "@/app/Online-Yoga-Classes/Hatha-Yoga/CourseDetails";
import YogaAccreditation from "@/app/Online-Yoga-Classes/Hatha-Yoga/YogaAccreditation";
import CertificatePromo from "@/app/Online-Yoga-Classes/Hatha-Yoga/CertificatePromo";
import TestimonialCarousel from "@/app/Online-Yoga-Classes/Hatha-Yoga/TestimonialCarousel";
import Faq from "@/app/Online-Yoga-Classes/Hatha-Yoga/Faq";
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
