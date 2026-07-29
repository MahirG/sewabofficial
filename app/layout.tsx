import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./premium.css";
import "./logo-override.css";
import "./performance.css";
import "./hamburger.css";
import "./header-controls.css";
import "./hero-menu-tuning.css";
import "./mobile-menu-refinements.css";
import "./mobile-menu-contact.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sewabgroups.com"),
  applicationName: "SEWAB Travel Designers",
  title: {
    default: "SEWAB Travel Designers | Umrah, Hajj & World Tours",
    template: "%s | SEWAB Travel Designers",
  },
  description:
    "Carefully managed Umrah, Hajj, UAE, and international travel experiences from Addis Ababa, Ethiopia, with Amharic-speaking support.",
  keywords: [
    "Umrah packages from Ethiopia",
    "Umrah from Addis Ababa",
    "Hajj packages Ethiopia",
    "Umrah visa Ethiopia",
    "travel agency Addis Ababa",
    "Amharic Umrah guide",
    "Dubai tour Ethiopia",
    "corporate travel Ethiopia",
    "SEWAB Travel Designers",
  ],
  authors: [{ name: "SEWAB Travel Designers", url: "https://www.sewabgroups.com" }],
  creator: "SEWAB Travel Designers",
  publisher: "SEWAB Travel Designers",
  category: "Travel",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SEWAB Travel Designers",
    description:
      "Purposeful Umrah, Hajj, UAE and international journeys designed from Ethiopia to the world.",
    url: "/",
    type: "website",
    locale: "en_ET",
    siteName: "SEWAB Travel Designers",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEWAB Travel Designers",
    description:
      "Purposeful Umrah, Hajj, UAE and international journeys designed from Ethiopia to the world.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/sewab-logo-original.svg",
    apple: "/sewab-logo-original.svg",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f6b4a",
  colorScheme: "light",
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
