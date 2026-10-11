import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { seo, siteUrl } from "@/content/seo";

export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Hex copies of the design tokens in app/globals.css. The image renderer does
// not read CSS variables or oklch colors.
const color = {
  bg: "#0b0c0f",
  line: "#292b2f",
  fg: "#edeef1",
  muted: "#a1a5ab",
  accent: "#f9bb51",
};

const fontDir = join(process.cwd(), "node_modules/geist/dist/fonts");

/** Social share card, rendered once at build time. */
export default async function OpengraphImage() {
  const [sans, mono] = await Promise.all([
    readFile(join(fontDir, "geist-sans/Geist-Medium.ttf")),
    readFile(join(fontDir, "geist-mono/GeistMono-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: color.bg,
          color: color.fg,
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontFamily: "Geist Mono",
            fontSize: 28,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: color.muted,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 14,
              backgroundColor: color.accent,
            }}
          />
          {seo.title}
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 980,
            fontSize: 68,
            lineHeight: 1.1,
            letterSpacing: -2,
          }}
        >
          {seo.description}
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: 32,
            borderTop: `1px solid ${color.line}`,
            fontFamily: "Geist Mono",
            fontSize: 24,
            color: color.muted,
          }}
        >
          {new URL(siteUrl).host}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: sans, weight: 500, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
