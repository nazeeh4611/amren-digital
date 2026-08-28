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
          background: "#09090b",
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#d4a72c", letterSpacing: 4, textTransform: "uppercase" }}>
          {site.location.label}
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, marginTop: 20, lineHeight: 1 }}>AMREN DIGITAL</div>
        <div style={{ display: "flex", fontSize: 34, marginTop: 24, color: "#a1a1aa", maxWidth: 900 }}>
          Digital growth built to move.
        </div>
      </div>
    ),
    { ...size }
  );
}
