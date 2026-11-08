export type Unit = {
  slug: string;
  name: string;
  race: string;
  slot: string;
  alignment?: string;
  status: "live" | "stub";
  aetherCost?: number;
  tagline: string;
  howItWorks: string[];
  stats?: { label: string; value: string }[];
  gallery?: { src: string; alt: string; caption?: string }[];
  animationNotes?: string[];
};

export const units: Unit[] = [
  {
    slug: "militia",
    name: "Militia",
    race: "covenant",
    slot: "Small soldier (Barracks)",
    alignment: "Legion",
    status: "live",
    aetherCost: 50,
    tagline: "Basic Covenant infantry — the current Barracks train target.",
    howItWorks: [
      "Fills the small-soldier slot. Trained from the Legion Drill Hall once Barracks training ships.",
      "Cheap frontline chaff. A Mauler Reckoning sweep that catches three Militia removes 150 aether for zero aether spent on the ability.",
      "Player-controllable Legion unit with spear kit on Mission1.",
    ],
    stats: [
      { label: "Aether", value: "50" },
      { label: "Role", value: "Light melee infantry" },
      { label: "Train", value: "Barracks / Legion Drill Hall" },
    ],
  },
  {
    slug: "artisan",
    name: "Artisan",
    race: "covenant",
    slot: "Small builder (Homebase)",
    alignment: "Legion",
    status: "live",
    tagline: "Legion worker — harvests aether and places structures.",
    howItWorks: [
      "Fills the small-builder slot from the Homebase / Command Hall line.",
      "Stormforged hammer on the right hand. Harvests aether nodes and builds the Legion base.",
      "Idle, walk, and harvest clips are the current animation reference for worker feel.",
    ],
    stats: [
      { label: "Role", value: "Worker / builder" },
      { label: "Team", value: "Legion (player)" },
      { label: "Weapon", value: "Stormforged hammer" },
    ],
    gallery: [
      {
        src: "/wiki/screenshots/mat145-idle-artisan0.png",
        alt: "Artisan idle",
        caption: "Idle",
      },
      {
        src: "/wiki/screenshots/mat145-walk.png",
        alt: "Artisan walk",
        caption: "Walk",
      },
      {
        src: "/wiki/screenshots/mat145-harvest-artisan2.png",
        alt: "Artisan harvest",
        caption: "Harvest",
      },
    ],
    animationNotes: [
      "Idle, walk, and harvest loops are the first visual demos for worker motion.",
      "Future wiki demos can host short clips beside these stills.",
    ],
  },
  {
    slug: "mauler",
    name: "Mauler",
    race: "covenant",
    slot: "Mid-sized ground monster",
    alignment: "Demons",
    status: "live",
    aetherCost: 250,
    tagline:
      "Slow demonic heavy — Reckoning turns absorbed damage into a sweeping arc.",
    howItWorks: [
      "Tier 5 heavy ground infantry. High HP and armour, high melee damage, short range, slow move.",
      "Reckoning fills as the Mauler takes damage. At threshold it is Primed; the next melee becomes a directional ~120° sweep, then Reckoning resets. No manual cast — enemies help decide when AoE is ready.",
      "Sweep: full damage to primary, reduced to secondaries in the arc. On the current profile (28 base), primary is ×4 and secondaries ×3.6 — enough to clear clustered Militia.",
      "Weak to kite and spread ranged. Strong into melee blobs that stand in front of it.",
    ],
    stats: [
      { label: "Aether", value: "250" },
      { label: "Base melee", value: "28" },
      { label: "Sweep primary", value: "×4 (112)" },
      { label: "Sweep secondary", value: "×3.6 (~100.8)" },
      { label: "Sweep arc", value: "~120°" },
      { label: "Identity", value: "Basic attack + Reckoning passive" },
    ],
  },
  {
    slug: "harpy",
    name: "Harpy",
    race: "covenant",
    slot: "Flying scout / attacker",
    alignment: "Demons",
    status: "live",
    tagline: "Crimson horned flyer — spear, wings, and thorn-hook tail.",
    howItWorks: [
      "Demonic Covenant flyer using Crimson Horned Valkyr clips with Crimson Thorn Spear, Infernal Wings, and Thornfang Hook tail.",
      "Patrol-chase AI acquires hostiles and leashes home; player orders ignore the leash.",
      "Animation and flight VFX demos belong on the demos boards once clips are cut.",
    ],
    stats: [
      { label: "Role", value: "Flying unit" },
      { label: "Kit", value: "Spear + wings + tail" },
      { label: "AI", value: "Patrol chase + leash" },
    ],
  },
];

export function getUnit(slug: string): Unit | undefined {
  return units.find((u) => u.slug === slug);
}

export function getAllUnitSlugs(): string[] {
  return units.map((u) => u.slug);
}

export function getUnitsForRace(raceSlug: string): Unit[] {
  return units.filter((u) => u.race === raceSlug);
}
