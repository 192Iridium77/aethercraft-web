export type RaceSlug =
  | "covenant"
  | "ascendants"
  | "astrals"
  | "zephyr"
  | "cepharion"
  | "luminarchs";

export type Race = {
  slug: RaceSlug;
  name: string;
  tagline: string;
  heroList: string;
  status: "deep" | "stub";
  splash?: string;
  portrait?: string;
  summary: string[];
  subraces?: { name: string; body: string }[];
  sections?: { title: string; body: string[] }[];
  gallery?: { src: string; alt: string; caption?: string }[];
  unitSlugs?: string[];
};

export const races: Race[] = [
  {
    slug: "covenant",
    name: "The Covenant",
    tagline:
      "A futuristic warring nation bound by a divine contract. Sin turns them into demons. Virtue turns them into angels.",
    heroList: "Seraphim, Fallen One",
    status: "deep",
    splash:
      "/Covenant/Lucid_Realism_Ultra_high_quality_panoramic_race_splash_artwork_1_19eb26ac-fe58-454a-86eb-7afd90bdfb7c.jpg",
    portrait: "/CovenantDemon.png",
    summary: [
      "Units are inspired by biblical entities and Paradise Lost. The philosophies are inspired by C. S. Lewis.",
      "The split keeps them in constant internal conflict. Were they not split, they would be immensely powerful.",
      "They do not know why the covenant came to be, or when. That ignorance is filed under forbidden rituals.",
    ],
    subraces: [
      {
        name: "Legion",
        body: "The neutral silver core of the nation on the battlefield — Roman legion massing crossed with brutalist metal. Shared building meshes start here before angelic or demonic bolt-ons.",
      },
      {
        name: "Angels (Seraphim)",
        body: "Virtue hardens the body toward light. They worship obedience and faith, fear becoming demons, and call aether down by prayer — believing God asserts their will through them.",
      },
      {
        name: "Demons (Fallen One)",
        body: "Sin hardens the body toward horn and fire. They worship suffering and power, fear weakness or irrelevance, and spend aether on torture, chaos, and deception.",
      },
    ],
    sections: [
      {
        title: "Wants",
        body: [
          "They want a lost unity restored — Edenic nostalgia for a time before forms hardened into angel and demon.",
          "They also want control of judgement itself. They are subject to moral judgement, and they do not control it. Judgement changes their bodies permanently.",
        ],
      },
      {
        title: "Fear & worship",
        body: [
          "Angels fear becoming demons. Demons fear being weak, or unimportant.",
          "Angels worship obedience and faith. Demons worship suffering and power.",
        ],
      },
      {
        title: "Names & magic",
        body: [
          "Names should be overtly biblical: Michael, Gabriel, Adam, Noah, Jonah, Gideon, Abraham. When they turn evil, they start to forget their name.",
          "Angel spells require chanting scriptures, symbolic acts, and manifestation. Demon spells require sacrifice, pain, and negative emotion.",
          "The angels' school trains Paladins. The demons' school trains Warlocks.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "Off the battlefield: vast gothic and baroque cathedrals — domes, flying buttresses, ornate stone. Walls started and not finished: towering, impressive.",
          "On the battlefield: one neutral silver mesh per building, with angelic (halos, refracted light) and demonic (bone, chain, magma) material variants.",
        ],
      },
    ],
    gallery: [
      {
        src: "/wiki/blender/units/mauler-alert.png",
        alt: "Mauler studio render",
        caption: "Mauler — Blender studio",
      },
      {
        src: "/wiki/screenshots/legion-buildings-placed.png",
        alt: "Legion buildings placed on Mission1",
        caption: "Legion camp on Mission1",
      },
      {
        src: "/wiki/images/covenant/demons/buildings/oath-forge-bastion.jpg",
        alt: "Oath-Forge Bastion concept",
        caption: "Oath-Forge Bastion (demonic concept)",
      },
      {
        src: "/wiki/images/covenant/legion/buildings/legion-drill-hall.jpg",
        alt: "Legion Drill Hall concept",
        caption: "Legion Drill Hall (neutral concept)",
      },
    ],
    unitSlugs: ["militia", "artisan", "mauler", "harpy"],
  },
  {
    slug: "ascendants",
    name: "The Ascendants",
    tagline:
      "Lunar-themed human-monkey hybrids with crescent magic and a giant ape transformation.",
    heroList: "Ascendant",
    status: "stub",
    splash:
      "/Ascendants/Lucid_Realism_Vast_moonlit_battlefield_viewed_from_an_elevated_3_e80d9e9e-5a38-47e8-9c13-312b425620e6.jpg",
    portrait: "/LotusPriestess.png",
    summary: [
      "Mythological Chinese influences. Four innate Lunar spells in a match, plus class spells such as Pyromancy.",
      "They use aether to elevate consciousness — Zen practice — and to make psychic attacks.",
    ],
  },
  {
    slug: "astrals",
    name: "The Astrals",
    tagline:
      "Celestial winged people, channeling star magic through music.",
    heroList: "—",
    status: "stub",
    splash:
      "/Astrals/Lucid_Realism_Epic_RTS_race_splash_background_ornate_rococofut_5_97ff81e9-e4db-40ed-a830-f8f4d4622e2c.jpg",
    portrait: "/AstralMage.png",
    summary: [
      "Egyptian myth kept subtle; the look is not Egyptian. Technologists whose work is indistinguishable from magic.",
      "An ancient AI, thought long extinct, is the source of their power. They call aether by song and use it to control machines.",
    ],
  },
  {
    slug: "zephyr",
    name: "The Zephyr",
    tagline: "Weather-themed, bird-like sky people.",
    heroList: "Zepharite",
    status: "stub",
    summary: [
      "Subtle Aboriginal dot-painting aesthetic. Greek-inspired name. Roster and buildings not filled on the wiki yet.",
    ],
  },
  {
    slug: "cepharion",
    name: "The Cepharion",
    tagline: "Deep-sea, abyssal, squid-inspired people.",
    heroList: "Cepharion",
    status: "stub",
    summary: [
      "They once swam too deep, and ancient dark Greek myth corrupted them. Full roster lives in the AI docs as Cepharim fillings.",
    ],
  },
  {
    slug: "luminarchs",
    name: "The Luminarchs",
    tagline: "Dark, elegant light stealers — elven in look.",
    heroList: "Luminarch",
    status: "stub",
    summary: [
      "They drain light and weaponize it. They believe they are inside a simulation, and they are — aether is the substance of that simulation, and the way through the wall.",
    ],
  },
];

export function getRace(slug: string): Race | undefined {
  return races.find((r) => r.slug === slug);
}

export function getAllRaceSlugs(): RaceSlug[] {
  return races.map((r) => r.slug);
}
