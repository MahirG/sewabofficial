"use client";

import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Icon } from "@/components/icons";
import {
  contact,
  copy,
  packages,
  type Language,
  type PackageCategory,
} from "@/lib/site-data";

type Filter = "all" | PackageCategory;
type FormState = {
  name: string;
  phone: string;
  journey: string;
  date: string;
  travellers: string;
  notes: string;
};

const socials = [
  ["facebook", contact.social.facebook],
  ["instagram", contact.social.instagram],
  ["telegram", contact.social.telegram],
  ["tiktok", contact.social.tiktok],
] as const;

export function SiteShell() {
  const [language, setLanguage] = useState<Language>("en");
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");
  const [story, setStory] = useState(0);
  const [faq, setFaq] = useState<number | null>(0);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    journey: "",
    date: "",
    travellers: "1",
    notes: "",
  });

  const t = copy[language];
  const visible = useMemo(
    () => packages.filter((item) => filter === "all" || item.category === filter),
    [filter],
  );

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 980) setMenu(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop, { passive: true });
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, []);

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    setError("");
  };

  const selectTrip = (id: string) => {
    setField("journey", id);
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.journey) {
      return setError(t.form.error);
    }

    const selected =
      packages.find((item) => item.id === form.journey)?.title[language] ??
      form.journey;
    const lines =
      language === "am"
        ? [
            "ሰላም SEWAB Travel Designers፣",
            `ስም: ${form.name}`,
            `ስልክ: ${form.phone}`,
            `ጉዞ: ${selected}`,
            `ወር: ${form.date || "አልተገለጸም"}`,
            `ተጓዦች: ${form.travellers}`,
            `ማስታወሻ: ${form.notes || "የለም"}`,
            "እባክዎ ወቅታዊ አማራጭና ዋጋ ይላኩልኝ።",
          ]
        : [
            "Hello SEWAB Travel Designers,",
            `Name: ${form.name}`,
            `Phone: ${form.phone}`,
            `Journey: ${selected}`,
            `Month: ${form.date || "Not specified"}`,
            `Travellers: ${form.travellers}`,
            `Notes: ${form.notes || "None"}`,
            "Please share current package options and pricing.",
          ];

    window.open(
      `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(lines.join("\n\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="site" lang={language}>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="topbar">
        <div className="container topbar-in">
          <span>
            <i />
            {t.available}
          </span>
          <div>
            <a href={`tel:${contact.primaryPhone}`}>{contact.primaryDisplay}</a>
            <b>•</b>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container navrow">
          <a className="brand" href="#home" onClick={() => setMenu(false)}>
            <img src="/sewab-mark.svg" alt="" width="48" height="48" />
            <span>
              <strong>SEWAB</strong>
              <small>Travel Designers</small>
            </span>
          </a>

          <nav className="navlinks" aria-label="Main navigation">
            {t.nav.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="lang"
              onClick={() => setLanguage(language === "en" ? "am" : "en")}
            >
              <Icon name="globe" />
              {t.language}
            </button>
            <a className="btn btn-dark plan" href="#contact">
              {language === "en" ? "Plan a trip" : "ጉዞ ያቅዱ"}
              <Icon name="arrow" />
            </a>
            <button
              type="button"
              className={`hamb ${menu ? "is-open" : ""}`}
              aria-expanded={menu}
              aria-controls="mobile-navigation"
              aria-label={
                menu
                  ? language === "en"
                    ? "Close navigation"
                    : "መዳረሻውን ዝጋ"
                  : language === "en"
                    ? "Open navigation"
                    : "መዳረሻውን ክፈት"
              }
              onClick={() => setMenu((current) => !current)}
            >
              <span className="hamb-lines" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`mobile ${menu ? "open" : ""}`}
          aria-hidden={!menu}
        >
          <nav className="container" aria-label="Mobile navigation">
            {t.nav.map(([label, href], index) => (
              <a href={href} onClick={() => setMenu(false)} key={href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {label}
                <Icon name="arrow" />
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="grain" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="kicker light">
                <Icon name="spark" />
                {t.eyebrow}
              </p>
              <h1>
                {t.heroTitleA} <em>{t.heroTitleB}</em>
                <span>{t.heroTitleC}</span>
              </h1>
              <p className="lead">{t.heroBody}</p>
              <div className="actions">
                <a className="btn btn-gold" href="#packages">
                  {t.explore}
                  <Icon name="arrow" />
                </a>
                <a
                  className="btn btn-ghost"
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="whatsapp" />
                  {t.whatsapp}
                </a>
              </div>
              <div className="proof">
                {t.heroProof.map((item) => (
                  <span key={item}>
                    <Icon name="check" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-art">
              <div className="photo photo-one">
                <span>
                  <Icon name="kaaba" />
                  <b>{language === "en" ? "Makkah & Madinah" : "መካ እና መዲና"}</b>
                </span>
              </div>
              <div className="photo photo-two">
                <span>
                  <Icon name="building" />
                  <b>Dubai</b>
                </span>
              </div>
              <div className="badge">
                <Icon name="shield" />
                <span>
                  <b>
                    {language === "en"
                      ? "Care at every step"
                      : "በእያንዳንዱ ደረጃ እንክብካቤ"}
                  </b>
                  <small>
                    {language === "en"
                      ? "Local team · Global journeys"
                      : "የአካባቢ ቡድን · ዓለም አቀፍ ጉዞ"}
                  </small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust">
          <div className="container">
            <h2>{t.trustTitle}</h2>
            <p>{t.trustBody}</p>
            <div className="seal">
              <Icon name="shield" />
              <span>
                SEWAB
                <br />
                CARE
              </span>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="heading">
              <div>
                <p className="kicker">{t.serviceEyebrow}</p>
                <h2>{t.serviceTitle}</h2>
              </div>
              <p>{t.trustBody}</p>
            </div>
            <div className="services">
              {t.services.map((service, index) => (
                <article key={service.title}>
                  <span className="num">0{index + 1}</span>
                  <span className="ico">
                    <Icon name={service.icon} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <a href="#contact">
                    <Icon name="arrow" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section packages" id="packages">
          <div className="container">
            <div className="heading">
              <div>
                <p className="kicker">{t.packagesEyebrow}</p>
                <h2>{t.packagesTitle}</h2>
              </div>
              <p>{t.packagesBody}</p>
            </div>
            <div className="filters">
              {(Object.keys(t.filters) as Filter[]).map((key) => (
                <button
                  type="button"
                  className={filter === key ? "active" : ""}
                  onClick={() => setFilter(key)}
                  key={key}
                >
                  {t.filters[key]}
                </button>
              ))}
            </div>
            <div className="package-grid">
              {visible.map((travelPackage) => (
                <article className="package" key={travelPackage.id}>
                  <div
                    className="package-img"
                    style={{ backgroundImage: `url(${travelPackage.image})` }}
                  >
                    <span>{travelPackage.location[language]}</span>
                    {travelPackage.featured && (
                      <b>{language === "en" ? "Popular" : "ተመራጭ"}</b>
                    )}
                  </div>
                  <div className="package-body">
                    <p>{travelPackage.duration[language]}</p>
                    <h3>{travelPackage.title[language]}</h3>
                    <p>{travelPackage.description[language]}</p>
                    <ul>
                      {travelPackage.features.map((feature) => (
                        <li key={feature[language]}>
                          <Icon name="check" />
                          {feature[language]}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => selectTrip(travelPackage.id)}
                    >
                      {t.viewDetails}
                      <Icon name="arrow" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pilgrimage">
          <div className="pilgrim-photo" />
          <div className="pilgrim-copy">
            <p className="kicker light">
              <Icon name="kaaba" />
              {t.pilgrimageEyebrow}
            </p>
            <h2>{t.pilgrimageTitle}</h2>
            <p>{t.pilgrimageBody}</p>
            <div>
              {t.pilgrimagePoints.map((item) => (
                <span key={item}>
                  <Icon name="check" />
                  {item}
                </span>
              ))}
            </div>
            <a className="btn btn-gold" href="#contact">
              {language === "en" ? "Plan your pilgrimage" : "የእምነት ጉዞዎን ያቅዱ"}
              <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section className="stats">
          <div className="container">
            {t.stats.map(([value, label]) => (
              <div key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section process" id="process">
          <div className="container">
            <div className="center-heading">
              <p className="kicker">{t.processEyebrow}</p>
              <h2>{t.processTitle}</h2>
            </div>
            <div className="steps">
              {t.process.map((item) => (
                <article key={item.number}>
                  <b>{item.number}</b>
                  <span>
                    <Icon
                      name={
                        item.number === "01"
                          ? "travellers"
                          : item.number === "02"
                            ? "calendar"
                            : item.number === "03"
                              ? "briefcase"
                              : "plane"
                      }
                    />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section stories" id="stories">
          <div className="container story-grid">
            <div>
              <p className="kicker">{t.storiesEyebrow}</p>
              <h2>{t.storiesTitle}</h2>
              <div className="story-nav">
                <button
                  type="button"
                  aria-label={t.previous}
                  onClick={() =>
                    setStory(
                      (story - 1 + t.testimonials.length) % t.testimonials.length,
                    )
                  }
                >
                  <Icon name="arrowLeft" />
                </button>
                <span>
                  0{story + 1} / 0{t.testimonials.length}
                </span>
                <button
                  type="button"
                  aria-label={t.next}
                  onClick={() => setStory((story + 1) % t.testimonials.length)}
                >
                  <Icon name="arrow" />
                </button>
              </div>
            </div>
            <article className="quote">
              <Icon name="quote" />
              <blockquote>“{t.testimonials[story].quote}”</blockquote>
              <footer>
                <i>{t.testimonials[story].name.charAt(0)}</i>
                <span>
                  <b>{t.testimonials[story].name}</b>
                  <small>{t.testimonials[story].location}</small>
                </span>
              </footer>
            </article>
            <a
              className="insta"
              href={contact.social.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="instagram" />
              <span>@sewab_travel</span>
              <b>{language === "en" ? "Journey moments" : "የጉዞ ትዝታዎች"}</b>
              <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section className="section faq">
          <div className="container faq-grid">
            <div>
              <p className="kicker">{t.faqEyebrow}</p>
              <h2>{t.faqTitle}</h2>
              <p>{t.packagesBody}</p>
              <a
                className="btn btn-outline"
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="whatsapp" />
                {language === "en" ? "Ask another question" : "ሌላ ጥያቄ ይጠይቁ"}
              </a>
            </div>
            <div>
              {t.faqs.map((item, index) => (
                <article className={faq === index ? "open" : ""} key={item.q}>
                  <button
                    type="button"
                    onClick={() => setFaq(faq === index ? null : index)}
                    aria-expanded={faq === index}
                  >
                    <span>{item.q}</span>
                    <Icon name={faq === index ? "close" : "chevron"} />
                  </button>
                  {faq === index && <p>{item.a}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="kicker light">
                <Icon name="plane" />
                {t.contactEyebrow}
              </p>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactBody}</p>
              <div className="contact-list">
                <a href={`tel:${contact.primaryPhone}`}>
                  <Icon name="phone" />
                  <span>
                    <small>{t.call}</small>
                    <b>{contact.primaryDisplay}</b>
                  </span>
                </a>
                <a href={`mailto:${contact.email}`}>
                  <Icon name="email" />
                  <span>
                    <small>{t.email}</small>
                    <b>{contact.email}</b>
                  </span>
                </a>
                <div>
                  <Icon name="location" />
                  <span>
                    <small>{t.office}</small>
                    <b>{contact.office}</b>
                    <em>{contact.hours}</em>
                  </span>
                </div>
              </div>
            </div>

            <form onSubmit={submit} noValidate>
              <div className="form-title">
                <b>{language === "en" ? "Trip enquiry" : "የጉዞ ጥያቄ"}</b>
                <span>01 — 06</span>
              </div>
              <div className="form-grid">
                <label>
                  <span>{t.form.name} *</span>
                  <input
                    value={form.name}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setField("name", event.target.value)
                    }
                    placeholder={t.form.namePlaceholder}
                  />
                </label>
                <label>
                  <span>{t.form.phone} *</span>
                  <input
                    value={form.phone}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setField("phone", event.target.value)
                    }
                    placeholder={t.form.phonePlaceholder}
                  />
                </label>
                <label className="full">
                  <span>{t.form.journey} *</span>
                  <select
                    value={form.journey}
                    onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                      setField("journey", event.target.value)
                    }
                  >
                    <option value="">{t.form.choose}</option>
                    {packages.map((travelPackage) => (
                      <option value={travelPackage.id} key={travelPackage.id}>
                        {travelPackage.title[language]}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>{t.form.date}</span>
                  <input
                    type="month"
                    value={form.date}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setField("date", event.target.value)
                    }
                  />
                </label>
                <label>
                  <span>{t.form.travellers}</span>
                  <input
                    type="number"
                    min="1"
                    value={form.travellers}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setField("travellers", event.target.value)
                    }
                  />
                </label>
                <label className="full">
                  <span>{t.form.notes}</span>
                  <textarea
                    rows={4}
                    value={form.notes}
                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                      setField("notes", event.target.value)
                    }
                    placeholder={t.form.notesPlaceholder}
                  />
                </label>
              </div>
              {error && <p className="error">{error}</p>}
              <button className="btn btn-gold submit" type="submit">
                <Icon name="whatsapp" />
                {t.form.submit}
                <Icon name="arrow" />
              </button>
              <p className="privacy">
                <Icon name="shield" />
                {t.form.privacy}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <a className="brand footbrand" href="#home">
              <img src="/sewab-mark.svg" alt="" width="52" height="52" />
              <span>
                <strong>SEWAB</strong>
                <small>Travel Designers</small>
              </span>
            </a>
            <p>{t.footerBody}</p>
            <div className="socials">
              {socials.map(([icon, url]) => (
                <a href={url} target="_blank" rel="noreferrer" key={url}>
                  <Icon name={icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="footlinks">
            <h3>{t.quickLinks}</h3>
            {t.nav.slice(1).map(([label, url]) => (
              <a href={url} key={url}>
                {label}
              </a>
            ))}
          </div>
          <div className="footlinks">
            <h3>{t.getInTouch}</h3>
            <a href={`tel:${contact.primaryPhone}`}>
              <Icon name="phone" />
              {contact.primaryDisplay}
            </a>
            <a href={`tel:${contact.secondaryPhone}`}>
              <Icon name="phone" />
              {contact.secondaryDisplay}
            </a>
            <a href={`mailto:${contact.email}`}>
              <Icon name="email" />
              {contact.email}
            </a>
            <span>
              <Icon name="location" />
              {contact.office}
            </span>
          </div>
          <a className="back" href="#home">
            <Icon name="arrow" />
            {t.backTop}
          </a>
        </div>
        <div className="container copyright">
          <span>
            © {new Date().getFullYear()} SEWAB Travel Designers. {t.rights}
          </span>
          <a
            href="https://www.hisabtechnologies.com"
            target="_blank"
            rel="noreferrer"
          >
            {t.powered}
          </a>
        </div>
      </footer>

      <a
        className="float"
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="whatsapp" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
