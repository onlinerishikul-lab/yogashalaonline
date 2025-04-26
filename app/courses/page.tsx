import RysBadgeSection from "@/components/resgistered-badge-section"
import { CoursesList } from "@/components/courses/courses-list"
import MainWrapper from "@/components/wrappers/main-wrapper"
import Image from "next/image"
import { getCourses } from "@/server-actions/course"
import { Suspense } from "react"

async function Courses() {
  const { courses = [], error } = await getCourses();
  
  if (error) {
    return <div className="text-red-500 text-center py-8">{error}</div>;
  }

  return <CoursesList initialCourses={courses} />;
}

export default function CoursesPage() {
  return (
    <MainWrapper>
      <main className="min-h-screen">
        <section className="relative h-[80vh] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1520769945061-0a448c463865?q=80&w=2070&auto=format&fit=crop"
            alt="Person practicing yoga pose on a rock by a mountain lake"
            fill
            className="object-cover"
            priority
          />
          <div className="h-full w-full bg-black/25 absolute top-0 left-0"/>
          {/* Angled bottom overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-white transform skew-y-3 translate-y-24" />
          <div className="absolute bottom-0 left-3">
            <RysBadgeSection />
          </div>
          <div className="absolute bottom-20 right-8">
            <Image src="/yoga-alliance.png" alt="Yoga Alliance" width={120} height={120} />
          </div>
        </section>

        <Suspense fallback={<div className="flex justify-center items-center min-h-[200px]">Loading courses...</div>}>
          <Courses />
        </Suspense>
      </main>
    </MainWrapper>
  )
}

