// app/25-Hrs-Yoga-Courses/page.tsx
import Hero from "@/components/25-Hrs-Yoga-Courses/Yoga-Anatomy/Hero";
import CourseInfo from "@/components/25-Hrs-Yoga-Courses/Yoga-Anatomy/CourseInfo";
import Schedule from "@/components/25-Hrs-Yoga-Courses/Yoga-Anatomy/Schedule";
import Pricing from "@/components/25-Hrs-Yoga-Courses/Yoga-Anatomy/Pricing";
import RegistrationCTA from "@/components/25-Hrs-Yoga-Courses/Yoga-Anatomy/RegistrationCTA";
import Benefits from "@/components/25-Hrs-Yoga-Courses/Yoga-Anatomy/Benefits";
import Teachers from "@/components/25-Hrs-Yoga-Courses/Yoga-Anatomy/Teachers";
import Testimonials from "@/components/25-Hrs-Yoga-Courses/Yoga-Anatomy/Testimonials";
import FAQ from "@/components/25-Hrs-Yoga-Courses/Yoga-Anatomy/FAQ";

export default function Page() {
  return (
    <div>
      <Hero />
      <CourseInfo />
      <Schedule />
      <Pricing />
      <RegistrationCTA />
      <Benefits />
      <Teachers />
      <Testimonials />
      <FAQ />
    </div>
  );
}
