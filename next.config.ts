import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer, webpack }) => {
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
    
    // Ignore Node.js modules in Edge Runtime
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^(node:)?(stream|crypto|fs|path|os|http|https|net|tls|zlib|util|url|assert|buffer|process)$/,
      })
    );
    
    return config;
  },
};

export default nextConfig;
