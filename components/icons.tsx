import type { SVGProps } from "react";

type IconName =
  | "arrow"
  | "arrowLeft"
  | "briefcase"
  | "building"
  | "calendar"
  | "check"
  | "chevron"
  | "clock"
  | "close"
  | "email"
  | "facebook"
  | "globe"
  | "instagram"
  | "kaaba"
  | "location"
  | "menu"
  | "phone"
  | "plane"
  | "quote"
  | "shield"
  | "spark"
  | "telegram"
  | "tiktok"
  | "travellers"
  | "whatsapp";

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };

  switch (name) {
    case "arrow":
      return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case "arrowLeft":
      return <svg {...common}><path d="M19 12H5m6 6-6-6 6-6" /></svg>;
    case "briefcase":
      return <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></svg>;
    case "building":
      return <svg {...common}><path d="M4 21V7l8-4 8 4v14M8 10h2m4 0h2m-8 4h2m4 0h2m-8 4h8" /></svg>;
    case "calendar":
      return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>;
    case "check":
      return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
    case "chevron":
      return <svg {...common}><path d="m8 10 4 4 4-4" /></svg>;
    case "clock":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    case "close":
      return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
    case "email":
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
    case "facebook":
      return <svg {...common}><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.7.3-1 1-1Z" /></svg>;
    case "globe":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg>;
    case "instagram":
      return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>;
    case "kaaba":
      return <svg {...common}><path d="M5 8.5 12 5l7 3.5V19l-7 3-7-3V8.5Z" /><path d="m5 8.5 7 3 7-3M12 11.5V22M8 10v10m8-10v10M5 14h14" /></svg>;
    case "location":
      return <svg {...common}><path d="M20 10c0 5.5-8 11-8 11S4 15.5 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
    case "menu":
      return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case "phone":
      return <svg {...common}><path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-3.5-1.5-6.5-4.5-8-8l2-2-2-4Z" /></svg>;
    case "plane":
      return <svg {...common}><path d="M22 2 9.5 14.5M22 2l-8 20-4.5-7.5L2 10l20-8Z" /></svg>;
    case "quote":
      return <svg {...common}><path d="M10 11H5a6 6 0 0 1 6-6v2a4 4 0 0 0-4 4v1h3v7H4v-8m16 0h-5a6 6 0 0 1 6-6v2a4 4 0 0 0-4 4v1h3v7h-6v-8" /></svg>;
    case "shield":
      return <svg {...common}><path d="M12 3 4 6v6c0 5 3.4 8 8 10 4.6-2 8-5 8-10V6l-8-3Z" /><path d="m8.5 12 2 2 5-5" /></svg>;
    case "spark":
      return <svg {...common}><path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3Zm6 11 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14ZM6 15l.7 1.8L8.5 17.5l-1.8.7L6 20l-.7-1.8-1.8-.7 1.8-.7L6 15Z" /></svg>;
    case "telegram":
      return <svg {...common}><path d="m21 4-3 16-6-4-3 3 1-5 8-7-10 6-5-2 18-7Z" /></svg>;
    case "tiktok":
      return <svg {...common}><path d="M15 4v11a4.5 4.5 0 1 1-4-4.5M15 4c.5 2.5 2 4 5 4" /></svg>;
    case "travellers":
      return <svg {...common}><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2" /><path d="M3 20a6 6 0 0 1 12 0m1-6a4 4 0 0 1 5 4" /></svg>;
    case "whatsapp":
      return <svg {...common}><path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z" /><path d="M8.5 8.2c.4 3.8 3.5 6.9 7.3 7.3l1.1-1.5-2.4-1.1-.8 1c-1.7-.7-2.9-1.9-3.6-3.6l1-.8L10 7.1 8.5 8.2Z" /></svg>;
    default:
      return null;
  }
}
