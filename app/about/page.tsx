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
        <div className="h-screen min-h-fit md:h-screen md:min-h-[400px]">
          {/* Hero Image */}
          <div className="relative h-1/2 w-full">
            <Image
              src="https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Meditation beads representing spiritual practice"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="container mx-auto  px-4">
            <h1 className="text-[#4377B2] text-4xl font-bold mb-6 text-center md:text-left">
              About Rishikul Online
            </h1>

            <div className="text-gray-700 max-w-7xl mx-auto">
              <p className="leading-relaxed">
                Welcome to Rishikul Online, your one-stop destination for all
                yoga teacher training (YTTC Online) courses. Founded in 2010,
                our mission is to spread the ancient practice of yoga to people
                all over the world through our comprehensive online courses.
              </p>
              <p className="leading-relaxed">
                Our team of experienced and certified yoga instructors have
                curated a curriculum that covers everything from traditional
                Hatha and Ashtanga yoga to modern variations like aerial and
                prenatal yoga. With interactive live webinars and personalized
                feedback sessions, we ensure that you receive a top-notch
                education from the comfort of your own home.
              </p>
              <p className="leading-relaxed">
                At Rishikul Online, we believe that becoming a yoga teacher is
                not just about mastering physical postures but also
                understanding the philosophy and spirituality behind this
                5000-year-old practice. That&apos;s why our courses also include
                modules on meditation, Ayurveda, and yogic philosophy. Join us
                on this journey of self-discovery and transformation as you
                become a certified yoga teacher with Rishikul Online. Let us
                guide you towards your true potential in mind, body, and soul.
                Namaste.
              </p>
            </div>
          </div>
        </div>

        <OurBelieves />
        <TeachersSection />
        <TestimonialView title="What Our Students Say" tilt={false} />
        <TopCourses />
      </div>
    </MainWrapper>
  );
}
