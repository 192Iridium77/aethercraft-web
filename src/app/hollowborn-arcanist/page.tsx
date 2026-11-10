import type { Metadata } from "next";
import Link from "next/link";

const title = "Hollowborn Arcanist Volume 1 — AetherCraft";
const description =
  "A free digital comic from the AetherCraft world. Adam and Aurel reach Gloomwick — Volume 1, page by page.";
const path = "/hollowborn-arcanist";
const ogImage = "/hollowborn-og.jpg";
const published = "2025-12-19";
const modified = "2026-10-26";
const pdfUrl = "/HollowbornArcanistVol1.pdf?v=12";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: path,
    siteName: "AetherCraft",
    type: "book",
    releaseDate: published,
    authors: ["AetherCraft"],
    tags: ["comic", "fantasy", "Hollowborn Arcanist"],
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Hollowborn Arcanist Volume 1 cover art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ComicSeries",
  name: "Hollowborn Arcanist",
  description,
  url: `https://www.aethercraft.online${path}`,
  image: `https://www.aethercraft.online${ogImage}`,
  inLanguage: "en",
  isAccessibleForFree: true,
  genre: "Fantasy",
  author: { "@type": "Organization", name: "AetherCraft" },
  publisher: { "@type": "Organization", name: "AetherCraft" },
  hasPart: {
    "@type": "ComicIssue",
    name: "Hollowborn Arcanist Volume 1",
    issueNumber: 1,
    datePublished: published,
    dateModified: modified,
    numberOfPages: 10,
    url: `https://www.aethercraft.online${path}`,
    image: `https://www.aethercraft.online${ogImage}`,
    associatedMedia: {
      "@type": "MediaObject",
      contentUrl: `https://www.aethercraft.online${pdfUrl}`,
      encodingFormat: "application/pdf",
    },
  },
};

export default function HollowbornArcanistPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#151e21]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 md:px-8">
        <Link
          href="/"
          className="text-sm tracking-wide text-white/80 transition-colors hover:text-white"
        >
          ← AetherCraft
        </Link>
        <h1 className="truncate text-sm font-semibold md:text-base">
          Hollowborn Arcanist Volume 1
        </h1>
        <a href={pdfUrl} className="text-sm text-accent hover:underline">
          Download PDF
        </a>
      </header>
      <iframe
        title="Hollowborn Arcanist Volume 1"
        src={pdfUrl}
        className="min-h-0 w-full flex-1 bg-black"
      />
    </div>
  );
}
