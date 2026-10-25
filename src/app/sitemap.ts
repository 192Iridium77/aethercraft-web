import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.aethercraft.online";
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/blog/mauler`,
      lastModified: "2026-10-25",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${base}/hollowborn-arcanist`,
      lastModified: "2025-12-19",
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
