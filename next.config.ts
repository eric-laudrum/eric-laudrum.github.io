import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  /* config options here */
    basePath: isProd ? '/eric-laudrum-portfolio' : '',
    output: 'export',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
