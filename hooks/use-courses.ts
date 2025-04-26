import { useQuery } from '@tanstack/react-query';
import { getCourses, getCourseById } from '@/server-actions/course';
import { course } from '@prisma/client';

export function useCourses() {
  return useQuery<course[]>({
    queryKey: ['courses'],
    queryFn: async () => {
      const { courses, error } = await getCourses();
      if (error) throw new Error(error);
      return courses ?? [];
    },
    staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
  });
}

export function useCourse(id: string) {
  return useQuery<course | null>({
    queryKey: ['course', id],
    queryFn: async () => {
      const { course, error } = await getCourseById(id);
      if (error) throw new Error(error);
      return course ?? null;
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
  });
} 