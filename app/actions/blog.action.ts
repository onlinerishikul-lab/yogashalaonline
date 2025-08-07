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

// Add pagination support
interface BlogWhereClause {
  tags?: {
    has: string;
  };
}

export async function getPaginatedBlogs(
  page: number = 1,
  limit: number = 6,
  category?: string
): Promise<{ blogs: Blog[]; total: number }> {
  try {
    const skip = (page - 1) * limit;
    const whereClause: BlogWhereClause = {};

    if (category && category !== 'All') {
      whereClause.tags = {
        has: category,
      };
    }

    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        where: whereClause,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.blog.count({ where: whereClause }),
    ]);

    return {
      blogs,
      total,
    };
  } catch (error) {
    console.error('Error fetching paginated blogs:', error);
    throw new Error('Failed to fetch blogs');
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const blog = await prisma.blog.findUnique({
      where: {
        slug,
      },
    });

    return blog;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    throw new Error('Failed to fetch blog');
  }
}

export async function getBlogCategories(): Promise<string[]> {
  try {
    const blogs = await prisma.blog.findMany({
      select: {
        tags: true,
      },
    });

    const categories = new Set<string>();
    blogs.forEach(blog => {
      blog.tags.forEach(tag => {
        categories.add(tag);
      });
    });

    return Array.from(categories);
  } catch (error) {
    console.error("Error fetching blog categories:", error);
    throw new Error("Failed to fetch blog categories");
  }
}

export async function getRelatedBlogs(category: string, currentBlogId: string): Promise<Blog[]> {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        tags: {
          has: category,
        },
        id: {
          not: currentBlogId,
        },
      },
      take: 3,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return blogs;
  } catch (error) {
    console.error('Error fetching related blogs:', error);
    throw new Error('Failed to fetch related blogs');
  }
}
