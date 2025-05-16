
"use client";
import HeroSection from "@/app/Online-Yoga-Classes/Meditation/HeroSection";
import TestimonialSlider from "@/app/Online-Yoga-Classes/Meditation/TestimonialSlider";
import YogaCoursePage from "@/app/Online-Yoga-Classes/Meditation/yogacourse";
import LearnSection from "@/app/Online-Yoga-Classes/Meditation/LearnSection";
import UniqueCourseSection from "@/app/Online-Yoga-Classes/Meditation/UniqueCourseSection";
import TeachingApproach from "@/app/Online-Yoga-Classes/Meditation/TeachingApproach";
import CourseDetails from "@/app/Online-Yoga-Classes/Meditation/CourseDetails";
import YogaAccreditation from "@/app/Online-Yoga-Classes/Meditation/YogaAccreditation";
import CertificatePromo from "@/app/Online-Yoga-Classes/Meditation/CertificatePromo";
import TestimonialCarousel from "@/app/Online-Yoga-Classes/Meditation/TestimonialCarousel";
import Faq from "@/app/Online-Yoga-Classes/Meditation/Faq";
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
