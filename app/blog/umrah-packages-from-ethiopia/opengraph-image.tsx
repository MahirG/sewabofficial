import { ImageResponse } from "next/og";

export const alt = "Umrah Packages from Ethiopia 2026 — SEWAB Travel Designers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ArticleOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 76px",
          background:
            "radial-gradient(circle at 85% 20%, rgba(245,217,158,.32), transparent 30%), linear-gradient(135deg, #052b24, #0c5144)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 28, fontWeight: 900, letterSpacing: 4 }}>SEWAB</span>
          <span style={{ fontSize: 20, color: "#f5d99e" }}>2026 TRAVEL GUIDE</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          <span style={{ fontSize: 24, color: "#f5d99e", marginBottom: 18 }}>
            From Addis Ababa to Makkah & Madinah
          </span>
          <span style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 750 }}>
            Umrah Packages from Ethiopia
          </span>
          <span style={{ marginTop: 22, fontSize: 26, opacity: 0.84 }}>
            Flights · Visa guidance · Hotels · Preparation · Amharic support
          </span>
        </div>
        <span style={{ fontSize: 21, opacity: 0.8 }}>sewabgroups.com</span>
      </div>
    ),
    size,
  );
}
