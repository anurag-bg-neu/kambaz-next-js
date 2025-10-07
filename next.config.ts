import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.staradvertiser.com"], // Add any external image hosts here
  },
};

export default nextConfig;
