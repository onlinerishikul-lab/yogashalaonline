"use server";

import { db } from "@/lib/db";
import { blogs } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// ✅ Get all blogs
export async function getAllBlogs() {
  try {
    const result = await db.select().from(blogs).orderBy(blogs.createdAt);
    return result;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blogs");
  }
}

// ✅ Get single blog by slug
export async function getBlogBySlug(slug: string) {
  try {
    const result = await db
      .select()
      .from(blogs)
      .where(eq(blogs.slug, slug))
      .limit(1);

    if (!result || result.length === 0) return null;
    return result[0];
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    throw new Error("Failed to fetch blog");
  }
}

// ✅ Create blog with slug
export async function createBlog(data: {
  title: string;
  content: string;
  slug?: string;
}) {
  try {
    const slug =
      data.slug ||
      data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

    const newBlog = await db
      .insert(blogs)
      .values({
        title: data.title,
        content: data.content,
        slug,
      })
      .returning();

    return newBlog[0];
  } catch (error) {
    console.error("Error creating blog:", error);
    throw new Error("Failed to create blog");
  }
}
