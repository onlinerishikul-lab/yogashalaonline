
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
import FacultyInfo from "@/app/Online-Yoga-Classes/Meditation/FacultyInfo";
import PricingOptions from "@/app/Online-Yoga-Classes/Meditation/PricingOptions";
import RiskFreeGuarantee from "@/app/Online-Yoga-Classes/Meditation/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/Online-Yoga-Classes/Meditation/TestimonialCarousel";
import Faq from "@/app/Online-Yoga-Classes/Meditation/Faq";

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
      <FacultyInfo/>
      <PricingOptions/>
      <RiskFreeGuarantee/>
      <TestimonialCarousel/>
      <Faq/>
    </div>
  );
}
