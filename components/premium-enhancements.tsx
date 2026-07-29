"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { contact } from "@/lib/site-data";

export function PremiumEnhancements() {
  const [showTop, setShowTop] = useState(false);
  const showTopRef = useRef(false);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".header");
    const mobileMenu = document.querySelector<HTMLElement>(".mobile");
    let animationFrame = 0;

    document.body.classList.add("premium-ready");

    const renderScrollState = () => {
      header?.classList.toggle("premium-scrolled", window.scrollY > 12);
      const nextShowTop = window.scrollY > 650;
      if (showTopRef.current !== nextShowTop) {
        showTopRef.current = nextShowTop;
        setShowTop(nextShowTop);
      }
      animationFrame = 0;
    };

    const updateScrollState = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(renderScrollState);
    };

    const updateMenuState = () => {
      document.body.classList.toggle(
        "premium-menu-open",
        Boolean(mobileMenu?.classList.contains("open")),
      );
    };

    const menuObserver = mobileMenu ? new MutationObserver(updateMenuState) : null;
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

    renderScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      menuObserver?.disconnect();
      sectionObserver.disconnect();
      revealObserver.disconnect();
      document.body.classList.remove("premium-ready", "premium-menu-open");
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
