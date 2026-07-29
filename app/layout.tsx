import type { Metadata, Viewport } from "next";
import "./globals.css";

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
    icon: "/sewab-mark.svg",
    apple: "/sewab-mark.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07382f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
