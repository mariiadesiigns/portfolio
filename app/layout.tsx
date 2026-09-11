import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.role,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.role} — ${siteConfig.description}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.role,
    description: siteConfig.description,
    images: ["/og-image.png"]
  },
  icons: {
    icon: [
      {
        url: "/favicon-dark.png?v=4",
        type: "image/png",
        sizes: "32x32",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/favicon-light.png?v=4",
        type: "image/png",
        sizes: "32x32",
        media: "(prefers-color-scheme: dark)"
      },
      {
        url: "/icon-dark.png?v=4",
        type: "image/png",
        sizes: "192x192",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/icon-light.png?v=4",
        type: "image/png",
        sizes: "192x192",
        media: "(prefers-color-scheme: dark)"
      },
      { url: "/favicon.ico?v=4", type: "image/x-icon", sizes: "48x48" }
    ],
    apple: [{ url: "/apple-touch-icon.png?v=4", sizes: "180x180", type: "image/png" }]
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
