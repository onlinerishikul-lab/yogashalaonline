import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.unsplash.com", "plus.unsplash.com", "utfs.io"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    // Optional: remove console.logs from production
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
