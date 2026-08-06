import type { Metadata } from "next";
import Link from "next/link";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Umrah & Hajj Guides for Ethiopian Pilgrims",
  description:
    "Practical Umrah and Hajj planning guides for Ethiopian pilgrims, families, and group organizers, prepared by SEWAB Travel Designers.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Umrah & Hajj Guides for Ethiopian Pilgrims | SEWAB",
    description:
      "Helpful guidance for Umrah from Ethiopia, Hajj preparation, pilgrimage documents, accommodation, and group support.",
    url: "/blog",
    type: "website",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "SEWAB Umrah and Hajj Guides",
  url: "https://www.sewabgroups.com/blog",
  description:
    "Umrah and Hajj guidance for Ethiopian pilgrims, families, and organized groups.",
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
        <nav className={styles.nav} aria-label="Umrah and Hajj guide navigation">
          <Link className={styles.brand} href="/">
            <img src="/sewab-logo-original.svg" alt="SEWAB Travel Designers" />
            <span>SEWAB</span>
          </Link>
          <div className={styles.navLinks}>
            <Link href="/">Home</Link>
            <Link href="/#packages">Umrah & Hajj packages</Link>
            <Link href="/#contact">Start your pilgrimage</Link>
          </div>
        </nav>
      </header>

      <main className={styles.indexMain}>
        <div className={styles.indexTitle}>
          <p className={styles.eyebrow}>SEWAB Umrah & Hajj Guides</p>
          <h1>Clear guidance for sacred journeys.</h1>
          <p>
            Practical, locally relevant information for Ethiopian pilgrims,
            families, and group organizers preparing for Umrah or Hajj from
            Addis Ababa to Makkah and Madinah.
          </p>
        </div>

        <section className={styles.cardGrid} aria-label="Published pilgrimage guides">
          <article className={styles.card}>
            <span className={styles.cardTag}>Umrah · Ethiopia · 2026</span>
            <h2>Umrah Packages from Ethiopia: Complete Guide</h2>
            <p>
              Learn how to compare packages, flights, visa guidance, hotels,
              preparation, timing, and support before travelling from Addis Ababa.
            </p>
            <Link href="/blog/umrah-packages-from-ethiopia">
              Read the complete guide →
            </Link>
          </article>
        </section>
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} SEWAB Travel Designers ·{" "}
        <Link href="/#contact">Contact our Umrah and Hajj team</Link>
      </footer>
    </div>
  );
}
