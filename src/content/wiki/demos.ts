export type DemoKind = "animations" | "sounds" | "vfx";

export type DemoEntry = {
  id: string;
  kind: DemoKind;
  title: string;
  status: "placeholder" | "still" | "clip";
  body: string;
  mediaSrc?: string;
  mediaAlt?: string;
};

export const demos: DemoEntry[] = [
  {
    id: "artisan-idle",
    kind: "animations",
    title: "Artisan — idle",
    status: "still",
    body: "Worker idle pose reference from Mission1. Replace with a looping clip when cut.",
    mediaSrc: "/wiki/screenshots/mat145-idle-artisan0.png",
    mediaAlt: "Artisan idle still",
  },
  {
    id: "artisan-walk",
    kind: "animations",
    title: "Artisan — walk",
    status: "still",
    body: "Walk cycle still. Target: side-by-side clip with foot plant readability.",
    mediaSrc: "/wiki/screenshots/mat145-walk.png",
    mediaAlt: "Artisan walk still",
  },
  {
    id: "artisan-harvest",
    kind: "animations",
    title: "Artisan — harvest",
    status: "still",
    body: "Harvest strike into an aether node. Hammer timing is the feel target.",
    mediaSrc: "/wiki/screenshots/mat145-harvest-artisan2.png",
    mediaAlt: "Artisan harvest still",
  },
  {
    id: "mauler-reckoning",
    kind: "animations",
    title: "Mauler — Reckoning sweep",
    status: "placeholder",
    body: "Slot for the Reckoning arc clip (see marketing /blog/mauler). Wire a local wiki copy when iterating on timing.",
  },
  {
    id: "harpy-flight",
    kind: "animations",
    title: "Harpy — flight",
    status: "placeholder",
    body: "Waiting on a flight recording. Wing beat and spear trail readability.",
  },
  {
    id: "aether-harvest-hum",
    kind: "sounds",
    title: "Aether harvest hum",
    status: "placeholder",
    body: "Low coil / free-energy machine tone while Artisans pull from a node. Drop a short loop here.",
  },
  {
    id: "militia-train",
    kind: "sounds",
    title: "Barracks train confirm",
    status: "placeholder",
    body: "UI + forge-bay confirm when paying 50 aether to start a 30s train.",
  },
  {
    id: "reckoning-impact",
    kind: "sounds",
    title: "Reckoning impact",
    status: "placeholder",
    body: "Heavy sweep hit — metal and debt answered, not rage. Layer later.",
  },
  {
    id: "spire-bolt",
    kind: "vfx",
    title: "Silent Spire bolt",
    status: "placeholder",
    body: "Pale energy bolt from Spire turrets. Pool a shared material; no real-time light on the projectile.",
  },
  {
    id: "reckoning-arc",
    kind: "vfx",
    title: "Reckoning sweep arc",
    status: "placeholder",
    body: "Directional ~120° telegraph so clustered Militia deaths read as intentional.",
  },
  {
    id: "aether-node-glow",
    kind: "vfx",
    title: "Aether node leak",
    status: "placeholder",
    body: "Ground leak / zero-point harvester glow. Concept art exists under Assets/Images in the AI repo.",
  },
];

export function demosByKind(kind: DemoKind): DemoEntry[] {
  return demos.filter((d) => d.kind === kind);
}

export const demoKindMeta: Record<
  DemoKind,
  { title: string; eyebrow: string; intro: string }
> = {
  animations: {
    title: "Animations",
    eyebrow: "DEMOS",
    intro:
      "Visual motion boards for units and abilities. Stills first; clips replace placeholders as they are cut.",
  },
  sounds: {
    title: "Sounds",
    eyebrow: "DEMOS",
    intro:
      "Audio targets for harvest, training, combat, and UI. Panels stay empty until loops land in public/wiki.",
  },
  vfx: {
    title: "VFX",
    eyebrow: "DEMOS",
    intro:
      "Readable combat and resource effects. Prefer pooled materials and clear telegraphs over spectacle noise.",
  },
};
