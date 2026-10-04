import Image from "next/image";
import Link from "next/link";
import { ComingSoonButton } from "@/components/ComingSoonButton";
import { Hero } from "@/components/Hero";
import { SectionFrame } from "@/components/SectionFrame";
import { SiteFooter } from "@/components/SiteFooter";

const features = [
  {
    src: "/AetherCraft/HeroCollage.png",
    alt: "Three Races to Play",
    title: "THREE RACES TO PLAY",
    body: "ANCIENT RACES ENTER THE BATTLEFIELD WITH UNIQUE PLAYSTYLES & UNITS.",
  },
  {
    src: "/Covenant/Campaign.jpg",
    alt: "Free Single Player First Campaign",
    title: "FREE SINGLE PLAYER FIRST CAMPAIGN",
    body: "CREATE YOUR CUSTOM HERO TO PIT AGAINST THE FORCES OF AETHERCRAFT",
  },
  {
    src: "/AetherCraft/Battlefield.png",
    alt: "Enter the Multiplayer Arena",
    title: "ENTER THE MULTIPLAYER ARENA",
    body: "PUT YOUR SKILLS TO THE TEST IN PVP MULTIPLAYER BATTLES",
  },
];

const races = [
  {
    background:
      "/Astrals/Lucid_Realism_Epic_RTS_race_splash_background_ornate_rococofut_5_97ff81e9-e4db-40ed-a830-f8f4d4622e2c.jpg",
    backgroundAlt: "Astrals Background",
    portrait: "/AstralMage.png",
    portraitAlt: "Astral Mage",
    portraitWidth: 600,
    portraitHeight: 800,
    title: "THE ASTRALS",
    body: "CELESTIAL WINGED PEOPLE, CHANNELING STAR MAGIC THROUGH MUSIC.",
  },
  {
    background:
      "/Covenant/Lucid_Realism_Ultra_high_quality_panoramic_race_splash_artwork_1_19eb26ac-fe58-454a-86eb-7afd90bdfb7c.jpg",
    backgroundAlt: "Covenant Background",
    portrait: "/CovenantDemon.png",
    portraitAlt: "Covenant Demon",
    portraitWidth: 500,
    portraitHeight: 667,
    title: "THE COVENANT",
    body: "A FUTURISTIC WARRING NATION BOUND BY A DIVINE CONTRACT, SIN TURNS THEM INTO DEMONS, VIRTUE INTO ANGELS.",
  },
  {
    background:
      "/Ascendants/Lucid_Realism_Vast_moonlit_battlefield_viewed_from_an_elevated_3_e80d9e9e-5a38-47e8-9c13-312b425620e6.jpg",
    backgroundAlt: "Ascendants Background",
    portrait: "/LotusPriestess.png",
    portraitAlt: "Lotus Priestess",
    portraitWidth: 500,
    portraitHeight: 667,
    title: "THE ASCENDANT",
    body: "MYTHICAL LUNAR HUMAN-MONKEY HYBRIDS WITH CRESCENT MAGIC.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />

      <SectionFrame className="bg-gradient-to-b from-[#0c2433] to-[#01080a] px-8 py-20">
        <div className="container mx-auto flex flex-1 flex-col justify-center">
          <h2 className="mb-24 text-left text-4xl md:text-8xl">FEATURES</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={feature.src}
                    alt={feature.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <h3 className="mb-4 text-base md:text-2xl">{feature.title}</h3>
                <p className="text-xs md:text-lg">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionFrame>

      <SectionFrame className="bg-gradient-to-b from-[#0c2433] to-[#01080a] px-8 py-20">
        <div className="container mx-auto flex flex-1 flex-col justify-center">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-left text-4xl md:text-8xl">NEWS</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link
              href="/hollowborn-arcanist"
              className="group flex flex-col transition-opacity hover:opacity-90"
            >
              <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-sm">
                <Image
                  src="/HollowbornArcanistNewsImage.jpg"
                  alt="Hollowborn Arcanist"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm md:h-20 md:w-20">
                    <svg
                      className="h-8 w-8 text-white md:h-10 md:w-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xs font-semibold text-accent md:text-sm">
                  RELEASE
                </span>
                <span className="text-white/40">|</span>
                <span className="text-xs text-white/60 md:text-sm">
                  19/12/2025
                </span>
              </div>
              <h3 className="mb-2 text-base font-bold text-white transition-colors group-hover:text-accent md:text-xl">
                Hollowborn Arcanist Volume 1
              </h3>
              <p className="text-xs text-white/70 md:text-sm">
                Exciting news! We are rolling out the release of the first
                volume of the Hollowborn Arcanist series, page by page,
                completely free.
              </p>
            </Link>
          </div>
        </div>
      </SectionFrame>

      <SectionFrame>
        <h2 className="absolute top-20 left-1/2 z-20 -translate-x-1/2 text-4xl text-white md:text-8xl">
          RACES
        </h2>
        <div className="grid h-[300vh] grid-cols-1 md:h-screen md:grid-cols-3">
          {races.map((race) => (
            <div
              key={race.title}
              className="relative flex flex-col items-center justify-center overflow-hidden"
            >
              <Image
                src={race.background}
                alt={race.backgroundAlt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="absolute inset-0 z-0 bg-black/50" />
              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
                <Image
                  src={race.portrait}
                  alt={race.portraitAlt}
                  width={race.portraitWidth}
                  height={race.portraitHeight}
                  className="h-auto max-h-[70%] w-auto max-w-[min(100%,24rem)] object-contain"
                />
                <div className="absolute right-0 bottom-0 left-0 p-8 text-center">
                  <h3 className="mb-4 text-base font-bold text-white md:text-2xl">
                    {race.title}
                  </h3>
                  <p className="text-xs text-white md:text-lg">{race.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionFrame>

      <SectionFrame className="bg-gradient-to-b from-[#0c2433] to-[#01080a] px-8 py-20">
        <div className="container mx-auto flex flex-1 flex-col justify-center">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <h2 className="text-left text-4xl md:col-span-2 md:text-8xl">
              GALLERY
            </h2>
            <div className="md:col-span-1">
              <div className="relative aspect-[3/4] h-full w-full overflow-hidden rounded-sm md:aspect-auto">
                <Image
                  src="/Astrals/HarmonicDevourer.jpg"
                  alt="Harmonic Devourer"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 25vw, 100vw"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-12 md:col-span-1">
              <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                <Image
                  src="/Astrals/HarmoniaPrime.jpg"
                  alt="Harmonia Prime"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 25vw, 100vw"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                <Image
                  src="/Cepharim/SkyKraken.jpg"
                  alt="Sky Kraken"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 25vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionFrame>

      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
        <Image
          src="/AetherCraft/AetherCraftCinematic.jpg"
          alt=""
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 z-[1] bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-8 text-center">
          <h2 className="font-serif text-4xl md:text-7xl">READY, CHANELLER?</h2>
          <p className="max-w-3xl text-base md:text-xl">
            TAKE COMMAND OF THE AETHER AND LEAD YOUR ARMIES TO VICTORY.
          </p>
          <ComingSoonButton className="mt-4" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
