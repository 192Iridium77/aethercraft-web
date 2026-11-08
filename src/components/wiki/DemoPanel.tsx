import Image from "next/image";
import type { DemoEntry } from "@/content/wiki/demos";

export function DemoPanel({ entry }: { entry: DemoEntry }) {
  return (
    <article className="flex flex-col border border-white/10 bg-black/20">
      <div className="relative aspect-video w-full bg-[#0a1012]">
        {entry.mediaSrc ? (
          <Image
            src={entry.mediaSrc}
            alt={entry.mediaAlt ?? entry.title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xs tracking-wide text-white/30">
              {entry.status.toUpperCase()}
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <h3 className="text-base md:text-lg">{entry.title}</h3>
          <span className="text-[10px] tracking-wide text-white/40 uppercase">
            {entry.status}
          </span>
        </div>
        <p className="font-reading text-sm leading-relaxed text-white/70">
          {entry.body}
        </p>
      </div>
    </article>
  );
}
