import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtGallery } from "@/components/wiki/ArtGallery";
import { Prose } from "@/components/wiki/Prose";
import { WikiShell } from "@/components/wiki/WikiShell";
import { getAllRaceSlugs, getRace } from "@/content/wiki/races";
import { getUnitsForRace } from "@/content/wiki/units";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllRaceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const race = getRace(slug);
  return { title: race?.name ?? "Race" };
}

export default async function RacePage({ params }: Props) {
  const { slug } = await params;
  const race = getRace(slug);
  if (!race) notFound();
  const units = getUnitsForRace(race.slug);

  return (
    <WikiShell title={race.name} eyebrow="RACE">
      <p className="mb-8 max-w-2xl text-sm text-white/70 md:text-base">
        {race.tagline}
      </p>
      <p className="mb-8 text-xs tracking-wide text-white/40">
        HERO LIST · {race.heroList}
        <span className="px-2">·</span>
        {race.status.toUpperCase()}
      </p>

      {(race.splash || race.portrait) && (
        <div className="relative mb-12 aspect-[21/9] w-full overflow-hidden bg-black/40">
          {race.splash ? (
            <Image
              src={race.splash}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          ) : (
            <Image
              src={race.portrait!}
              alt=""
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#151e21] via-transparent to-transparent" />
        </div>
      )}

      <Prose>
        {race.summary.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Prose>

      {race.subraces && race.subraces.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-6 text-2xl md:text-4xl">Subraces</h2>
          <div className="grid grid-cols-1 gap-4">
            {race.subraces.map((s) => (
              <div
                key={s.name}
                className="border border-white/10 bg-black/20 p-5"
              >
                <h3 className="mb-2 text-lg">{s.name}</h3>
                <p className="font-reading text-sm leading-relaxed text-white/70">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {race.sections?.map((section) => (
        <section key={section.title} className="mt-14">
          <h2 className="mb-4 text-2xl md:text-4xl">{section.title}</h2>
          <Prose>
            {section.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
        </section>
      ))}

      {race.gallery && race.gallery.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-6 text-2xl md:text-4xl">Art</h2>
          <ArtGallery items={race.gallery} />
        </section>
      )}

      {units.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-6 text-2xl md:text-4xl">Units</h2>
          <ul className="flex flex-col gap-2">
            {units.map((u) => (
              <li key={u.slug}>
                <Link
                  href={`/wiki/units/${u.slug}`}
                  className="text-accent transition-colors hover:text-white"
                >
                  {u.name}
                </Link>
                <span className="font-reading text-sm text-white/40">
                  {" "}
                  — {u.tagline}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <Link
              href="/wiki/buildings"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Covenant buildings →
            </Link>
          </p>
        </section>
      )}
    </WikiShell>
  );
}
