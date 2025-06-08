import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com", "utfs.io"],
  },
  // Enable SWC minification and modern browser targeting
  swcMinify: true,
  experimental: {
    legacyBrowsers: false, // Only target modern browsers; removes unnecessary polyfills
    browsersListForSwc: true, // Use browserslist for SWC transpilation
  },
};

export default nextConfig;
