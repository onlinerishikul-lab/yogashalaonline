import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com", "utfs.io"],
  },
  swcMinify: true,
};

export default nextConfig;
