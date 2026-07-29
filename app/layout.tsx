import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./premium.css";
import "./logo-override.css";
import "./performance.css";
import "./hamburger.css";
import "./header-controls.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sewabgroups.com"),
  title: {
    default: "SEWAB Travel Designers | Umrah, Hajj & World Tours",
    template: "%s | SEWAB Travel Designers",
  },
  description:
    "Carefully managed Umrah, Hajj, UAE, and international travel experiences from Addis Ababa, Ethiopia.",
  keywords: [
    "Umrah Ethiopia",
    "Hajj Ethiopia",
    "travel agency Addis Ababa",
    "Dubai tour Ethiopia",
    "SEWAB Travel Designers",
  ],
  openGraph: {
    title: "SEWAB Travel Designers",
    description:
      "Purposeful spiritual and leisure journeys designed from Ethiopia to the world.",
    type: "website",
    locale: "en_ET",
    siteName: "SEWAB Travel Designers",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEWAB Travel Designers",
    description:
      "Purposeful spiritual and leisure journeys designed from Ethiopia to the world.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/sewab-logo-original.svg",
    apple: "/sewab-logo-original.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f6b4a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://cdn.kibrispdr.org" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.kibrispdr.org" />
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=82"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="https://cdn.kibrispdr.org/data/717/kubah-hijau-masjid-nabawi-35.jpg"
          fetchPriority="high"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
