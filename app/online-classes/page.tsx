import { notFound } from "next/navigation";
import Image from "next/image";

type Course = {
  title: string;
  teacher: string;
  image: string;
  description: string;
};

const courseList: Course[] = [
  {
    title: "Prenatal Yoga",
    teacher: "By Experienced Yoga Teachers",
    image: "/Prenatal.jpg",
    description: "A gentle yoga practice designed for expecting mothers to strengthen and relax their bodies.",
  },
  {
    title: "Postnatal Yoga",
    teacher: "By Certified Postnatal Experts",
    image: "/Postnatal.jpg",
    description: "Support your postpartum recovery through safe, healing yoga flows.",
  },
  {
    title: "Meditation",
    teacher: "By Mindfulness Coaches",
    image: "/meditation.png",
    description: "Learn to calm your mind and improve emotional resilience through guided meditation.",
  },
  {
    title: "Pranayama",
    teacher: "By Breathing Technique Specialists",
    image: "/pranayama.jpg",
    description: "Master the ancient breathing techniques for better lung function and mental clarity.",
  },
  {
    title: "Hatha Yoga",
    teacher: "By Traditional Yoga Gurus",
    image: "/hatha-yoga.jpg",
    description: "Classic yoga postures and breathwork to build strength, flexibility, and balance.",
  },
  {
    title: "Vinyasa Flow",
    teacher: "By Flow Yoga Professionals",
    image: "/vinyasaflow.jpg",
    description: "A dynamic sequence of poses synced with breath to energize the body.",
  },
  {
    title: "Exclusive Reversing Diabetic Yoga",
    teacher: "By Exclusive Reversing Diabetic Yoga Instructors",
    image: "/DiabeticYoga.jpg",
    description: "Specialized yoga routines tailored to support and reverse diabetes symptoms naturally.",
  },
  {
    title: "Power Yoga",
    teacher: "By Power Yoga Professionals",
    image: "/PowerYoga.jpg",
    description: "Intense, fitness-oriented yoga for improved strength, stamina, and focus.",
  },
  {
    title: "Yoga Nidra",
    teacher: "By Yoga Nidra Professionals",
    image: "/YogaNidra.jpg",
    description: "Deep relaxation and guided meditation for stress relief and better sleep.",
  },
];

function getCourseBySlug(slug: string): Course | undefined {
  return courseList.find((course) => {
    const formatted = course.title.replace(/\s+/g, "-").replace(/[^\w-]/g, "");
    return formatted.toLowerCase() === slug.toLowerCase();
  });
}

export default function CourseDetailPage({ params }: { params: { courseName: string } }) {
  const course = getCourseBySlug(params.courseName);

  if (!course) return notFound();

  return (
    <div className="min-h-screen bg-[#FBF6F3] px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-[#4377B2] mb-4">{course.title}</h1>
        <p className="text-sm text-gray-600 mb-4">{course.teacher}</p>
        <div className="relative w-full h-64 mb-6">
          <Image src={course.image} alt={course.title} fill style={{ objectFit: "cover" }} className="rounded" />
        </div>
        <p className="text-gray-700 text-lg">{course.description}</p>

        <div className="mt-6 text-sm text-gray-700 space-y-1">
          <p><strong>Schedule (English):</strong> 6:00am, 7:30am, 6:00pm, 7:30pm IST</p>
          <p><strong>Schedule (Hindi):</strong> 6:00am, 7:30am, 5:00pm, 6:00pm IST</p>
          <p><strong>Duration:</strong> 1 Hour</p>
          <p><strong>Frequency:</strong> 6 Days a Week & All Time</p>
        </div>
      </div>
    </div>
  );
}
