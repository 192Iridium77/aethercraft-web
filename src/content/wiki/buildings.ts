export type Building = {
  slug: string;
  name: string;
  slot: string;
  order: number;
  neutralNote: string;
  angelicNote: string;
  demonicNote: string;
  legionImage: string;
  demonicImage: string;
};

export const buildings: Building[] = [
  {
    slug: "oath-forge-bastion",
    name: "Oath-Forge Bastion",
    slot: "Homebase / Command Hall",
    order: 1,
    neutralNote: "Central dome with radiating wings of silver plating.",
    angelicNote: "Dome capped with a halo disc. Glowing inscriptions orbit.",
    demonicNote: "Dome fractures into black iron ribs. Cracks glow like a forge.",
    legionImage: "/wiki/images/covenant/legion/buildings/oath-forge-bastion.jpg",
    demonicImage: "/wiki/images/covenant/demons/buildings/oath-forge-bastion.jpg",
  },
  {
    slug: "legion-drill-hall",
    name: "Legion Drill Hall",
    slot: "Barracks",
    order: 2,
    neutralNote: "Square courtyard. A statue of a soldier at the entry.",
    angelicNote: "The statue morphs into a saintly figure with wings.",
    demonicNote: "The statue twists into a horned warlord. Courtyard cracked with lava veins.",
    legionImage: "/wiki/images/covenant/legion/buildings/legion-drill-hall.jpg",
    demonicImage: "/wiki/images/covenant/demons/buildings/legion-drill-hall.jpg",
  },
  {
    slug: "sky-spire",
    name: "Sky Spire",
    slot: "Aerie / Launchpad",
    order: 3,
    neutralNote: "Tall watchtower with a landing platform.",
    angelicNote: "The tower elongates, ringed by hovering light orbs.",
    demonicNote: "The tower slouches. Spikes protrude. Crows or bats circle.",
    legionImage: "/wiki/images/covenant/legion/buildings/sky-spire.jpg",
    demonicImage: "/wiki/images/covenant/demons/buildings/sky-spire.jpg",
  },
  {
    slug: "missile-cloister",
    name: "Missile Cloister",
    slot: "Range Hall",
    order: 4,
    neutralNote: "Courtyard with training dummies and ranged emplacements.",
    angelicNote: "Training dummies replaced by golden statues. Projectiles gleam.",
    demonicNote: "Dummies impaled. Torches burn at the corners. Jagged roofing.",
    legionImage: "/wiki/images/covenant/legion/buildings/missile-cloister.jpg",
    demonicImage: "/wiki/images/covenant/demons/buildings/missile-cloister.jpg",
  },
  {
    slug: "crystal-collegium",
    name: "Crystal Collegium",
    slot: "Arcane Academy",
    order: 5,
    neutralNote: "Square base. Crystal obelisks at each corner.",
    angelicNote: "Obelisks hover slightly and refract light outward.",
    demonicNote: "Obelisks bleed molten light. Shards fracture into spikes.",
    legionImage: "/wiki/images/covenant/legion/buildings/crystal-collegium.jpg",
    demonicImage: "/wiki/images/covenant/demons/buildings/crystal-collegium.jpg",
  },
  {
    slug: "veilhouse",
    name: "Veilhouse",
    slot: "Sanctum of Shadows",
    order: 6,
    neutralNote: "Stepped building with narrow slits. Watchful, discreet.",
    angelicNote: "Surfaces shimmer like polished mirror. Light refracts around corners.",
    demonicNote: "Walls lean jaggedly. Doorways widen into gaping maws.",
    legionImage: "/wiki/images/covenant/legion/buildings/veilhouse.jpg",
    demonicImage: "/wiki/images/covenant/demons/buildings/veilhouse.jpg",
  },
  {
    slug: "menagerie-bastion",
    name: "Menagerie Bastion",
    slot: "Beast Forge / Monstrosity Lair",
    order: 7,
    neutralNote: "Semi-circular stable with armored gates.",
    angelicNote: "Gates shimmer with light. Wing-motifs at the arches.",
    demonicNote: "Gates jagged, dripping chains. Sulfur vents at the base.",
    legionImage: "/wiki/images/covenant/legion/buildings/menagerie-bastion.jpg",
    demonicImage: "/wiki/images/covenant/demons/buildings/menagerie-bastion.jpg",
  },
  {
    slug: "market-of-oaths",
    name: "Market of Oaths",
    slot: "Merchant's Hall / Trade Nexus",
    order: 8,
    neutralNote: "Open square with a silver vault and trade stalls.",
    angelicNote: "Stalls levitate. The vault is topped with a radiant disc.",
    demonicNote: "Vault cracked open. Chains coil around it. Infernal smoke.",
    legionImage: "/wiki/images/covenant/legion/buildings/market-of-oaths.jpg",
    demonicImage: "/wiki/images/covenant/demons/buildings/market-of-oaths.jpg",
  },
  {
    slug: "forge-of-accord",
    name: "Forge of Accord",
    slot: "Workshop / Foundry",
    order: 9,
    neutralNote: "Blocky silver factory with gears exposed.",
    angelicNote: "Gears polished gold. The glowing furnace looks like a holy kiln.",
    demonicNote: "Furnace belches black smoke. Gears jagged. Molten leaks.",
    legionImage: "/wiki/images/covenant/legion/buildings/forge-of-accord.jpg",
    demonicImage: "/wiki/images/covenant/demons/buildings/forge-of-accord.jpg",
  },
  {
    slug: "pantheon-hall",
    name: "Pantheon Hall",
    slot: "Hall of Heroes",
    order: 10,
    neutralNote: "Monument-lined corridor with effigies.",
    angelicNote: "Effigies haloed. Radiant floor inlays.",
    demonicNote: "Effigies toppled. Blood-red statues rise.",
    legionImage: "/wiki/images/covenant/legion/buildings/pantheon-hall.jpg",
    demonicImage: "/wiki/images/covenant/demons/buildings/pantheon-hall.jpg",
  },
  {
    slug: "bulwark-tower",
    name: "Bulwark Tower",
    slot: "Defensive structure",
    order: 11,
    neutralNote: "Silver spire turret with a cross-slit.",
    angelicNote: "Fires radiant beams. Spire capped with a halo ring.",
    demonicNote: "Fires molten bolts. Spire capped with horns.",
    legionImage: "/wiki/images/covenant/legion/buildings/bulwark-tower.jpg",
    demonicImage: "/wiki/images/covenant/demons/buildings/bulwark-tower.jpg",
  },
];

export const buildingVariantsNote =
  "One neutral mesh is the common denominator. Angelic and demonic forms are material swaps plus bolt-on details. Neutral: silver, regimented, Roman legion × brutalist. Angelic: glowing refracted light, halos, soaring lines. Demonic: cracked metal, bone and chain, fire and magma seams.";
