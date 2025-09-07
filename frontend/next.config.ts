import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  serverRuntimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL || "http://localhost:3000",
  },

  webpack: (config) => {
    // Add a fallback for _http_common so webpack doesn't try to resolve it.
    config.resolve.fallback = {
      ...config.resolve.fallback,
      _http_common: false,
    };
    return config;
  },

  images: {
    remotePatterns: [
      new URL("https://d2csxpduxe849s.cloudfront.net/media/**"),
      new URL("https://media.bi.no/**"),
      new URL("https://www.bi.no/**"),
    ],
  },
};

export default nextConfig;
