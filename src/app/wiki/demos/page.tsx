import Link from "next/link";
import { WikiShell } from "@/components/wiki/WikiShell";
import { demoKindMeta } from "@/content/wiki/demos";

export const metadata = { title: "Demos" };

const links = [
  { href: "/wiki/demos/animations", kind: "animations" as const },
  { href: "/wiki/demos/sounds", kind: "sounds" as const },
  { href: "/wiki/demos/vfx", kind: "vfx" as const },
];

export default function DemosIndexPage() {
  return (
    <WikiShell title="Demos" eyebrow="DEVELOPMENT">
      <p className="font-reading mb-10 text-white/65">
        Boards for iterating motion, audio, and effects outside Unity. Drop
        stills or clips into public/wiki and wire them in content/wiki/demos.ts.
      </p>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {links.map(({ href, kind }) => {
          const meta = demoKindMeta[kind];
          return (
            <li key={href}>
              <Link
                href={href}
                className="block border border-white/10 bg-black/20 p-5 transition-colors hover:border-accent/40"
              >
                <h2 className="mb-2 text-xl">{meta.title}</h2>
                <p className="font-reading text-sm text-white/60">{meta.intro}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </WikiShell>
  );
}
