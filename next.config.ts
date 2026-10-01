import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    // Serve AVIF where the browser supports it, WebP everywhere else.
    formats: ["image/avif", "image/webp"],
    // The layout tops out around 1512px wide, so there is no point
    // generating variants far beyond a 2x retina version of that.
    deviceSizes: [440, 640, 768, 1024, 1280, 1512, 1920, 2560],
    imageSizes: [16, 32, 64, 96, 128, 256, 331, 412, 645],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
