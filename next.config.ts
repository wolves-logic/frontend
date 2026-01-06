import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // IMPORTANT: This must match your GitHub Repo name
  // If your repo is https://github.com/wolves-logic/frontend, this should be '/frontend'
  basePath: isProd ? '/frontend' : '',
  assetPrefix: isProd ? '/frontend' : '',
};

export default nextConfig;
