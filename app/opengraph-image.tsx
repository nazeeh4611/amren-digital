import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#203778",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#94eff2", letterSpacing: 4, textTransform: "uppercase" }}>
          {site.location.label}
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, marginTop: 20, lineHeight: 1 }}>AMREN DIGITAL</div>
        <div style={{ display: "flex", fontSize: 34, marginTop: 24, color: "#a3c1ee", maxWidth: 900 }}>
          Digital growth built to move.
        </div>
      </div>
    ),
    { ...size }
  );
}
