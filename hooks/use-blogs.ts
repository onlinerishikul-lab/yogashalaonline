import { useQuery } from '@tanstack/react-query'
import { getAllBlogs, getPaginatedBlogs } from '@/app/actions/blog.action'
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
  allBlogs: BlogPost[]
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
  category 
}: UseBlogsOptions = {}): UseBlogsReturn {
  // Query for all blogs (used in hero section)
  const allBlogsQuery = useQuery({
    queryKey: ['blogs', 'all'],
    queryFn: async () => {
      const blogs = await getAllBlogs()
      return blogs.map(transformBlogToBlogPost)
    },
    staleTime: 1000 * 60 * 5, // Consider data stale after 5 minutes
    gcTime: 1000 * 60 * 60, // Keep unused data in cache for 1 hour
  })

  // Query for paginated blogs
  const paginatedBlogsQuery = useQuery({
    queryKey: ['blogs', 'paginated', page, limit, category],
    queryFn: async () => {
      const { blogs, total } = await getPaginatedBlogs(page, limit)
      const transformedBlogs = blogs.map(transformBlogToBlogPost)
      
      // Filter by category if specified
      const filteredBlogs = category && category !== 'All'
        ? transformedBlogs.filter(blog => blog.category === category)
        : transformedBlogs

      return {
        blogs: filteredBlogs,
        total: category === 'All' ? total : filteredBlogs.length,
        totalPages: Math.ceil(filteredBlogs.length / limit)
      }
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60,
  })

  // Get unique categories from all blogs
  const categories = allBlogsQuery.data
    ? Array.from(new Set(allBlogsQuery.data.map(blog => blog.category)))
    : []

  return {
    allBlogs: allBlogsQuery.data || [],
    paginatedBlogs: paginatedBlogsQuery.data?.blogs || [],
    totalPages: paginatedBlogsQuery.data?.totalPages || 0,
    total: paginatedBlogsQuery.data?.total || 0,
    categories: ['All', ...categories],
    isLoading: allBlogsQuery.isLoading || paginatedBlogsQuery.isLoading,
    error: (allBlogsQuery.error || paginatedBlogsQuery.error) as Error | null,
    isFetching: allBlogsQuery.isFetching || paginatedBlogsQuery.isFetching,
  }
} 
