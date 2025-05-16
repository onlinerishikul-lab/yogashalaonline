
"use client";
import HeroSection from "@/app/Online-Yoga-Classes/Vinyasa-Flow/HeroSection";
import TestimonialSlider from "@/app/Online-Yoga-Classes/Vinyasa-Flow/TestimonialSlider";
import YogaCoursePage from "@/app/Online-Yoga-Classes/Vinyasa-Flow/yogacourse";
import LearnSection from "@/app/Online-Yoga-Classes/Vinyasa-Flow/LearnSection";
import UniqueCourseSection from "@/app/Online-Yoga-Classes/Vinyasa-Flow/UniqueCourseSection";
import TeachingApproach from "@/app/Online-Yoga-Classes/Vinyasa-Flow/TeachingApproach";
import CourseDetails from "@/app/Online-Yoga-Classes/Vinyasa-Flow/CourseDetails";
import YogaAccreditation from "@/app/Online-Yoga-Classes/Vinyasa-Flow/YogaAccreditation";
import CertificatePromo from "@/app/Online-Yoga-Classes/Vinyasa-Flow/CertificatePromo";
import TestimonialCarousel from "@/app/Online-Yoga-Classes/Vinyasa-Flow/TestimonialCarousel";
import Faq from "@/app/Online-Yoga-Classes/Vinyasa-Flow/Faq";
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
