import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
      <p className="text-muted-foreground mb-8">
        Sorry, we couldn&apos;t find the blog post you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="inline-flex h-9 items-center justify-center rounded-md bg-[#4377B2] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#4377B2]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        Return Home
      </Link>
    </div>
  );
}
