import { CourseCard } from "./course-card";

interface Course {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  imageUrl: string;
  slug: string;
}

interface CourseGridProps {
  title: string;
  courses: Course[];
}

export function CourseGrid({ title, courses = [] }: CourseGridProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#4377B2] mb-10 text-center tracking-tight">
          {title}
        </h2>
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                subtitle={course.subtitle}
                price={course.price}
                imageUrl={course.imageUrl}
                slug={course.slug}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No courses available at the moment.
          </p>
        )}
      </div>
    </section>
  );
}
