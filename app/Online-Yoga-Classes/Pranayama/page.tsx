
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
import FacultyInfo from "@/app/Online-Yoga-Classes/Pranayama/FacultyInfo";
import PricingOptions from "@/app/Online-Yoga-Classes/Pranayama/PricingOptions";
import RiskFreeGuarantee from "@/app/Online-Yoga-Classes/Pranayama/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/Online-Yoga-Classes/Pranayama/TestimonialCarousel";
import Faq from "@/app/Online-Yoga-Classes/Pranayama/Faq";

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
