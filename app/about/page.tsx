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
          <div className="max-w-4xl mx-auto space-y-6 text-justify text-gray-800 text-lg leading-relaxed">
            <p>
              Welcome to <strong>Rishikul Online</strong>, your trusted destination for holistic well-being through online yoga and Ayurveda education. Since 2010, we’ve helped thousands of students worldwide embark on their personal journey of transformation.
            </p>

            <p>
              Whether you're seeking <strong>Yoga Teacher Training Courses (YTTC)</strong>, regular <strong>live yoga classes</strong>, or authentic <strong>Ayurveda learning</strong>, Rishikul Online offers a flexible, structured, and immersive experience from the comfort of your home.
            </p>

            <p>
              Our programs include <strong>Hatha Yoga</strong>, <strong>Ashtanga</strong>, <strong>Vinyasa</strong>, and specialized branches such as <strong>prenatal yoga</strong> and <strong>aerial yoga</strong>. Our Ayurveda classes cover foundational principles, diet & lifestyle, and herbal wisdom to restore balance in body and mind.
            </p>

            <p>
              All courses are led by experienced instructors through a blend of video modules, live webinars, Q&A sessions, and personal feedback. We focus not only on posture but also on yogic philosophy, meditation, breathwork, and spiritual growth.
            </p>

            <p>
              At Rishikul Online, we help you become a confident, certified instructor and a lifelong practitioner. Join our global community and start your journey toward a healthier, more conscious life today. <strong>Namaste</strong>.
            </p>
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
