import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.professionalTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(165deg, #102033 0%, #0b1624 42%, #0d2840 100%)",
          color: "#f0f6ff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "15%",
            right: "15%",
            height: "48%",
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.22), transparent 72%)",
          }}
        />
        <div
          style={{
            fontSize: 26,
            color: "#9bb0c8",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            position: "relative",
          }}
        >
          {site.professionalTitle}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 64,
            fontWeight: 600,
            letterSpacing: -0.03,
            lineHeight: 1.05,
            position: "relative",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#b8d4f0",
            fontWeight: 400,
            maxWidth: 920,
            lineHeight: 1.35,
            position: "relative",
          }}
        >
          Scalable frontend architecture · Rendering performance · Enterprise
          SaaS
        </div>
        <div
          style={{
            marginTop: 40,
            height: 4,
            width: 120,
            borderRadius: 2,
            background: "#38bdf8",
            position: "relative",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
