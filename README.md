# AetherCraft

Marketing site for [AetherCraft](https://www.aethercraft.online/) — a Next.js app ready for Vercel.

The Hollowborn Arcanist model, Volume 1 prompts, and story notes are in [comic/hollowborn-arcanist](comic/hollowborn-arcanist/STYLE.md).

## Local

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Import [192Iridium77/aethercraft-web](https://github.com/192Iridium77/aethercraft-web) in the [Vercel dashboard](https://vercel.com/new).
2. Framework preset: **Next.js**. Leave build settings at defaults (`pnpm build`).
3. Assign the `aethercraft.online` domain once DNS is ready.

No environment variables are required.

## Internal wiki

Development wiki at [`/wiki`](http://localhost:3000/wiki) — races, units, buildings, lore, and demo boards. Uses the same site styles; curated game art lives under `public/wiki/` (copied from AetherCraft-AI). The wiki layout is `noindex`, `/wiki` is disallowed in `robots.ts`, and it is not listed in the sitemap or marketing nav. Promote to public or `wiki.aethercraft.online` later by flipping those guards.

