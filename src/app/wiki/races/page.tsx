import Image from "next/image";
import Link from "next/link";
import { WikiShell } from "@/components/wiki/WikiShell";
import { races } from "@/content/wiki/races";

export const metadata = { title: "Races" };

export default function RacesIndexPage() {
  return (
    <WikiShell title="Races" eyebrow="WIKI">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {races.map((race) => (
          <Link
            key={race.slug}
            href={`/wiki/races/${race.slug}`}
            className="group overflow-hidden border border-white/10 bg-black/20 transition-opacity hover:opacity-90"
          >
            <div className="relative aspect-[16/9] w-full bg-[#0a1012]">
              {race.splash ? (
                <Image
                  src={race.splash}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              ) : race.portrait ? (
                <Image
                  src={race.portrait}
                  alt=""
                  fill
                  className="object-contain object-bottom"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-[10px] tracking-wide text-accent uppercase">
                  {race.status}
                </p>
                <h2 className="text-xl md:text-2xl">{race.name}</h2>
              </div>
            </div>
            <p className="font-reading p-4 text-sm text-white/65">
              {race.tagline}
            </p>
          </Link>
        ))}
      </div>
    </WikiShell>
  );
}
