import Link from "next/link";
import { WikiShell } from "@/components/wiki/WikiShell";
import { Prose } from "@/components/wiki/Prose";

const sections = [
  {
    href: "/wiki/races",
    label: "Races",
    body: "Six peoples. Covenant is deep; the rest are stubs ready to fill.",
  },
  {
    href: "/wiki/units",
    label: "Units",
    body: "Militia, Artisan, Mauler, Harpy — stats, how they work, art.",
  },
  {
    href: "/wiki/buildings",
    label: "Buildings",
    body: "Covenant Legion and Demonic concept galleries.",
  },
  {
    href: "/wiki/lore",
    label: "Lore",
    body: "Aether, density, harvest, and how a match plays.",
  },
  {
    href: "/wiki/demos",
    label: "Demos",
    body: "Animation, sound, and VFX boards for look-and-feel iteration.",
  },
];

export default function WikiHomePage() {
  return (
    <WikiShell title="Internal wiki" eyebrow="DEVELOPMENT">
      <Prose>
        <p>
          Iterate on look, units, story, lore, animations, sound, and VFX in
          the browser. Not linked from the marketing site. Crawlers are told
          not to index.
        </p>
      </Prose>
      <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {sections.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="block border border-white/10 bg-black/20 p-5 transition-colors hover:border-accent/50"
            >
              <h2 className="mb-2 text-xl md:text-2xl">{s.label}</h2>
              <p className="font-reading text-sm text-white/60">{s.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </WikiShell>
  );
}
