import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/wiki", "/wiki/"],
    },
    sitemap: "https://www.aethercraft.online/sitemap.xml",
  };
}
