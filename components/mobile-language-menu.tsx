"use client";

import { useEffect } from "react";

export function MobileLanguageMenu() {
  useEffect(() => {
    const site = document.querySelector<HTMLElement>(".site");
    const mobileNav = document.querySelector<HTMLElement>("#mobile-navigation nav");
    const headerLanguageButton = document.querySelector<HTMLButtonElement>(
      ".nav-actions > .lang",
    );

    if (!site || !mobileNav || !headerLanguageButton) return;

    const languageButton = document.createElement("button");
    languageButton.type = "button";
    languageButton.className = "mobile-menu-language";
    languageButton.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"></path>
      </svg>
      <span class="mobile-menu-language-label">Language</span>
      <strong class="mobile-menu-language-value">Amharic</strong>
    `;

    const contactActions = mobileNav.querySelector(".mobile-menu-contact");
    if (contactActions) mobileNav.insertBefore(languageButton, contactActions);
    else mobileNav.appendChild(languageButton);

    const updateLanguageLabel = () => {
      const isAmharic = site.getAttribute("lang") === "am";
      const label = languageButton.querySelector<HTMLElement>(
        ".mobile-menu-language-label",
      );
      const value = languageButton.querySelector<HTMLElement>(
        ".mobile-menu-language-value",
      );

      if (label) label.textContent = isAmharic ? "ቋንቋ" : "Language";
      if (value) value.textContent = isAmharic ? "English" : "Amharic";
      languageButton.setAttribute(
        "aria-label",
        isAmharic ? "Switch language to English" : "ቋንቋውን ወደ አማርኛ ቀይር",
      );
    };

    const switchLanguage = () => headerLanguageButton.click();
    languageButton.addEventListener("click", switchLanguage);

    const languageObserver = new MutationObserver(updateLanguageLabel);
    languageObserver.observe(site, {
      attributes: true,
      attributeFilter: ["lang"],
    });
    updateLanguageLabel();

    return () => {
      languageObserver.disconnect();
      languageButton.removeEventListener("click", switchLanguage);
      languageButton.remove();
    };
  }, []);

  return null;
}
