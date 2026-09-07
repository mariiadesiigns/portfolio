import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description
  },
  icons: {
    icon: [
      {
        url: "/favicon-light.png?v=2",
        type: "image/png",
        sizes: "32x32",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/favicon-dark.png?v=2",
        type: "image/png",
        sizes: "32x32",
        media: "(prefers-color-scheme: dark)"
      },
      {
        url: "/icon-light.png?v=2",
        type: "image/png",
        sizes: "192x192",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/icon-dark.png?v=2",
        type: "image/png",
        sizes: "192x192",
        media: "(prefers-color-scheme: dark)"
      },
      { url: "/favicon.ico?v=2", type: "image/x-icon", sizes: "48x48" }
    ],
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[color:var(--paper)] font-sans text-[color:var(--ink)] antialiased">
        {children}
      </body>
    </html>
  );
}
