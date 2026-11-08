import Image from "next/image";
import { Prose } from "@/components/wiki/Prose";
import { WikiShell } from "@/components/wiki/WikiShell";
import { buildingVariantsNote, buildings } from "@/content/wiki/buildings";

export const metadata = { title: "Buildings" };

export default function BuildingsPage() {
  return (
    <WikiShell title="Covenant buildings" eyebrow="WIKI">
      <Prose>
        <p>{buildingVariantsNote}</p>
      </Prose>

      <div className="relative mt-10 mb-14 aspect-[16/9] w-full overflow-hidden border border-white/10">
        <Image
          src="/wiki/screenshots/legion-buildings-placed.png"
          alt="Legion buildings on Mission1"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="flex flex-col gap-16">
        {buildings.map((b) => (
          <article key={b.slug} id={b.slug} className="scroll-mt-8">
            <p className="mb-1 text-[10px] tracking-wide text-accent uppercase">
              {b.order}. {b.slot}
            </p>
            <h2 className="mb-4 text-2xl md:text-4xl">{b.name}</h2>
            <div className="mb-4 grid grid-cols-1 gap-3 font-reading text-sm text-white/70 md:grid-cols-3">
              <p>
                <span className="text-white/40">Neutral. </span>
                {b.neutralNote}
              </p>
              <p>
                <span className="text-white/40">Angelic. </span>
                {b.angelicNote}
              </p>
              <p>
                <span className="text-white/40">Demonic. </span>
                {b.demonicNote}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <figure>
                <div className="relative aspect-square w-full overflow-hidden bg-black/40">
                  <Image
                    src={b.legionImage}
                    alt={`${b.name} Legion concept`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-white/40">
                  Legion (neutral)
                </figcaption>
              </figure>
              <figure>
                <div className="relative aspect-square w-full overflow-hidden bg-black/40">
                  <Image
                    src={b.demonicImage}
                    alt={`${b.name} Demonic concept`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-white/40">
                  Demonic concept
                </figcaption>
              </figure>
            </div>
          </article>
        ))}
      </div>
    </WikiShell>
  );
}
