import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 3840 made retina laptops download a 379 KB hero. 2048 is enough for this page.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
};

export default nextConfig;
