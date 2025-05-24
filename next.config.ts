import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.unsplash.com", "plus.unsplash.com", "utfs.io"],
    deviceSizes: [320, 420, 768, 1024, 1200, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    modularizeImports: {
      // Example: Optimizing lodash imports
      lodash: {
        transform: "lodash/{{member}}",
      },
      // You can add more libraries here
      "date-fns": {
        transform: "date-fns/{{member}}",
      },
    },
  },
  compiler: {
    // Optional: remove console.logs from production
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
