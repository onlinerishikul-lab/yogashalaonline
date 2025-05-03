// app/25-Hrs-Yoga-Courses/page.tsx
import Hero from "@/components/25-Hrs-Yoga-Courses/Hero";
import CourseInfo from "@/components/25-Hrs-Yoga-Courses/CourseInfo";
import Schedule from "@/components/25-Hrs-Yoga-Courses/Schedule";
import Pricing from "@/components/25-Hrs-Yoga-Courses/Pricing";
import RegistrationCTA from "@/components/25-Hrs-Yoga-Courses/RegistrationCTA";
import Benefits from "@/components/25-Hrs-Yoga-Courses/Benefits";
import Teachers from "@/components/25-Hrs-Yoga-Courses/Teachers";
import Testimonials from "@/components/25-Hrs-Yoga-Courses/Testimonials";
import FAQ from "@/components/25-Hrs-Yoga-Courses/FAQ";

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
