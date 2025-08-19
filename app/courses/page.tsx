"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/common/header";
import { SiteFooter } from "@/components/common/footer";

// ---------- TYPES ----------
type Course = {
  title: string;
  teacher: string;
  image: string;
  url?: string;
};

// ---------- SLUGIFY (for Wellness Section) ----------
function slugify(title: string): string {
  return title
    .normalize("NFKD")
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-+/g, "-")
    .trim();
}

// ---------- COURSE LISTS ----------
const ayurvedaCourses: Course[] = [
  { title: "Ayurvedic Basics Course for Beginners", teacher: "By Certified Ayurveda Instructors", image: "/ayurveda.png", url: "/Ayurveda-Courses/10-Hrs-Ayurveda-Courses/Ayurvedic-Basics-Course/" },
  { title: "Ayurvedic Herbal Course", teacher: "By Herbal Science Experts", image: "/ayurveda1.jpg", url: "/Ayurveda-Courses/10-Hrs-Ayurveda-Courses/Ayurvedic-Herbal-Course/" },
  { title: "Ayurvedic Relationship Course", teacher: "By Certified Ayurvedic Counselors", image: "/Sexual-Relationship.jpg", url: "/Ayurveda-Courses/15-Hrs-Ayurveda-Courses/Ayurvedic-Relationship/" },
  { title: "Ayurveda Garbha Samskara Course", teacher: "By Ayurvedic Fertility Specialists", image: "/Garbha-Samskara.jpg", url: "/Ayurveda-Courses/15-Hrs-Ayurveda-Courses/Ayurveda-Garbha-Samskara-Course/" },
  { title: "Ayurveda Immunity Course", teacher: "By Ayurvedic Immunity Coaches", image: "/Immunity.jpg", url: "/Ayurveda-Courses/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course/" },
  { title: "Ayurveda Skin and Beauty Course", teacher: "By Ayurvedic Beauty Experts", image: "/Beauty.jpg", url: "/Ayurveda-Courses/25-Hrs-Ayurveda-Courses/Ayurveda-Skin-and-Beauty-Course/" },
  { title: "Ayurvedic Foundational Course", teacher: "By Senior Ayurveda Professionals", image: "/ayurveda1.jpg", url: "/Ayurveda-Courses/50-Hrs-Ayurveda-Courses/Ayurvedic-Foundational-Course/" },
  { title: "Ayurvedic Diet and Nutrition Course", teacher: "By Ayurvedic Nutritionists", image: "/Diet.jpg", url: "/Ayurveda-Courses/50-Hrs-Ayurveda-Courses/Ayurvedic-Diet-and-Nutrition-Course/" },
  { title: "Ayurvedic Lifestyle Course", teacher: "By Holistic Ayurveda Coaches", image: "/Lifestyle.jpg", url: "/Ayurveda-Courses/50-Hrs-Ayurveda-Courses/Ayurvedic-Lifestyle-Course/" },
];

