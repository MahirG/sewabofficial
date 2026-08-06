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
        "Umrah and Hajj travel planning from Addis Ababa, Ethiopia, with multilingual pilgrim support.",
      inLanguage: ["en-ET", "am-ET", "om-ET", "ar"],
      publisher: { "@id": "https://www.sewabgroups.com/#organization" },
      hasPart: [
        {
          "@type": "WebPage",
          name: "SEWAB Umrah and Hajj Guides",
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
        "Trusted Addis Ababa pilgrimage agency specializing exclusively in Umrah and Hajj coordination with multilingual support.",
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
          contactType: "Umrah and Hajj enquiries",
          areaServed: "ET",
          availableLanguage: supportedLanguages,
        },
        {
          "@type": "ContactPoint",
          telephone: contact.secondaryPhone,
          contactType: "WhatsApp pilgrimage enquiries",
          areaServed: "ET",
          availableLanguage: supportedLanguages,
        },
      ],
      makesOffer: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Umrah travel coordination" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hajj travel coordination" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pilgrimage visa and document guidance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multilingual pilgrim support" } },
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
