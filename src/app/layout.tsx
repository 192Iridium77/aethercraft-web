import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aethercraft.online"),
  title: "AetherCraft",
  description: "An Ethereal Real Time Strategy Game with Heroes",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full font-serif text-white">{children}</body>
    </html>
  );
}
