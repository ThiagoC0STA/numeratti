import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "numeratti.com.br",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
