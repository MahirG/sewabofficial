import { PremiumEnhancements } from "@/components/premium-enhancements";
import { SiteShell } from "@/components/site-shell";
import { contact } from "@/lib/site-data";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "SEWAB Travel Designers",
  url: "https://www.sewabgroups.com",
  description:
    "Umrah, Hajj, UAE, and international travel experiences from Addis Ababa, Ethiopia.",
  telephone: contact.primaryPhone,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  sameAs: Object.values(contact.social),
  areaServed: "Ethiopia",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteShell />
      <PremiumEnhancements />
    </>
  );
}
