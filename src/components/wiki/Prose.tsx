import type { ReactNode } from "react";

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="font-reading space-y-4 text-base leading-relaxed text-white/80 md:text-lg">
      {children}
    </div>
  );
}
