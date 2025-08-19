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
        {/* Hero Section with Overlay */}
        <div className="relative h-[50vh] md:h-[60vh] w-full">
          <Image
            src="/aboutus.jpg"
            alt="Meditation beads representing spiritual practice"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4 drop-shadow-lg">
              About Rishikul Online
            </h1>
          </div>
        </div>

        {/* About Content Section */}
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="max-w-4xl mx-auto text-center text-gray-800 text-lg leading-relaxed space-y-6">
            <p>
              Welcome to <span className="font-semibold text-[#4377b2]">Rishikul Online</span> – your trusted platform for online yoga and Ayurveda education.
              Since 2010, we&apos;ve empowered students worldwide through certified Yoga Teacher Training Courses, live classes, and in-depth Ayurveda programs.
            </p>
            <p>
              Learn Hatha, Ashtanga, Vinyasa, prenatal yoga, and more with expert guidance, video modules, and live sessions.
              Deepen your practice with yogic philosophy, meditation, and holistic wellness — all from the comfort of home.
            </p>
          </div>
        </div>

        {/* Our Believes Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <OurBelieves />
          </div>
        </section>

        {/* Teachers Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <TeachersSection />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4377b2] mb-12">
              What Our Students Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialView title="What Our Students Say" tilt={false} cardClass="h-full flex flex-col justify-between" />
            </div>
          </div>
        </section>

        {/* Top Courses Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <TopCourses />
          </div>
        </section>
      </div>
    </MainWrapper>
  );
}
