
"use client";
import HeroSection from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/HeroSection";
import TestimonialSlider from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/TestimonialSlider";
import YogaCoursePage from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/yogacourse";
import LearnSection from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/LearnSection";
import UniqueCourseSection from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/UniqueCourseSection";
import TeachingApproach from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/TeachingApproach";
import CourseDetails from "@/app/25-Hrs-Yoga-Courses/Yoga-Anatomy/CourseDetails";

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
    </div>
  );
}
