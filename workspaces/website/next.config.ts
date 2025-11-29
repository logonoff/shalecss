import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  reactCompiler: true,
  transpilePackages: ["@shalecss/core"],
  serverExternalPackages: [
    "@microsoft/api-extractor-model",
    "@microsoft/tsdoc",
    "@microsoft/tsdoc-config",
  ],
  experimental: {
    viewTransition: true,
  },
  // support for GH pages
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
};

export default nextConfig;
