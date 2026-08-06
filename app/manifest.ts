import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SEWAB Travel Designers",
    short_name: "SEWAB",
    description:
      "Umrah and Hajj travel planning from Addis Ababa, Ethiopia, with multilingual pilgrim support.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf8",
    theme_color: "#0f6b4a",
    lang: "en-ET",
    categories: ["travel", "lifestyle"],
    icons: [
      {
        src: "/sewab-logo-original.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
