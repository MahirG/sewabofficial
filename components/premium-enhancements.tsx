"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import { contact } from "@/lib/site-data";

const PILGRIMAGE_IMAGE =
  "url(https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1200&q=82)";
const STORY_IMAGE =
  "linear-gradient(180deg,rgba(4,44,37,.12),rgba(4,44,37,.9)),url(https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=700&q=80)";

function optimizeUnsplash(value: string) {
  return value
    .replace(/w=1600/g, "w=900")
    .replace(/w=1300/g, "w=900")
    .replace(/q=88/g, "q=82")
    .replace(/q=85/g, "q=82");
}

export function PremiumEnhancements() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".header");
    const mobileMenu = document.querySelector<HTMLElement>(".mobile");
    const site = document.querySelector<HTMLElement>(".site");
    const logoImages = document.querySelectorAll<HTMLImageElement>(
      'img[src="/sewab-mark.svg"]',
    );

    logoImages.forEach((image) => {
      image.src = "/sewab-logo-original.svg";
      image.removeAttribute("width");
      image.removeAttribute("height");
      image.decoding = "async";
    });
    document.body.classList.add("premium-ready");

    const updateHeroLabel = () => {
      const label = document.querySelector<HTMLElement>(".photo-two b");
      if (!label) return;
      label.textContent = site?.getAttribute("lang") === "am" ? "መዲና" : "Madinah";
    };
    updateHeroLabel();
    const languageObserver = site ? new MutationObserver(updateHeroLabel) : null;
    if (site) {
      languageObserver?.observe(site, {
        attributes: true,
        attributeFilter: ["lang"],
      });
    }

    const lazyBackgrounds = Array.from(
      document.querySelectorAll<HTMLElement>(".package-img, .pilgrim-photo, .insta"),
    );

    lazyBackgrounds.forEach((element) => {
      let background = element.style.backgroundImage;
      if (element.classList.contains("pilgrim-photo")) background = PILGRIMAGE_IMAGE;
      if (element.classList.contains("insta")) background = STORY_IMAGE;
      if (background) {
        element.style.setProperty("--lazy-bg", optimizeUnsplash(background));
      }
    });

    const loadBackground = (element: HTMLElement) => {
      element.classList.add("lazy-bg-loaded");
    };

    const backgroundObserver = "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              loadBackground(entry.target as HTMLElement);
              observer.unobserve(entry.target);
            });
          },
          { rootMargin: "500px 0px", threshold: 0.01 },
        )
      : null;

    lazyBackgrounds.forEach((element) => {
      if (backgroundObserver) backgroundObserver.observe(element);
      else loadBackground(element);
    });

    const updateScrollState = () => {
      const scrolled = window.scrollY > 12;
      header?.classList.toggle("premium-scrolled", scrolled);
      setShowTop(window.scrollY > 650);
    };

    const updateMenuState = () => {
      document.body.classList.toggle(
        "premium-menu-open",
        Boolean(mobileMenu?.classList.contains("open")),
      );
    };

    const menuObserver = mobileMenu
      ? new MutationObserver(updateMenuState)
      : null;
    if (mobileMenu) {
      menuObserver?.observe(mobileMenu, {
        attributes: true,
        attributeFilter: ["class"],
      });
      updateMenuState();
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    );
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        '.navlinks a[href^="#"], .mobile a[href^="#"]',
      ),
    );
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!current?.target.id) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${current.target.id}`;
          link.classList.toggle("premium-active", active);
          if (active) link.setAttribute("aria-current", "page");
          else link.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-25% 0px -62%", threshold: [0.05, 0.2, 0.45] },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".services article, .package, .steps article, .quote, .insta, .faq-item, .contact-cta",
      ),
    );
    revealItems.forEach((item) => item.classList.add("premium-reveal"));
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("premium-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -45px" },
    );
    revealItems.forEach((item) => revealObserver.observe(item));

    document.querySelectorAll<HTMLElement>(".services article").forEach((card) => {
      const title = card.querySelector("h3")?.textContent?.trim();
      const link = card.querySelector<HTMLAnchorElement>("a");
      if (link && title) {
        link.setAttribute("aria-label", `Plan ${title}`);
        link.setAttribute("title", `Plan ${title}`);
      }
    });

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      menuObserver?.disconnect();
      languageObserver?.disconnect();
      backgroundObserver?.disconnect();
      sectionObserver.disconnect();
      revealObserver.disconnect();
      document.body.classList.remove(
        "premium-ready",
        "premium-menu-open",
      );
    };
  }, []);

  return (
    <>
      <button
        className={`premium-back-top ${showTop ? "show" : ""}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <Icon name="arrow" />
      </button>
      <div className="premium-mobile-actions" aria-label="Quick travel actions">
        <a href={`tel:${contact.primaryPhone}`}>
          <Icon name="phone" />
          <span>Call</span>
        </a>
        <a
          href={`https://wa.me/${contact.whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="whatsapp" />
          <span>WhatsApp</span>
        </a>
        <a href="#contact">
          <Icon name="plane" />
          <span>Plan</span>
        </a>
      </div>
    </>
  );
}
