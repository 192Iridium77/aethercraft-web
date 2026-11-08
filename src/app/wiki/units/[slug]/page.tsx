import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtGallery } from "@/components/wiki/ArtGallery";
import { Prose } from "@/components/wiki/Prose";
import { StatBlock } from "@/components/wiki/StatBlock";
import { WikiShell } from "@/components/wiki/WikiShell";
import { getAllUnitSlugs, getUnit } from "@/content/wiki/units";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllUnitSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const unit = getUnit(slug);
  return { title: unit?.name ?? "Unit" };
}

export default async function UnitPage({ params }: Props) {
  const { slug } = await params;
  const unit = getUnit(slug);
  if (!unit) notFound();

  return (
    <WikiShell title={unit.name} eyebrow="UNIT">
      <p className="mb-2 text-sm text-white/50">
        <Link
          href={`/wiki/races/${unit.race}`}
          className="text-accent hover:text-white"
        >
          {unit.race}
        </Link>
        <span className="px-2 text-white/30">·</span>
        {unit.slot}
        {unit.alignment ? (
          <>
            <span className="px-2 text-white/30">·</span>
            {unit.alignment}
          </>
        ) : null}
      </p>
      <p className="mb-10 max-w-2xl text-sm text-white/75 md:text-base">
        {unit.tagline}
      </p>

      {unit.stats && (
        <section className="mb-12">
          <h2 className="mb-4 text-2xl md:text-3xl">Stats</h2>
          <StatBlock stats={unit.stats} />
        </section>
      )}

      <section className="mb-12">
        <h2 className="mb-4 text-2xl md:text-3xl">How it works</h2>
        <Prose>
          {unit.howItWorks.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Prose>
      </section>

      {unit.gallery && unit.gallery.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-2xl md:text-3xl">Art & stills</h2>
          <ArtGallery items={unit.gallery} columns={3} />
        </section>
      )}

      {unit.animationNotes && unit.animationNotes.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-2xl md:text-3xl">Animations</h2>
          <Prose>
            {unit.animationNotes.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
          <p className="mt-4">
            <Link
              href="/wiki/demos/animations"
              className="text-sm text-accent hover:text-white"
            >
              Animation demos →
            </Link>
          </p>
        </section>
      )}
    </WikiShell>
  );
}
