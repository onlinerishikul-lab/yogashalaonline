import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com", "utfs.io"],
  },
  swcMinify: true,
  output: "standalone", // Optional: For Docker or serverless deploy, safe to keep
};

export default nextConfig;
