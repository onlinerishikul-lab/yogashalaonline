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

// Utility to normalize slugs from title
function normalizeSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphen
    .replace(/^-+|-+$/g, '');    // Trim starting/ending hyphens
}

export async function getAllBlogs(): Promise<Blog[]> {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Always regenerate slug from title
    return blogs.map(blog => ({
      ...blog,
      slug: normalizeSlug(blog.title),
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blogs");
  }
}

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
        orderBy: {
          createdAt: 'desc'
        }
      }),
      prisma.blog.count()
    ]);

    // Always regenerate slug from title
    const normalizedBlogs = blogs.map(blog => ({
      ...blog,
      slug: normalizeSlug(blog.title),
    }));

    return {
      blogs: normalizedBlogs,
      total
    };
  } catch (error) {
    console.error("Error fetching paginated blogs:", error);
    throw new Error("Failed to fetch blogs");
  }
}
