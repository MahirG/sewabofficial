import { MobileMenuContactActions } from "@/components/mobile-menu-contact-actions";
import { PremiumEnhancements } from "@/components/premium-enhancements";
import { SiteShell } from "@/components/site-shell";
import { contact } from "@/lib/site-data";

const supportedLanguages = ["English", "Amharic", "Afaan Oromo", "Arabic"];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.sewabgroups.com/#website",
      url: "https://www.sewabgroups.com",
      name: "SEWAB Travel Designers",
      description:
        "Umrah, Hajj, UAE and international travel planning from Addis Ababa, Ethiopia.",
      inLanguage: ["en-ET", "am-ET", "om-ET", "ar"],
      publisher: { "@id": "https://www.sewabgroups.com/#organization" },
      hasPart: [
        {
          "@type": "WebPage",
          name: "SEWAB Travel Guides",
          url: "https://www.sewabgroups.com/blog",
        },
        {
          "@type": "Article",
          name: "Umrah Packages from Ethiopia 2026: Complete Guide",
          url: "https://www.sewabgroups.com/blog/umrah-packages-from-ethiopia",
        },
      ],
    },
    {
      "@type": ["Organization", "TravelAgency"],
      "@id": "https://www.sewabgroups.com/#organization",
      name: "SEWAB Travel Designers",
      url: "https://www.sewabgroups.com",
      logo: "https://www.sewabgroups.com/sewab-logo-original.svg",
      image: "https://www.sewabgroups.com/opengraph-image",
      description:
        "Trusted Addis Ababa travel agency for Umrah, Hajj, UAE experiences, world tours and corporate travel with multilingual support.",
      telephone: contact.primaryPhone,
      email: contact.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Addis Ababa",
        addressCountry: "ET",
      },
      areaServed: {
        "@type": "Country",
        name: "Ethiopia",
      },
      knowsLanguage: supportedLanguages,
      sameAs: Object.values(contact.social),
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: contact.primaryPhone,
          contactType: "customer service",
          areaServed: "ET",
          availableLanguage: supportedLanguages,
        },
        {
          "@type": "ContactPoint",
          telephone: contact.secondaryPhone,
          contactType: "WhatsApp travel enquiries",
          areaServed: "ET",
          availableLanguage: supportedLanguages,
        },
      ],
      makesOffer: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Umrah and Hajj travel coordination" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "UAE travel experiences" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "International world tours" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate travel management" } },
      ],
    },
  ],
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
      <MobileMenuContactActions />
    </>
  );
}
