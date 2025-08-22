"use server";

import { prisma } from "@/lib/prisma";

// Generate a clean slug
function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // replace spaces & special chars with -
    .replace(/^-+|-+$/g, ""); // trim - from start/end
}

// Create blog
export async function createBlogAction(data: {
  title: string;
  content: string;
  authorId: string;
}) {
  const slug = generateSlug(data.title);

  const blog = await prisma.blog.create({
    data: {
      title: data.title,
      content: data.content,
      slug, // stored clean slug
      authorId: data.authorId,
    },
  });

  return blog;
}

// Get blog by slug
export async function getBlogBySlug(slug: string) {
  const blog = await prisma.blog.findUnique({
    where: { slug },
  });
  return blog;
}

// List all blogs
export async function getAllBlogs() {
  return await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
  });
}
