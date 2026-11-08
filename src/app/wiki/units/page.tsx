import Link from "next/link";
import { WikiShell } from "@/components/wiki/WikiShell";
import { units } from "@/content/wiki/units";

export const metadata = { title: "Units" };

export default function UnitsIndexPage() {
  return (
    <WikiShell title="Units" eyebrow="WIKI">
      <p className="font-reading mb-10 text-white/65">
        Live Covenant units first. Shared ladder slots for other races stay in
        the AI docs until filled here.
      </p>
      <ul className="flex flex-col gap-4">
        {units.map((u) => (
          <li key={u.slug}>
            <Link
              href={`/wiki/units/${u.slug}`}
              className="block border border-white/10 bg-black/20 p-5 transition-colors hover:border-accent/40"
            >
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h2 className="text-xl md:text-2xl">{u.name}</h2>
                <span className="text-[10px] tracking-wide text-accent uppercase">
                  {u.status}
                </span>
              </div>
              <p className="text-xs text-white/40">
                {u.slot}
                {u.alignment ? ` · ${u.alignment}` : ""}
                {u.aetherCost != null ? ` · ${u.aetherCost} aether` : ""}
              </p>
              <p className="font-reading mt-2 text-sm text-white/70">
                {u.tagline}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </WikiShell>
  );
}
