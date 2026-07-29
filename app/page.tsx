import { PremiumEnhancements } from "@/components/premium-enhancements";
import { SiteShell } from "@/components/site-shell";
import { contact } from "@/lib/site-data";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "SEWAB Travel Designers",
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

const hajjJourneyImage =
  "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=88";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <style>{`
        .package-img[style*="1591604466107"] {
          background-image: url("${hajjJourneyImage}") !important;
          background-position: center 46% !important;
        }
      `}</style>
      <SiteShell />
      <PremiumEnhancements />
    </>
  );
}
