import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Browsers hitting 127.0.0.1 instead of localhost were blocked from /_next assets.
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    // 3840 made retina laptops download a 379 KB hero. 2048 is enough for this page.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
};

export default nextConfig;
