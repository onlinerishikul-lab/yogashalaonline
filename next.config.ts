import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.unsplash.com", "plus.unsplash.com", "utfs.io"],
    deviceSizes: [360, 414, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",

    modularizeImports: {
      "react-icons": {
        transform: "react-icons/{{member}}",
      },
      lodash: {
        transform: "lodash/{{member}}",
      },
      "date-fns": {
        transform: "date-fns/{{member}}",
      },
    },
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    serverActions: true,
  },

  staticPageGenerationTimeout: 60,
};

export default nextConfig;
