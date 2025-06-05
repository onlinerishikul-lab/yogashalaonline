// Types for UI components
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  imageUrl: string
  date: string
  category: string
  blurDataURL?: string // ✅ Add this optional field
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

