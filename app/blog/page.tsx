import type { Metadata } from "next";
import Link from "next/link";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Ethiopia Travel & Umrah Guides",
  description:
    "Practical Umrah, Hajj and international travel guides for Ethiopian pilgrims, families and group organizers, prepared by SEWAB Travel Designers.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Ethiopia Travel & Umrah Guides | SEWAB",
    description:
      "Helpful planning guides for Umrah from Ethiopia, Hajj preparation, UAE experiences and international travel.",
    url: "/blog",
    type: "website",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "SEWAB Travel Guides",
  url: "https://www.sewabgroups.com/blog",
  description:
    "Travel and pilgrimage guides for Ethiopian Muslims, families and organizations.",
  isPartOf: {
    "@type": "WebSite",
    name: "SEWAB Travel Designers",
    url: "https://www.sewabgroups.com",
  },
};

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Travel guide navigation">
          <Link className={styles.brand} href="/">
            <img src="/sewab-logo-original.svg" alt="SEWAB Travel Designers" />
            <span>SEWAB</span>
          </Link>
          <div className={styles.navLinks}>
            <Link href="/">Home</Link>
            <Link href="/#packages">Packages</Link>
            <Link href="/#contact">Start your journey</Link>
          </div>
        </nav>
      </header>

      <main className={styles.indexMain}>
        <div className={styles.indexTitle}>
          <p className={styles.eyebrow}>SEWAB Travel Guides</p>
          <h1>Clear guidance for meaningful journeys.</h1>
          <p>
            Practical, locally relevant information for Ethiopian pilgrims,
            families, group organizers and travellers preparing to journey from
            Addis Ababa to the Holy Cities and destinations worldwide.
          </p>
        </div>

        <section className={styles.cardGrid} aria-label="Published travel guides">
          <article className={styles.card}>
            <span className={styles.cardTag}>Umrah · Ethiopia · 2026</span>
            <h2>Umrah Packages from Ethiopia: Complete Guide</h2>
            <p>
              Learn how to compare packages, flights, visa guidance, hotels,
              preparation, timing and support before travelling from Addis Ababa.
            </p>
            <Link href="/blog/umrah-packages-from-ethiopia">
              Read the complete guide →
            </Link>
          </article>
        </section>
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} SEWAB Travel Designers ·{" "}
        <Link href="/#contact">Contact our Addis Ababa team</Link>
      </footer>
    </div>
  );
}
