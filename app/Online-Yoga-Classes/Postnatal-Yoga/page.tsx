
"use client";
import HeroSection from "@/app/Online-Yoga-Classes/Postnatal-Yoga/HeroSection";
import TestimonialSlider from "@/app/Online-Yoga-Classes/Postnatal-Yoga/TestimonialSlider";
import YogaCoursePage from "@/app/Online-Yoga-Classes/Postnatal-Yoga/yogacourse";
import LearnSection from "@/app/Online-Yoga-Classes/Postnatal-Yoga/LearnSection";
import UniqueCourseSection from "@/app/Online-Yoga-Classes/Postnatal-Yoga/UniqueCourseSection";
import TeachingApproach from "@/app/Online-Yoga-Classes/Postnatal-Yoga/TeachingApproach";
import CourseDetails from "@/app/Online-Yoga-Classes/Postnatal-Yoga/CourseDetails";
import YogaAccreditation from "@/app/Online-Yoga-Classes/Postnatal-Yoga/YogaAccreditation";
import CertificatePromo from "@/app/Online-Yoga-Classes/Postnatal-Yoga/CertificatePromo";
import FacultyInfo from "@/app/Online-Yoga-Classes/Postnatal-Yoga/FacultyInfo";
import PricingOptions from "@/app/Online-Yoga-Classes/Postnatal-Yoga/PricingOptions";
import RiskFreeGuarantee from "@/app/Online-Yoga-Classes/Postnatal-Yoga/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/Online-Yoga-Classes/Postnatal-Yoga/TestimonialCarousel";
import Faq from "@/app/Online-Yoga-Classes/Postnatal-Yoga/Faq";

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
