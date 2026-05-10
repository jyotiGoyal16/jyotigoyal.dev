import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontSans } from "./fonts";
import { site } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.professionalTitle}`,
    template: `%s · ${site.name}`,
  },
  description: site.summary,
  keywords: [
    "Senior Frontend Engineer",
    "Senior Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Performance Optimization",
    "Core Web Vitals",
    "System Design",
    "Frontend architecture",
    "Bangalore",
  ],
  authors: [{ name: site.name, url: site.social.linkedin }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title: `${site.name} — ${site.professionalTitle}`,
    description: site.headline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.professionalTitle}`,
    description: site.headline,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef6fc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1624" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body
        className={`${fontSans.className} bg-background text-foreground flex min-h-full flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
