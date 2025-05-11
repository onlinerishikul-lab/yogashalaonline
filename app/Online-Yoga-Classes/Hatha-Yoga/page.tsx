
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
import FacultyInfo from "@/app/Online-Yoga-Classes/Hatha-Yoga/FacultyInfo";
import PricingOptions from "@/app/Online-Yoga-Classes/Hatha-Yoga/PricingOptions";
import RiskFreeGuarantee from "@/app/Online-Yoga-Classes/Hatha-Yoga/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/Online-Yoga-Classes/Hatha-Yoga/TestimonialCarousel";
import Faq from "@/app/Online-Yoga-Classes/Hatha-Yoga/Faq";

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
