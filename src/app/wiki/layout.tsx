import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "AetherCraft Wiki",
    template: "%s — AetherCraft Wiki",
  },
  robots: { index: false, follow: false, nocache: true },
};

export default function WikiLayout({ children }: { children: ReactNode }) {
  return children;
}
