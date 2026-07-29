import { ImageResponse } from "next/og";

export const alt = "SEWAB Travel Designers — Umrah, Hajj and world journeys from Ethiopia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 78px",
          background:
            "radial-gradient(circle at 82% 16%, rgba(233,190,104,.3), transparent 32%), linear-gradient(135deg, #042c25, #0f6b4a)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#e9be68",
              color: "#07382f",
              fontWeight: 900,
              fontSize: 32,
            }}
          >
            S
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 32, fontWeight: 900, letterSpacing: 4 }}>SEWAB</span>
            <span style={{ fontSize: 18, opacity: 0.78, letterSpacing: 3 }}>TRAVEL DESIGNERS</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <span style={{ fontSize: 24, color: "#f5d99e", marginBottom: 18 }}>
            Addis Ababa · Ethiopia
          </span>
          <span style={{ fontSize: 66, lineHeight: 1.04, fontWeight: 700 }}>
            Umrah, Hajj and purposeful journeys—carefully managed.
          </span>
        </div>
        <span style={{ fontSize: 22, opacity: 0.82 }}>sewabgroups.com</span>
      </div>
    ),
    size,
  );
}
