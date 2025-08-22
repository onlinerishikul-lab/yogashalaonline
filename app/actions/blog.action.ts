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
  tags: { name: string }[];  // adjust if tags is string[]
  author: Author;
}

// Fetch all blogs
export async function getAllBlogs(): Promise<Blog[]> {
  try {
    const blogs = await prisma.blog.findMany({
      include: {
        author: true,
        tags: true
      },
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

// Fetch paginated blogs
export async function getPaginatedBlogs(
  page: number = 1, 
  limit: number = 6
): Promise<{ blogs: Blog[], total: number }> {
  try {
    const skip = (page - 1) * limit;
    
    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        skip,
        take: limit,
        include: {
          author: true,
          tags: true
        },
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

// Fetch single blog by slug
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    return await prisma.blog.findUnique({
      where: { slug },
      include: {
        author: true,
        tags: true
      }
    });
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    throw new Error("Failed to fetch blog");
  }
}
