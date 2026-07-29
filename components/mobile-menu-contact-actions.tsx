"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@/components/icons";
import { contact, type Language } from "@/lib/site-data";

export function MobileMenuContactActions() {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const navigation = document.querySelector<HTMLElement>(
      "#mobile-navigation nav",
    );
    const site = document.querySelector<HTMLElement>(".site");

    setTarget(navigation);

    const updateLanguage = () => {
      setLanguage(site?.getAttribute("lang") === "am" ? "am" : "en");
    };

    updateLanguage();

    const observer = site ? new MutationObserver(updateLanguage) : null;
    observer?.observe(site as HTMLElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    return () => observer?.disconnect();
  }, []);

  if (!target) return null;

  const closeMenu = () => {
    document
      .querySelector<HTMLButtonElement>('.hamb[aria-expanded="true"]')
      ?.click();
  };

  const callLabel = language === "am" ? "ይደውሉ" : "Call";
  const whatsappLabel = language === "am" ? "ዋትስአፕ" : "WhatsApp";

  return createPortal(
    <div className="mobile-menu-contact-actions" aria-label="Contact SEWAB">
      <a
        className="mobile-menu-call"
        href={`tel:${contact.primaryPhone}`}
        onClick={closeMenu}
      >
        <Icon name="phone" />
        <span>{callLabel}</span>
      </a>
      <a
        className="mobile-menu-whatsapp"
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        onClick={closeMenu}
      >
        <Icon name="whatsapp" />
        <span>{whatsappLabel}</span>
      </a>
    </div>,
    target,
  );
}
