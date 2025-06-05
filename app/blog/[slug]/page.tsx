import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog/blog-card";
import MainWrapper from "@/components/wrappers/main-wrapper";
import { getAllBlogs } from "@/app/actions/blog.action";

interface PageProps {
  params: { slug: string };
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const blogs = await getAllBlogs();
  const post = blogs.find((blog) => blog.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogs
    .filter((blog) => blog.tags[0] === post.tags[0] && blog.id !== post.id)
    .slice(0, 3);

  const courses = [
    {
      title: "Yoga Anatomy For Safety",
      link: "/25-Hrs-Yoga-Courses/Yoga-Anatomy",
      image: "/25.hrs.png",
    },
    {
      title: "Face Yoga TTC",
      link: "/25-Hrs-Yoga-Courses/face-yoga",
      image: "/Face-Yoga.jpg",
    },
    {
      title: "Ayurveda Immunity Course",
      link: "/25-Hrs-Ayurveda-Courses/Ayurveda-Immunity-Course",
      image: "/Immunity.jpg",
    },
    {
      title: "Ayurveda Skin and Beauty Course",
      link: "/25-Hrs-Ayurveda-Courses/Ayurveda-Skin-and-Beauty-Course",
      image: "/Beauty.jpg",
    },
    {
      title: "Ayurveda Garbha Samskara Course",
      link: "/15-Hrs-Ayurveda-Courses/Ayurveda-Garbha-Samskara-Course",
      image: "/Garbha-Samskara.jpg",
    },
    {
      title: "Ayurvedic Sexual Relationship Course",
      link: "/15-Hrs-Ayurveda-Courses/Ayurvedic-Sexual-Relationship",
      image: "/Sexual-Relationship.jpg",
    },
    {
      title: "Meditation",
      link: "/Online-Yoga-Classes/Meditation",
      image: "/meditation.png",
    },
  ];

  return (
    <MainWrapper>
      <article className="min-h-screen">
        {/* Hero Image */}
        <div className="relative h-[70vh] w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            quality={60}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10 lg:p-16">
            <div className="text-center space-y-4 max-w-4xl mx-auto">
              <p className="text-white/80 uppercase tracking-wide">{post.tags[0]}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug">
                {post.title}
              </h1>
              <p className="text-white/90 text-lg">{post.overview}</p>
              <div className="flex justify-center items-center space-x-4 text-white/80 text-sm">
                <p>By {post.author.name}</p>
                <span>•</span>
                <time dateTime={new Date(post.createdAt).toISOString()}>
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

        {/* Content + Sidebar */}
        <div className="container max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-1/4 space-y-4">
              <h2 className="text-xl font-bold text-[#4377B2]">Explore Courses</h2>
              <div className="grid gap-4">
                {courses.map((course) => (
                  <Link key={course.title} href={course.link}>
                    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer group">
                      <div className="relative h-40 w-full">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          quality={60}
                          loading="lazy"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-[#4377B2] text-lg">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">Explore this course</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>

            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert flex-1">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>

          {/* Author Info */}
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
                    loading="lazy"
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
              <div className="flex space-x-4 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-[#4377B2] hover:underline">Twitter</Link>
                <Link href="#" className="text-muted-foreground hover:text-[#4377B2] hover:underline">LinkedIn</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="container px-4 py-16 mx-auto">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-[#4377B2]">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <BlogCard
                    key={related.id}
                    post={{
                      id: related.id,
                      title: related.title,
                      slug: related.slug,
                      excerpt: related.overview,
                      content: related.content,
                      imageUrl: related.coverImage,
                      date: new Date(related.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }),
                      category: related.tags[0] || "Uncategorized",
                      author: related.author.name,
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
