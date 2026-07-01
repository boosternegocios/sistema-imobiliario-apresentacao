import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  async rewrites() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'sdr.boostertech.com.br',
          },
        ],
        destination: '/sdr.html',
      },
      {
        source: '/sdr',
        destination: '/sdr.html',
      },
    ];
  },
};

export default nextConfig;
