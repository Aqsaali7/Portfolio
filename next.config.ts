import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'st3.depositphotos.com',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },





    ],
  },
};

export default nextConfig;
