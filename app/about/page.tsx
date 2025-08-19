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
        {/* Hero Section */}
        <div className="relative h-[50vh] md:h-[60vh] w-full">
          <Image
            src="/aboutus.jpg"
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

        {/* About Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center text-gray-800 text-lg leading-relaxed space-y-6">
            <p>
              Welcome to <span className="font-semibold">Rishikul Online</span> –
              your trusted platform for online yoga and Ayurveda education. Since
              2010, we&apos;ve empowered students worldwide through certified Yoga
              Teacher Training Courses, live classes, and in-depth Ayurveda
              programs.
            </p>
            <p>
              Learn <span className="font-semibold">Hatha, Ashtanga, Vinyasa,
              Prenatal Yoga</span>, and more with expert guidance, video modules,
              and live sessions. Deepen your practice with yogic philosophy,
              meditation, and holistic wellness—all from the comfort of home.
            </p>
          </div>
        </section>

        {/* Beliefs */}
        <OurBelieves />

        {/* Teachers */}
        <TeachersSection />

        {/* Testimonials */}
        <section className="bg-gray-50 py-16">
          <TestimonialView title="What Our Students Say" tilt={false} />
        </section>

        {/* Top Courses */}
        <TopCourses />
      </div>
    </MainWrapper>
  );
}
