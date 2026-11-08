import { DemoPanel } from "@/components/wiki/DemoPanel";
import { WikiShell } from "@/components/wiki/WikiShell";
import { demoKindMeta, demosByKind } from "@/content/wiki/demos";

export const metadata = { title: "VFX demos" };

export default function VfxDemosPage() {
  const meta = demoKindMeta.vfx;
  const entries = demosByKind("vfx");
  return (
    <WikiShell title={meta.title} eyebrow={meta.eyebrow}>
      <p className="font-reading mb-10 text-white/65">{meta.intro}</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {entries.map((e) => (
          <DemoPanel key={e.id} entry={e} />
        ))}
      </div>
    </WikiShell>
  );
}
