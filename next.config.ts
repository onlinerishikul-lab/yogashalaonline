import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "utfs.io",
      "rishikulonlineadmin.vercel.app" // ✅ added missing domain
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
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    legacyBrowsers: false, // ✅ disables legacy JS polyfills
  },
};

export default nextConfig;
