import type { ReactNode } from "react";

export function SectionFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative flex min-h-screen w-full flex-col ${className}`}
    >
      {children}
    </section>
  );
}
