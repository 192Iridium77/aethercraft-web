---
name: hollowborn-page
description: >-
  Draws, letters, exports, and publishes one Hollowborn Arcanist comic page.
  Use when making a new Hollowborn page, continuing the comic, assembling
  panels in Inkscape or SVG, or putting a page into HollowbornArcanistVol1.pdf
  and on aethercraft.online.
---

# Hollowborn page

Story is in [NOTES.md](../../../comic/hollowborn-arcanist/NOTES.md). Faces, sizes, and the prompt template are in [STYLE.md](../../../comic/hollowborn-arcanist/STYLE.md). The worked page is [pages/page-08/page.svg](../../../comic/hollowborn-arcanist/pages/page-08/page.svg).

One page is one feeling. Write the beats and the spoken lines before any picture. Spoken lines stay out of the image prompt.

## 1. Draw the panels

Use Leonardo only when Chromium is already open, signed in, and exposing DevTools at `http://127.0.0.1:9222`. Do not launch a browser, copy a profile, or open a login window. If the port is closed or the tab is missing, stop and say so.

Do not use `~/.cursor/skills/leonardo/scripts/generate.mjs`. That script forces GPT Image 2.5 Flare.

The model is GPT Image-1.5. If the tab does not show that label, stop. Do not pick another model.

Settings, re-applied before every generation because style drifts back to Dynamic:

- Model slug `gpt-image-1.5`. The slug `openai/gpt-image-1.5` breaks the generate page.
- Style None. The None style id is `556c1ee5-ec38-42e8-955a-1e82dad0ffa1`. Click it with `element.click()`. It sits outside the viewport.
- Prompt enhance off. Quality High. Quantity 1.
- Wide `1536×1024` (3:2). Portrait `1024×1536` (2:3). Inset `1024×1024` (1:1).

Working generate URL:

`https://app.leonardo.ai/generate?model=gpt-image-1.5&aspectRatio=3:2&style=556c1ee5-ec38-42e8-955a-1e82dad0ffa1&mode=fast&quality=HIGH&quantity=1&seedEnabled=false&negativePromptEnabled=false&promptEnhance=OFF`

Fill the prompt slots in the order in STYLE.md. End with `no text, no speech balloons, no letters.` Assert the page still says GPT Image-1.5, then submit. `browser.close()` only disconnects. Do not close the context.

Save a candidate only when it has the exact pixel size, it appeared after the submit, and it is the latest match. The history feed contains Covenant buildings. A wide image of a tower is a bad grab.

After a panel is good, file it in the Hollowborn Arcanist collection: `https://app.leonardo.ai/library/collections/c8496a35-e020-4d47-b866-0b2c26def49c`.

Nano Banana Pro is a later pass on a face or a costume, with a precise description. It does not draw the panel.

## 2. Assemble the SVG

One file, `comic/hollowborn-arcanist/pages/page-NN/page.svg`. Canvas `0 0 1410 2250`. That is the book page, 1057.5 × 1687.5 pt. The page is black. Black is the gutter. Pictures have no drawn border. Image `href`s are relative filenames.

The tavern stack, used for page 8:

- Wide panels at `x=125`, `y=48` and `y=1428`, `width=1160`, `height=773`.
- Squares at `y=839`, `571×571`, left `x=125`, right `x=714`. Gutter 18.

`preserveAspectRatio="xMidYMid slice"`.

## 3. Letter

Cinzel Regular, the face in `comic/hollowborn-arcanist/fonts/Cinzel-Regular.ttf`. Declare it with `@font-face` and a relative `url`. Black capitals, `font-weight="400"`, `font-size="30"`, `text-anchor="middle"`, fill `#111111`.

A balloon is a white rounded rect, a white polygon tail toward the speaker, and one text node per line. Each of those is its own object, not nested in a group, so Inkscape can move them. Keep the line inside the rect with padding. Widen the rect before shrinking the type.

Open the SVG in Inkscape for Matt to place the balloons. Display: `DISPLAY=:0`, `WAYLAND_DISPLAY=wayland-1`, `XDG_RUNTIME_DIR=/run/user/1000`. After he saves, export that file. Do not write an older SVG back over it. If Inkscape still has the file open, tell him to reload before he saves.

## 4. Export

From the page directory, so the relative links resolve:

```bash
rsvg-convert -f pdf -o page.pdf page.svg
rsvg-convert -f png -o page.png page.svg
```

`pdfinfo` must report 1 page and `1057.5 x 1687.5 pts`. `pdffonts` on that page must show Cinzel.

## 5. Add it to the book and the site

The book is `public/HollowbornArcanistVol1.pdf`. Append with qpdf. Do not rebuild the Canva pages.

```bash
qpdf --empty --pages public/HollowbornArcanistVol1.pdf 1-N page.pdf -- /tmp/hb-vol.pdf
```

Confirm the page count and the same page size, then replace the public file. Bump the `?v=` query on the reader iframe and the download link in `src/app/hollowborn-arcanist/page.tsx`.

From `aethercraft-web`, confirm the linked project is `iridium/aethercraft-web`:

```bash
export PATH="$HOME/.local/share/mise/installs/node/25.2.1/bin:$PATH"
vercel project inspect --non-interactive
vercel deploy --prod --yes
```

The `vercel` mise shim has no version set. Use the node 25.2.1 binary. If the upload fails with `fetch failed`, retry with `--archive=tgz`. Then `curl` `https://www.aethercraft.online/HollowbornArcanistVol1.pdf?v=N` and check the page count and the new line with `pdftotext`.

Do not commit unrelated dirty files. `dist/` is untracked and is not part of the page.
