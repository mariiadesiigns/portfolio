import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85],
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
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      {
        source: "/phx/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*"
      },
      {
        source: "/phx/array/:path*",
        destination: "https://eu-assets.i.posthog.com/array/:path*"
      },
      {
        source: "/phx/:path*",
        destination: "https://eu.i.posthog.com/:path*"
      },
      { source: "/dreamers", destination: "/dreamers.html" },
      { source: "/beautech", destination: "/beautech.html" }
    ];
  }
};

export default nextConfig;
