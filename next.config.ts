import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone", // ✅ enables standalone build for deployment
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "utfs.io",
      "rishikulonlineadmin.vercel.app"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "rishikulonlineadmin.vercel.app",
        pathname: "/**",
      }
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
