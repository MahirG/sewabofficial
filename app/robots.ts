import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/api/"],
    },
    sitemap: "https://www.sewabgroups.com/sitemap.xml",
    host: "https://www.sewabgroups.com",
  };
}
