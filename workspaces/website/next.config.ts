import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  transpilePackages: ["@shalecss/react", "@shalecss/core"],
};

export default nextConfig;
