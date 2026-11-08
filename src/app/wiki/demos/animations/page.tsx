import { DemoPanel } from "@/components/wiki/DemoPanel";
import { WikiShell } from "@/components/wiki/WikiShell";
import { demoKindMeta, demosByKind } from "@/content/wiki/demos";

export const metadata = { title: "Animation demos" };

export default function AnimationDemosPage() {
  const meta = demoKindMeta.animations;
  const entries = demosByKind("animations");
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
