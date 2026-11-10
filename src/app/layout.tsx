import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Cinzel, Source_Sans_3 } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const description =
  "An ethereal realm where heroes fight for victory — a real-time strategy game with heroes.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aethercraft.online"),
  title: "AetherCraft",
  description,
  openGraph: {
    title: "AetherCraft",
    description,
    url: "/",
    siteName: "AetherCraft",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AetherCraft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AetherCraft",
    description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full font-serif text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
