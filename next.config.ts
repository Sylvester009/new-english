import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.env.INIT_CWD ?? __dirname,
  },
  experimental: {
    preloadEntriesOnStart: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
    unoptimized: isDev,
  },
};

export default nextConfig;
