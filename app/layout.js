import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://sewabofficial.com"),
  title: "Sewab Travel Designers — Trusted Umrah Package Organizer in Ethiopia",
  description:
    "Sewab Travel Designers is Ethiopia's trusted Umrah package organizer. Premium, fully managed Umrah and Hajj journeys with visa, flights, hotels near the Haram, and expert guidance from Addis Ababa to the Holy Cities.",
  keywords: [
    "Umrah Ethiopia",
    "Hajj Ethiopia",
    "Umrah packages Addis Ababa",
    "Sewab Travel Designers",
    "Umrah organizer Ethiopia",
  ],
  openGraph: {
    title: "Sewab Travel Designers — Trusted Umrah Package Organizer in Ethiopia",
    description:
      "Premium, fully managed Umrah and Hajj journeys from Ethiopia to the Holy Cities.",
    type: "website",
    locale: "en_ET",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F6B4A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
