import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    basePath: '/eric-laudrum-portfolio',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
