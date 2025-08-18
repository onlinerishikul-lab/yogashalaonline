'use client';

import { useCourses } from "@/hooks/use-courses";
import { CourseGrid } from "./course-grid";
import { Course } from "@/types/course";

interface CoursesListProps {
  initialCourses: Course[] | undefined;
}

export function CoursesList({ initialCourses = [] }: CoursesListProps) {
  const { data: courses = initialCourses } = useCourses();
  const coursesArray = courses as Course[];

  if (!coursesArray?.length) {
    return <div className="text-center">No courses found</div>;
  }

  // Group courses by their categories (using yogaCoursesForBeginners.courseLanguage)
  const groupedCourses = coursesArray.reduce<Record<string, Course[]>>((acc: Record<string, Course[]>, course: Course) => {
    const category = course.yogaCoursesForBeginners?.courseLanguage || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(course);
    return acc;
  }, {});

  return (
    <div className="py-8">
      {Object.entries(groupedCourses).map(([category, coursesInCategory]: [string, Course[]]) => (
        <CourseGrid
          key={category}
          title={`Our Online Courses`}
          courses={coursesInCategory.map((course: Course) => ({
            id: course.id,
            title: course.headerSection.title,
            subtitle: course.yogaCoursesForBeginners.courseLanguage,
            price: course.pricing.fullPayment.amount,
            imageUrl: course.headerSection.image,
            slug: course.id // Using ID as slug for now
          }))}
        />
      ))}
    </div>
  );
} 
