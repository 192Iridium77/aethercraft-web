import Link from "next/link";

export const metadata = {
  title: "Hollowborn Arcanist Volume 1 — AetherCraft",
  description:
    "Read the first volume of the Hollowborn Arcanist series, page by page, completely free.",
};

export default function HollowbornArcanistPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#01080a]">
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
        <a
          href="/HollowbornArcanistVol1.pdf"
          className="text-sm text-accent hover:underline"
        >
          Download PDF
        </a>
      </header>
      <iframe
        title="Hollowborn Arcanist Volume 1"
        src="/HollowbornArcanistVol1.pdf"
        className="min-h-0 w-full flex-1 bg-black"
      />
    </div>
  );
}
