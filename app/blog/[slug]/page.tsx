{/* Hero Image */}
<div className="relative h-[70vh] w-full">
  <Image
    src={post.coverImage}
    alt={post.title || "Blog cover"}
    fill
    priority
    sizes="100vw"
    quality={70}
    decoding="async"
    className="object-cover"
  />
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />

  {/* Hero Text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10 lg:p-16">
    <div className="text-center space-y-4 max-w-4xl mx-auto">
      <p className="text-white/80 uppercase tracking-wide">{post.tags[0]}</p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug">
        {post.title}
      </h1>
      <p className="text-white/90 text-lg">{post.overview}</p>
      <div className="flex justify-center items-center space-x-4 text-white/80 text-sm">
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
