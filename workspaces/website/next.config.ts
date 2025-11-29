import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactCompiler: true,
  transpilePackages: ["@shalecss/core"],
  experimental: {
    viewTransition: true,
  },
  // support for GH pages
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig);
