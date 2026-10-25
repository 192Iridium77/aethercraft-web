import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";

const title = "Mauler — AetherCraft";
const description =
  "Eight Militia attack-move in. Reckoning answers them in one swing.";
const path = "/blog/mauler";
const published = "2026-10-25";
const ordersPoster = "/blog/mauler-orders.jpg";
const reckoningPoster = "/blog/mauler-reckoning.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: path,
    siteName: "AetherCraft",
    type: "article",
    publishedTime: published,
    images: [
      {
        url: reckoningPoster,
        width: 1280,
        height: 720,
        alt: "Militia closing on a Mauler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [reckoningPoster],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Mauler",
  description,
  datePublished: published,
  dateModified: published,
  image: [`https://www.aethercraft.online${reckoningPoster}`],
  mainEntityOfPage: `https://www.aethercraft.online${path}`,
  author: { "@type": "Organization", name: "AetherCraft" },
  publisher: { "@type": "Organization", name: "AetherCraft" },
  video: [
    {
      "@type": "VideoObject",
      name: "Eight Militia on a queued move",
      description:
        "Eight selected Militia take a queued path, then attack-move.",
      thumbnailUrl: `https://www.aethercraft.online${ordersPoster}`,
      uploadDate: published,
      contentUrl: "https://www.aethercraft.online/blog/mauler-orders.mp4",
    },
    {
      "@type": "VideoObject",
      name: "A Mauler clears eight Militia with Reckoning",
      description:
        "The Militia meet a Mauler. Reckoning fills as he is hit, and the next swing clears the arc.",
      thumbnailUrl: `https://www.aethercraft.online${reckoningPoster}`,
      uploadDate: published,
      contentUrl: "https://www.aethercraft.online/blog/mauler-reckoning.mp4",
    },
  ],
};

export default function MaulerPostPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#01080a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-white/10 px-4 py-3 md:px-8">
        <Link
          href="/"
          className="text-sm tracking-wide text-white/80 transition-colors hover:text-white"
        >
          ← AetherCraft
        </Link>
      </header>

      <article className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 md:px-8 md:py-24">
        <p className="mb-4 text-xs tracking-wide text-accent md:text-sm">
          BLOG
          <span className="px-2 text-white/40">|</span>
          <time className="text-white/60" dateTime={published}>
            25/10/2026
          </time>
        </p>
        <h1 className="mb-6 text-4xl md:text-6xl">Mauler</h1>
        <p className="mb-12 font-reading text-lg leading-relaxed text-white/80 md:text-xl">
          Eight Militia take a queued path across the sand. Reckoning is what
          happens when they arrive together.
        </p>

        <section className="mb-16">
          <h2 className="mb-4 text-xl md:text-2xl">Attack-move</h2>
          <figure>
            <video
              className="aspect-video w-full bg-black"
              controls
              playsInline
              preload="metadata"
              poster={ordersPoster}
              title="Eight Militia on a queued move"
            >
              <source src="/blog/mauler-orders.mp4" type="video/mp4" />
            </video>
            <figcaption className="mt-3 font-reading text-sm leading-relaxed text-white/60">
              Eight Militia, selected, on a queued move.
            </figcaption>
          </figure>
          <p className="mt-6 font-reading text-base leading-7 text-white/80">
            One selection, a path marked in green, then attack-move. They walk
            the discs. The first hostile on that path is where the order turns
            into a fight.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl md:text-2xl">Reckoning</h2>
          <figure>
            <video
              className="aspect-video w-full bg-black"
              controls
              playsInline
              preload="metadata"
              poster={reckoningPoster}
              title="A Mauler clears eight Militia with Reckoning"
            >
              <source src="/blog/mauler-reckoning.mp4" type="video/mp4" />
            </video>
            <figcaption className="mt-3 font-reading text-sm leading-relaxed text-white/60">
              The same eight meet a Mauler. The chop clears the arc.
            </figcaption>
          </figure>
          <p className="mt-6 font-reading text-base leading-7 text-white/80">
            Reckoning fills while the Mauler is hit. At the top of the meter
            his next axe swing becomes a chop in front of him. The Militia
            standing in that arc die, and the meter clears.
          </p>
          <p className="mt-4 font-reading text-base leading-7 text-white/80">
            That is the Mauler’s job. He is slow, he hits hard, and a melee
            group that packs onto him is the target. Soldiers who keep their
            spacing, and anyone behind him, stand outside the chop.
          </p>
        </section>
      </article>

      <SiteFooter />
    </div>
  );
}
