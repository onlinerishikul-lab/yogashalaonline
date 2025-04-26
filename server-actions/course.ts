'use server';

import { prisma } from "@/lib/prisma";
import { Course as CourseType } from "@/types/course";

interface CourseResponse {
  courses?: CourseType[];
  error?: string;
}

interface SingleCourseResponse {
  course?: CourseType | null;
  error?: string;
}

export async function getCourses(): Promise<CourseResponse> {
  try {
    const courses = await prisma.course.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log("derect from db : ", courses);

    return { courses: courses as unknown as CourseType[] };
  } catch (err) {
    console.error('Failed to fetch courses:', err);
    return { error: 'Failed to fetch courses' };
  }
}

export async function getCourseById(id: string): Promise<SingleCourseResponse> {
  try {
    const course = await prisma.course.findUnique({
      where: { id }
    });

    if (!course) {
      return { course: null };
    }

    return { course: course as unknown as CourseType };
  } catch (err) {
    console.error('Failed to fetch course:', err);
    return { error: 'Failed to fetch course' };
  }
} 