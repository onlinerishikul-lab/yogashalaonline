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
    optimizeCss: true,
    turbo: {}, // ✅ Correct usage of TurboPack
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
};

export default nextConfig;
