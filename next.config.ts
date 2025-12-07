import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer, webpack }) => {
    // Only apply Node.js module exclusions to server-side/Edge Runtime bundles
    if (isServer) {
      // Exclude Node.js modules from Edge Runtime bundles
      config.resolve.fallback = {
        ...config.resolve.fallback,
        stream: false,
        crypto: false,
        fs: false,
        path: false,
        os: false,
        http: false,
        https: false,
        net: false,
        tls: false,
        zlib: false,
        util: false,
        url: false,
        assert: false,
        buffer: false,
        process: false,
      };
    }
    
    return config;
  },
};

export default nextConfig;
