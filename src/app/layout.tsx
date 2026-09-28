import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AetherCraft",
  description: "An Ethereal Real Time Strategy Game with Heroes",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} h-full antialiased`}>
      <body className="min-h-full font-serif text-white">{children}</body>
    </html>
  );
}
