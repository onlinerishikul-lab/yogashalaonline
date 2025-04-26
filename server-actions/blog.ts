import { prisma } from "@/lib/prisma";

export async function getBlogs() {
  try {
    const blogs = await prisma.blog.findMany({
      take: 4,
      orderBy: {
        createdAt: 'desc'
      }
    });

    return { blogs };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return { error: 'Failed to fetch blogs' };
  }
} 