import { Prose } from "@/components/wiki/Prose";
import { WikiShell } from "@/components/wiki/WikiShell";
import { lorePage } from "@/content/wiki/lore";

export const metadata = { title: "Lore" };

export default function LorePage() {
  return (
    <WikiShell title={lorePage.title} eyebrow="WIKI">
      {lorePage.sections.map((section) => (
        <section key={section.title} className="mb-14">
          <h2 className="mb-4 text-2xl md:text-4xl">{section.title}</h2>
          <Prose>
            {section.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
        </section>
      ))}
    </WikiShell>
  );
}
