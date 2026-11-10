# Backlog

Task queue for the aethercraft.online site. Linear team `MattMartinAU`, label `aethercraft-web`. This file is the order. The issue body is on Linear.

The Unity board (`aethercraft`, max 10 open) is a different queue. Do not file site work there.

## Work order

| Seq | Linear | Points | Status | Task |
|-----|--------|--------|--------|------|
| 1 | [MAT-133](https://linear.app/mattmartinau/issue/MAT-133) | 2 | Done | Publish the Mauler post |
| 2 | [MAT-134](https://linear.app/mattmartinau/issue/MAT-134) | 5 | In Progress | Try three backgrounds on the feature bands |
| 3 | [MAT-135](https://linear.app/mattmartinau/issue/MAT-135) | 3 | Backlog | Replace the hero background |
| 4 | [MAT-136](https://linear.app/mattmartinau/issue/MAT-136) | 3 | Backlog | Replace the bottom splash |
| 5 | [MAT-137](https://linear.app/mattmartinau/issue/MAT-137) | 3 | Waiting on a clip | Publish an aether devlog |
| 6 | [MAT-138](https://linear.app/mattmartinau/issue/MAT-138) | 3 | Waiting on next weekend | Publish a training devlog |
| 7 | [MAT-139](https://linear.app/mattmartinau/issue/MAT-139) | 3 | Backlog | Announce Hollowborn Arcanist on its own page |
| 8 | [MAT-140](https://linear.app/mattmartinau/issue/MAT-140) | 1 | Backlog | Inset the hero line and drop it toward the button |
| 9 | [MAT-141](https://linear.app/mattmartinau/issue/MAT-141) | 3 | Waiting on a clip | Publish a Harpy post |
| 10 | analytics-weekend | 5 | Aligned | First-party analytics + Saturday digest email |

MAT-135 and MAT-136 can swap. MAT-137 starts once a mining recording exists. MAT-138 starts once the train UI is worth filming. MAT-141 starts once a Harpy flight recording exists.

### analytics-weekend — First-party analytics + Saturday digest email (aligned)

Hand-rolled beacon on aethercraft.online: page views and link clicks (`<a>` + `data-analytics`), stored in Upstash Redis. Bots filtered at ingest. Saturday 09:00 Australia/Adelaide cron emails Matt (household SMTP): unique sessions, top pages, top clicks, referrers, countries — humans only. Identity is anonymous session + hashed IP + country. Collect only on production host. 90-day retention. No dashboard.

Rabbit holes:

- “Who” without accounts — session id in localStorage + hashed IP + Vercel country header.
- No consent banner this pass (first-party ops only; no ads).
- Upstash via Vercel Marketplace; agent provisions.
- Cron uses UTC approximating Adelaide Saturday morning (DST noted in code).
- Preview/localhost do not collect.

No-gos:

- Third-party trackers (GA, Plausible, PostHog).
- Dashboard / admin UI / heatmaps / session replay.
- Plaintext IP, form values, passwords.
- Cookie consent UI.

Linear: pending

### MAT-134 — Try three backgrounds on the feature bands (aligned)

Someone scrolling the homepage sees a different field on Features, News, and Gallery. Until a treatment is chosen, `/?bands=lamp`, `/?bands=plates`, and `/?bands=horizons` each paint all three sections. No query keeps today’s fade. Desktop and a 390px-wide viewport are screenshotted for each. After the pick, that treatment is the only background, the query param is gone, and the other two treatments are gone.

Rabbit holes:

- Comparison without shipping three looks — `?bands=lamp|plates|horizons` on `/` only. No switcher on the page. The param and the unused treatments are deleted once the pick is in.
- Horizon colors were only named as moods — Features `#041820` → `#0c3d4a` → `#3d9aaa`, News `#140c0a` → `#2a1610` → `#8a4a32`, Gallery `#12101c` → `#2a2048` → `#8a6aaa`. Do not invent another palette.
- A StarCraft hairline would fight `DividerTop.png` if it were a new graphic — it is a 1px top border on the section. The divider PNGs stay.
- Races sits between News and Gallery and already has full-bleed portraits — no background class is added there.
- Screenshots would otherwise land in the site — they go under `.pipeline/runs/MAT-134/`, which is gitignored.

No-gos:

- Regenerating the hero or the bottom splash.
- A new divider graphic.
- Changing race portraits, gallery images, the hero, or the Mauler blog page.
- Shipping more than one treatment, or shipping the query param.

Linear: posted

## Already done, not filed

The Mauler post is at `/blog/mauler`, with the two clips and Source Sans 3 on the body. Publishing it is MAT-133.
