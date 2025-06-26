import Image from "next/image";
import OurBelieves from "@/components/about/our-believes";
import TeachersSection from "@/components/about/teachers-section";
import TopCourses from "@/components/about/top-courses";
import MainWrapper from "@/components/wrappers/main-wrapper";
import TestimonialView from "@/components/home/testimonial/testimonial";

export default function AboutPage() {
  return (
    <MainWrapper>
      <div className="bg-white">
        {/* Hero Section with Title */}
        <div className="relative h-[50vh] md:h-[60vh] w-full">
          <Image
            src="https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Meditation beads representing spiritual practice"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
              About Rishikul Online
            </h1>
          </div>
        </div>

        {/* About Content Section */}
        <div className="container mx-auto px-4">
{/* About Content Section */}
<div className="container mx-auto px-4 py-12">
  <div className="max-w-4xl mx-auto text-justify text-gray-800 text-lg leading-relaxed">
    <p>
      Welcome to Rishikul Online – your trusted platform for online yoga and Ayurveda education. Since 2010, we've empowered students worldwide through certified Yoga Teacher Training Courses, live classes, and in-depth Ayurveda programs. Learn Hatha, Ashtanga, Vinyasa, prenatal yoga, and more with expert guidance, video modules, and live sessions. Deepen your practice with yogic philosophy, meditation, and holistic wellness—all from the comfort of home.
    </p>
  </div>
</div>
        </div>

        {/* Additional Sections */}
        <OurBelieves />
        <TeachersSection />
        <TestimonialView title="What Our Students Say" tilt={false} />
        <TopCourses />
      </div>
    </MainWrapper>
  );
}
