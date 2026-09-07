import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "beautech.mariia.io" }],
        destination: "https://mariia.io/beautech",
        permanent: true
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "beautech.mariia.io" }],
        destination: "https://mariia.io/beautech",
        permanent: true
      }
    ];
  },
  async rewrites() {
    return [
      { source: "/dreamers", destination: "/dreamers.html" },
      { source: "/beautech", destination: "/beautech.html" }
    ];
  }
};

export default nextConfig;
