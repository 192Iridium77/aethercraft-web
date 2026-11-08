import Image from "next/image";

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export function ArtGallery({
  items,
  columns = 2,
}: {
  items: GalleryItem[];
  columns?: 2 | 3;
}) {
  if (!items.length) return null;
  const grid =
    columns === 3
      ? "md:grid-cols-3"
      : "md:grid-cols-2";
  return (
    <div className={`grid grid-cols-1 gap-4 ${grid}`}>
      {items.map((item) => (
        <figure key={item.src} className="flex flex-col gap-2">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          {item.caption && (
            <figcaption className="font-reading text-xs text-white/50">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
