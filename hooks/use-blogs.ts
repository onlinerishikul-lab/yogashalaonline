import { useQuery } from '@tanstack/react-query'
import { getPaginatedBlogs, getBlogCategories } from '@/app/actions/blog.action'
import { BlogPost, DBBlog } from '@/types/blog'

// Helper function to format date
const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Transform blog data to match BlogPost type
const transformBlogToBlogPost = (blog: DBBlog): BlogPost => ({
  id: blog.id,
  title: blog.title,
  slug: blog.slug,
  excerpt: blog.overview,
  content: blog.content,
  imageUrl: blog.coverImage,
  date: formatDate(blog.createdAt),
  category: blog.tags[0] || 'Uncategorized',
  author: blog.author.name
})

interface UseBlogsOptions {
  page?: number
  limit?: number
  category?: string
}

interface UseBlogsReturn {
  paginatedBlogs: BlogPost[]
  totalPages: number
  total: number
  categories: string[]
  isLoading: boolean
  error: Error | null
  isFetching: boolean
}

export function useBlogs({ 
  page = 1, 
  limit = 6,
  category = 'All'
}: UseBlogsOptions = {}): UseBlogsReturn {
  // Query for paginated blogs
  const paginatedBlogsQuery = useQuery({
    queryKey: ['blogs', 'paginated', page, limit, category],
    queryFn: async () => {
      const { blogs, total } = await getPaginatedBlogs(page, limit, category)
      const transformedBlogs = blogs.map(transformBlogToBlogPost)
      
      return {
        blogs: transformedBlogs,
        total,
        totalPages: Math.ceil(total / limit)
      }
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60,
  })

  // Query for all categories
  const categoriesQuery = useQuery({
    queryKey: ['blogs', 'categories'],
    queryFn: getBlogCategories,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 60, // 1 hour
  });

  return {
    paginatedBlogs: paginatedBlogsQuery.data?.blogs || [],
    totalPages: paginatedBlogsQuery.data?.totalPages || 0,
    total: paginatedBlogsQuery.data?.total || 0,
    categories: ['All', ...(categoriesQuery.data || [])],
    isLoading: paginatedBlogsQuery.isLoading || categoriesQuery.isLoading,
    error: (paginatedBlogsQuery.error || categoriesQuery.error) as Error | null,
    isFetching: paginatedBlogsQuery.isFetching || categoriesQuery.isFetching,
  }
} 