const yogaCourses: Course[] = [
  { title: "Yoga Anotomy For Safety", teacher: "By Certified Anatomy Experts", image: "/25.hrs.png", url: "/Yoga-Courses/25-Hrs-Yoga-Courses/Yoga-Anatomy/" },
  { title: "Face Yoga TTC", teacher: "By Face Yoga Professionals", image: "/face.jpg", url: "/Yoga-Courses/25-Hrs-Yoga-Courses/face-yoga/" },
  { title: "Restorative Yoga TTC", teacher: "By Restorative Yoga Teachers", image: "/Restoration-yoga.jpg", url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Restorative-Yoga-TTC/" },
  { title: "Meditation TTC", teacher: "By Meditation Experts", image: "/meditation.jpg", url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Meditation-TTC/" },
  { title: "Pranayama TTC", teacher: "By Breathing Technique Experts", image: "/pranayama.jpg", url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Pranayama-TTC/" },
  { title: "Yoga Nidra TTC", teacher: "By Yoga Nidra Instructors", image: "/yoga-nidra.jpg", url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC/" },
  { title: "Chair Yoga TTC", teacher: "By Adaptive Yoga Teachers", image: "/Chair-Yoga.jpg", url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Chair-Yoga/" },
  { title: "Mudra & Mantra Course", teacher: "By Yogic Sound Practitioners", image: "/Mudra-Mantra-Course.jpg", url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Mudra-Mantra-Course/" },
  { title: "Kundalini Yoga Course", teacher: "By Kundalini Masters", image: "/Kundalini-Yoga-Course.jpg", url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Kundalini-Yoga-Course/" },
  { title: "Kids Yoga Course", teacher: "By Certified Kids Yoga Teachers", image: "/kids-yoga.jpg", url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Kids-Yoga-Course/" },
  { title: "Yoga Therapy Course", teacher: "By Yoga Therapists", image: "/Yoga-Therapy-Course.jpg", url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Yoga-Therapy-Course/" },
  { title: "Pregnancy Yoga", teacher: "By Prenatal Yoga Teachers", image: "/Pregnancy-Yoga.jpg", url: "/Yoga-Courses/50-Hrs-Yoga-Courses/Pregnancy-Yoga/" },
  { title: "Core Concept of Yoga Philosophy", teacher: "By Yoga Scholars", image: "/Yoga-philosophy.jpg", url: "/Yoga-Courses/75-Hrs-Yoga-Courses/Yoga-Philosophy/" },
  { title: "Asana Clinic for Yoga Professionals", teacher: "By Advanced Asana Trainers", image: "/asana-clinic.jpg", url: "/Yoga-Courses/75-Hrs-Yoga-Courses/Asana-Clinic/" },
  { title: "Prenatal & Postnatal Yoga Course for Teachers", teacher: "By Pregnancy Yoga Experts", image: "/Prenatal-Postnatal.jpg", url: "/Yoga-Courses/85-Hrs-Yoga-Courses/Prenatal-Postnatal/" },
  { title: "Kids Yoga Course (95 Hrs)", teacher: "By Experienced Kids Yoga Trainers", image: "/kids-yoga.jpg", url: "/Yoga-Courses/95-Hrs-Yoga-Courses/Kids-Yoga-Course/" },
  { title: "Multi Style Yoga TTC (100 Hrs)", teacher: "By Master Yoga Trainers", image: "/multistyle-yoga.jpg", url: "/Yoga-Courses/100-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/" },
  { title: "Vinyasa Flow Yoga TTC", teacher: "By Flow Yoga Experts", image: "/vinyasaflow-yoga.png", url: "/Yoga-Courses/100-Hrs-Yoga-Courses/Vinyasa-Flow-Yoga-TTC/" },
  { title: "Hatha Yoga TTC", teacher: "By Traditional Hatha Yoga Instructors", image: "/hatha-yoga.png", url: "/Yoga-Courses/100-Hrs-Yoga-Courses/Hatha-Yoga-TTC/" },
  { title: "Advanced Yoga Therapy Course", teacher: "By Therapeutic Yoga Professionals", image: "/yoga-theraphy.jpg", url: "/Yoga-Courses/100-Hrs-Yoga-Courses/Advanced-Yoga-Therapy-Course/" },
  { title: "Multi Style Yoga TTC (200 Hrs)", teacher: "By International Yoga Masters", image: "/multistyle-yoga.jpg", url: "/Yoga-Courses/200-Hrs-Yoga-Courses/Multi-Style-Yoga-TTC/" },
];

const wellnessCourses: Course[] = [
  { title: "Prenatal Yoga", teacher: "By Experienced Yoga Teachers", image: "/Prenatal.jpg" },
  { title: "Postnatal Yoga", teacher: "By Certified Postnatal Experts", image: "/Postnatal.jpg" },
  { title: "Meditation", teacher: "By Mindfulness Coaches", image: "/meditation.png" },
  { title: "Pranayama", teacher: "By Breathing Technique Specialists", image: "/pranayama.jpg" },
  { title: "Hatha Yoga", teacher: "By Traditional Yoga Gurus", image: "/hatha-yoga.jpg" },
  { title: "Vinyasa Flow", teacher: "By Flow Yoga Professionals", image: "/vinyasaflow.jpg" },
  { title: "Exclusive Reversing Diabetic Yoga", teacher: "By Exclusive Reversing Diabetic Yoga Instructors", image: "/DiabeticYoga.jpg" },
  { title: "Power Yoga", teacher: "By Power Yoga Professionals", image: "/PowerYoga.jpg" },
  { title: "Yoga Nidra", teacher: "By Yoga Nidra Professionals", image: "/YogaNidra.jpg", url: "/Yoga-Classes/Yoga%20Nidra" },
];

// ---------- COMPONENT ----------
export default function AllCoursesPage() {
  const router = useRouter();

  const renderCourses = (courses: Course[], isWellness = false) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => {
        const slug = isWellness ? slugify(course.title) : "";
        const linkHref = isWellness
          ? (course.url || `/Yoga-Classes/${slug}`)
          : (course.url || "#");

        return (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between">
            <div className="relative h-48 w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-2xl font-semibold text-[#4377B2] mb-1">{course.title}</h2>
                <p className="text-sm text-gray-600 mb-3">{course.teacher}</p>
                <ul className="text-sm text-gray-700 mb-4 space-y-1">
                  <li><strong>Everyday:</strong> 6 Days a Week & All Time</li>
                  <li><strong>English:</strong> 6:00am, 7:30am, 6:00pm, 7:30pm IST</li>
                  <li><strong>Hindi:</strong> 6:00am, 7:30am, 5:00pm, 6:00pm IST</li>
                  <li><strong>Session Duration:</strong> 1 Hour Class</li>
                </ul>
              </div>
              <div className="flex gap-2 mt-4">
                <Link
                  href={linkHref}
                  className="bg-[#4377B2] text-white px-4 py-2 rounded hover:bg-[#285384] transition w-full text-center"
                >
                  View Detail
                </Link>
                <button
                  onClick={() => router.push("/contact")}
                  className="border border-[#4377B2] text-[#4377B2] px-4 py-2 rounded hover:bg-[#4377B2] hover:text-white transition w-full"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <Header />

      {/* ✅ Hero Section with solid background color */}
      <section className="relative w-full h-[60vh] bg-[#4377B2] flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          Explore Our Courses
        </h1>
      </section>

      {/* Ayurveda Section */}
      <section className="min-h-screen bg-[#FBF6F3] py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#4377B2] mb-10">Our Ayurveda Courses</h1>
          {renderCourses(ayurvedaCourses)}
        </div>
      </section>

      {/* Yoga Section */}
      <section className="min-h-screen bg-[#F9F9FF] py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#4377B2] mb-10">Our Yoga Courses</h1>
          {renderCourses(yogaCourses)}
        </div>
      </section>

      {/* Wellness Section */}
      <section className="min-h-screen bg-[#FBF6F3] py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#4377B2] mb-10">Our Yoga Classes</h1>
          {renderCourses(wellnessCourses, true)}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
