
"use client";
import HeroSection from "@/app/Online-Yoga-Classes/Prenatal-Yoga/HeroSection";
import TestimonialSlider from "@/app/Online-Yoga-Classes/Prenatal-Yoga/TestimonialSlider";
import YogaCoursePage from "@/app/Online-Yoga-Classes/Prenatal-Yoga/yogacourse";
import LearnSection from "@/app/Online-Yoga-Classes/Prenatal-Yoga/LearnSection";
import UniqueCourseSection from "@/app/Online-Yoga-Classes/Prenatal-Yoga/UniqueCourseSection";
import TeachingApproach from "@/app/Online-Yoga-Classes/Prenatal-Yoga/TeachingApproach";
import CourseDetails from "@/app/Online-Yoga-Classes/Prenatal-Yoga/CourseDetails";
import YogaAccreditation from "@/app/Online-Yoga-Classes/Prenatal-Yoga/YogaAccreditation";
import CertificatePromo from "@/app/Online-Yoga-Classes/Prenatal-Yoga/CertificatePromo";
import FacultyInfo from "@/app/Online-Yoga-Classes/Prenatal-Yoga/FacultyInfo";
import PricingOptions from "@/app/Online-Yoga-Classes/Prenatal-Yoga/PricingOptions";
import RiskFreeGuarantee from "@/app/Online-Yoga-Classes/Prenatal-Yoga/RiskFreeGuarantee";
import TestimonialCarousel from "@/app/Online-Yoga-Classes/Prenatal-Yoga/TestimonialCarousel";
import Faq from "@/app/Online-Yoga-Classes/Prenatal-Yoga/Faq";

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
