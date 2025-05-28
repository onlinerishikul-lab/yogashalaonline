import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog/blog-card";
import MainWrapper from "@/components/wrappers/main-wrapper";
import { getAllBlogs } from "@/app/actions/blog.action";

type BlogParams = Promise<{ slug: string }>;

export default async function BlogDetailsPage(props: { params: BlogParams }) {
  const { slug } = await props.params;
  const blogs = await getAllBlogs();
  const post = blogs.find((blog) => blog.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogs
    .filter((blog) => blog.tags[0] === post.tags[0] && blog.id !== post.id)
    .slice(0, 3);

  return (
    <MainWrapper>
      <article className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[70vh] w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 lg:p-16">
            <div className="container mx-auto max-w-6xl">
              <div className="space-y-4 text-center mx-auto max-w-4xl">
                <p className="text-white/80 uppercase tracking-wider">
                  {post.tags[0]}
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl">
                  {post.title}
                </h1>
                <p className="text-white/90 text-lg mx-auto">{post.overview}</p>
                <div className="flex items-center justify-center space-x-4 text-white/80">
                  <p>By {post.author.name}</p>
                  <span>•</span>
                  <time>
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>•</span>
                  <span>{Math.ceil(post.content.length / 1000)} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section with Sidebar */}
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-1/4 space-y-4">
              <h2 className="text-xl font-bold text-[#4377B2]">Explore Courses</h2>
              {[
                {
                  title: "Yoga Anatomy",
                  link: "/25-Hrs-Yoga-Courses/Yoga-Anatomy",
                },
                {
                  title: "Pranayama & Meditation",
                  link: "/25-Hrs-Yoga-Courses/Pranayama-Meditation",
                },
                {
                  title: "Yoga Philosophy",
                  link: "/25-Hrs-Yoga-Courses/Yoga-Philosophy",
                },
                {
                  title: "Adjustment & Alignment",
                  link: "/25-Hrs-Yoga-Courses/Adjustment-Alignment",
                },
              ].map((course) => (
                <Link key={course.title} href={course.link}>
                  <div className="border rounded-lg p-4 hover:bg-[#f0f8ff] hover:border-[#4377B2] cursor-pointer transition-all">
                    <h3 className="font-semibold text-[#4377B2]">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">Explore this course</p>
                  </div>
                </Link>
              ))}
            </aside>

            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert flex-1">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>

          {/* Author Section */}
          <div className="mt-16 border-t pt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {post.author.image ? (
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-lg font-medium text-gray-600">
                      {post.author.name[0]}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.email}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-[#4377B2]">
                  Twitter
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-[#4377B2]">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts with Images */}
        {relatedPosts.length > 0 && (
          <div className="container mx-auto px-4 py-16">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-[#4377B2]">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={{
                      id: post.id,
                      title: post.title,
                      slug: post.slug,
                      excerpt: post.overview,
                      content: post.content,
                      imageUrl: post.coverImage,
                      date: new Date(post.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }),
                      category: post.tags[0] || "Uncategorized",
                      author: post.author.name,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </MainWrapper>
  );
}
