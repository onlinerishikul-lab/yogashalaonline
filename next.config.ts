import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "utfs.io",
      "cdn.rishikulonline.com", // ✅ Add your CDN/custom domain here if applicable
    ],
    formats: ["image/webp"], // ✅ Use modern image formats
  },
  swcMinify: true,
  experimental: {
    scrollRestoration: true, // ✅ Improves UX when navigating back
  },
  reactStrictMode: true, // ✅ Helps catch issues early (optional but recommended)
  output: "standalone", // Good for Docker/Vercel/hosted deployments
};

export default nextConfig;
