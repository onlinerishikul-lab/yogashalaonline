import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "utfs.io",
      "cdn.rishikulonline.com",
    ],
    formats: ["image/webp"],
  },
  experimental: {
    scrollRestoration: true,
    optimizeCss: true, // ✅ Reduces render-blocking CSS
    turbo: true, // ✅ Enable TurboPack if supported
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // ✅ Remove console.logs
  },
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
};

export default nextConfig;
