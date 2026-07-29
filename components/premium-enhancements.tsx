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
    const mobileNav = document.querySelector<HTMLElement>("#mobile-navigation nav");
    const hamburgerButton = document.querySelector<HTMLButtonElement>(".hamb");
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

    const closeMobileMenu = () => {
      if (mobileMenu?.classList.contains("open")) hamburgerButton?.click();
    };

    let mobileMenuContact = mobileNav?.querySelector<HTMLElement>(
      ".mobile-menu-contact",
    ) ?? null;
    let createdMobileMenuContact = false;

    if (mobileNav && !mobileMenuContact) {
      mobileMenuContact = document.createElement("div");
      mobileMenuContact.className = "mobile-menu-contact";
      mobileMenuContact.setAttribute("aria-label", "Contact SEWAB");
      mobileMenuContact.innerHTML = `
        <a class="mobile-menu-call" href="tel:${contact.primaryPhone}" aria-label="Call SEWAB">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-3.5-1.5-6.5-4.5-8-8l2-2-2-4Z"></path>
          </svg>
          <span data-menu-call-label>Call us</span>
        </a>
        <a class="mobile-menu-whatsapp" href="https://wa.me/${contact.whatsapp}" target="_blank" rel="noreferrer" aria-label="Message SEWAB on WhatsApp">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z"></path>
            <path d="M8.5 8.2c.4 3.8 3.5 6.9 7.3 7.3l1.1-1.5-2.4-1.1-.8 1c-1.7-.7-2.9-1.9-3.6-3.6l1-.8L10 7.1 8.5 8.2Z"></path>
          </svg>
          <span data-menu-whatsapp-label>WhatsApp</span>
        </a>
      `;
      mobileNav.appendChild(mobileMenuContact);
      createdMobileMenuContact = true;
    }

    const mobileContactLinks = Array.from(
      mobileMenuContact?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
    );
    mobileContactLinks.forEach((link) =>
      link.addEventListener("click", closeMobileMenu),
    );

    const updateLocalizedUi = () => {
      const isAmharic = site?.getAttribute("lang") === "am";
      const journeyLabel = isAmharic ? "ጉዞዎን ይጀምሩ" : "Start your journey";
      const callLabel = isAmharic ? "ይደውሉ" : "Call us";
      const whatsappLabel = isAmharic ? "ዋትስአፕ" : "WhatsApp";
      const medinaLabel = document.querySelector<HTMLElement>(".photo-two b");
      const heroJourneyButton = document.querySelector<HTMLAnchorElement>(
        ".hero .actions .btn-ghost",
      );
      const mobileJourneyButton = document.querySelector<HTMLAnchorElement>(
        ".premium-mobile-actions a:last-child",
      );
      const mobileCallButton = mobileMenuContact?.querySelector<HTMLAnchorElement>(
        ".mobile-menu-call",
      );
      const mobileWhatsAppButton =
        mobileMenuContact?.querySelector<HTMLAnchorElement>(
          ".mobile-menu-whatsapp",
        );

      if (medinaLabel) {
        medinaLabel.textContent = isAmharic ? "መዲና" : "Madinah";
      }

      if (heroJourneyButton) {
        heroJourneyButton.setAttribute("href", "#contact");
        heroJourneyButton.removeAttribute("target");
        heroJourneyButton.removeAttribute("rel");
        heroJourneyButton.setAttribute("aria-label", journeyLabel);
        heroJourneyButton.setAttribute("title", journeyLabel);
      }

      if (mobileJourneyButton) {
        mobileJourneyButton.setAttribute("aria-label", journeyLabel);
        mobileJourneyButton.setAttribute("title", journeyLabel);
        const label = mobileJourneyButton.querySelector("span");
        if (label) label.textContent = journeyLabel;
      }

      if (mobileCallButton) {
        mobileCallButton.setAttribute(
          "aria-label",
          isAmharic ? "SEWABን ይደውሉ" : "Call SEWAB",
        );
        const label = mobileCallButton.querySelector<HTMLElement>(
          "[data-menu-call-label]",
        );
        if (label) label.textContent = callLabel;
      }

      if (mobileWhatsAppButton) {
        mobileWhatsAppButton.setAttribute(
          "aria-label",
          isAmharic ? "SEWABን በዋትስአፕ ያግኙ" : "Message SEWAB on WhatsApp",
        );
        const label = mobileWhatsAppButton.querySelector<HTMLElement>(
          "[data-menu-whatsapp-label]",
        );
        if (label) label.textContent = whatsappLabel;
      }
    };

    updateLocalizedUi();
    const languageObserver = site ? new MutationObserver(updateLocalizedUi) : null;
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
      mobileContactLinks.forEach((link) =>
        link.removeEventListener("click", closeMobileMenu),
      );
      if (createdMobileMenuContact) mobileMenuContact?.remove();
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
        <a
          href={`tel:${contact.primaryPhone}`}
          aria-label="Call SEWAB"
          title="Call SEWAB"
        >
          <Icon name="phone" />
          <span>Call</span>
        </a>
        <a
          href={`https://wa.me/${contact.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Message SEWAB on WhatsApp"
          title="WhatsApp"
        >
          <Icon name="whatsapp" />
          <span>WhatsApp</span>
        </a>
        <a
          href="#contact"
          aria-label="Start your journey"
          title="Start your journey"
        >
          <Icon name="plane" />
          <span>Start your journey</span>
        </a>
      </div>
    </>
  );
}
