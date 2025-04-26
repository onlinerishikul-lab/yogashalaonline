import CertificateCTA from "@/components/courses/certificate-cta"
import CourseFeatures from "@/components/courses/course-feature"
import { CourseHero } from "@/components/courses/course-hero"
import FAQSection from "@/components/courses/faq-section"
import FeaturesSection from "@/components/courses/feature-section"
import LearningSection from "@/components/courses/learning-accordian"
import PricingSection from "@/components/courses/pricing-section"
import { ReviewCarousel } from "@/components/courses/review-carousel"
import TeachingApproach from "@/components/courses/teaching-approach"
import Testimonials from "@/components/courses/testimonials"
import YogaAccreditation from "@/components/courses/yoga-accordian"
import CoursesForBeginners from "@/components/courses/yoga-landing"
import CoreView from "@/components/home/core-values/core.view"
import Faculty from "@/components/home/Faculty/faculty"
import { GuaranteeSection } from "@/components/home/guarantee-section"
import MainWrapper from "@/components/wrappers/main-wrapper"
import { getCourseById } from "@/server-actions/course"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{ id: string }>
}

async function getCourseData(id: string) {
  const { course, error } = await getCourseById(id);
  
  if (error || !course) {
    notFound();
  }
  
  return course;
}

export default async function CoursePage({ params }: PageProps) {
  const { id } = await params
  const courseData = await getCourseData(id);

  console.log(courseData);

  return (
    <MainWrapper>
     
      <CourseHero 
        title={courseData.headerSection.title}
        imageUrl={courseData.headerSection.image}
      />
      <ReviewCarousel testimonials={courseData.testimonial} />
      <CoursesForBeginners 
        data={courseData.yogaCoursesForBeginners}
      />
      <CoreView isBgVisible={false} isFromServer={true} values={courseData.coreValues} whyYogshala={courseData.whyYogshala} />
      <LearningSection learning={courseData.whatYouWillLearn} />
      <FeaturesSection 
        courseName={courseData.headerSection.title} 
        features={courseData.whyOurTrainingCourseUnique} 
      />
      <TeachingApproach
      points={courseData.ourTeachingApproach}
      centerImage="https://images.unsplash.com/photo-1466378743612-9da217f53e55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
      <CourseFeatures 
        insideTheCourse={courseData.whatsInsideTheCourse} 
      />
      <YogaAccreditation accreditation={courseData.yogaAllianceAccrediation} />
      <CertificateCTA body={courseData.Certificate} /> 
      <Faculty />
      <PricingSection paymentOptions={courseData.pricing} />
      <GuaranteeSection guaranteeBody={courseData.ourGurantee} />
      <Testimonials testimonials={courseData.studentCorner} />
      <FAQSection courseFAQs={courseData.faq} />
    </MainWrapper>
  )
}


