import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sewabgroups.com";
  const lastModified = new Date("2026-07-29T00:00:00+03:00");

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/umrah-packages-from-ethiopia`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
