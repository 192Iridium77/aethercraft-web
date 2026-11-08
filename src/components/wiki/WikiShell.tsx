import Link from "next/link";
import type { ReactNode } from "react";

const nav = [
  { href: "/wiki", label: "Home" },
  { href: "/wiki/races", label: "Races" },
  { href: "/wiki/units", label: "Units" },
  { href: "/wiki/buildings", label: "Buildings" },
  { href: "/wiki/lore", label: "Lore" },
  { href: "/wiki/demos", label: "Demos" },
];

export function WikiShell({
  children,
  title,
  eyebrow,
}: {
  children: ReactNode;
  title?: string;
  eyebrow?: string;
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-[#151e21] md:flex-row">
      <aside className="border-b border-white/10 md:w-56 md:shrink-0 md:border-b-0 md:border-r">
        <div className="sticky top-0 flex flex-col gap-6 px-4 py-5 md:px-5 md:py-8">
          <div>
            <Link
              href="/wiki"
              className="text-sm tracking-wide text-accent transition-colors hover:text-white"
            >
              AETHERCRAFT WIKI
            </Link>
            <p className="mt-1 text-[10px] tracking-wide text-white/40">
              INTERNAL · NOINDEX
            </p>
          </div>
          <nav className="flex flex-wrap gap-3 md:flex-col md:gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/"
            className="text-xs text-white/40 transition-colors hover:text-white/70"
          >
            ← Marketing site
          </Link>
        </div>
      </aside>
      <main className="min-w-0 flex-1 px-5 py-8 md:px-10 md:py-12">
        {(eyebrow || title) && (
          <header className="mb-10 max-w-4xl">
            {eyebrow && (
              <p className="mb-3 text-xs tracking-wide text-accent md:text-sm">
                {eyebrow}
              </p>
            )}
            {title && (
              <h1 className="text-3xl md:text-5xl lg:text-6xl">{title}</h1>
            )}
          </header>
        )}
        <div className="max-w-4xl">{children}</div>
      </main>
    </div>
  );
}
