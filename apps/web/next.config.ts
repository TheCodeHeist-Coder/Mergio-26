import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/db"],
  serverExternalPackages: ["pg"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
