import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clients that ask for /favicon.ico directly get the SVG icon.
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/icon.svg" }];
  },
};

export default nextConfig;
