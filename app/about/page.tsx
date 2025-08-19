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
        {/* ---------------- Hero Section ---------------- */}
        <div className="relative h-[55vh] md:h-[65vh] w-full">
          <Image
            src="/aboutus.jpg"
            alt="Meditation beads representing spiritual practice"
            fill
            className="object-cover brightness-90"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center leading-snug drop-shadow-lg px-6">
              About <span className="text-yellow-400">Rishikul Online</span>
            </h1>
          </div>
        </div>

        {/* ---------------- About Content Section ---------------- */}
        <div className="container mx-auto px-6 md:px-12 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4377b2] mb-6">
              Welcome to Rishikul Online
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Since 2010, Rishikul Online has been your trusted platform for{" "}
              <span className="font-semibold">yoga and Ayurveda education</span>.  
              We’ve empowered students worldwide through certified{" "}
              <span className="font-semibold">Yoga Teacher Training Courses</span>,  
              live classes, and Ayurveda programs.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-4">
              Explore Hatha, Ashtanga, Vinyasa, and Prenatal Yoga with expert 
              teachers, interactive modules, and live sessions. Deepen your 
              practice with yogic philosophy, meditation, and holistic wellness—all 
              from the comfort of your home.
            </p>
          </div>
        </div>

        {/* ---------------- Beliefs Section ---------------- */}
        <OurBelieves />

        {/* ---------------- Teachers Section ---------------- */}
        <div className="bg-gray-50 py-16 px-6 md:px-12">
          <TeachersSection />
        </div>

        {/* ---------------- Testimonials ---------------- */}
        <div className="bg-gradient-to-b from-white to-gray-100 py-20 px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4377b2] mb-12">
            What Our Students Say
          </h2>
          <TestimonialView title="" tilt={false} />
        </div>

        {/* ---------------- Top Courses ---------------- */}
        <div className="py-16 px-6 md:px-12">
          <TopCourses />
        </div>
      </div>
    </MainWrapper>
  );
}
