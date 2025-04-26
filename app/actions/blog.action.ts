'use server'

import { prisma } from "@/lib/prisma";

export type Author = {
  name: string;
  email: string;
  image?: string | null;
}

export type Blog = {
  id: string;
  title: string;
  slug: string;
  overview: string;
  content: string;
  coverImage: string;
  createdAt: Date;
  tags: string[];
  author: Author;
}

export async function getAllBlogs(): Promise<Blog[]> {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blogs");
  }
}

// Add pagination support
export async function getPaginatedBlogs(page: number = 1, limit: number = 6): Promise<{ blogs: Blog[], total: number }> {
  try {
    const skip = (page - 1) * limit;
    
    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc'
        }
      }),
      prisma.blog.count()
    ]);

    return {
      blogs,
      total
    };
  } catch (error) {
    console.error("Error fetching paginated blogs:", error);
    throw new Error("Failed to fetch blogs");
  }
}
