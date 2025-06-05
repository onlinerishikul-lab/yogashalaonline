// Types for UI components
// types/blog.ts
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  imageUrl: string
  author: string
  content: string
  blurDataURL?: string // ✅ Add this to support blur placeholder
}




export interface BlogCardProps {
  post: BlogPost
}

// Types for database/API
export interface Author {
  name: string
  email: string
  image?: string | null
}

export interface DBBlog {
  id: string
  title: string
  slug: string
  overview: string
  content: string
  coverImage: string
  createdAt: Date
  tags: string[]
  author: Author
}

// Dynamic categories from database
export type BlogCategory = string

